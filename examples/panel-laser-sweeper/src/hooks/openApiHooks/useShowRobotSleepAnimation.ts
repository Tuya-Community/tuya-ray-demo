import { IndoorMapApi, IndoorMapUtils } from '@ray/robot-map-component';
/**
 * @description 设置机器人的呼吸动画
 */
export default function useShowRobotSleepAnimation(mapId: string, showMode: boolean): Promise<any> {
  return IndoorMapApi.showRobotBreatheAnimation(
    IndoorMapUtils.getMapInstance(mapId),
    showMode,
    undefined
  );
}
