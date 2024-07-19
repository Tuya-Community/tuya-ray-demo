import logger from '@/hybrid-mini-robot-map/protocol/loggerUtil';
import sweeperP2pInstance from '@/hybrid-mini-robot-map/sourceManger/api/sweeperP2p';
import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
import { useEffect, useRef, useState } from 'react';
const useP2P = (
  devId: string,
  onReceiveMapData: (data: string) => void,
  onReceivePathData: (data: string) => void
) => {
  const isInit: any = useRef(null);
  const offSessionStatusChange = useRef<any>(null);
  const isAppOnBackground: any = useRef(false);
  const timer: any = useRef(null);
  const [mapId, setMapId] = useState('');

  useEffect(() => {
    ty.device.getDeviceInfo({
      deviceId: devId,
      success: res => {
        const { devId } = res;
        if (devId.startsWith('vdevo')) return;
        isInitP2p();
        onEnterBackground();
        onEnterForeground();
      },
    });

    return () => {
      unmount();

      timer && clearInterval(timer);
    };
  }, []);

  /**
   * p2p连接
   */
  const isInitP2p = async () => {
    logger.info('【HomeMapView】 => Component has been started initP2p');
    isInit.current = await sweeperP2pInstance.initP2pSdk(devId);
    if (isInit.current) {
      sweeperP2pInstance.connectDevice(
        () => {
          sweeperP2pInstance.startObserverSweeperDataByP2P(
            1,
            devId,
            onReceiveMapData,
            onReceivePathData
          );
          offSessionStatusChange.current = sweeperP2pInstance.onSessionStatusChange(
            sweeperP2pInstance.sessionStatusCallback
          );
        },
        () => {
          sweeperP2pInstance.reconnectP2p(() => {
            sweeperP2pInstance.startObserverSweeperDataByP2P(
              1,
              devId,
              onReceiveMapData,
              onReceivePathData
            );
            // 这里失败重连需要注册断开重连的事件
            offSessionStatusChange.current = sweeperP2pInstance.onSessionStatusChange(
              sweeperP2pInstance.sessionStatusCallback
            );
          });
        }
      );
    }
  };

  /**
   * 进入后台时断开P2P连接
   */
  const onEnterBackground = () => {
    ty.onAppHide(() => {
      logger.info('【HomeMapView】 => onAppHide');
      isAppOnBackground.current = true;
      // 停止整个场景渲染
      IndoorMapApi.sceneRender(IndoorMapUtils.getMapInstance(mapId), false);
      if (isInit.current) {
        // 判断进入后台之后，维持定时器，如果进入后台超过3分钟, 则断开P2P
        timer.current = setTimeout(() => {
          logger.info('【HomeMapView】 => Timer has been exe');
          if (isAppOnBackground.current) {
            unmount();
          }
          clearTimeout(timer.current);
          timer.current = null;
        }, 2 * 60 * 1000);
      }
    });
  };

  /**
   * p2p断开
   */
  const unmount = async () => {
    logger.info('【HomeMapView】 => Component has been started unmount');
    isInit.current = false;

    if (offSessionStatusChange.current) {
      offSessionStatusChange.current();
      offSessionStatusChange.current = null;
    }

    await sweeperP2pInstance.stopObserverSweeperDataByP2P();
    await sweeperP2pInstance.deInitP2PSDK();
  };

  /**
   * 进入前台时开启P2P连接
   */
  const onEnterForeground = () => {
    ty.onAppShow(() => {
      logger.info('【HomeMapView】 => onAppShow');
      IndoorMapApi.sceneRender(IndoorMapUtils.getMapInstance(mapId), true);
      isAppOnBackground.current = false;
      if (!isInit.current) {
        isInitP2p();
      }
    });
  };

  return { setMapId };
};

export { useP2P };
