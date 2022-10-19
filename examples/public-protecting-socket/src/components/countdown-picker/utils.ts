import { utils } from '@ray-js/panel-sdk';

/**
 * 分钟转小时
 */
export const minute2Hour = (minute: number) => Math.floor(minute / 60);

/**
 * 分钟转 PickerView 组件适用的 value 数组格式
 */
export const minute2PickerValues = (minute: number) => {
  return utils
    .parseSecond(minute * 60)
    .slice(0, 2)
    .map(v => +v);
};

/**
 * 分钟转展示用的小时分钟格式文本
 * @example 23:59
 */
export const minute2HMText = (minute: number) => {
  return utils
    .parseSecond(minute * 60)
    .slice(0, 2)
    .join(':');
};
