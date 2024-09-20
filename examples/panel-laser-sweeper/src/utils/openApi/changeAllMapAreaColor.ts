import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
/**
 * @description 改变地图的区域颜色
 */
export default function changeAllMapAreaColor(mapId: string, isGray: boolean): Promise<any> {
  return IndoorMapApi.changeAllMapAreaColor(IndoorMapUtils.getMapInstance(mapId), isGray);
}
