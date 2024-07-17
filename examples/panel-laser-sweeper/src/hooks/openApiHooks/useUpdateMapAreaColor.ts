import { IndoorMapApi, IndoorMapUtils } from '@ray/robot-map-component';
/**
 * @description 更改地图指定房间的颜色
 */
export default function useUpdateMapAreaColor(
  mapId: string,
  roomIds: string[] | number[],
  isHex: boolean,
  isGray: boolean
): Promise<void> {
  return IndoorMapApi.updateMapAreaColor(
    IndoorMapUtils.getMapInstance(mapId),
    roomIds,
    isHex,
    isGray
  );
}
