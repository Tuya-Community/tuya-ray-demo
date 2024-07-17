import { IndoorMapApi, IndoorMapUtils } from '@ray/robot-map-component';
/**
 * @description 改变地图的区域颜色
 */
export default function useChangeAllMapAreaColor(mapId: string, isGray: boolean): Promise<any> {
  return IndoorMapApi.changeAllMapAreaColor(IndoorMapUtils.getMapInstance(mapId), isGray);
}
