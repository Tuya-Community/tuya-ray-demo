/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { utils } from '@ray-js/panel-sdk';
import _isUndefined from 'lodash/isUndefined';
import _floor from 'lodash/floor';
import _round from 'lodash/round';
import _padStart from 'lodash/padStart';
import Color from '../color';
import circleIntersectRect from './circleIntersectRect';
import { decodeColor } from '../robotUtil';

const max = 16 ** 4;
const min = max / 2;

function scaleNumber(scale: number, value: number) {
  return Number((value / 10 ** scale).toFixed(scale));
}

// 兼容负数 byte 最大值平分给正负两端
function dealPL(point: number) {
  return point > min ? point - max : point;
}

// 放大x，y轴几倍
function transformXY(mapScale: number, x: number, y: number) {
  return scaleNumber(mapScale, dealPL(utils.highLowToInt(x, y)));
}

/** 通过比例尺，计算app x，y轴 */
function transformXYByResolution(x: number, y: number, resolution: number) {
  // 乐动在用
  // 0.001—原数据是毫米，标准化到米；0.05—地图的分辨率；（-0.93）—"x_min"；（-9.63）—"y_min"
  const nx = _round((x * 0.001) / resolution, 2);
  const ny = -_round((y * 0.001) / resolution, 2);

  return { x: nx, y: ny };
}

function transformXYToRobotByResolution(params: {
  x: number;
  y: number;
  resolution: number;
  height: number;
  minX: number;
  minY: number;
}) {
  const { x, y, resolution, minX, minY, height } = params;
  const nx = _round((x * resolution + minX) / 0.001);
  const ny = _round(((height - y) * resolution + minY) / 0.001);

  return { x: nx, y: ny };
}

// 转换充电桩，充电桩小于0时视为无效充电桩
function transformPileXY(pileX: number, pileY: number, originX: number, originY: number) {
  if (pileX <= 0 && pileY <= 0) return {};
  const finalX = pileX - originX;
  const finalY = pileY - originY;
  return {
    x: finalX,
    y: finalY,
  };
}

/**
 * 计算hex的10机制值
 * #FFFFFF40 => 184549375
 * @export
 * @param {string} [originColor] rgba(255, 0, 0, 1); rgb(0, 255, 0); #FF00FF; #FF00FFFF
 * @returns 对应的10机制结果
 */
export const convertColorToArgbDEC = function(color: string) {
  const [r, g, b, a = 255] = decodeColor(color);
  return (a << 24) | (r << 16) | (g << 8) | b;
};

// 任意颜色转16进制#argb
//
// 输入：可能的值：70A5EEFF（rgba）、常规格式的颜色 输出： #FF001122
export function convertColorToArgbHex(originColor?: string) {
  if (!originColor) return '';
  let tmp = originColor;
  let tmpAlpha = 255;

  if (!originColor.match(/^#/) && originColor.length === 8) {
    // 原来地图的颜色格式，需要兼容
    const [rgb, a] = originColor.replace(/(\w{6})(\w{2})/, '#$1_$2').split('_');
    tmp = rgb;
    tmpAlpha = parseInt(a, 16);
  }
  const [r, g, b, a] = Color.color.decode(tmp);
  if (!_isUndefined(a)) {
    tmpAlpha = _floor(Number(a) * 255);
  }

  const [hexr, hexg, hexb, hexa] = [r, g, b, tmpAlpha].map((value: number) =>
    _padStart(value.toString(16), 2, '0')
  );

  return `#${hexa}${hexr}${hexg}${hexb}`;
}

export function convertColorToRgbaHex(originColor?: string) {
  if (!originColor) return '';
  const tmp = originColor;
  let tmpAlpha = 255;

  const [r, g, b, a] = Color.color.decode(tmp);
  if (!_isUndefined(a)) {
    tmpAlpha = _floor(Number(a) * 255);
  }

  const [hexr, hexg, hexb, hexa] = [r, g, b, tmpAlpha].map((value: number) =>
    _padStart(value.toString(16), 2, '0')
  );

  return `#${hexr}${hexg}${hexb}${hexa}`;
}

export function getRCTAreaStructure(opts: {
  id?: string;
  bgColor?: string;
  borderColor?: string;
  text?: string;
  textColor?: string;
  textSize?: number;
  type?: number;
  viewType?: string;
  extend?: {
    forbidType: string;
  };
  canRename?: boolean;
  canRotate?: boolean;
  minAreaWidth?: number;
  vertexParams?: {
    vertexImages?: Array<string>; // eg: 'https://xxx.com/1.png'  or 'data:image/png;base64,iV...'
    showVertexImage?: boolean; // 是否需要显示顶点贴图
    vertexType?: string;
    vertexColor?: string; // eg: '#7f4685ff', 仅在showVertexImage 为false 时生效
    radius?: number; // 如果是圆，则是radius, 如果是square， 长宽为2 * radius
    vertexExtendTimes?: number;
  };
  unitParams?: {
    textColor?: string;
    textSize?: number;
  };
  points: Array<{ x: number; y: number }> | { x: number; y: number };
}) {
  const {
    id = '',
    bgColor = '#ffffff',
    borderColor = '#ffffff',
    text = '',
    textColor = '#ffffff',
    textSize = 10,
    type = 0,
    viewType = '',
    extend = {},
    points = [],
    canRename = false,
    minAreaWidth = 50 / 100 / 0.05,
    canRotate = true,
    vertexParams,
    unitParams,
  } = opts;
  const data = {
    id,
    box: {
      bgColor: convertColorToArgbHex(bgColor),
      borderColor: convertColorToArgbHex(borderColor),
      isDash: false,
      minAreaWidth,
    },
    content: {
      text,
      textColor: convertColorToArgbHex(textColor),
      textSize,
      renameEnable: canRename,
      rotateEnable: canRotate,
    },
    vertex: vertexParams,
    unit: unitParams,
    type,
    viewType,
    points,
    extend: JSON.stringify(extend) || '',
  };
  return data;
}

export function getRCTPointStructure(opts: {
  id: string;
  type: number;
  points: { x: number; y: number };
  pos?: {
    meter: number;
    factor: number;
    bgColor?: string;
    borderColor?: string;
    isDash?: boolean;
    lineWidth?: number;
    dashSize?: number;
    gapSize?: number;
  };
  unit?: {
    textColor: string;
    textSize: number;
  };
}) {
  const { id = '', type = 0, points, unit, pos } = opts;
  const data = {
    id,
    type,
    points: [points],
    pos,
    unit,
  };
  return data;
}

export function getRCTLineStructure(opts: {
  id?: string;
  bgColor?: string;
  type?: number;
  viewType?: string;
  lineWidth?: number;
  extend?: {
    forbidType: string;
    isWall?: boolean;
  };
  vertexParams?: {
    vertexImages?: Array<string>; // eg: 'https://xxx.com/1.png'  or 'data:image/png;base64,iV...'
    showVertexImage?: boolean; // 是否需要显示顶点贴图
    vertexType?: string;
    vertexColor?: string; // eg: '#7f4685ff', 仅在showVertexImage 为false 时生效
    radius?: number; // 如果是圆，则是radius, 如果是square， 长宽为2 * radius
    vertexExtendTimes?: number;
  };
  unitParams?: {
    textColor?: string;
    textSize?: number;
  };
  sideVertexParams?: {
    showSideVertex?: boolean;
    showSideVertexImage?: boolean;
    sideVertexImage?: string;
    sideVertexColor?: string;
    radius?: number;
  };
  // canRename?: boolean;
  points: { x: number; y: number } | Array<{ x: number; y: number }>;
}) {
  const {
    id = '',
    bgColor = '#ffffff',
    lineWidth = 1,
    type = 0,
    viewType = '',
    extend = {},
    points = [],
    vertexParams,
    unitParams,
    sideVertexParams,
  } = opts;
  const data = {
    id,
    line: {
      bgColor: convertColorToArgbHex(bgColor),
      lineWidth,
    },
    vertex: vertexParams,
    sideVertex: sideVertexParams,
    unit: unitParams,
    type,
    viewType,
    points,
    extend: JSON.stringify(extend) || '',
  };
  return data;
}

export default {
  scaleNumber,
  dealPL,
  transformXY,
  transformXYByResolution,
  transformXYToRobotByResolution,
  circleIntersectRect,
  transformPileXY,
  convertColorToArgbDEC,
  convertColorToArgbHex,
  convertColorToRgbaHex,
  getRCTAreaStructure,
  getRCTPointStructure,
  getRCTLineStructure,
};
