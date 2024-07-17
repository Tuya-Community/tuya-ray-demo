import { IndoorMapApi, IndoorMapUtils } from '@ray/robot-map-component';
/**
 * @description 获取地图所有房间的信息
 */
export default function useGetMapAreaInfo(
  mapId: string,
  roomIds: string[] | number[],
  isHex: boolean,
  withHull = false
): Promise<unknown> {
  return IndoorMapApi.getMapAreaInfo(
    IndoorMapUtils.getMapInstance(mapId),
    roomIds,
    isHex,
    withHull
  );
}
