import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
/**
 * @description 获取地图合并的相关信息
 */
export default function getLaserMapMergeInfo(mapId: string): Promise<unknown> {
  return IndoorMapApi.getLaserMapSplitPoint(IndoorMapUtils.getMapInstance(mapId), { mapId });
}
