/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Strings from '@/i18n';
import {
  getRCTAreaStructure,
  getRCTLineStructure,
  getRCTPointStructure,
} from '@/hybrid-mini-robot-map/protocol/utils/pressCoordinateUtil';
import circleIntersectRect from '@/hybrid-mini-robot-map/protocol/utils/pressCoordinateUtil/circleIntersectRect';
import _ from 'lodash';
import { dpCodes } from '@/config';
import { IndoorMapApi, IndoorMapUtils } from '@ray/robot-map-component';
import { useAddLaserMapPosPoints, useAddLaserMapArea } from '@/hooks/openApiHooks';
const { nativeMapStatusEnum } = dpCodes;
const ALL_ZONE_MUN_MAX = 100;

/**
 * 获取虚拟框的新增ID
 * @param params
 * @returns
 */
export function getNewAreaId(params: { RCTAreaList: Array<any>; tempAreaList: Array<any> }) {
  // 在原基础上做id自增
  const { RCTAreaList, tempAreaList } = params;
  const finalList = [...RCTAreaList, ...tempAreaList];
  const finalIdList = finalList
    .map(area => Number(area.id))
    .sort((pre: number, cur: number) => pre - cur);
  const len = finalIdList.length;
  return len === 0 ? 0 : finalIdList[len - 1] + 1;
}

/**
 * 检查地图中的划区清扫框、虚拟墙、禁区框数量
 * @param num
 * @param extendZoneLength
 * @param mapId
 * @returns
 */
async function checkMapPointNumber(num: number, extendZoneLength = 0, mapId: string) {
  try {
    const { data = [] } = await IndoorMapApi.getLaserMapPoints(
      IndoorMapUtils.getMapInstance(mapId)
    );
    const zoneNum = data.length + extendZoneLength + 1;
    if (zoneNum > num) {
      ty.showToast({
        title: Strings.getLang('dsc_Area_num_limit'),
        icon: 'error',
      });
      return Promise.reject();
    }
    return true;
  } catch (error) {
    console.warn(error);
    return Promise.reject(error);
  }
}

/**
 * 获取数组的一个是数字的元素
 * @param arr
 * @returns
 */
const getFirNum = (arr: any[]) => {
  for (let i = 0; i < arr.length; i++) {
    if (!_.isNaN(arr[i]) && _.isNumber(arr[i])) {
      return arr[i];
    }
  }
  return 0;
};

/**
  获取坐标点数据（兼容老接口数据结构）
 */
async function getMapPointsCompatibleWiltV1(opts = {}) {
  const { mapId } = opts;
  const { data = [] } = await IndoorMapApi.getLaserMapPointsInfo(
    IndoorMapUtils.getMapInstance(mapId),
    mapId
  );
  if (mapId) {
    const points = data.map(item => item.points);
    return {
      origin: data,
      compatible: points,
    };
  }
  return {
    origin: data,
    compatible: data,
  };
}
/**
 *  检查区域是否在点内
 */
export function checkForbidInPos(opts) {
  const {
    posX,
    posY,
    originX,
    originY,
    resolution,
    ringRadiusRealMeter = 1,
    curAreaData = [],
  } = opts;
  // 如果有充电桩的时候才检查是否和充电桩重叠
  if (
    _.isUndefined(posX) ||
    _.isUndefined(posY) ||
    _.isUndefined(originX) ||
    _.isUndefined(originY)
  )
    return false;

  return curAreaData.some(item => {
    return circleIntersectRect(
      {
        x: posX + originX,
        y: posY + originY,
        radius: ringRadiusRealMeter / resolution, // 半径=真实米数/比例尺
      },
      item
    );
  });
}

/**
 * 禁区框移动时，检测是否覆盖当前点
 */
export async function isForbiddenZonePointsInCurPos(
  pointData: { type: number },
  opts = { resolution: 0.05, curPos: {}, origin: { x: 0, y: 0 }, mapId: '' }
) {
  const {
    curPos: { x: px, y: py },
    resolution,
    origin: { x: ox, y: oy },
  } = opts;
  if (
    px === undefined ||
    py === undefined ||
    !pointData ||
    !(
      pointData.type === nativeMapStatusEnum.virtualArea ||
      pointData.type === nativeMapStatusEnum.virtualWall
    )
  ) {
    return false;
  }
  const { compatible: data = [], origin: originData = [] } = await getMapPointsCompatibleWiltV1({
    mapId: opts.mapId,
  });
  return checkForbidInPos({
    posX: px,
    posY: py,
    originX: ox,
    originY: oy,
    resolution,
    ringRadiusRealMeter: 0.1,
    // ringRadiusRealMeter: 1,
    curAreaData: data,
  });
}

/**
 * 禁区框移动时的回调, 检测禁区框是否在充电桩2米内
 * @param {*} pointData
 * @param {*} [opts={ resolution: 1, pilePosition, mapId }]
 * @returns {boolean}
 */
export async function isForbiddenZonePointsInPile(
  pointData: { type: number },
  opts = { resolution: 1, pilePosition: { x: 0, y: 0 }, mapId: '', origin: { x: 0, y: 0 } }
) {
  if (!pointData || !(pointData.type === nativeMapStatusEnum.virtualArea)) return false;
  const { compatible: data = [], origin: originData = [] } = await getMapPointsCompatibleWiltV1({
    mapId: opts.mapId,
  });
  const {
    pilePosition,
    resolution,
    origin: { x: ox, y: oy },
  } = opts;

  return checkForbidInPos({
    posX: pilePosition.x,
    posY: pilePosition.y,
    originX: ox,
    originY: oy,
    resolution,
    ringRadiusRealMeter: 1,
    curAreaData: data,
  });
}

/**
 * 设置地图清扫区域
 * @param param0
 * @returns
 */
export function setMapCleanZone({
  mapId = '',
  areaId = 0,
  curPos = { x: 0, y: 0 },
  origin = { x: 0, y: 0 },
  mapHeight = 0,
  mapWidth = 0,
  extendAreaNum = 0,
  tempAreaList = [],
  mode,
  bgColor = 'rgba(70,133,255,0.5)',
  borderColor = '#ffffff',
  textColor,
  areaWidth = 30,
  minAreaWidth = 30,
  text = '',
  canRename = false,
  oldPoints,
  vertexParams,
  unitParams,
  viewType = '',
  factor = 0.05,
}) {
  return new Promise((resolve, reject) => {
    let points: Array<{ x: number; y: number }> = [];
    checkMapPointNumber(100, extendAreaNum, mapId)
      .then(() => {
        if (tempAreaList.length) {
          const lastTempArea = tempAreaList[tempAreaList.length - 1];
          const [p1, p2, p3, p4] = lastTempArea.points;
          points = [
            { x: p1.x - 10, y: p1.y + 10 },
            { x: p2.x - 10, y: p2.y + 10 },
            { x: p3.x - 10, y: p3.y + 10 },
            { x: p4.x - 10, y: p4.y + 10 },
          ];
        } else {
          const { x: ox, y: oy } = origin;
          const { x: px, y: py } = curPos;

          const cx = Math.round(mapWidth / 2) - ox;
          const cy = Math.round(mapHeight / 2) - oy;

          const originX = getFirNum([px, cx, ox, 0]);
          const originY = getFirNum([py, cy, oy, 0]);

          points = [
            { x: originX - minAreaWidth, y: originY - minAreaWidth },
            { x: originX + minAreaWidth, y: originY - minAreaWidth },
            { x: originX + minAreaWidth, y: originY + minAreaWidth },
            { x: originX - minAreaWidth, y: originY + minAreaWidth },
          ];
        }
        const areaZone = getRCTAreaStructure({
          id: `${areaId}`,
          type: 2,
          points: oldPoints || points,
          bgColor,
          borderColor,
          text,
          vertexParams,
          unitParams,
          canRename,
          viewType,
          minAreaWidth,
        });

        console.log('areaZone', areaZone);
        useAddLaserMapArea(mapId, areaZone).then(() =>
          resolve({ area: { ...areaZone, type: nativeMapStatusEnum.areaSet } })
        );
      })
      .catch(() => {
        reject();
      });
  });
}

/**
 * 设置地图禁区
 * 禁区type=3 最大限制8个  文案:最大禁区数为8个
 */
export function setMapForbiddenZone({
  extendAreaNum = 0,
  mapId = '',
  areaId = 0,
  origin = {},
  curPos = {},
  tempAreaList = [],
  mode = 'all',
  mapHeight = 0,
  mapWidth = 0,
  bgColor = '',
  borderColor = '',
  text = '',
  textColor = '#ffffff',
  areaWidth = 30,
  minAreaWidth = 30,
  canRename = false,
  canRotate = true,
  vertexParams,
  unitParams,
  viewType = '',
  factor = 0.05,
}) {
  return new Promise((resolve, reject) => {
    let points: { x: number; y: number }[] = [];
    checkMapPointNumber(ALL_ZONE_MUN_MAX, extendAreaNum, mapId)
      .then(() => {
        if (tempAreaList.length) {
          // 如果有临时区域，以上一个为准来偏移
          const lastTempArea = tempAreaList[tempAreaList.length - 1];
          const [p1, p2, p3, p4] = lastTempArea.points;
          points = [
            { x: p1.x - 10, y: p1.y + 10 },
            { x: p2.x - 10, y: p2.y + 10 },
            { x: p3.x - 10, y: p3.y + 10 },
            { x: p4.x - 10, y: p4.y + 10 },
          ];
        } else if (mapHeight && mapWidth) {
          // 如果有高度和宽度
          const { x: ox, y: oy } = origin;
          const originX = Math.round(mapWidth / 2 - ox);
          const originY = Math.round(mapHeight / 2 - oy);
          points = [
            { x: originX - minAreaWidth, y: originY - minAreaWidth },
            { x: originX + minAreaWidth, y: originY - minAreaWidth },
            { x: originX + minAreaWidth, y: originY + minAreaWidth },
            { x: originX - minAreaWidth, y: originY + minAreaWidth },
          ];
        } else {
          const { x: ox, y: oy } = origin;
          const { x: px, y: py } = curPos;
          const originX = getFirNum([px, ox, 0]);
          const originY = getFirNum([py, oy, 0]);
          points = [
            { x: originX - minAreaWidth, y: originY - minAreaWidth },
            { x: originX + minAreaWidth, y: originY - minAreaWidth },
            { x: originX + minAreaWidth, y: originY + minAreaWidth },
            { x: originX - minAreaWidth, y: originY + minAreaWidth },
          ];
        }
        const areaZone = getRCTAreaStructure({
          id: `${areaId}`,
          type: nativeMapStatusEnum.virtualArea,
          points,
          bgColor,
          borderColor,
          textColor,
          text,
          minAreaWidth,
          extend: {
            forbidType: mode,
          },
          vertexParams,
          unitParams,
          canRename,
          canRotate,
          viewType,
        });
        console.log('\n\npointspoints ===>', points, mapId, IndoorMapUtils.getMapInstance(mapId));
        IndoorMapApi.addLaserMapArea(IndoorMapUtils.getMapInstance(mapId), {
          mapId,
          area: areaZone,
        }).then(() => {
          resolve({ area: { ...areaZone, mode, type: nativeMapStatusEnum.virtualArea } });
        });
      })
      .catch(() => {
        reject();
      });
  });
}

/**
 * 设置地图虚拟墙
 * 虚拟墙   type=4
 */
export function setMapVirtualWall({
  extendAreaNum = 0,
  mapId = '',
  areaId = 0,
  origin = {},
  curPos = {},
  tempAreaList = [],
  mode = 'all',
  mapHeight = 0,
  mapWidth = 0,
  bgColor = '',
  lineWidth = 0.5,
  vertexParams,
  unitParams,
  sideVertexParams,
  viewType = '',
}) {
  return new Promise((resolve, reject) => {
    let points: { x: number; y: number }[] = [];

    checkMapPointNumber(ALL_ZONE_MUN_MAX, extendAreaNum, mapId)
      .then(() => {
        if (tempAreaList.length) {
          // 如果有临时区域，以上一个为准来偏移
          const lastTempArea = tempAreaList[tempAreaList.length - 1];
          const [p1, p2] = lastTempArea.points;
          points = [
            { x: p1.x - 10, y: p1.y + 10 },
            { x: p2.x - 10, y: p2.y + 10 },
          ];
        } else if (mapHeight && mapWidth) {
          // 如果有高度和宽度
          const { x: ox, y: oy } = origin;
          const originX = Math.round(mapWidth / 2 - ox);
          const originY = Math.round(mapHeight / 2 - oy);

          points = [
            { x: originX - 30, y: originY - 30 },
            { x: originX + 30, y: originY - 30 },
          ];
        } else {
          const { x: ox, y: oy } = origin;
          const { x: px, y: py } = curPos;

          const originX = getFirNum([px, ox, 0]);
          const originY = getFirNum([py, oy, 0]);

          points = [
            { x: originX - 30, y: originY - 30 },
            { x: originX + 30, y: originY - 30 },
          ];
        }
        const areaTemp = {
          id: `${areaId}`,
          points,
        };

        const areaZone = getRCTLineStructure({
          id: `${areaId}`,
          type: nativeMapStatusEnum.virtualWall,
          points, // 只取前两位
          bgColor,
          lineWidth,
          extend: {
            forbidType: mode,
            isWall: true,
          },
          vertexParams,
          unitParams,
          sideVertexParams,
          viewType,
        });
        console.log('areaZone', areaZone);
        IndoorMapApi.addLaserMapArea(IndoorMapUtils.getMapInstance(mapId), {
          mapId,
          area: areaZone,
        }).then(() => resolve({ area: { ...areaTemp, type: nativeMapStatusEnum.virtualWall } }));
      })
      .catch(() => {
        reject();
      });
  });
}

/**
 * 设置一个指哪扫哪清扫点
 */
export function setPosPoints({
  mapId = '',
  areaId = 0,
  origin = {},
  mapHeight = 0,
  mapWidth = 0,
  bgColor = '#195D68FE',
  borderColor = '#FF5D68FE',
  textColor = '#FF5D68FE',
  textSize = 12,
  meter = 1.6,
  isDash = false,
  lineWidth = 0.5,
  dashSize = 1,
  gapSize = 4,
  factor = 0.05,
}) {
  return new Promise((resolve, reject) => {
    if (mapHeight && mapWidth) {
      // 如果有高度和宽度
      const { x: ox, y: oy } = origin;
      const originX = Math.round(mapWidth / 2 - ox);
      const originY = Math.round(mapHeight / 2 - oy);

      const points = { x: originX, y: originY };

      const posPoints = getRCTPointStructure({
        id: `${areaId}`,
        points,
        type: nativeMapStatusEnum.pressToRun,
        pos: {
          meter,
          factor,
          bgColor,
          borderColor,
          isDash,
          lineWidth,
          dashSize,
          gapSize,
        },
        unit: {
          textColor,
          textSize,
        },
      });
      console.log('setPosPoints', posPoints);
      useAddLaserMapPosPoints(mapId, posPoints).then(() => resolve({ posPoints }));
    } else {
      reject();
    }
  });
}
export default {
  getNewAreaId,
  setMapCleanZone,
  setMapVirtualWall,
  setMapForbiddenZone,
  setPosPoints,
};
