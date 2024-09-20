import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
/**
 * @description 设置充电桩的呼吸动画
 */
export default function showPilePositionBreatheAnimation(
  mapId: string,
  showMode: boolean
): Promise<any> {
  return IndoorMapApi.showPilePositionBreatheAnimation(
    IndoorMapUtils.getMapInstance(mapId),
    showMode,
    undefined
  );
}
