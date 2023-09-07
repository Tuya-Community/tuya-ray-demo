import { devices } from '@/devices';
import { lampSchemaMap } from '@/devices/schema';
import _ from 'lodash-es';

/**
 * 功能支持工具类
 */
interface ISupportUtils {
  isSupportDp: (dpCode: string, isForce?: boolean) => boolean;
  isSupportWhite: (isForce?: boolean) => boolean; // 支持白光
  isSupportBright: (isForce?: boolean) => boolean; // 支持白光亮度
  isSupportTemp: (isForce?: boolean) => boolean; // 支持色温
  isSupportColour: (isForce?: boolean) => boolean; // 支持彩光
  isSupportCloudTimer: () => boolean; // 支持云定时
  isSupportWorkMode: (code: string) => boolean; // 支持工作模式
  isGroupDevice: () => boolean; // 是否群组
  isZigbeeDevice: () => boolean; // 是否zigbee
  isSignMeshDevice: () => boolean; // 是否sigmesh
  isWifiDevice: () => boolean; // 是否wifi
  hasCapability: (id: number) => boolean;
}

const cache: Record<string, any> = {};

export const supportDp = (code: string) => {
  const devInfo = devices.lamp.getDevInfo();
  const { schema } = devInfo || {};
  if (Array.isArray(schema)) {
    const schemaRes = schema.find(i => i.code === code);
    return !!schemaRes;
  }
  return !!schema?.[code];
};

const supportWorkMode = (code: string) => {
  const devInfo = devices.lamp.getDevInfo();
  const { schema } = devInfo || {};
  if (Array.isArray(schema)) {
    const schemaRes = schema.find(i => i.code === lampSchemaMap.work_mode.code);
    const workModeRange: string[] = schemaRes?.property?.range || [];
    return workModeRange.includes(code);
  }
  const workModeRange: string[] = _.get(schema?.[lampSchemaMap.work_mode.code], 'range') || [];
  return workModeRange.includes(code);
};

const isSupportByDpAndWorkMode = (
  code: string,
  dpCode: string,
  workMode: string,
  isForce: boolean
) => {
  if (!isForce) {
    if (cache[code]) {
      return cache[code];
    }
  }
  // 是否存在相关dp
  const isDpSupport = supportDp(dpCode);
  const isInWorkMode = supportWorkMode(workMode);
  // 没有相关dp支持
  let isSupport = false;
  if (isDpSupport && isInWorkMode) {
    isSupport = true;
  }
  cache[code] = isSupport;
  return isSupport;
};

const isSupportByDp = (code: string, dpCode: string, isForce: boolean) => {
  if (!isForce) {
    if (cache[code]) {
      return cache[code];
    }
  }
  // 是否存在相关dp
  const isDpSupport = supportDp(dpCode);
  // 没有相关dp支持
  let isSupport = false;
  if (isDpSupport) {
    isSupport = true;
  }
  cache[code] = isSupport;
  return isSupport;
};

const SupportUtils: ISupportUtils = {
  isGroupDevice() {
    const devInfo = devices.lamp.getDevInfo();
    return !!devInfo.groupId;
  },
  isSupportBright(isForce = false) {
    return isSupportByDpAndWorkMode(
      'isSupportBright',
      lampSchemaMap.bright_value.code,
      'white',
      isForce
    );
  },
  isSupportTemp(isForce = false) {
    return isSupportByDpAndWorkMode(
      'isSupportTemp',
      lampSchemaMap.temp_value.code,
      'white',
      isForce
    );
  },
  isSupportColour(isForce = false) {
    return isSupportByDpAndWorkMode(
      'isSupportColour',
      lampSchemaMap.colour_data.code,
      'colour',
      isForce
    );
  },

  isSupportWhite(isForce = false) {
    const code = 'isSupportWhite';
    if (!isForce) {
      if (cache[code]) {
        return cache[code];
      }
    }
    // 是否存在相关dp
    const isSupportBright = this.isSupportBright(true);
    const isSupportTemp = this.isSupportTemp(true);

    let isSupport = false;
    if (isSupportBright || isSupportTemp) {
      isSupport = true;
    }
    cache[code] = isSupport;
    return cache[code];
  },
  isSupportWorkMode(code: string) {
    return supportWorkMode(code);
  },
  isSupportCloudTimer(devInfo?: DevInfo) {
    if (!devInfo) {
      // @ts-ignore
      // eslint-disable-next-line no-param-reassign
      devInfo = devices.lamp.getDevInfo();
    }
    if (devInfo?.panelConfig?.bic) {
      // @ts-ignore
      const timer = devInfo?.panelConfig?.bic?.find(i => i.code === 'timer');
      if (!timer) {
        return false;
      }
      return timer.selected;
    }
    return false;
  },
  isSupportDp(dpCode: string, isForce = false) {
    const code = `isSupport_${dpCode}`;
    if (!isForce) {
      if (cache[code]) {
        return cache[code];
      }
    }
    const isSupportDp = supportDp(dpCode);
    let isSupport = false;
    if (isSupportDp) {
      isSupport = true;
    }
    cache[code] = isSupport;
    return cache[code];
  },
  hasCapability(id: number) {
    const devInfo = devices.lamp.getDevInfo();
    // eslint-disable-next-line no-bitwise
    return (devInfo?.capability & (1 << id)) > 0;
  },
  isZigbeeDevice() {
    return this.hasCapability(12);
  },
  isSignMeshDevice() {
    return this.hasCapability(15);
  },
  isWifiDevice() {
    return this.hasCapability(1);
  },
};

export default SupportUtils;
