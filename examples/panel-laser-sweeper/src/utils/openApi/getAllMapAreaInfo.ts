import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
/**
 * @description 获取地图所有区域的信息
 */
export default function getAllMapAreaInfo(mapId: string, withHull = false): Promise<unknown> {
  return IndoorMapApi.getAllMapAreaInfo(IndoorMapUtils.getMapInstance(mapId), withHull);
}
