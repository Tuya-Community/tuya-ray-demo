import { IndoorMapApi, IndoorMapUtils } from '@ray/robot-map-component';
import { mapSplitStateEnum, nativeMapStatusEnum } from '@ray/robot-map-component/lib/enums';
/**
 * @description 设置地图进入重命名状态
 */
export default async function useSetMapStatusRename(mapId: string): Promise<void> {
  await IndoorMapApi.setLaserMapSplitType(IndoorMapUtils.getMapInstance(mapId), {
    mapId,
    state: mapSplitStateEnum.click,
  });
  await IndoorMapApi.setLaserMapStateAndEdit(IndoorMapUtils.getMapInstance(mapId), {
    mapId,
    state: nativeMapStatusEnum.mapSplit,
    edit: false, // 这里需要设置edit为false
  });
}
