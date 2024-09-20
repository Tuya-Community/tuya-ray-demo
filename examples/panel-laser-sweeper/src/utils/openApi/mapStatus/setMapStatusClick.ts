import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
import { mapSplitStateEnum, nativeMapStatusEnum } from '@ray-js/robot-map-component/lib/enums';
/**
 * @description 设置地图进入分割状态
 */
export default async function setMapStatusClick(mapId: string): Promise<void> {
  await IndoorMapApi.setLaserMapSplitType(IndoorMapUtils.getMapInstance(mapId), {
    mapId,
    state: mapSplitStateEnum.click,
  });
  await IndoorMapApi.setLaserMapStateAndEdit(IndoorMapUtils.getMapInstance(mapId), {
    mapId,
    state: nativeMapStatusEnum.mapClick,
    edit: false,
  });
}
