import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
/**
 * @description 在一些特殊场景下, 是否停止地图渲染, 来减少性能消耗
 */
export default function useSceneRender(mapId: string, shouldRender: boolean): void {
  IndoorMapApi.sceneRender(IndoorMapUtils.getMapInstance(mapId), shouldRender);
}
