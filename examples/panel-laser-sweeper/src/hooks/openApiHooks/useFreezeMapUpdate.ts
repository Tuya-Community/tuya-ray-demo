import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
/**
 * @description 对房间的属性标签进行折叠
 */
export default function useFreezeMapUpdate(mapId: string, freeze: boolean): void {
  IndoorMapApi.freezeMapUpdate(IndoorMapUtils.getMapInstance(mapId), freeze);
}
