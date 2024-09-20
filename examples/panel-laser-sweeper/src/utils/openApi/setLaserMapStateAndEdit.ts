import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
/**
 * @description 设置地图状态和编辑状态
 */
export default function setLaserMapStateAndEdit(
  mapId: string,
  opt: { state: number; edit: boolean }
): Promise<any> {
  return IndoorMapApi.setLaserMapStateAndEdit(IndoorMapUtils.getMapInstance(mapId), {
    mapId,
    ...opt,
  });
}
