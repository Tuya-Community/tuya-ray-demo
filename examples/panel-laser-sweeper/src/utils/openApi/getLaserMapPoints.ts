import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
/**
 * @description 获取地图的一些虚拟信息, 同useMapPointsInfo
 */
export default function getLaserMapPoints(mapId: string): Promise<unknown> {
  return IndoorMapApi.getLaserMapPoints(IndoorMapUtils.getMapInstance(mapId));
}
