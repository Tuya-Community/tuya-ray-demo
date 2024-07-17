import { IndoorMapApi, IndoorMapUtils } from '@ray/robot-map-component';
/**
 * @description 设置充电桩的呼吸动画
 */
export default function useShowPilePositionBreatheAnimation(
  mapId: string,
  showMode: boolean
): Promise<any> {
  return IndoorMapApi.showPilePositionBreatheAnimation(
    IndoorMapUtils.getMapInstance(mapId),
    showMode,
    undefined
  );
}
