import { IndoorMapApi, IndoorMapUtils } from '@ray/robot-map-component';
/**
 * @description 获取地图分割和的数据信息
 */
export default function useGetLaserMapSplitPoint(mapId: string): Promise<unknown> {
  return IndoorMapApi.getLaserMapSplitPoint(IndoorMapUtils.getMapInstance(mapId), { mapId });
}
