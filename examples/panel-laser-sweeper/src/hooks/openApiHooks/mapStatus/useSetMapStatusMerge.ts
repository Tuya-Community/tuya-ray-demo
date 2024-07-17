import { IndoorMapApi, IndoorMapUtils } from '@ray/robot-map-component';
import { mapSplitStateEnum, nativeMapStatusEnum } from '@ray/robot-map-component/lib/enums';
/**
 * @description 设置地图进入合并状态
 */
export default async function useSetMapStatusMerge(mapId: string): Promise<void> {
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
