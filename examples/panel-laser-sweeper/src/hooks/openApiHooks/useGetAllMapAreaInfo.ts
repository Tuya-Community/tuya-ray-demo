import { IndoorMapApi, IndoorMapUtils } from '@ray/robot-map-component';
/**
 * @description 获取地图所有区域的信息
 */
export default function useGetAllMapAreaInfo(mapId: string, withHull = false): Promise<unknown> {
  return IndoorMapApi.getAllMapAreaInfo(IndoorMapUtils.getMapInstance(mapId), withHull);
}
