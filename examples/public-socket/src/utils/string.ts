import _ from 'lodash-es';
import { utils } from '@ray-js/panel-sdk';

/**
 * @description: 将十进制值转换成二进制循环字符串
 * @param {number} loop
 * @return {*}
 */
export const toLoopBinString = (loop: number): string => {
  const str = _.times(7, n => {
    const ret = utils.getBitValue(loop, n);
    return `${ret}`;
  }).join('');
  return str;
};
