import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
/**
 * @description 对房间的属性标签进行折叠
 */
export default function useFoldableSingleRoomInfo(
  mapId: string,
  roomId: string | number,
  isHex: boolean,
  foldable?: boolean
): Promise<any> {
  return IndoorMapApi.foldableSingleRoomInfoById(
    IndoorMapUtils.getMapInstance(mapId),
    roomId,
    isHex,
    foldable
  );
}
