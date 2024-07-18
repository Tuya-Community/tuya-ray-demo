/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { View, showToast } from '@ray-js/ray';
import { dpCodes, isMock } from '@/config';
import Store, { useSelector } from '@/redux';
import { emitter, getDevId, getDevInfo } from '@/utils';
import { mapData0, pathData0 } from '@/mock';
import Strings from '@/i18n';
import { isRobotQuiet, robotIsSelectRoom, robotIsSelectRoomPaused } from '@/utils/robotStatus';
import { parseRoomId } from '@/hybrid-mini-robot-map/protocol/robotCmd';
import { useUpdateEffect } from 'ahooks';
import logger from '@/hybrid-mini-robot-map/protocol/loggerUtil';
import { IndoorMapApi, IndoorMapUtils } from '@ray/robot-map-component';
import MapView from '@/hybrid-mini-robot-map/layout/mapView';
import { useCommandTransData, useMapData, usePathData } from '@/hooks';
import { useProps } from '@ray-js/panel-sdk';
import { MapHeader, RoomDecoded } from '@ray-js/robot-protocol';
import { updateMapData } from '@/redux/modules/mapStateSlice';
import { Utils } from '@ray-js/ray-error-catch';
import { useGetMapPointsInfo, useFoldableSingleRoomInfo } from '@/hooks/openApiHooks';
import { updateTemporaryPreference } from '@/redux/modules/temporaryPreferenceSlice';
import sweeperP2pInstance from '@/hybrid-mini-robot-map/sourceManger/api/sweeperP2p';

const { Logger } = Utils;
interface IProps {
  mapStatus: number;
  mapEditable: boolean;
}

const { nativeMapStatusEnum, workModeEnum } = dpCodes;

const HomeMapView: React.FC<IProps> = props => {
  const { dispatch } = Store;

  // 状态栏高度
  const statusBarHeight = useSelector(state => state.systemInfo.statusBarHeight);
  // dp点
  const workModeState = useProps(props => props[dpCodes.workMode]);
  const robotStatusState = useProps(props => props[dpCodes.robotStatus]);
  const customizeModeSwitchState = useProps(props => props[dpCodes.customizeModeSwitch]);

  const mapId = useRef('');
  const offSessionStatusChange = useRef<any>(null);

  const [mapLoadEnd, setMapLoadEnd] = useState(false);
  const isInit: any = useRef(null);
  const timer: any = useRef(null);
  const isAppOnBackground: any = useRef(false);

  /**
   * 当前是否处于选区状态
   * @param mapStatus
   * @param workMode
   * @param robotStatus
   * @returns
   */
  const isSelectingRoom = (mapStatus: number, workMode: string, robotStatus: string) => {
    const isSelectRoomStatus = mapStatus === nativeMapStatusEnum.mapClick;
    const isSelectRoom = robotIsSelectRoom(workMode, robotStatus);
    const isSelectRoomPaused = robotIsSelectRoomPaused(workMode, robotStatus);
    return isSelectRoomStatus || isSelectRoom || (isSelectRoomPaused && isSelectRoomStatus);
  };

  const [isSelectRoomState, setIsSelectRoomState] = useState(
    isSelectingRoom(props.mapStatus, workModeState, robotStatusState)
  );

  /**
   * p2p连接
   */
  const isInitP2p = async () => {
    logger.info('【HomeMapView】 => Component has been started initP2p');
    isInit.current = await sweeperP2pInstance.initP2pSdk();
    if (isInit.current) {
      sweeperP2pInstance.connectDevice(
        () => {
          sweeperP2pInstance.startObserverSweeperDataByP2P(1);
          offSessionStatusChange.current = sweeperP2pInstance.onSessionStatusChange(
            sweeperP2pInstance.sessionStatusCallback
          );
        },
        () => {
          sweeperP2pInstance.reconnectP2p(() => {
            sweeperP2pInstance.startObserverSweeperDataByP2P(1);
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
      IndoorMapApi.sceneRender(IndoorMapUtils.getMapInstance(mapId.current), false);
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
   * 进入前台时开启P2P连接
   */
  const onEnterForeground = () => {
    ty.onAppShow(() => {
      logger.info('【HomeMapView】 => onAppShow');
      IndoorMapApi.sceneRender(IndoorMapUtils.getMapInstance(mapId.current), true);
      isAppOnBackground.current = false;
      if (!isInit.current) {
        isInitP2p();
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

  useMapData();
  usePathData();
  useCommandTransData();

  // 初始化并连接p2p
  useEffect(() => {
    isInitP2p();
    onEnterBackground();
    onEnterForeground();
    return () => {
      unmount();

      timer && clearInterval(timer);
    };
  }, []);

  // 监听状态变化判断是否处于选区状态
  useUpdateEffect(() => {
    setIsSelectRoomState(isSelectingRoom(props.mapStatus, workModeState, robotStatusState));
  }, [props.mapStatus, workModeState, robotStatusState]);

  /**
   * 地图唯一标识
   * @param data
   */
  const onMapId = async (data: any) => {
    dispatch(
      updateMapData({
        mapId: data.mapId,
      })
    );
  };

  /**
   * 地图渲染完成回调
   * @param success
   */
  const onMapLoadEnd = (success: boolean) => {
    logger.info('【HomeMapView】==> onMapLoadEnd', success, new Date().getTime());
    setMapLoadEnd(success);
    dispatch(updateMapData({ mapLoadEnd: success }));
  };

  const onLoggerInfo = useCallback((data: { info: any; theme: string; args: any }) => {
    console.log(data.info || '', data.theme || '', ...Object.values(data.args || {}));
  }, []);

  /**
   * 选区
   * @param data
   * @returns
   */
  const onClickSplitArea = (data: any) => {
    const { version, selectRoomData } = Store.getState().mapState;

    if (!data || !data.length || !Array.isArray(data)) {
      Logger.info(`homeMapView onClickSplitArea is empty,${data}`);
      return;
    }
    const room = data[0];
    const { pixel } = room;
    const roomId = parseRoomId(pixel, version);
    const maxUnknownId = version === 1 ? 31 : 26;
    if (roomId > maxUnknownId) {
      showToast({
        title: Strings.getLang('dsc_home_selectRoom_unknown'),
        icon: 'error',
      });
      return;
    }
    let curData = [];
    if (!selectRoomData.includes(pixel)) {
      curData = selectRoomData.concat([pixel]);
    } else {
      curData = selectRoomData.filter((i: string) => i !== pixel);
    }
    Logger.info(
      `homeMapView onClickSplitArea,prevData:${selectRoomData},data:${pixel},curData:${curData}`
    );
    dispatch(updateMapData({ selectRoomData: curData }));
  };

  /**
   * 点击房间的回调
   * @param data
   */
  const onClickRoom = (data: { roomId: string; isFoldable: false }) => {
    const { foldableRoomIds } = Store.getState().mapState;
    const { mapStatus } = props;
    const { roomId, isFoldable } = data;
    const edit = mapStatus !== nativeMapStatusEnum.normal;
    if (edit) return;
    let curData = [];
    if (!isFoldable && !foldableRoomIds.includes(roomId)) {
      curData = foldableRoomIds.concat([roomId]);
    } else {
      curData = foldableRoomIds.filter((i: string) => i !== roomId);
    }
    dispatch(updateMapData({ foldableRoomIds: curData }));
  };

  /**
   * 操作禁区/虚拟墙的回调
   * @param data
   */
  const onLaserMapPoints = async ({ data, type }) => {
    if (type === 'remove') {
      const { data: list, type: virtualType } = await useGetMapPointsInfo(mapId.current);

      if (virtualType === nativeMapStatusEnum.areaSet && !list.length) {
        dispatch(updateTemporaryPreference({ zone: false }));
      }
    }
  };

  const onClickRoomProperties = (data: any) => {
    const {
      properties: { colorHex },
    } = data;
    useFoldableSingleRoomInfo(mapId.current, colorHex, true);
  };

  const uiInterFace = React.useMemo(() => {
    return {
      isEdit: props.mapStatus !== nativeMapStatusEnum.normal && props.mapEditable, // 当前地图是否可修改
      isShowPileRing:
        props.mapStatus === nativeMapStatusEnum.virtualArea ||
        props.mapStatus === nativeMapStatusEnum.virtualWall, // 是否显示禁区ring
      isShowCurPosRing: !isRobotQuiet(robotStatusState), // 当前点ring
      isShowAppoint:
        workModeState === workModeEnum.pose || props.mapStatus === nativeMapStatusEnum.pressToRun, // 是否显示指哪扫哪点
      isShowAreaset:
        workModeState === workModeEnum.zone || props.mapStatus === nativeMapStatusEnum.areaSet, // 是否显示清扫区域
      isCustomizeMode: customizeModeSwitchState, // 是否显示房间属性折叠标签
      isSelectRoom: isSelectRoomState, // 当前状态是否为选择
      isRobotQuiet: isRobotQuiet(robotStatusState), // 当前地图是否安静
    };
  }, [props.mapStatus, workModeState, isSelectRoomState, robotStatusState]);

  const onDecodeMapData = (data: { mapHeader: MapHeader; mapRooms: RoomDecoded[] }) => {
    console.log('onDecodeMapData====>', data);

    const { mapHeader, mapRooms } = data;
    const roomInfo: { [key: string]: RoomDecoded } = {};
    mapRooms.forEach(i => {
      const { pointHex } = i;
      roomInfo[pointHex] = {
        ...i,
      };
    });

    dispatch(
      updateMapData({
        pilePosition: {
          theta: mapHeader.chargeDirection || 0,
          startTheta: mapHeader.chargeDirection !== undefined ? 90 : 0,
          ...mapHeader.chargePositionTransformed,
        },
        mapSize: {
          width: mapHeader.mapWidth,
          height: mapHeader.mapHeight,
        },
        dataMapId: mapHeader.id,
        version: mapHeader.version,
        origin: { x: mapHeader.originX, y: mapHeader.originY },
        mapStable: mapHeader.mapStable,
        isEmptyMap: mapHeader.mapWidth === 0 || mapHeader.mapHeight === 0,
        formatRoomInfo: roomInfo,
        roomNum: mapRooms?.length || 0,
      })
    );
  };

  return (
    <View
      style={{
        position: 'absolute',
        top: `${statusBarHeight + 44}px`,
        left: 0,
        width: '100vw',
        height: '100vh',
      }}
    >
      {/* 地图组件 */}
      <MapView
        isFullScreen
        mapDisplayMode="immediateMap"
        uiInterFace={uiInterFace}
        onMapId={onMapId}
        onLaserMapPoints={onLaserMapPoints}
        onClickSplitArea={onClickSplitArea}
        onDecodeMapData={onDecodeMapData}
        onClickRoomProperties={onClickRoomProperties}
        onClickRoom={onClickRoom}
        onMapLoadEnd={onMapLoadEnd}
        onLoggerInfo={onLoggerInfo}
        onClickMapView={v => {
          console.log(v, 'onCLickMapView====>');
        }}
        showLoading
        mapLoadEnd={mapLoadEnd}
      />
    </View>
  );
};

export default HomeMapView;
