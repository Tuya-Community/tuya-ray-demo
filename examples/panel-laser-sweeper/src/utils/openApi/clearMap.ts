import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
/**
 * @description 当地图的dataMapId 发生变化时, 清空整个地图
 */
export default function clearMap(mapId: string): void {
  IndoorMapApi.clearMap(IndoorMapUtils.getMapInstance(mapId));
}
