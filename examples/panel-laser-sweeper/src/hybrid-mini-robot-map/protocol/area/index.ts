/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import _ from 'lodash';
import { utils } from '@ray-js/panel-sdk';
import { areaTypeMap, ForbidTypeEnum, nativeMapStatus } from '../constant';
import { transformXY } from '../utils';
import PressCoordinateUtils from '../utils/pressCoordinateUtil';
import { hexToUTF8 } from '@/hybrid-mini-robot-map/protocol/utils/robotUtil';

interface IAreaData {
  appointData?: any[];
  appointDataV2?: any[];
  sweepRegionData?: any[];
  virtualAreaData?: any[];
  virtualWallData?: any[];
  sweepRegionDataV2?: any[];
  sweepRegionDataV3?: any[];
  virtualAreaDataV2?: any[];
  virtualAreaDataV3?: any[];
  virtualMopAreaData?: any[];
  materialObjData?: any[];
}

function toFixed(d: string) {
  return parseInt(d, 16);
}

// 定义指定的指令集，来区分说设备返回的数据协议是哪个功能和版本的，最后做不同的协议数据处理
const nameToCmdMap = {
  appointData: toFixed('17'),
  appointDataV2: toFixed('3f'), // V1.1.0 指哪扫哪
  sweepRegionData: toFixed('11'),
  virtualAreaData: toFixed('19'),
  virtualWallData: toFixed('13'),

  sweepRegionDataV2: toFixed('29'), // V1.1.0 新协议划区清扫
  sweepRegionDataV3: toFixed('3b'), // V1.2.0 带名称的划区清扫
  virtualAreaDataV2: toFixed('1b'), // V1.1.0 新协议禁区
  virtualAreaDataV3: toFixed('39'), // V1.2.0 带名称的禁区
  materialObjData: toFixed('37'), // AI物体
};

/**
 * 拆解指令码
 * @param {string} str 指令码
 * @returns {object} 具有含义的指令码键值对
 */
export function splitCommonData(str: string): IAreaData {
  const commonArr = str.match(/\w{2}/g);
  if (!commonArr) return {};

  const dataSource = commonArr.map(d => parseInt(d, 16));
  const totalLength = commonArr.length;
  const datas = {};

  const cmdToNameMap: { [x: number]: string } = Object.entries(nameToCmdMap).reduce(
    (pre, [name, cmd]) => Object.assign(pre, { [cmd]: name }),
    {}
  );

  // 对协议数据的字节数据进行遍历，找到对应的协议版本，命令，和数据区
  for (let i = 0; i < totalLength; i++) {
    const startIndex = i;
    const header = commonArr[i];
    if (header === 'aa') {
      const version = commonArr[i + 1];
      if (version === '01') {
        const dataLength = toFixed(
          [i + 2, i + 3, i + 4, i + 5].reduce((pre, cur) => pre + commonArr[cur], '')
        );
        const cmd = toFixed(commonArr[i + 6]);
        const endIndex = i + dataLength + 6;
        i = endIndex;
        const name = cmdToNameMap[cmd];
        if (name) {
          datas[name] = dataSource.slice(startIndex, endIndex + 1);
        }
      } else {
        const dataLength = toFixed(commonArr[i + 2]);
        const cmd = toFixed(commonArr[i + 3]);
        const endIndex = i + dataLength + 3;
        i = endIndex;
        const name = cmdToNameMap[cmd];
        if (name) {
          datas[name] = dataSource.slice(startIndex, endIndex + 1);
        }
      }
    } else {
      return datas;
    }
  }

  // const cmd = protocolLengthVersion === '1' ? dataSource[6] : dataSource[3];
  // const name = cmdToNameMap[cmd];
  // if (name) {
  //   datas[name] = dataSource;
  // }

  // 返回带有可读命令字的数据协议字节数组
  return datas;
}

const parseDataOfType = (
  type: string,
  dataArr: _.List<unknown> | null | undefined,
  mapScale: number
) => {
  const data: any[] = [];
  // 指哪扫哪V1.0.0
  if (type === areaTypeMap.appoint) {
    _.chunk(dataArr, 4).forEach((d: Array<number>) => {
      const x = transformXY(mapScale, d[0], d[1]);
      const y = -transformXY(mapScale, d[2], d[3]);
      data.push({ x, y });
    });
  } else if (type === areaTypeMap.virtualWall) {
    // 虚拟墙
    _.chunk(dataArr, 8).forEach(d => {
      const itemData: { x: number; y: number }[] = [];
      _.chunk(d, 4).forEach((k: Array<number>) => {
        const x = transformXY(mapScale, k[0], k[1]);
        const y = -transformXY(mapScale, k[2], k[3]);
        itemData.push({ x, y });
      });
      data.push(itemData);
    });
  } else {
    // 划区清扫V1.0.0
    // 禁区V1.0.0
    _.chunk(dataArr, 16).forEach(d => {
      const itemData: { x: number; y: number }[] = [];
      _.chunk(d, 4).forEach((k: Array<number>) => {
        const x = transformXY(mapScale, k[0], k[1]);
        const y = -transformXY(mapScale, k[2], k[3]);
        itemData.push({ x, y });
      });
      data.push(itemData);
    });
  }
  return data;
};

/**
 * 指哪扫哪V1.1.0
 * @param type
 * @param dataArr
 * @param mapScale
 * @returns
 */
const parseAppointV2 = (
  type: string,
  dataArr: _.List<unknown> | null | undefined,
  mapScale: number
) => {
  const data: any[] = [];
  if (type === areaTypeMap.appointV2) {
    _.chunk(dataArr, 4).forEach((d: Array<number>) => {
      const x = transformXY(mapScale, d[0], d[1]);
      const y = -transformXY(mapScale, d[2], d[3]);
      data.push({ x, y });
    });
  }
  return data;
};

/**
 * 划区清扫V1.1.0
 * @param type
 * @param dataArr
 * @param mapScale
 */
const parseDataOfTypeV2 = (type: string, dataArr: Array<any>, mapScale: number) => {
  const data: any[][] = [];
  if (type === areaTypeMap.sweepRegionV2) {
    // 1(polygon) + 4 * 4(x,y) = 17
    if (dataArr.length % 17 !== 0) {
      return [];
    }

    _.chunk(dataArr, 17).forEach(d => {
      const itemData: { x: number; y: number }[] = [];
      _.chunk(d.splice(1, 16), 4).forEach(k => {
        const x = transformXY(mapScale, k[0], k[1]);
        const y = -transformXY(mapScale, k[2], k[3]);
        itemData.push({ x, y });
      });
      data.push(itemData);
    });
  }
  return data;
};

/**
 * 划区清扫V1.2.0
 * @param type
 * @param dataArr
 * @param mapScale
 * @returns
 */
const parseDataSweepRegionV2 = (type: string, dataArr: Array<any>, mapScale: number) => {
  const dataWithExtraInfo: any[] = [];
  if (type === areaTypeMap.sweepRegionV3) {
    // 1(polygon) + 4 * 4(x,y) + 1(name.length) + 19(name) = 37
    if (dataArr.length % 37 !== 0) {
      return [];
    }

    _.chunk(dataArr, 37).forEach(d => {
      const itemData: { x: number; y: number }[] = [];
      const extraInfoItem: { text: string; points: { x: number; y: number }[] } = {
        text: '',
        points: [],
      };
      const polygon = d.splice(0, 1)[0];
      // x,y坐标
      _.chunk(d.splice(0, 16), 4).forEach(k => {
        const x = transformXY(mapScale, k[0], k[1]);
        const y = -transformXY(mapScale, k[2], k[3]);
        itemData.push({ x, y });
      });
      // 取出固定19个字节的区域名称
      const nameArr = d.splice(1, 19);
      const nameStr = utils.bytesToHexString(nameArr);
      const text = hexToUTF8(nameStr) || '';
      extraInfoItem.text = text;
      extraInfoItem.points = itemData;
      dataWithExtraInfo.push(extraInfoItem);
    });
  }
  return dataWithExtraInfo;
};

/**
 * 禁区 V1.1.0
 * @param dataArr
 * @param mapScale
 * @returns
 */
const parseDataOfTypeV3 = (dataArr: Array<any>, mapScale: number) => {
  if (dataArr.length % 18 !== 0) {
    return {
      mopData: [],
      sweepData: [],
    };
  }

  const mopData: any[][] = [];
  const sweepData: any[][] = [];
  _.chunk(dataArr, 18).forEach(d => {
    if (d[0] === 0 || d[0] === 1) {
      const itemData: { x: number; y: number }[] = [];
      _.chunk(d.splice(2, 16), 4).forEach((k: Array<number>) => {
        const x = transformXY(mapScale, k[0], k[1]);
        const y = -transformXY(mapScale, k[2], k[3]);
        itemData.push({ x, y });
      });
      sweepData.push(itemData);
    } else {
      const itemData: { x: number; y: number }[] = [];
      _.chunk(d.splice(2, 16), 4).forEach((k: Array<number>) => {
        const x = transformXY(mapScale, k[0], k[1]);
        const y = -transformXY(mapScale, k[2], k[3]);
        itemData.push({ x, y });
      });
      mopData.push(itemData);
    }
  });
  return {
    mopData,
    sweepData,
  };
};

/**
 * 禁区 V1.2.0
 * @param showName
 * @param dataArr
 * @param mapScale
 * @returns
 */
const parseDataOfTypeV4 = (dataArr: Array<any>, mapScale: number) => {
  // 1(mode) + 1(polygon) + 4(x,y) * 4 + 1(name.length) + 19(name)
  if (dataArr.length % 38 !== 0) {
    return { mopWithExtraData: [], sweepWithExtraData: [] };
  }

  // 每个区域4个点
  const mopWithExtraData: any[] = [];
  const sweepWithExtraData: any[] = [];
  _.chunk(dataArr, 38).forEach(d => {
    // 全禁 || 禁扫
    const mode = d.splice(0, 2)[0];
    if (mode === 0 || mode === 1) {
      const itemData: { x: number; y: number }[] = [];
      const extraInfoItem: { text: string; points: { x: number; y: number }[] } = {
        text: '',
        points: [],
      };
      // 取出坐标点
      _.chunk(d.splice(0, 16), 4).forEach(k => {
        const x = transformXY(mapScale, k[0], k[1]);
        const y = -transformXY(mapScale, k[2], k[3]);
        itemData.push({ x, y });
      });
      // 取出固定19个字节的区域名称
      const nameArr = d.splice(1, 19);
      const nameStr = utils.bytesToHexString(nameArr);
      const text = hexToUTF8(nameStr) || '';
      extraInfoItem.text = text;
      extraInfoItem.points = itemData;
      sweepWithExtraData.push(extraInfoItem);
    } else {
      // 禁拖
      const itemData: { x: number; y: number }[] = [];
      const extraInfoItem: { text: string; points: { x: number; y: number }[] } = {
        text: '',
        points: [],
      };
      _.chunk(d.splice(0, 16), 4).forEach(k => {
        const x = transformXY(mapScale, k[0], k[1]);
        const y = -transformXY(mapScale, k[2], k[3]);
        itemData.push({ x, y });
      });
      // 取出固定19个字节的区域名称
      const nameArr = d.splice(1, 19);
      const nameStr = utils.bytesToHexString(nameArr);
      const text = hexToUTF8(nameStr) || '';
      extraInfoItem.text = text;
      extraInfoItem.points = itemData;
      mopWithExtraData.push(extraInfoItem);
    }
  });
  return {
    mopWithExtraData,
    sweepWithExtraData,
  };
};

/**
 * 解析AI物体
 * @param dataArr
 * @param mapScale
 */
const parseMaterialObj = (dataArr: Array<number>, mapScale: number) => {
  if (dataArr.length % 5 !== 0) {
    return [];
  }

  const data: { x: number; y: number; type: number }[] = [];
  _.chunk(dataArr, 5).forEach(d => {
    const x = transformXY(mapScale, d[0], d[1]);
    const y = -transformXY(mapScale, d[2], d[3]);
    const type = d[4];
    data.push({ x, y, type });
  });
  return data;
};

/**
 * 区域区域解析
 * @param str
 * @param mapScale
 * @returns
 */
function decode(str: string, mapScale = 1) {
  const protocolLengthVersion = '1';

  const {
    appointData: hexDataAppoint,
    appointDataV2: hexDataAppointV2, // V1.1.0 指哪扫哪
    sweepRegionData: hexDataSweepRegion,
    virtualAreaData: hexDataVrArea,
    virtualWallData: hexDataVrWall,
    sweepRegionDataV2: hexDataSweepRegionV2, // V1.1.0 新协议划区清扫
    sweepRegionDataV3: hexDataSweepRegionV3, // V1.2.0 带名称划区清扫
    virtualAreaDataV2: hexDataVrAreaV2, // V1.1.0 禁区设置
    virtualAreaDataV3: hexDataVrAreaV3, // V1.2.0 带名称禁区设置
    materialObjData: hexMaterialObj,
  } = splitCommonData(str);
  const result = {};
  // 指哪扫哪 V1.0.0
  if (hexDataAppoint) {
    const appointData = parseDataOfType(
      areaTypeMap.appoint,
      protocolLengthVersion === '1'
        ? hexDataAppoint.splice(7, hexDataAppoint.length - 8)
        : hexDataAppoint.splice(4, hexDataAppoint.length - 5),
      mapScale
    );
    Object.assign(result, { appointData });
  }
  // 指哪扫哪 V1.1.0
  if (hexDataAppointV2) {
    const appointData = parseAppointV2(
      areaTypeMap.appointV2,
      protocolLengthVersion === '1'
        ? hexDataAppointV2.splice(12, hexDataAppointV2.length - 13)
        : hexDataAppointV2.splice(9, hexDataAppointV2.length - 10),
      mapScale
    );
    Object.assign(result, { appointData });
  }
  // ？
  // if (!hexDataAppoint && !hexDataAppointV2) {
  //   Object.assign(result, { appointData: [] });
  // }
  // 划区清扫V1.0.0
  if (hexDataSweepRegion) {
    const sweepRegionData = parseDataOfType(
      areaTypeMap.sweepRegion,
      protocolLengthVersion === '1'
        ? hexDataSweepRegion.splice(8, hexDataSweepRegion.length - 9)
        : hexDataSweepRegion.splice(5, hexDataSweepRegion.length - 6),
      mapScale
    );
    Object.assign(result, { sweepRegionData });
  }
  // 划区清扫V1.1.0
  if (hexDataSweepRegionV2) {
    const sweepRegionData = parseDataOfTypeV2(
      areaTypeMap.sweepRegionV2,
      protocolLengthVersion === '1'
        ? hexDataSweepRegionV2.splice(9, hexDataSweepRegionV2.length - 10)
        : hexDataSweepRegionV2.splice(6, hexDataSweepRegionV2.length - 7),
      mapScale
    );
    Object.assign(result, { sweepRegionData });
  }
  // 划区清扫 v1.2.0
  // 分为基础版和个性版
  if (hexDataSweepRegionV3) {
    let sweepRegionData;
    if (
      (protocolLengthVersion === '0' && hexDataSweepRegionV3[4] === 1) ||
      (protocolLengthVersion === '1' && hexDataSweepRegionV3[7] === 1)
    ) {
      sweepRegionData = parseDataSweepRegionV2(
        areaTypeMap.sweepRegionV3,
        protocolLengthVersion === '1'
          ? hexDataSweepRegionV3.splice(10, hexDataSweepRegionV3.length - 11)
          : hexDataSweepRegionV3.splice(7, hexDataSweepRegionV3.length - 8),
        mapScale
      );
    } else {
      sweepRegionData = parseDataSweepRegionV2(
        areaTypeMap.sweepRegionV3,
        protocolLengthVersion === '1'
          ? hexDataSweepRegionV3.splice(13, hexDataSweepRegionV3.length - 14)
          : hexDataSweepRegionV3.splice(10, hexDataSweepRegionV3.length - 11),
        mapScale
      );
    }
    Object.assign(result, { sweepRegionData });
  }
  // 禁区 V1.0.0
  if (hexDataVrArea) {
    const virtualAreaData = parseDataOfType(
      areaTypeMap.virtualArea,
      protocolLengthVersion === '1'
        ? hexDataVrArea.splice(8, hexDataVrArea.length - 9)
        : hexDataVrArea.splice(5, hexDataVrArea.length - 6),
      mapScale
    );
    Object.assign(result, { virtualAreaData });
  }
  // 禁区 V1.1.0
  if (hexDataVrAreaV2) {
    const res = parseDataOfTypeV3(
      protocolLengthVersion === '1'
        ? hexDataVrAreaV2.splice(8, hexDataVrAreaV2.length - 9)
        : hexDataVrAreaV2.splice(5, hexDataVrAreaV2.length - 6),
      mapScale
    );
    const { mopData, sweepData } = res;
    Object.assign(result, {
      virtualAreaData: sweepData,
      virtualMopAreaData: mopData,
    });
  }
  // 禁区 v1.2.0
  if (hexDataVrAreaV3) {
    const res = parseDataOfTypeV4(
      protocolLengthVersion === '1'
        ? hexDataVrAreaV3.splice(9, hexDataVrAreaV3.length - 10)
        : hexDataVrAreaV3.splice(6, hexDataVrAreaV3.length - 7),
      mapScale
    );
    const { mopWithExtraData, sweepWithExtraData } = res;
    Object.assign(result, {
      virtualAreaData: sweepWithExtraData,
      virtualMopAreaData: mopWithExtraData,
    });
  }
  // 虚拟墙
  if (hexDataVrWall) {
    const virtualWallData = parseDataOfType(
      areaTypeMap.virtualWall,
      protocolLengthVersion === '1'
        ? hexDataVrWall.splice(8, hexDataVrWall.length - 9)
        : hexDataVrWall.splice(5, hexDataVrWall.length - 6),
      mapScale
    );
    Object.assign(result, { virtualWallData });
  }
  // AI虚拟物体
  if (hexMaterialObj) {
    const materialObjData = parseMaterialObj(
      protocolLengthVersion === '1'
        ? hexMaterialObj.splice(8, hexMaterialObj.length - 9)
        : hexMaterialObj.splice(5, hexMaterialObj.length - 6),
      mapScale
    );
    Object.assign(result, { materialObjData });
  }

  return result;
}

// 获取区域id
function getNewAreaId(params: any = {}) {
  // 在原基础上做id自增
  const { preList, curList, index } = params;
  const list = preList.concat(curList);
  const idList = list.map(item => +item.id);
  const sortList = idList.sort((a: number, b: number) => a - b);

  if (sortList.length) {
    return String(sortList[sortList.length - 1] + index + 1);
  }

  return String(index + 1);
}

/**
 * 禁区
 * @param area
 * @param preList
 * @param curList
 * @param opt
 * @returns
 */
export function decodeToRCTArea(
  area: Array<any>,
  preList: Array<any>,
  curList: Array<any>,
  opt: {
    forbidType: ForbidTypeEnum;
    bgColor?: string;
    borderColor?: string;
    textColor?: string;
    textSize?: number;
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
    viewType?: string;
  } = { forbidType: ForbidTypeEnum.sweep }
) {
  const ZoneData = [];
  if (!area.length) return [];
  const {
    forbidType,
    bgColor,
    borderColor,
    textColor = '#000000',
    textSize = 12,
    vertexParams,
    unitParams,
    viewType = '',
  } = opt;
  try {
    area.forEach((item, index) => {
      // 这里会先判断是否需要取出之前已经存在的数据直接进行放入
      const points = item.points || item;
      const text = item.text || '';
      const exit = preList.find((i: any) => JSON.stringify(i.points) === JSON.stringify(points));
      if (exit) {
        ZoneData.push(exit);
      } else {
        const areaId = getNewAreaId({
          preList,
          curList,
          index,
        });
        ZoneData.push(
          PressCoordinateUtils.getRCTAreaStructure({
            id: areaId,
            bgColor,
            borderColor,
            textColor,
            textSize,
            type: nativeMapStatus.virtualArea,
            points,
            canRename: false,
            text,
            extend: {
              forbidType,
            },
            vertexParams,
            unitParams,
            viewType,
          })
        );
      }
    });
  } catch (error) {
    console.log('禁区解析错误\n', error);
    return [];
  }
  return ZoneData;
}

/**
 * 虚拟墙
 * @param area
 * @param preList
 * @param curList
 * @param opt
 * @returns
 */
export function decodeToRCTWall(
  area: Array<any>,
  preList: Array<any>,
  curList: Array<any>,
  opt: {
    forbidType: ForbidTypeEnum;
    bgColor?: string;
    lineWidth?: number;
    textColor?: string;
    textSize?: number;
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
  } = { forbidType: ForbidTypeEnum.sweep }
) {
  const WallData = [];
  if (!area.length) return [];
  const {
    forbidType,
    bgColor,
    lineWidth,
    textColor = '#000000',
    textSize = 12,
    vertexParams,
    unitParams,
    sideVertexParams,
  } = opt;
  area.forEach((item: Array<any>, index: number) => {
    try {
      const exit = preList.find((i: any) => JSON.stringify(i.points) === JSON.stringify(item));
      if (exit) {
        WallData.push(exit);
      } else {
        const areaId = getNewAreaId({
          preList,
          curList,
          index,
        });
        WallData.push(
          PressCoordinateUtils.getRCTLineStructure({
            id: areaId,
            bgColor,
            type: nativeMapStatus.virtualWall,
            points: item,
            lineWidth,
            extend: {
              forbidType,
              isWall: true,
            },
            vertexParams,
            unitParams,
            sideVertexParams,
          })
        );
      }
    } catch (error) {
      console.log('解析禁区失败\n', error);
      return [];
    }
  });
  return WallData;
}
/**
 * 指哪扫哪
 * @param area
 * @param preList
 * @param curList
 * @returns
 */
export function decodeToRCTPoint(
  area: Array<any>,
  preList: Array<any>,
  curList: Array<any>,
  factor = 0.05
) {
  if (!area.length) return [];
  const firstPoint: { x: number; y: number } = area[0];
  const exit = preList.find(i => JSON.stringify(i.points) === JSON.stringify(firstPoint));
  if (exit) {
    return exit;
  }

  const areaId = getNewAreaId({
    preList,
    curList,
    index: 0,
  });
  const point = PressCoordinateUtils.getRCTPointStructure({
    id: areaId,
    type: nativeMapStatus.pressToRun,
    points: firstPoint,
    pos: {
      meter: 1.6,
      factor: factor,
      bgColor: '#195D68FE',
      borderColor: '#FF5D68FE',
      isDash: false,
      lineWidth: 1,
      dashSize: 2,
      gapSize: 4,
    },
    unit: {
      textColor: '#FF5D68FE',
      textSize: 12,
    },
  });
  return point;
}

/**
 * 划区清扫
 * @param area
 * @param preList
 * @param curList
 * @param opt
 * @returns
 */
export function decodeToRCTCleanArea(
  area: Array<any>,
  preList: Array<any>,
  curList: Array<any>,
  opt: {
    bgColor?: string;
    borderColor?: string;
    textColor?: string;
    textSize?: number;
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
    viewType?: string;
  } = {}
) {
  const ZoneData: any = [];
  if (!area.length) return [];
  area.forEach((item, index) => {
    try {
      const {
        bgColor,
        borderColor,
        textColor = '#000000',
        textSize = 12,
        vertexParams,
        unitParams,
        viewType = '',
      } = opt;
      const points = item.points || item;
      const text = item.text || '';
      const exit = preList.find((i: any) => JSON.stringify(i.points) === JSON.stringify(points));
      if (exit) {
        ZoneData.push(exit);
      } else {
        const areaId = getNewAreaId({
          preList,
          curList,
          index,
        });
        ZoneData.push(
          PressCoordinateUtils.getRCTAreaStructure({
            id: areaId,
            bgColor,
            borderColor,
            text,
            textColor,
            textSize,
            type: nativeMapStatus.areaSet,
            points,
            canRename: false,
            vertexParams,
            unitParams,
            viewType,
          })
        );
      }
    } catch (error) {
      console.log('解析划区失败\n', error);
      return [];
    }
  });
  return ZoneData;
}

export default {
  decode,
  decodeToRCTArea,
  decodeToRCTWall,
  decodeToRCTCleanArea,
  decodeToRCTPoint,
};
