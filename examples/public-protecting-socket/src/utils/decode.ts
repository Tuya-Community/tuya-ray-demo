import _ from 'lodash-es';
import { utils } from '@ray-js/panel-sdk';
import Base64 from 'base64-js';

/**
 * 将`随机定时raw型字符串`转换为`随机定时数组`
 * @param {String} value - 随机定时raw型字符串
 */
export const decodeRandomTimer = (value: string) => {
  const len = 4;
  const isNotLeng = value !== '' && value.length < 8;
  if (!value || value.length % len !== 0 || isNotLeng) return [];
  const datas = Base64.toByteArray(value);
  return _.chunk(datas, 6).map(data => {
    const [noAndPower, loops, startHour, startMinute, endHour, endMinute] = data;
    const noAndPowerBinStr = utils.toFixed(noAndPower.toString(2), 7);
    const noBinStr = noAndPowerBinStr.slice(0, -1); // bit 7 - bit 1
    const powerBinStr = noAndPowerBinStr.slice(-1); // bit 0
    const no = parseInt(noBinStr, 2);
    const power = !!parseInt(powerBinStr, 2);
    return {
      no,
      power,
      loops,
      startTime: utils.highLowToInt(startHour, startMinute),
      endTime: utils.highLowToInt(endHour, endMinute),
    };
  });
};

/**
 * 将`随机定时raw型字符串`转换为`随机定时数组`
 * @param {String} value - 随机定时raw型字符串
 */
export const decodeRawRandomTimer = vals => {
  if (!vals || vals.len < 4) return [];
  const value = vals.slice(4);
  const len = 12;
  const isNotLeng = value.length % len !== 0 || (value !== '' && value.length < 12);
  if (!value || isNotLeng) return [];
  const valueStr = value.match(/[0-9|a-f|A-F]{12}/g);
  const strArr = [];
  valueStr.forEach(val => {
    if (val.length === 12) {
      const noAndPower = parseInt(val.slice(0, 2), 16);
      const noAndPowerBinStr = utils.toFixed(noAndPower.toString(2), 7);
      const noBinStr = noAndPowerBinStr.slice(0, -1); // bit 7 - bit 1
      const powerBinStr = noAndPowerBinStr.slice(-1); // bit 0
      const no = parseInt(noBinStr, 2);
      const power = !!parseInt(powerBinStr, 2);
      const loops = parseInt(val.slice(2, 4), 16);
      const startTime = parseInt(val.slice(4, 8), 16);
      const endTime = parseInt(val.slice(8, 12), 16);
      const cycleData = {
        no,
        power,
        loops,
        startTime,
        endTime,
      };
      strArr.push(cycleData);
    }
  });
  return strArr;
};

/**
 * 将`循环定时raw型字符串`转换为`循环定时数组`
 * @param {String} value - 循环定时raw型字符串
 */
export const decodeCycleTimer = (value: string) => {
  const len = 4;
  const isNotLeng = value !== '' && value.length < 16;
  if (!value || value.length % len !== 0 || isNotLeng) return [];
  const datas = Base64.toByteArray(value);
  return _.chunk(datas, 10).map(data => {
    const [
      noAndPower,
      loops,
      startHour,
      startMinute,
      endHour,
      endMinute,
      startDurationHour,
      startDurationMinute,
      endDurationHour,
      endDurationMinute,
    ] = data;
    const noAndPowerBinStr = utils.toFixed(noAndPower.toString(2), 7);
    const noBinStr = noAndPowerBinStr.slice(0, -1); // bit 7 - bit 1
    const powerBinStr = noAndPowerBinStr.slice(-1); // bit 0
    const no = parseInt(noBinStr, 2);
    const power = !!parseInt(powerBinStr, 2);
    return {
      no,
      power,
      loops,
      startTime: utils.highLowToInt(startHour, startMinute),
      endTime: utils.highLowToInt(endHour, endMinute),
      startDuration: utils.highLowToInt(startDurationHour, startDurationMinute),
      endDuration: utils.highLowToInt(endDurationHour, endDurationMinute),
    };
  });
};

/**
 * 将`循环定时raw型字符串`转换为`循环定时数组`
 * @param {String} value - 循环定时raw型字符串
 */
export const decodeRawCycleTimer = vals => {
  if (!vals || vals.len < 4) return [];
  const value = vals.slice(4);
  const len = 20;
  const isNotLeng = value.length % len !== 0 || (value !== '' && value.length < 20);
  if (!value || isNotLeng) return [];
  const valueStr = value.match(/[0-9|a-f|A-F]{20}/g);
  const strArr = [];
  valueStr.forEach(val => {
    if (val.length === 20) {
      const noAndPower = parseInt(val.slice(0, 2), 16);
      const noAndPowerBinStr = utils.toFixed(noAndPower.toString(2), 7);
      const noBinStr = noAndPowerBinStr.slice(0, -1); // bit 7 - bit 1
      const powerBinStr = noAndPowerBinStr.slice(-1); // bit 0
      const no = parseInt(noBinStr, 2);
      const power = !!parseInt(powerBinStr, 2);
      const loops = parseInt(val.slice(2, 4), 16);
      const startTime = parseInt(val.slice(4, 8), 16);
      const endTime = parseInt(val.slice(8, 12), 16);
      const startDuration = parseInt(val.slice(12, 16), 16);
      const endDuration = parseInt(val.slice(16, 20), 16);
      const cycleData = {
        no,
        power,
        loops,
        startTime,
        endTime,
        startDuration,
        endDuration,
      };
      strArr.push(cycleData);
    }
  });
  return strArr;
};
