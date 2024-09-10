import logger from '@/hybrid-mini-robot-map/protocol/loggerUtil';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useDevice } from '@ray-js/panel-sdk';
import { updateMapData } from '@/redux/modules/mapStateSlice';
import { StreamDataNotificationCenter } from '@ray-js/robot-data-stream';
/**
 * 接收路径数据并解析
 * @returns
 */
export default function usePathData() {
  const pathDataCache = useRef('');
  const { devId } = useDevice(device => device.devInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    const handlePathData = (pathDataStr: string) => {
      if (pathDataStr !== pathDataCache.current) {
        logger.success('路径数据', pathDataStr);

        ty.setStorageSync({
          key: `path_${devId}`,
          data: pathDataStr,
        });

        pathDataCache.current = pathDataStr;

        dispatch(updateMapData({ originPath: pathDataStr }));
      }
    };

    StreamDataNotificationCenter.on('receivePathData', handlePathData);

    return () => {
      StreamDataNotificationCenter.off('receivePathData');
    };
  }, []);
  return {};
}
