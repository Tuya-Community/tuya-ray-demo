import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
import { mapSplitStateEnum, nativeMapStatusEnum } from '@ray-js/robot-map-component/lib/enums';
/**
 * @description 设置地图进入合并状态
 */
export default async function setMapStatusMerge(mapId: string): Promise<void> {
  await IndoorMapApi.setLaserMapSplitType(IndoorMapUtils.getMapInstance(mapId), {
    state: mapSplitStateEnum.merge,
    mapId,
  });
  await IndoorMapApi.setLaserMapStateAndEdit(IndoorMapUtils.getMapInstance(mapId), {
    state: nativeMapStatusEnum.mapSplit,
    mapId,
    edit: true,
  });
}
