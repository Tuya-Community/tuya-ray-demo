/* eslint-disable consistent-return */
import _ from 'lodash';
import Store from '@/redux';
import {
  toFixed16,
  stringToByte,
  bytes2Str,
  lastChar,
  addHex,
  stringToAtHex,
} from '../utils/stringsUtil';
import { utils } from '@ray-js/panel-sdk';

const protocolVersion = '00';
const protocolVersionNew = '01';
/**
 * 转换字节到整型roomId
 * 需要根据协议版本进行转换
 * @param pixel
 */
export const parseRoomId = (pixel: string, version = 1) => {
  let length = 6;
  switch (version) {
    case 1:
      length = 6;
      break;
    case 2:
      length = 5;
      break;
    default:
      length = 6;
  }
  const pointHex = _.padStart(parseInt(pixel, 16).toString(2), 8, '0');
  const roomId = parseInt(pointHex.slice(0, length), 2);
  return roomId;
};
/**
 * 对数据进行位数的放大
 * 这里主要是放到到10的sacle次方倍
 * @param data
 * @param scale
 * @returns
 */
export const dealScale = (data: any, scale: number) => {
  let floatData = data;
  if (typeof data === 'string') {
    floatData = parseFloat(data);
  }
  return Number(floatData.toFixed(scale)) * Math.pow(10, scale);
};
/**
 * 某些协议是一个定长字节的表示，当数据不足19字节的时候，需要进行的补0操作
 * @param str
 * @param len
 * @returns
 */
export const hexPlusLen = (str: string, len: number) => {
  const source = '0000000000000000000000000000000000000000';
  const strLen = str.length;
  const resLen = len * 2 - strLen;
  const res = str + source.slice(0, resLen);
  return res;
};

export const encodeCmd = (
  cmd: string,
  origin: { x: number; y: number },
  { pointsData, roomIdData }: any,
  mapScale = 1
): string => {
  const protocolLengthVersion = '1';

  const header = 'aa';
  let cmdData = cmd;
  let checkSum: number | string = parseInt(cmd, 16);
  let length: number | string = 1;
  if (roomIdData) {
    for (let index = 0; index < roomIdData.length; index++) {
      const roomId = parseInt(roomIdData[index], 10);
      const roomHex = utils.numToHexString(roomId, 2);
      cmdData += roomHex;
      checkSum += roomId;
    }
    length += roomIdData.length;
  }
  if (pointsData) {
    const ox = origin.x * Math.pow(10, mapScale);
    const oy = origin.y * Math.pow(10, mapScale);
    for (let index = 0; index < pointsData.length; index++) {
      const { x, y } = pointsData[index];
      const realX = (65535 + dealScale(x, mapScale) - ox) % 65535;
      const realY = (65535 + oy - dealScale(y, mapScale)) % 65535;
      const xHex = utils.numToHexString(realX, 4);
      const yHex = utils.numToHexString(realY, 4);
      cmdData += xHex + yHex;
      checkSum += addHex(xHex) + addHex(yHex);
    }
    length += pointsData.length * 4;
  }

  length =
    protocolLengthVersion === '1' ? utils.numToHexString(length, 8) : utils.numToHexString(length);
  checkSum = utils.numToHexString(checkSum % 256);
  return `${header}${
    protocolLengthVersion === '1' ? protocolVersionNew : protocolVersion
  }${length}${cmdData}${checkSum}`;
};
/**
 * 设置房间名称
 * @param params
 * header + version + length + cmd + data + check
 */
export const encodeRoomName = (params: any, version: number) => {
  const protocolLengthVersion = '1';

  const roomIdHexs = Object.keys(params);
  const header = 'aa';
  const cmd = '24';
  const count = roomIdHexs.length;
  const checkArr = [cmd, toFixed16(count)];
  let len = 2;
  const roomData = [];
  for (let i = 0; i < count; i++) {
    const roomIdHex = roomIdHexs[i];
    const roomId = parseRoomId(roomIdHex, version);
    checkArr.push(toFixed16(roomId));
    roomData.push(toFixed16(roomId));
    const nameByteArr = stringToByte(params[roomIdHex].name);
    const utfNameLen = nameByteArr.length;
    const utfName = bytes2Str(nameByteArr);
    if (utfNameLen > 19) return; // 最长不能超过19个字节
    checkArr.push(toFixed16(utfNameLen));
    checkArr.push(...nameByteArr.map(n => toFixed16(n)));
    roomData.push(toFixed16(utfNameLen));
    roomData.push(hexPlusLen(utfName, 19));
    len += 21;
  }
  const curCheck = checkArr.reduce((pre, cur) => pre + parseInt(cur, 16), 0);
  const check = lastChar(curCheck);
  const data = [
    header,
    protocolLengthVersion === '1' ? protocolVersionNew : protocolVersion,
    protocolLengthVersion === '1' ? utils.numToHexString(len, 8) : toFixed16(len),
    cmd,
    toFixed16(count),
    ...roomData,
    check,
  ];
  const res = data.reduce((pre, cur) => pre + cur, '');
  return res;
};

/**
 * 房间命名是否成功
 * 收到上报就可认为修改成功
 * example: aa0b9001010106e58da7e5aea479
 * @param code
 */
export const renameSuccess = (str: string): boolean => {
  const protocolLengthVersion = '1';

  const commonArr = str.match(/\w{2}/g);
  if (!commonArr || commonArr[0].toLowerCase() !== 'aa') {
    return false;
  }
  const cmd = protocolLengthVersion === '1' ? commonArr[6] : commonArr[3];
  if (cmd === '25') {
    return true;
  }
  return false;
};

/**
 * 编码分割房间的协议指令集
 * @param roomId
 * @param pointsData
 * @param origin
 * @returns
 */
export const encodeRoomSplit = (roomId: string | number, pointsData: any, origin: any): string => {
  const hex = encodeCmd('1c', origin, { pointsData, roomIdData: [roomId] });
  console.log('encodeRoomSplit', roomId, origin, pointsData, hex);
  return hex;
};

/**
 * 编码合并房间的协议指令集
 * @param roomIdData
 * @returns
 */
export const encodeRoomMerge = (roomIdData: Array<string>): string => {
  return encodeCmd('1e', {}, { roomIdData });
};

/**
 * 解析上报
 * 如果是分割or合并房间
 * 需要提示是否成功
 * exemple: aa02160117
 * @param str
 */
export const roomToastInfo = (str: string) => {
  const protocolLengthVersion = '1';

  const commonArr = str.match(/\w{2}/g);
  if (!commonArr || commonArr[0].toLowerCase() !== 'aa') {
    return '';
  }

  const index = protocolLengthVersion === '1' ? 6 : 3;
  const cmd = commonArr[index] ? commonArr[index].toLowerCase() : '';
  const ret = commonArr[index + 1];
  const res = cmd + ret;
  let toastStr = '';
  switch (res) {
    case '1d01':
      toastStr = 'splitSuccess';
      break;
    case '1d00':
      toastStr = 'splitFailed';
      break;
    case '1f00':
      toastStr = 'mergeFailed';
      break;
    case '1f01':
      toastStr = 'mergeSuccess';
      break;
    case '1f02':
      toastStr = 'cannotBeMerged';
      break;
    case '2100':
      toastStr = 'resetFailed';
      break;
    case '2101':
      toastStr = 'resetSuccess';
      break;
    default:
      toastStr = '';
  }

  return toastStr;
};
/**
 * 编码多地图管理-删除地图的协议指令集
 * @param id
 */
export const encodeDeleteMap = (id: number) => {
  const header = 'ab';
  const length = '05';
  const cmd = '2c';
  const idHex = toFixed16(id, 8);
  const commonArr = idHex.match(/\w{2}/g);
  if (!commonArr) return '';
  const checkSum = parseInt(cmd, 16) + commonArr.reduce((sum, id) => sum + parseInt(id, 16), 0);
  const check = lastChar(checkSum);
  const data = [
    parseInt(header, 16),
    parseInt(protocolVersion, 16),
    0,
    0,
    0,
    parseInt(length, 16),
    parseInt(cmd, 16),
    ...commonArr.map(d => parseInt(d, 16)),
    parseInt(check, 16),
  ];
  return data.reduce((pre, cur) => pre + toFixed16(cur, 2), '');
};

/**
 * 编码多地图管理-使用当前地图的协议指令集
 * @param mapId
 * @param url
 */
export const encodeUseMap = (mapId: number, url: string) => {
  const urlByteArr = stringToByte(url);
  const urlByteLen = urlByteArr.length;
  const hex = stringToAtHex(url);
  const header = 'ab';
  const length = toFixed16(urlByteLen + 5 + 4, 8);
  const urlLen = toFixed16(urlByteLen, 8);
  const cmd = '2e';
  const idHex = toFixed16(mapId, 8);
  const commonArr = idHex.match(/\w{2}/g);
  if (!commonArr) return '';
  const common = commonArr.map(i => parseInt(i, 16));
  const byteLenArr = urlLen.match(/\w{2}/g);
  if (!byteLenArr) return '';
  const byteLens = byteLenArr.map(i => parseInt(i, 16));
  const curCheck =
    parseInt(cmd, 16) +
    common.reduce((pre, cur) => pre + cur, 0) +
    byteLens.reduce((pre, cur) => pre + cur, 0) +
    urlByteArr.reduce((pre, cur) => pre + cur, 0);
  const check = lastChar(curCheck);
  return `${header}${protocolVersion}${length}${cmd}${idHex}${urlLen}${hex}${check}`;
};

/**
 * 编码多地图管理-保存地图的协议指令集
 * header+version+length+cmd+data+check
 */
export const encodeSaveMap = () => {
  return 'ab00000000022a012b';
};
/**
 * 计算两点之间的距离
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 * @returns
 */
export const lineSpace = (x1: number, y1: number, x2: number, y2: number) => {
  let lineLength = 0;
  lineLength = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
  return lineLength;
};

/**
 * 点到直线的最短距离的判断 点（x0,y0） 到由两点组成的线段（x1,y1） ,( x2,y2 )
 */
export const pointToLine = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x0: number,
  y0: number
) => {
  let space = 0;
  let a: number;
  let b: number;
  let c: number;
  a = lineSpace(x1, y1, x2, y2); // 线段的长度
  b = lineSpace(x1, y1, x0, y0); // (x1,y1)到点的距离
  c = lineSpace(x2, y2, x0, y0); // (x2,y2)到点的距离
  if (c <= 0.000001 || b <= 0.000001) {
    space = 0;
    return space;
  }
  if (a <= 0.000001) {
    space = b;
    return space;
  }
  if (c * c >= a * a + b * b) {
    space = b;
    return space;
  }
  if (b * b >= a * a + c * c) {
    space = c;
    return space;
  }
  const p = (a + b + c) / 2; // 半周长
  const s = Math.sqrt(p * (p - a) * (p - b) * (p - c)); // 海伦公式求面积
  space = (2 * s) / a; // 返回点到线的距离（利用三角形面积公式求高）
  return space;
};

/**
 * 判断两个区域是否相邻
 * @param list1
 * @param list2
 * @return
 */
export const isAdjacent = (
  list1: Array<{ x: number; y: number }>,
  list2: Array<{ x: number; y: number }>
) => {
  const maxDistance = 5;
  let count = 0;
  const len1 = list1.length;
  const len2 = list2.length;
  if (len1 >= 3 && len2 >= 3) {
    for (let i = 0; i < len1; i++) {
      for (let j = 0; j < len2; j++) {
        const xx = Math.round(list1[i].x - list2[j].x);
        const yy = Math.round(list1[i].y - list2[j].y);
        if (xx <= maxDistance && yy <= maxDistance) {
          count++;
        }
      }
    }
  }
  return count >= 2;
};
/**
 * 判断两个区域是否接壤
 * @param points1
 * @param points2
 * @return
 */
export function isBorder(
  points1: Array<{ x: number; y: number }>,
  points2: Array<{ x: number; y: number }>
) {
  if (!Array.isArray(points1) || !Array.isArray(points2) || !points1.length || !points2.length) {
    return true;
  }
  const mapScale = 1;
  const maxDistance = 5;
  let count = 0;
  let dis: number;
  const len1 = points1.length;
  const len2 = points2.length;

  if (len1 > 0 && len2 > 0) {
    for (let j = 1; j < len1; j++) {
      for (let i = 0; i < len2; i++) {
        if (j === len1 - 1) {
          dis = pointToLine(
            points1[0].x * mapScale,
            points1[0].y * mapScale,
            points1[j].x * mapScale,
            points1[j].y * mapScale,
            points2[i].x * mapScale,
            points2[i].y * mapScale
          );
        } else {
          dis = pointToLine(
            points1[j - 1].x * mapScale,
            points1[j - 1].y * mapScale,
            points1[j].x * mapScale,
            points1[j].y * mapScale,
            points2[i].x * mapScale,
            points2[i].y * mapScale
          );
        }
        if (dis <= maxDistance) {
          count++;
          break;
        }
      }
    }
  }
  return count > 0;
}
