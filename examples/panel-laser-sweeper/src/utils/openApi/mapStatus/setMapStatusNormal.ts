import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
import { mapSplitStateEnum, nativeMapStatusEnum } from '@ray-js/robot-map-component/lib/enums';
/**
 * @description 设置地图进入正常非编辑状态
 */
export default async function setMapStatusNormal(mapId: string): Promise<void> {
  await IndoorMapApi.setLaserMapStateAndEdit(IndoorMapUtils.getMapInstance(mapId), {
    mapId,
    state: nativeMapStatusEnum.normal,
    edit: false,
  });
  await IndoorMapApi.setLaserMapSplitType(IndoorMapUtils.getMapInstance(mapId), {
    mapId,
    state: mapSplitStateEnum.normal,
  });
}
