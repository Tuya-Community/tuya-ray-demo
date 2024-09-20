import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
/**
 * @description 根据选区清扫的房间ID来设置选中
 */
export default function updateSelectRoom(
  mapId: string,
  roomIds: string[] | number[],
  isHex: boolean
): Promise<any> {
  return IndoorMapApi.updateSelectRoom(IndoorMapUtils.getMapInstance(mapId), roomIds, isHex);
}
