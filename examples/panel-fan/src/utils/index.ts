import { kit, utils } from '@ray-js/panel-sdk';
import Strings from '@/i18n';
import store from '@/redux';
import { DpStateKey } from '@/redux/modules/dpStateSlice';
import { controlDataCode } from '@/config/dpCodes';

const { getDevInfo } = kit;

export const getFaultStrings = (
  faultCode: string,
  faultValue: number,
  onlyPrior = true
): string => {
  const { devInfo } = store.getState();
  if (!faultValue) return '';
  const { label } = devInfo.schema[faultCode];
  const labels = [];
  for (let i = 0; i < label!.length; i++) {
    const value = label![i];
    const isExist = utils.getBitValue(faultValue, i);
    if (isExist) {
      labels.push(Strings.getDpLang(faultCode, value));
      if (onlyPrior) break;
    }
  }
  return onlyPrior ? labels[0] : labels.join(', ');
};

export const formatDps = ({ dps }: ty.device.DpsChanged) => {
  const dpState = {};
  Object.entries(dps).forEach(([dpId, dpValue]) => {
    const dpCode = getDpCodeById(dpId);
    if (dpCode !== controlDataCode) {
      dpState[dpCode] = dpValue;
    }
  });
  return dpState;
};

export const formatDevSchema = devInfo => {
  const { dps, schema } = devInfo;
  const resultSchema = {};
  const resultState = {};
  const dpIdCodeMap = {};
  const dpCodeIdMap = {};

  for (let i = 0; i < schema.length; i++) {
    const { code, id, property, type } = schema[i];
    const define = {
      dptype: type,
      id: `${id}`,
      ...property,
    };

    dpIdCodeMap[id] = code;
    dpCodeIdMap[code] = id;
    resultState[code] = dps[id];
    resultSchema[code] = define;
    delete define.property;
  }
  return { ...devInfo, dpIdCodeMap, dpCodeIdMap, state: resultState, schema: resultSchema };
};

/**
 * dp相关方法
 */

/**
 * 获取devId
 */
export const getDevId = () => getDevInfo().devId;

/**
 * 获取productId
 */
export const getProductId = () => getDevInfo().productId;

/**
 * 获取dpschema
 */
export const getDpSchema = (dpCode: DpStateKey) =>
  (store.getState().devInfo.schema[dpCode] ?? {}) as DpSchemaOrigin;

/**
 * dp是否存在
 */
export const checkDpExist = (dpCode: DpStateKey) => {
  // if (['fan_vertical', 'fan_horizontal'].includes(dpCode)) return false;
  return dpCode in store.getState().devInfo.schema;
};

/**
 * 根据dpId获取dpCode
 */
export const getDpCodeById = (dpId: number | string) => store.getState().devInfo.dpIdCodeMap[dpId];

/**
 * 根据dpCode获取dpId
 */
export const getDpIdByCode = (dpCode: DpStateKey) => store.getState().devInfo.dpCodeIdMap[dpCode];
/**
 * 获取自定义dpCodes
 * 依赖于state.devInfo.dpCodeIdMap
 */
export const getCustomDpCodes = () => {
  const { dpCodeIdMap } = store.getState().devInfo;
  return Object.keys(dpCodeIdMap).filter(dpCode => dpCodeIdMap[dpCode] >= 100);
};

/**
 * 数值型dp值转真实值
 * @param code dp code
 * @param value 值
 */
export const convertDpToValue = (code: DpStateKey, value: number) => {
  const { scale = 0, min = 0, max = 100 } = getDpSchema(code);
  const temp = Math.min(max, Math.max(min, value));
  const divide = 10 ** scale;
  return temp / divide;
};

/**
 * 数值型真实值转dp值
 * @param code dp code
 * @param value 值
 */
export const convertValueToDp = (code: DpStateKey, value: number) => {
  const { scale = 0 } = getDpSchema(code);
  const divide = 10 ** scale;
  return value * divide;
};

/**
 * 温度相关处理方法
 */

/**
 * 摄氏度转华氏度
 */
export const celsiusToFahrenheit = (value: number, scale = 0) => {
  const fahrenheit = value * 1.8 + 32;
  return fahrenheit.toFixed(scale);
};

/**
 * 华氏度转摄氏度
 */
export const fahrenheitToCelsius = (value: number, scale = 0) => {
  const celsius = (value - 32) / 1.8;
  return celsius.toFixed(scale);
};

// 十六进制转rgba
export const hexToRgba = (sourceColor: string, opacity: number) => {
  let sColor = sourceColor.toLowerCase();
  // 十六进制颜色值的正则表达式
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 如果是16进制颜色
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = '#';
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    const sColorChange = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`, 16));
    }
    return `rgba(${sColorChange.join(',')},${opacity})`;
  }
  return sColor;
};

/**
 * 计算亮度百分比
 */
export const getPercentageByMinAndMax = (
  value: number,
  { min = 10, max = 1000, minPercent = 1 } = {}
) => {
  return Math.round(((100 - minPercent) * (value - min)) / (max - min) + minPercent);
};
