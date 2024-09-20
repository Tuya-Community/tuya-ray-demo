import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
/**
 * @description 增加一个禁区/划区/虚拟墙
 */
export default function addLaserMapArea(mapId: string, area: any): Promise<any> {
  return IndoorMapApi.addLaserMapArea(IndoorMapUtils.getMapInstance(mapId), { mapId, area });
}
