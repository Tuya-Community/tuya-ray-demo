import { IndoorMapApi, IndoorMapUtils } from '@ray/robot-map-component';
/**
 * @description 切换地图为2d或者3d
 */
export default function useChangeMapViewMode(mapId: string, is3d: boolean): void {
  console.warn('useChangeMapViewMode', mapId, IndoorMapUtils.getMapInstance(mapId), mapId, is3d);
  IndoorMapApi.changeMapViewModeWithMapId(IndoorMapUtils.getMapInstance(mapId), mapId, is3d);
}
