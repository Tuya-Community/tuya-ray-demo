import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
import { mapSplitStateEnum, nativeMapStatusEnum } from '@ray-js/robot-map-component/lib/enums';
/**
 * @description 设置地图进入重命名状态
 */
export default async function setMapStatusRename(mapId: string): Promise<void> {
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
