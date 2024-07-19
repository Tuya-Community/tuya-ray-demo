import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
import { mapSplitStateEnum } from '@ray-js/robot-map-component/lib/enums';
/**
 * @description 设置地图状态和编辑状态
 */
export default function useSetLaserMapSplitType(
  mapId: string,
  state: mapSplitStateEnum
): Promise<any> {
  return IndoorMapApi.setLaserMapSplitType(IndoorMapUtils.getMapInstance(mapId), { mapId, state });
}
