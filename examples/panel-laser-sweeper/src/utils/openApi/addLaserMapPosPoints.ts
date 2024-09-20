import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
/**
 * @description 向地图中添加一个定点清扫Layer
 */
export default function addLaserMapPosPoints(mapId: string, posPoints: any): Promise<any> {
  return IndoorMapApi.addLaserMapPosPoints(IndoorMapUtils.getMapInstance(mapId), posPoints);
}
