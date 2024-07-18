import { IndoorMapApi, IndoorMapUtils } from '@ray/robot-map-component';
/**
 * @description 使用openApi 进行地图截图
 */
export default function useSnapshot(mapId: string): Promise<{ snapshotImage: { image: string } }> {
  return IndoorMapApi.getCurrentScreenSnapshot(IndoorMapUtils.getMapInstance(mapId)) as Promise<{
    snapshotImage: { image: string };
  }>;
}
