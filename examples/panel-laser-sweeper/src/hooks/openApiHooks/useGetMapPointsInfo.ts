import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
import { ILaserMapArea } from '@ray-js/robot-map-component/lib/api';

/**
 * @description 从地图中获取虚拟信息的相关数据
 */
export default function useGetMapPointsInfo(
  mapId: string
): Promise<{
  type: number;
  data:
    | ILaserMapArea[]
    | [
        {
          x: number;
          y: number;
        },
        {
          x: number;
          y: number;
        },
        {
          x: number;
          y: number;
        },
        (
          | {
              x: number;
              y: number;
            }
          | {
              x: number;
              y: number;
            }
        )
      ][];
}> {
  return IndoorMapApi.getLaserMapPointsInfo(IndoorMapUtils.getMapInstance(mapId), { mapId });
}
