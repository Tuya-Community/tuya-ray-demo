import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
import { nativeMapStatusEnum } from '@ray-js/robot-map-component/lib/enums';
/**
 * @description 设置地图进入房间排序状态
 */

export default async function setMapStatusOrder(mapId: string): Promise<void> {
  await IndoorMapApi.setLaserMapStateAndEdit(IndoorMapUtils.getMapInstance(mapId), {
    mapId,
    state: nativeMapStatusEnum.mapSelect,
    edit: true, // 这里需要设置edit为false
  });
}
