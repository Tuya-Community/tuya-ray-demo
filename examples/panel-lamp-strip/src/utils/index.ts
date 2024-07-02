import { decode } from 'base64-browser';
import Strings from '@/i18n';
import { utils } from '@ray-js/panel-sdk';

const { calcPosition } = utils;

export const formatColorText = (hue: number): string => {
  const degree = hue || 0;
  let text = Strings.getLang('color_red');
  if (degree >= 15 && degree < 45) {
    text = Strings.getLang('color_orange');
  } else if (degree >= 45 && degree < 75) {
    text = Strings.getLang('color_yellow');
  } else if (degree >= 75 && degree < 105) {
    text = Strings.getLang('color_yellow_green');
  } else if (degree >= 105 && degree < 135) {
    text = Strings.getLang('color_green');
  } else if (degree >= 135 && degree < 165) {
    text = Strings.getLang('color_cyan_green');
  } else if (degree >= 165 && degree < 195) {
    text = Strings.getLang('color_cyan');
  } else if (degree >= 195 && degree < 225) {
    text = Strings.getLang('color_indigo');
  } else if (degree >= 225 && degree < 255) {
    text = Strings.getLang('color_blue');
  } else if (degree >= 255 && degree < 285) {
    text = Strings.getLang('color_purple');
  } else if (degree >= 285 && degree < 315) {
    text = Strings.getLang('color_magenta');
  } else if (degree >= 315 && degree < 345) {
    text = Strings.getLang('color_purple_red');
  } else {
    text = Strings.getLang('color_red');
  }
  return text;
};

interface PercentOption {
  min?: number;
  max?: number;
  minPercent?: number;
}

/**
 * 标准百分比计算公式
 * @param value 值
 * @param option 百分比计算配置
 */
export const formatPercent = (
  value = 0,
  { min = 0, max = 1000, minPercent = 0 }: PercentOption = {}
): number => {
  return Math.min(100, Math.round(((100 - minPercent) * (value - min)) / (max - min) + minPercent));
};

// 混淆字符串（匿名化）
export const getAnonymityNameStr = () => {
  return decode('dHV5YQ==');
};

export const isIphoneX = info => {
  // 判断当前机型是否有顶部栏
  if (info.platform === 'ios' && info?.screenHeight >= 812) {
    return true;
  }
  return false;
};

const isShowLog = process.env.NODE_ENV === 'development';
export const log = (...arg) => {
  // eslint-disable-next-line no-console
  isShowLog && console.log(...arg);
};

export function convertRange(value, oldMin = 1, oldMax = 1000, newMin = 240, newMax = 1000) {
  return calcPosition(value, oldMin, oldMax, newMin, newMax);
}
