import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
/**
 * @description 获取当前机器人的坐标信息
 */
export default function useGetCurrentRobotNDCPosition(mapId: string): Promise<unknown> {
  return IndoorMapApi.getCurrentRobotNDCPosition(IndoorMapUtils.getMapInstance(mapId));
}
