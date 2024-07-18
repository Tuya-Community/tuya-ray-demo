import { IndoorMapApi, IndoorMapUtils } from '@ray/robot-map-component';
import { nativeMapStatusEnum } from '@ray/robot-map-component/lib/enums';
/**
 * @description 设置地图进入房间排序状态
 */

export default async function useSetMapStatusRename(mapId: string): Promise<void> {
  await IndoorMapApi.setLaserMapStateAndEdit(IndoorMapUtils.getMapInstance(mapId), {
    mapId,
    state: nativeMapStatusEnum.mapSelect,
    edit: true, // 这里需要设置edit为false
  });
}
