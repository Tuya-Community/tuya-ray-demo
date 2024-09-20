/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable camelcase */

export const JsonUtil = {
  parseJSON(str) {
    let rst;
    if (str && {}.toString.call(str) === '[object String]') {
      try {
        rst = JSON.parse(str);
      } catch (e) {
        try {
          // eslint-disable-next-line
          rst = eval(`(${str})`);
        } catch (e2) {
          rst = str;
        }
      }
    } else {
      rst = typeof str === 'undefined' ? {} : str;
    }

    return rst;
  },
};

import { dpCodes } from '@/config';
import { splitCommonData } from '@/hybrid-mini-robot-map/protocol/area';
import { bitmapTypeMap, bitmapTypeMapV2 } from '@/hybrid-mini-robot-map/protocol/constant';
import { dealScale, hexPlusLen, parseRoomId } from '@/hybrid-mini-robot-map/protocol/robotCmd';
import { DECNumberToHex } from '@/hybrid-mini-robot-map/protocol/utils/robotUtil';
import {
  addHex,
  bytes2Str,
  lastChar,
  stringToByte,
  toFixed16,
} from '@/hybrid-mini-robot-map/protocol/utils/stringsUtil';
import store, { actions } from '@/redux';
import { utils } from '@ray-js/panel-sdk';
import _ from 'lodash';
import mitt from 'mitt';
import { DevInfo, DpSchema, ProductInfo } from 'typings/device-panel';
import mode from '../res/mode.png';
import { CISTERN_MAP, SUCTION_MAP } from './constant';
import { getDevInfo } from '@ray-js/ray';

const { nativeMapStatusEnum } = dpCodes;

export const emitter = mitt();

/**
 * 计算清洁模式的Hex值
 * @param cleanWorkMode
 * @returns
 */
const getCleanWorkModeHex = (cleanWorkMode: string) => {
  if (cleanWorkMode === 'only_mop') return '02';
  if (cleanWorkMode === 'only_sweep') return '01';
  return '00';
};

/**
 * 计算吸力设置的Hex值
 * @param suction
 * @returns
 */
const getSuctionHex = (suction: string) => {
  if (suction === 'gentle') return '01';
  if (suction === 'normal') return '02';
  if (suction === 'strong') return '03';
  if (suction === 'max') return '04';
  return '00';
};

/**
 * 计算水量设置的Hex值
 * @param cistern
 * @returns
 */
const getCisternHex = (cistern: string) => {
  if (cistern === 'low') return '01';
  if (cistern === 'middle') return '02';
  if (cistern === 'high') return '03';
  return '00';
};

// 时间格式化
export const formatTime = (timestamp: string | number | undefined): string => {
  if (timestamp === undefined) {
    return '';
  }
  const date = new Date(Number(timestamp));
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const second = date.getSeconds();
  return `${year}-${month}-${day} ${hour}:${min}:${second}`;
};

export const scaleNumber: (scale: number, value: number) => number = (scale, value) =>
  Number((value / Math.pow(10, scale)).toFixed(scale));

// 将 struct 类型数据转换成组件需要的
export const transformData = (
  type: string,
  dataSource: { [key: string]: any },
  value: { [key: string]: any }
): {
  key: number;
  dataSource: any;
  image: any;
  title_name: any;
  unit: any;
  param_value: any;
  min: number;
  max: number;
  step: number;
  maxlen: any;
}[] => {
  let res = [];
  if (type !== 'struct') return;
  const dataArr = Object.values(dataSource);
  const dataKey = Object.keys(dataSource);
  if (!dataSource || dataSource.length) return;
  res = dataArr.map((item, idx) => {
    const {
      defaultValue,
      name,
      typeSpec: { type: dpType, range, unit, min, max, scale, step, maxlen, typeDefaultValue },
    } = item;
    let insertValue = defaultValue ?? typeDefaultValue;
    if (value) {
      insertValue = value[dataKey[idx]];
    }
    return {
      key: dataKey[idx],
      type: dpType,
      dataSource: range,
      image: mode,
      title_name: dataKey[idx],
      unit,
      param_value: dpType === 'value' ? scaleNumber(scale, insertValue) : insertValue,
      min: scaleNumber(scale, min),
      max: scaleNumber(scale, max),
      step: scaleNumber(scale, step),
      maxlen,
    };
  });
  // eslint-disable-next-line consistent-return
  return res;
};

// 获取小数点的位置
export const getFloatLength = (num: number | string): number => {
  return num.toString().split('.')[1] ? num.toString().split('.')[1].length : 0;
};

/**
 * 处理协议数据并获取下发到设备的指令数据
 * @param params
 * @returns
 */
export const getCommonData = (params: {
  mapStatus: number;
  data: Array<any>;
  origin: { x: number; y: number };
  mapScale: number;
  cleanWorkMode: string;
  workTimes: number;
  suction: string;
  cistern: string;
}) => {
  const protocolLengthVersion =
    store.getState().laserPanelConfig?.protocolLengthConfig?.protocolLengthVersion || '1';

  const { mapStatus, data, origin, mapScale, cleanWorkMode, workTimes, suction, cistern } = params;

  let setData = '';
  let checkNum = 0;

  const cleanWorkModeHex = getCleanWorkModeHex(cleanWorkMode);
  const suctionHex = getSuctionHex(suction);
  const cisternHex = getCisternHex(cistern);

  switch (mapStatus) {
    // 划区清扫
    case nativeMapStatusEnum.areaSet:
      // 拼接指令
      setData = `3a02${cleanWorkModeHex}${suctionHex}${cisternHex}${toFixed16(
        `${workTimes}`
      )}${utils.numToHexString(data.length)}`;
      // 校验码
      checkNum =
        parseInt('3a', 16) +
        parseInt('02', 16) +
        parseInt(cleanWorkModeHex, 16) +
        parseInt(suctionHex, 16) +
        parseInt(cisternHex, 16) +
        workTimes +
        data.length;
      break;
    // 指哪扫哪
    case nativeMapStatusEnum.pressToRun:
      // 拼接指令
      setData = `3e01${cleanWorkModeHex}${suctionHex}${cisternHex}${toFixed16(`${workTimes}`)}`;
      // 校验码
      checkNum =
        parseInt('3e', 16) +
        parseInt('01', 16) +
        parseInt(cleanWorkModeHex, 16) +
        parseInt(suctionHex, 16) +
        parseInt(cisternHex, 16) +
        workTimes;
      break;
    default:
      break;
  }

  const ox = origin.x * Math.pow(10, mapScale);
  const oy = origin.y * Math.pow(10, mapScale);

  if (mapStatus === nativeMapStatusEnum.areaSet) {
    // 划区清扫
    data.forEach(d => {
      // 多边型点的个数
      const { points, content = {} } = d;
      setData = `${setData}${toFixed16(points.length)}`;
      checkNum += points.length;
      const name = content.text || '';
      const nameByteArr = stringToByte(name);
      const check = nameByteArr.reduce((pre, cur) => pre + cur, 0);
      const utfName = bytes2Str(nameByteArr);
      const utfNamePadding = hexPlusLen(utfName, 19);
      const nameLength = toFixed16(name.length);

      // 添加x和y点
      points &&
        points.forEach((k: any) => {
          const hexX = utils.numToHexString((65535 + dealScale(k.x, mapScale) - ox) % 65535, 4); // 处理负数坐标
          const hexY = utils.numToHexString((65535 + oy - dealScale(k.y, mapScale)) % 65535, 4);
          setData = `${setData}${hexX}${hexY}`;
          checkNum = checkNum + addHex(hexX) + addHex(hexY);
        });

      // 区域名称长度和区域名称
      setData = `${setData}${nameLength}${utfNamePadding}`;
      checkNum = checkNum + parseInt(nameLength, 16) + check;
    });
  } else if (mapStatus === nativeMapStatusEnum.pressToRun) {
    // 指哪扫哪
    data.forEach(d => {
      const hexX = utils.numToHexString((65535 + dealScale(d.x, mapScale) - ox) % 65535, 4); // 处理负数坐标
      const hexY = utils.numToHexString((65535 + oy - dealScale(d.y, mapScale)) % 65535, 4);
      setData = `${setData}${hexX}${hexY}`;
      checkNum = checkNum + addHex(hexX) + addHex(hexY);
    });
  }
  const setLength =
    protocolLengthVersion === '1'
      ? utils.numToHexString(setData.length / 2, 8)
      : utils.numToHexString(setData.length / 2);
  const checkNumStr = utils.numToHexString(checkNum % 256);
  // 头部 + 类型和数据的总字节数 + 类型 + 坐标数据个数 + 坐标数据 + 校验值
  const dataLength = protocolLengthVersion === '1' ? '01' : '00';
  const commonData = `aa${dataLength}${setLength}${setData}${checkNumStr}`;
  return commonData;
};

/**
 * 处理虚拟墙和禁区等的下发
 * @param params
 * @returns
 */
export const getVirtualInfoCommonData = (params: {
  mapStatus: number;
  data: Array<any>;
  origin: { x: number; y: number };
  mapScale: number;
}) => {
  const protocolLengthVersion =
    store.getState().laserPanelConfig?.protocolLengthConfig?.protocolLengthVersion || '1';

  const { mapStatus, data, origin, mapScale } = params;

  const virtualWallAppCmd = '12';
  const forbidAreaAppCmd = '38';
  const forbidAreaProtocolVersion = '01';

  let setData = '';
  let checkNum = 0;

  switch (mapStatus) {
    // 虚拟墙
    case nativeMapStatusEnum.virtualWall:
      setData = `${virtualWallAppCmd}${utils.numToHexString(data.length)}`;
      checkNum = parseInt(virtualWallAppCmd, 16) + data.length;
      break;
    // 禁区
    case nativeMapStatusEnum.virtualArea:
      setData = `${forbidAreaAppCmd}${forbidAreaProtocolVersion}${utils.numToHexString(
        data.length
      )}`;
      checkNum =
        parseInt(forbidAreaAppCmd, 16) + parseInt(forbidAreaProtocolVersion, 16) + data.length;
      break;
    default:
      break;
  }

  const ox = origin.x * Math.pow(10, mapScale);
  const oy = origin.y * Math.pow(10, mapScale);

  if (mapStatus === nativeMapStatusEnum.virtualArea) {
    data.forEach(d => {
      let poiData = '';
      let poiCheck = 0;
      const { points, content = {} } = d;
      const name = content.text || '';
      const nameByteArr = stringToByte(name);
      const check = nameByteArr.reduce((pre, cur) => pre + cur, 0);
      const utfName = bytes2Str(nameByteArr);
      const utfNamePadding = hexPlusLen(utfName, 19);
      const nameLength = toFixed16(name.length);
      points &&
        points.forEach((k: any) => {
          const hexX = utils.numToHexString((65535 + dealScale(k.x, mapScale) - ox) % 65535, 4); // 处理负数坐标
          const hexY = utils.numToHexString((65535 + oy - dealScale(k.y, mapScale)) % 65535, 4);
          poiData = `${poiData}${hexX}${hexY}`;
          poiCheck = poiCheck + addHex(hexX) + addHex(hexY);
        });
      // 0x00：全禁、0x01：禁扫、0x02禁拖
      const modeType = d.extend.forbidType === 'sweep' ? '00' : '02';
      setData = `${setData}${modeType}${utils.numToHexString(
        points.length
      )}${poiData}${nameLength}${utfNamePadding}`;
      checkNum =
        checkNum +
        parseInt(modeType, 16) +
        points.length +
        poiCheck +
        parseInt(nameLength, 16) +
        check;
    });
  } else if (mapStatus === nativeMapStatusEnum.virtualWall) {
    data.forEach(d => {
      d.forEach((k: any) => {
        const hexX = utils.numToHexString((65535 + dealScale(k.x, mapScale) - ox) % 65535, 4); // 处理负数坐标
        const hexY = utils.numToHexString((65535 + oy - dealScale(k.y, mapScale)) % 65535, 4);
        setData = `${setData}${hexX}${hexY}`;
        checkNum = checkNum + addHex(hexX) + addHex(hexY);
      });
    });
  }

  const setLength =
    protocolLengthVersion === '1'
      ? utils.numToHexString(setData.length / 2, 8)
      : utils.numToHexString(setData.length / 2);
  const checkNumStr = utils.numToHexString(checkNum % 256);
  // 头部 + 类型和数据的总字节数 + 类型 + 坐标数据个数 + 坐标数据 + 校验值
  const dataLength = protocolLengthVersion === '1' ? '01' : '00';
  const commonData = `aa${dataLength}${setLength}${setData}${checkNumStr}`;
  return commonData;
};

/**
 * 拆解指令码2
 * @param {string} str 指令码
 * @returns {object} 具有含义的指令码键值对
 */
export const decodeCommTextData = (str: string): any => {
  const protocolLengthVersion =
    store.getState().laserPanelConfig?.protocolLengthConfig?.protocolLengthVersion || '1';

  const commonArr = str.match(/\w{2}/g);
  if (!commonArr) return {};

  const dataSource = commonArr.map(d => parseInt(d, 16));
  const dataObj = {};
  const nameToCmdMap = {
    virtualWallData: parseInt('13', 16),
    virtualAreaData: parseInt('39', 16),
  };

  const cmdToNameMap: { [x: string]: any } = Object.entries(nameToCmdMap).reduce(
    (pre, [name, cmd]) => Object.assign(pre, { [cmd]: name }),
    {}
  );

  // 对协议数据的字节数据进行遍历，找到对应的协议版本，命令，和数据区
  const cmd = protocolLengthVersion === '1' ? dataSource[6] : dataSource[3];
  const name = cmdToNameMap[cmd];
  if (name) {
    dataObj[name] = dataSource;
  }
  return dataObj;
};

/**
 * 禁区相关数据解析
 * @param str
 */
export function encodeVirtualInfoSuccess(str: string) {
  const { virtualAreaData, virtualWallData } = decodeCommTextData(str);
  return virtualAreaData || virtualWallData;
}

// 向扫地机请求选区清扫数据
export const getRoomClean = () => {
  const protocolLengthVersion =
    store.getState().laserPanelConfig?.protocolLengthConfig?.protocolLengthVersion || '1';

  const length = protocolLengthVersion === '1' ? '01' : '00';
  const dataLength = protocolLengthVersion === '1' ? '00000001' : '01';

  return `aa${length}${dataLength}1515`;
};

/**
 * 向设备请求禁区数据
 * @returns
 */
export const getVirtualForbid = () => {
  const protocolLengthVersion =
    store.getState().laserPanelConfig?.protocolLengthConfig?.protocolLengthVersion || '1';

  const length = protocolLengthVersion === '1' ? '01' : '00';
  const dataLength = protocolLengthVersion === '1' ? '00000001' : '01';

  return `aa${length}${dataLength}3939`;
};

/**
 * 向设备请求虚拟墙数据
 * @returns
 */
export const getVirtualWall = () => {
  const protocolLengthVersion =
    store.getState().laserPanelConfig?.protocolLengthConfig?.protocolLengthVersion || '1';

  const length = protocolLengthVersion === '1' ? '01' : '00';
  const dataLength = protocolLengthVersion === '1' ? '00000001' : '01';

  return `aa${length}${dataLength}1313`;
};

export const getCleaningSettingFromCommand = (command: string) => {
  const { appointDataV2, sweepRegionDataV3 } = splitCommonData(command);

  // 定点清扫
  if (appointDataV2) {
    const protocolLengthVersion =
      store.getState().laserPanelConfig?.protocolLengthConfig?.protocolLengthVersion || '1';

    const cleaningSettings =
      protocolLengthVersion === '1' ? appointDataV2.slice(9, 12) : appointDataV2.slice(6, 9);

    if (cleaningSettings?.length >= 2) {
      cleaningSettings[0] = Object.values(SUCTION_MAP)[cleaningSettings[0]].code;
      cleaningSettings[1] = Object.values(CISTERN_MAP)[cleaningSettings[1]].code;
    }

    return cleaningSettings;
  }

  // 划区清扫
  if (sweepRegionDataV3) {
    const protocolLengthVersion =
      store.getState().laserPanelConfig?.protocolLengthConfig?.protocolLengthVersion || '1';

    const cleaningSettings =
      protocolLengthVersion === '1'
        ? sweepRegionDataV3.slice(9, 12)
        : sweepRegionDataV3.slice(6, 9);

    if (cleaningSettings?.length >= 2) {
      cleaningSettings[0] = Object.values(SUCTION_MAP)[cleaningSettings[0]].code;
      cleaningSettings[1] = Object.values(CISTERN_MAP)[cleaningSettings[1]].code;
    }

    return cleaningSettings;
  }
};

/**
 * 向设备请求划区数据
 * @returns
 */
export const getZoneArea = () => {
  const protocolLengthVersion =
    store.getState().laserPanelConfig?.protocolLengthConfig?.protocolLengthVersion || '1';

  const length = protocolLengthVersion === '1' ? '01' : '00';
  const dataLength = protocolLengthVersion === '1' ? '00000001' : '01';

  return `aa${length}${dataLength}3b3b`;
};

/**
 * 向设备请求定点清扫数据
 * @returns
 */
export const getPosData = () => {
  const protocolLengthVersion =
    store.getState().laserPanelConfig?.protocolLengthConfig?.protocolLengthVersion || '1';

  const length = protocolLengthVersion === '1' ? '01' : '00';
  const dataLength = protocolLengthVersion === '1' ? '00000001' : '01';

  return `aa${length}${dataLength}3f3f`;
};

/**
 * 向设备请求定时数据
 * @returns
 */
export const getDeviceTimer = () => {
  const protocolLengthVersion =
    store.getState().laserPanelConfig?.protocolLengthConfig?.protocolLengthVersion || '1';

  const length = protocolLengthVersion === '1' ? '01' : '00';
  const dataLength = protocolLengthVersion === '1' ? '00000001' : '01';

  return `aa${length}${dataLength}3131`;
};

/**
 * 向设备请求勿扰数据
 * @returns
 */
export const getDoNotDisturb = () => {
  const protocolLengthVersion =
    store.getState().laserPanelConfig?.protocolLengthConfig?.protocolLengthVersion || '1';

  const length = protocolLengthVersion === '1' ? '01' : '00';
  const dataLength = protocolLengthVersion === '1' ? '00000001' : '01';

  return `aa${length}${dataLength}4141`;
};

/**
 * 解析选区清扫上报值
 * 解析成功返回清扫次数 & 房间id
 * 解析失败返回false
 * @param str
 * @returns
 */
export const getRoomSuccess = (str: string) => {
  const protocolLengthVersion =
    store.getState().laserPanelConfig?.protocolLengthConfig?.protocolLengthVersion || '1';

  const commonArr = str.match(/\w{2}/g);
  if (!commonArr || commonArr[protocolLengthVersion === '1' ? 6 : 3] !== '15') {
    return false;
  }
  try {
    const arr = commonArr.map(d => parseInt(d, 16));
    const count = protocolLengthVersion === '1' ? arr[7] : arr[4];
    const number = protocolLengthVersion === '1' ? arr[8] : arr[5];
    const { version = 2 } = store.getState().mapState;
    const padHex = version === 1 ? bitmapTypeMap.sweep : bitmapTypeMapV2.sweep;
    const roomIds = arr
      .splice(protocolLengthVersion === '1' ? 9 : 6, number)
      .map(id => DECNumberToHex(id, padHex));
    return {
      count,
      roomIds,
    };
  } catch (error) {
    console.warn('选区清扫上报值解析失败\n', error);
    return false;
  }
};

/**
 * 编码房间的清扫次数协议指令集
 * @param roomHexIds
 * @param cleanCount
 * @param version
 * @returns
 */
export const encodeRoomClean = (roomHexIds: string[], cleanCount: number, version: number) => {
  const protocolLengthVersion =
    store.getState().laserPanelConfig?.protocolLengthConfig?.protocolLengthVersion || '1';

  const roomIds = roomHexIds.map(id => parseRoomId(id, version));

  const header = 'aa';
  const cmd = '14';
  const idCount = roomIds.length;
  const check =
    (parseInt(cmd, 16) + cleanCount + idCount + roomIds.reduce((sum, id) => sum + id, 0)) % 256;
  const length = 1 + 2 + idCount; // Cmd+Data
  const roomIdsHex = roomIds.reduce((pre, cur) => pre + utils.numToHexString(cur), '');
  const commandData = `${header}${
    protocolLengthVersion === '1' ? '01' : '00'
  }${utils.numToHexString(
    length,
    protocolLengthVersion === '1' ? 8 : 2
  )}${cmd}${utils.numToHexString(cleanCount)}${utils.numToHexString(
    idCount
  )}${roomIdsHex}${utils.numToHexString(check)}`;
  return commandData;
};

export const getArray = <T>(array: T[]): T[] => (Array.isArray(array) ? array : []);

export const toArray = <T>(array: T | T[]): T[] =>
  Array.isArray(array) ? [].concat(array) : array ? [array] : [];

/**
 * 房间属性是否设置成功
 * 收到上报就可认为修改成功
 * @param str
 * @returns
 */
export const customSuccess = (str: string) => {
  const protocolLengthVersion =
    store.getState().laserPanelConfig?.protocolLengthConfig?.protocolLengthVersion || '1';

  const commonArr = str.match(/\w{2}/g);
  if (!commonArr || commonArr[0].toLowerCase() !== 'aa') {
    return false;
  }
  const cmd = protocolLengthVersion === '1' ? commonArr[6] : commonArr[3];
  if (cmd === '23') {
    return true;
  }
  return false;
};

/**
 * 定制房间
 * @param roomId
 * @param name
 * cmd 38
 * N|id|sweep_count|sweep_forbiden|fan|mop_count|mop_forbidden|water_level
 * N为房间个数，id为房间标识，sweep_count为扫地清扫次数，sweep_fobidden 清扫禁区，
 * fan为风机档位，mop_count 拖地清
 * 扫次数，拖地禁区，water_level水箱档位
 */
export const encodeRoomCustom = (params: any, version: number) => {
  const protocolLengthVersion =
    store.getState().laserPanelConfig?.protocolLengthConfig?.protocolLengthVersion || '1';

  const roomIdHexs = Object.keys(params);
  const header = 'aa';
  const cmd = '22';
  const count = roomIdHexs.length;
  const checkArr = [cmd, toFixed16(count)];
  let len = 2;
  const roomData = [];
  for (let i = 0; i < count; i++) {
    const roomIdHex = roomIdHexs[i];
    const { fan, water_level, y_mode, sweep_count } = params[roomIdHex];
    const roomId = parseRoomId(roomIdHex, version);
    const arr = [roomId, fan, water_level, y_mode, sweep_count].map(itm => toFixed16(itm));
    checkArr.push(...arr);
    roomData.push(...arr);
    len += 5;
  }
  const curCheck = checkArr.reduce((pre, cur) => pre + parseInt(cur, 16), 0);
  const check = lastChar(curCheck);
  const data = [
    header,
    protocolLengthVersion === '1' ? '01' : '00',
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
 * 计算全屋面积&房间面积
 * @param map
 * @param roomInfo
 */
export const computeArea = (map: string, roomInfo: string) => {
  let totalArea = 0; // 全屋面积
  const roomArea = {}; // 房间面积

  // 处理房间
  const roomInfoJson = utils.parseJSON(roomInfo);
  Object.keys(roomInfoJson).forEach(roomHexId => {
    const hexbit = _.padStart(parseInt(roomHexId, 16).toString(2), 8, '0');
    const roomId = parseInt(hexbit.slice(0, 5), 2); // 房间id
    const pointInfo = hexbit.slice(5); // 房间类型

    const room = roomInfoJson[roomHexId];
    const extend = utils.parseJSON(room.extend);
    if (_.has(extend, 'roomId') && pointInfo === '111') {
      roomArea[roomId] = 0;
    }
  });

  // 处理面积
  let i = 0;
  while (i < map.length) {
    // 处理房间面积
    const roomHexId = `${map[i++]}${map[i++]}`;

    const hexbit = _.padStart(parseInt(roomHexId, 16).toString(2), 8, '0');
    const roomId = parseInt(hexbit.slice(0, 5), 2); // 房间id
    const pointInfo = hexbit.slice(5); // 房间类型

    if (_.has(roomArea, roomId)) {
      roomArea[roomId]++;
    }

    // 处理全屋面积
    if (pointInfo === '111' || pointInfo === '010') {
      totalArea++;
    }
  }

  store.dispatch(actions.common.updateArea({ totalArea, roomArea }));
};

/**
 * 设备信息上报解析
 * @param devInfo 设备信息
 * @returns
 */
export const formatDevSchema = devInfo => {
  const { dps, schema } = devInfo;
  const result_schema = {};
  const result_state = {};

  for (let i = 0; i < schema.length; i++) {
    const { code, id, property, type, mode } = schema[i];
    const define = {
      dptype: type,
      id: `${id}`,
      code,
      mode,
      ...property,
    };

    result_state[code] = dps[id];
    result_schema[code] = define;
    delete define.property;
  }
  return { state: result_state, schema: result_schema };
};

/**
 * @desc 解析上下左右值
 *
 * @param {Array} values - 上右下左值
 * @param {String} key - 样式key，如margin、padding等
 */
export const parseToStyle = (values, key) => {
  if (!values || !Array.isArray(values)) {
    return {};
  }
  const [top, right, bottom, left] = values;
  return {
    [`${key}Top`]: top,
    [`${key}Right`]: right,
    [`${key}Bottom`]: bottom,
    [`${key}Left`]: left,
  };
};

/**
 * 获取DP信息
 * @param dpcode DP Code
 * @returns
 */
export const getDpSchema = (dpCode: string) => {
  return (getDevInfo().schema[dpCode] ?? {}) as DpSchema[string];
};

/**
 * 检测DP是否存在
 * @param dpCode DP Code
 * @returns
 */
export const checkDpExist = (dpCode: string) => {
  return dpCode in getDevInfo().schema;
};

/**
 * 根据dpCode获取dpId
 */
export const getDpIdByCode = (dpCode: string) => getDevInfo().codeIds[dpCode];

/**
 * 根据dpId获取dpCode
 */
export const getDpCodeById = (dpId: number | string) => {
  return getDevInfo().idCodes[dpId];
};

/**
 * 上报DP解析
 * @param param0
 * @returns
 */
export const formatDps = ({ dps }: ty.device.DpsChanged) => {
  const dpState = {};
  Object.entries(dps).forEach(([dpId, dpValue]) => {
    dpState[getDpCodeById(dpId)] = dpValue;
  });
  return dpState;
};
