import { utils } from '@ray-js/panel-sdk';
import _ from 'lodash';

export function toFixed16(v: string | number, length = 2): string {
  let d = parseInt(v, 10).toString(16);
  if (d.length < length) {
    d = '0'.repeat(length - d.length) + d;
  } else {
    d = d.slice(0, length);
  }
  return d;
}

/**
 * 按照每个字节将16进制转换为10进制数字，并进行累加和操作
 * @param str
 * @returns
 */
export const addHex = (str: string) => {
  const array = utils.hexStringToNumber(str);
  return array[0] + array[1];
};

/**
 * 截取最后几位数的字符
 * @param {} v
 * @param {*} length
 */
export const lastChar = (v: string | number, length = 2) => {
  let d = parseInt(v, 10).toString(16);
  if (d.length < length) {
    d = '0'.repeat(length - d.length) + d;
  } else {
    d = d.slice(d.length - length, d.length);
  }
  return d;
};
/**
 * hex2argb
 * @param {String} hex '#FFFFFF'
 * @param {Number} alpha 0-1
 */
export const hex2ahex = (hex: string, alpha = 1) => {
  const alpha16 = toFixed16(String(Math.round(alpha * 255)));
  const color = hex.replace(/^#/, '');
  const alphaColor = `#${alpha16}${color}`;
  return alphaColor.toUpperCase();
};

export const stringToAtHex = (str: string) => {
  let val = '';
  for (let i = 0; i < str.length; i++) {
    if (val === '') {
      val = str.charCodeAt(i).toString(16);
    } else {
      val += `${str.charCodeAt(i).toString(16)}`;
    }
  }
  return val;
};

export const atHexToString = (str: string) => {
  const trimedStr = str.trim();
  const rawStr = trimedStr.substr(0, 2).toLowerCase() === '0x' ? trimedStr.substr(2) : trimedStr;
  const len = rawStr.length;
  if (len % 2 !== 0) {
    return '';
  }
  let curCharCode;
  const resultStr = [];
  for (let i = 0; i < len; i += 2) {
    curCharCode = parseInt(rawStr.substr(i, 2), 16); // ASCII Code Value
    resultStr.push(String.fromCharCode(curCharCode));
  }
  return resultStr.join('');
};

/**
 * 36进制极致压缩文字，返回utf-16的36进制
 * @param str
 */
export const stringToBase36Arr = (str: string) => {
  const val = [];
  if (!str) return val;
  for (let i = 0; i < str.length; i++) {
    val.push(`${str.charCodeAt(i).toString(36)}`);
  }
  return val;
};

/**
 * 解压stringToBase36Arr方法
 * @param strArr
 */
export const base36ArrToString = (strArr: string[]) => {
  const resultStr: string[] = [];
  strArr.forEach(val => {
    resultStr.push(String.fromCharCode(parseInt(val, 36)));
  });
  return resultStr.join('');
};
export function ASCIIToJson(str: string) {
  return utils.parseJSON(atHexToString(str));
}

export function toJsonSafe(str: string) {
  return utils.parseJSON(str.replace(/(\{.*\}).*/, '$1'));
}

/**
 * 十进制转十六进制小写
 * @param dec 十进制数字
 * @param padNum 向前补几位
 * @param lower 是否小写
 */
export function DECToHex(dec: number, padNum = 2, lower = true) {
  if (dec === undefined || dec === null) return '';
  if (lower) {
    return _.toLower(_.padStart(Number(dec).toString(16), padNum, '0'));
  }
  if (!lower) {
    return _.toUpper(_.padStart(Number(dec).toString(16), padNum, '0'));
  }
}

/**
 * 中文转十六进制
 * @param str
 */
export const stringToByte = (str: string) => {
  const bytes = [];
  let c;
  const len = str.length;
  for (let i = 0; i < len; i++) {
    c = str.charCodeAt(i);
    if (c >= 0x010000 && c <= 0x10ffff) {
      bytes.push(((c >> 18) & 0x07) | 0xf0);
      bytes.push(((c >> 12) & 0x3f) | 0x80);
      bytes.push(((c >> 6) & 0x3f) | 0x80);
      bytes.push((c & 0x3f) | 0x80);
    } else if (c >= 0x000800 && c <= 0x00ffff) {
      bytes.push(((c >> 12) & 0x0f) | 0xe0);
      bytes.push(((c >> 6) & 0x3f) | 0x80);
      bytes.push((c & 0x3f) | 0x80);
    } else if (c >= 0x000080 && c <= 0x0007ff) {
      bytes.push(((c >> 6) & 0x1f) | 0xc0);
      bytes.push((c & 0x3f) | 0x80);
    } else {
      bytes.push(c & 0xff);
    }
  }
  return bytes;
};

/**
 * bytes数组转16进制字符串
 * @param arr
 */
export function bytes2Str(arr: Array<number | string>): string {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i].toString(16);
    if (tmp.length === 1) {
      tmp = `0${tmp}`;
    }
    str += tmp;
  }
  return str;
}

export default {
  lastChar,
  bytes2Str,
  stringToByte,
  stringToAtHex,
  atHexToString,
  ASCIIToJson,
  toJsonSafe,
  hex2ahex,
};
