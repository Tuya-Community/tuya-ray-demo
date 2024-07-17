import { bitmapTypeMapV2 } from '@/hybrid-mini-robot-map/protocol/constant';
import _ from 'lodash';

export const getRoomProperty = (
  params: {
    name?: string;
    water_level?: string;
    fan?: string;
    sweep_count?: string;
  },
  isCustomizeMode: boolean,
  mapConfig: any
) => {
  const { attributesConfig } = mapConfig;

  // 后台配置信息，可控制名称和配置信息的显示
  const { attributesFan, attributesWater } = attributesConfig;
  const { attributesFanIconEnum = [] } = attributesFan;
  const { attributesWaterIconEnum = [] } = attributesWater;
  const roomProperty = [];
  // 名称text
  if (params.name) {
    roomProperty.push({
      propertyType: 'text',
      value: params.name,
    });
  }
  if (!isCustomizeMode && !_.isUndefined(isCustomizeMode)) return roomProperty;
  // 水量和吸力image
  const iconPro = [];
  const { water_level, fan, sweep_count } = params;

  // let waterIcon =
  //   !!+water_level && attributesWaterIconEnum[+water_level]
  //     ? attributesWaterIconEnum[+water_level]
  //     : null;
  const waterNumber = Number(water_level);
  const waterIcon =
    !isNaN(waterNumber) && attributesWaterIconEnum[waterNumber]
      ? attributesWaterIconEnum[waterNumber]
      : null;
  // 对资源分区进行修改
  // icon为base64,所以不需要拼接域名
  // waterIcon = computedRegionAndReplace(staticPrefix, waterIcon);
  waterIcon && iconPro.push({ value: water_level, icon: waterIcon });

  // let funIcon = !!+fan && attributesFanIconEnum[+fan] ? attributesFanIconEnum[+fan] : null;
  const fanNumber = Number(fan);
  const fanIcon =
    !isNaN(fanNumber) && attributesFanIconEnum[fanNumber] ? attributesFanIconEnum[fanNumber] : null;
  // 对资源分区进行修改
  // icon为base64,所以不需要拼接域名
  // funIcon = computedRegionAndReplace(String(staticPrefix), funIcon);
  fanIcon && iconPro.push({ value: fan, icon: fanIcon });

  const iconRes = iconPro
    .filter(({ value, icon }) => !!icon || (!_.isUndefined(value) && +value < 5))
    .map(({ value, icon }) => {
      return {
        propertyType: 'uri',
        value: icon,
      };
    });

  if (iconRes.length > 0) {
    roomProperty.push(...iconRes);
  }
  if (sweep_count && !!parseInt(sweep_count, 10) && parseInt(sweep_count, 10) < 255) {
    roomProperty.push({
      propertyType: 'text',
      value: ` ×${sweep_count}`,
    });
  }

  return roomProperty;
};

export const getCurData = (
  pre: { [x: string]: string },
  custom: { [x: string]: string },
  cur: { [x: string]: string },
  key: string
) => {
  let res: number | string;
  if (pre && pre[key]) {
    res = pre[key];
  } else if (custom && custom[key]) {
    res = custom[key];
  } else {
    res = cur[key];
  }

  return res;
};

/**
 * 获取当前的房间清扫顺序
 * @param selectRoomData
 */
export const getCurOrder = (room: any, selectRoomData: string[]) => {
  let posIndex = 0;
  for (let i = 0; i < selectRoomData.length; i++) {
    const hexBit = _.padStart(parseInt(selectRoomData[i], 16).toString(2), 8, '0');
    const tempRoomId = parseInt(hexBit.slice(0, 5), 2);
    if (room.roomId === tempRoomId) {
      posIndex = i;
      break;
    }
  }
  return posIndex;
};

/**
 * 过滤具有相同房间ID的信息
 */
export const filterCorrectRoomInfo = (selectRoomData: string[]) => {
  if (!selectRoomData) return [];
  const temp = [...selectRoomData];
  const result: string[] = [];
  temp.forEach(item => {
    let flag = false;
    const hexbit1 = _.padStart(parseInt(item, 16).toString(2), 8, '0');
    const roomId1 = parseInt(hexbit1.slice(0, 5), 2);
    const pointInfo1 = hexbit1.slice(5);
    result.forEach(value => {
      const hexbit2 = _.padStart(parseInt(value, 16).toString(2), 8, '0');
      const roomId2 = parseInt(hexbit2.slice(0, 5), 2);
      if (roomId1 === roomId2) {
        flag = true;
      }
    });
    if (!flag) {
      result.push(item);
    }
  });
  return result;
};

/**
 * 添加相同房间roomId的信息
 * @param formatRoomInfo
 * @param selectRoomData
 * @returns
 */
export const addCorrectRoomInfo = (formatRoomInfo: any, selectRoomData: string[]) => {
  if (!selectRoomData) return [];
  const tempArr: string[] = [];
  selectRoomData.forEach((item: string) => {
    const selectHexBit = _.padStart(parseInt(item, 16).toString(2), 8, '0');
    const selectRoomId = parseInt(selectHexBit.slice(0, 5), 2);
    formatRoomInfo &&
      Object.keys(formatRoomInfo).forEach((key: string) => {
        const hexBit = _.padStart(parseInt(key, 16).toString(2), 8, '0');
        const pointInfo = hexBit.slice(5);
        const formatRoomId = parseInt(hexBit.slice(0, 5), 2);
        if (
          formatRoomId === selectRoomId &&
          (pointInfo === bitmapTypeMapV2.sweep || pointInfo === bitmapTypeMapV2.carpet)
        ) {
          tempArr.push(key);
        }
      });
  });
  return tempArr;
};
