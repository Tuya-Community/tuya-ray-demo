/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-lone-blocks */
import _ from 'lodash';
import { utils } from '@ray-js/panel-sdk';
import tinycolor from 'tinycolor2';
import { convertColorToArgbDEC } from '../utils/pressCoordinateUtil';
import { toFixed16 } from '../utils/robotUtil';
const { scaleNumber } = utils;

export function shrinkValue(value: any) {
  return scaleNumber(1, value);
}

export const bitmapTypeMap = {
  sweep: '00', // 清扫点
  barrier: '01', // 障碍点
  battery: '10', // 充电桩
  unknown: '11', // 未知区域
};

export const bitmapTypeMapReflection = {
  '00': 'sweep',
  '01': 'barrier',
  '10': 'battery',
  '11': 'unknown',
  '111': 'sweep',
  '001': 'barrier',
  '000': 'unknown',
  '010': 'carpet',
};

/**
 * 高五位 低三位的数据
 */
export const bitmapTypeMapV2 = {
  sweep: '111', // 清扫点
  barrier: '001', // 障碍点
  carpet: '010', // 地毯
  unknown: '000', // 未知区域
};

/**
 * 地图数据对应的类型点Hex
 */
export const bitmapTypeHexMap = {
  '00': '00', // 清扫点
  '01': 'f1', // 障碍点
  '10': 'f2', // 充电桩
  '11': 'ff', // 未知区域
};

export const bitmapTypeFloorMaterial = {
  carpet: '00', // 地毯
  tile: '01', // 瓷砖
  wooden: '02', // 木质
};

export const fileTypeMap = {
  map: 0,
  path: 1,
  increPath: 2,
  planPath: 3,
};

export const pointsColor = [
  '#ABD6FFFF', // 清扫点(地图背景颜色)
  '#818181', //  障碍点(地图描边边框)
  '#00FFFF00', // 未知区域（看不见的点）
  '#7ED321FF', // 充电桩
];

export const MAX_ID_NUM = 255;

export const colorOriginMap = [
  '#FDE4CF',
  '#8EECF5',
  '#CFBAF0',
  '#F1C0E8',
  '#A3C4F3',
  '#98F5E1',
  '#FFCFD2',
  '#90DBF4',
  '#E1C1EB',
  '#8ECCF5',
  '#EDDDDE',
  '#A3B8F3',
  '#EFCFE1',
  '#B2F2BE',
  '#AEE6F8',
  '#90C2F4',
];

export const colorHighlightMap = [
  '#FDE4CF',
  '#8EECF5',
  '#CFBAF0',
  '#F1C0E8',
  '#A3C4F3',
  '#98F5E1',
  '#FFCFD2',
  '#90DBF4',
  '#E1C1EB',
  '#8ECCF5',
  '#EDDDDE',
  '#A3B8F3',
  '#EFCFE1',
  '#B2F2BE',
  '#AEE6F8',
  '#90C2F4',
];

export const colorGrayMap = [
  '#EBEBEB',
  '#E4E4E4',
  '#DCDCDC',
  '#D5D5D5',
  '#CECECE',
  '#C6C6C6',
  '#C2C2C2',
  '#BABABA',
  '#E2E2E2',
  '#DBDBDB',
  '#D3D3D3',
  '#CCCCCC',
  '#C6C6C6',
  '#BEBEBE',
  '#BABABA',
  '#B3B3B3',
];

/**
 * 转化为#00000000形式的颜色数据
 * @param color
 * @returns
 */
const toCMYKColor = (color: string) => {
  if (tinycolor(color).isValid()) {
    const rgb = tinycolor(color)
      .toHex8()
      .slice(0, 6);
    const alpha = toFixed16(Math.round(tinycolor(color).getAlpha() * 255).toString());
    const colorHex: string = '#' + alpha + rgb;
    return colorHex.toUpperCase();
  }
  return false;
};

export const createHouseColorMap = (
  version: number,
  count: number,
  colors: string[],
  room1Color?: string,
  room2Color?: string,
  room3Color?: string,
  room4Color?: string
) => {
  let room1 = '#D0D0D0';
  if (tinycolor(room1Color).isValid()) {
    room1 = tinycolor(room1Color).toHexString();
  }
  let room2 = '#D0D0D1';
  if (tinycolor(room2Color).isValid()) {
    room2 = tinycolor(room2Color).toHexString();
  }
  let room3 = '#D0D0D2';
  if (tinycolor(room3Color).isValid()) {
    room3 = tinycolor(room3Color).toHexString();
  }
  let room4 = '#D0D0D3';
  if (tinycolor(room4Color).isValid()) {
    room4 = tinycolor(room4Color).toHexString();
  }

  // function getColor(step: number, color: string) {
  //   const [h, s, v] = Color.color.hex2hsv(color);
  //   const colorHex: string = Color.color.hsv2hex(h, s, v - step);
  //   return colorHex.toUpperCase();
  // }
  const map = new Map();
  // let step = 0; // 第几圈
  const counts = colors.length; // 一共有多少种颜色(默认16)
  // for (let index = 0; index < count; index++) {
  //   const hex = getColor(step, colors[index % counts]);
  //   const id = index;
  //   map.set(id, hex);
  //   if (index % counts === 0) step += 1;
  // }
  for (let index = 0; index < count; index++) {
    const hex = colors[index % counts];
    const id = index;
    map.set(id, hex);
  }
  if (version !== 2) {
    map.set(60, room1);
    map.set(61, room2);
    map.set(62, room3);
    map.set(63, room4);
  } else {
    map.set(28, room1);
    map.set(29, room2);
    map.set(30, room3);
    map.set(31, room4);
  }
  return map;
};

export const unknownAreaId = [60, 61, 62, 63];
export const unkonwnAreaIdV2 = [28, 29, 30, 31];

// 解析地图框数据的type
export const areaTypeMap = {
  sweepRegion: '11', // 划区清扫 V1.0.0
  sweepRegionV2: '29', // 划区清扫 V1.1.0
  sweepRegionV3: '3b', // 划区清扫 V1.2.0
  virtualWall: '13',
  appoint: '17',
  appointV2: '3f', // 指哪扫哪V1.1.0
  virtualArea: '19', // 禁区V1.0.0
  virtualAreaV2: '1b', // 禁区V1.1.0
  virtualAreaV3: '39', // 禁区V1.2.0
};

// 和native交互用户地图状态
export const nativeMapStatus = {
  normal: 0, // 正常
  pressToRun: 1, // 指拿扫哪
  areaSet: 2, // 划区清扫
  virtualArea: 3, // 虚拟框
  virtualWall: 4, // 虚拟墙
  mapSplit: 5, // 地图分区
  mapClick: 5, // 选区清扫 RN端的命名规则可能不同
  mapSelect: 6, // 地图清扫顺序区块选择
  mapTimerSelect: 7, // 定时状态下的区域选择
};

export enum ForbidTypeEnum {
  all = 'all',
  sweep = 'sweep',
  mop = 'mop',
}

export const dealPointsColor = _.memoize(
  (type: string, sweepColor?: string, barrierColor?: string, unknownColor?: string) => {
    const [sweep, barrier, unknown] = pointsColor;
    const mapColor = {
      [bitmapTypeMap.sweep]: toCMYKColor(sweepColor) || sweep,
      [bitmapTypeMap.barrier]: toCMYKColor(barrierColor) || barrier,
      [bitmapTypeMap.unknown]: toCMYKColor(unknownColor) || unknown,
    };
    return mapColor[type] || sweep;
  },
  function key(type: string) {
    return type;
  }
);

export const materialObjMap = {
  0: 'wire',
  1: 'shoe',
  2: 'sock',
  3: 'toy',
  4: 'chair',
  5: 'table',
  6: 'ashcan',
  7: 'plants',
};

/**
 * 不分区地图
 */
export const getBitMapByType = _.memoize(
  (type: string, houseId?: number) => {
    const color = dealPointsColor(type);
    return convertColorToArgbDEC(color);
  },
  function key(type: string, houseId: number) {
    return type + houseId;
  }
);

/**
 * 对高5低3点类型的数据颜色进行划分
 */
export const dealPointsColorV2 = _.memoize(
  (type: string, sweepColor?: string, barrierColor?: string, unknownColor?: string) => {
    const [sweep, barrier, unknown] = pointsColor;
    const mapColor = {
      [bitmapTypeMapV2.sweep]: toCMYKColor(sweepColor) || sweep,
      [bitmapTypeMapV2.barrier]: toCMYKColor(barrierColor) || barrier,
      [bitmapTypeMapV2.unknown]: toCMYKColor(unknownColor) || unknown,
      [bitmapTypeMapV2.carpet]: toCMYKColor(sweepColor) || sweep,
    };
    return mapColor[type] || sweep;
  },
  function key(type: string) {
    return type;
  }
);

export default {
  materialObjMap,
  dealPointsColor,
  ForbidTypeEnum,
  nativeMapStatus,
  areaTypeMap,
  unknownAreaId,
  fileTypeMap,
  bitmapTypeMap,
  createHouseColorMap,
  colorOriginMap,
  colorGrayMap,
  MAX_ID_NUM,
};
