import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
/**
 * @description 以当前的路径数据重新绘制路径数据到涂层
 */
export default function useReCreatePath(mapId: string): void {
  IndoorMapApi.reCreatePathIntoScene(IndoorMapUtils.getMapInstance(mapId));
}
