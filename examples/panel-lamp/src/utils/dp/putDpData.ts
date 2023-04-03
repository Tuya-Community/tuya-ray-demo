// dp处理工具
/* eslint-disable no-console */
import { store } from '@/redux';
import { devices } from '@/devices';

export const supportDp = (code: string) => {
  const devInfo = devices.lamp.getDevInfo();
  const { schema } = devInfo || {};
  return !!schema[code];
};

export const getDpIdByCode = (dpCode: string) => {
  const devInfo = devices.lamp.getDevInfo();
  const { schema } = devInfo || {};
  const schemaMap = schema.reduce((ret, item) => {
    return {
      ...ret,
      [item.code]: item.id,
    };
  }, {});
  if (typeof dpCode === 'string') {
    if (!schemaMap[dpCode]) {
      return null;
    }
    return schemaMap[dpCode];
  }
  return null;
};
export const getDPCodeById = (dpId: string) => {
  const devInfo = devices.lamp.getDevInfo();
  const { schema } = devInfo || {};
  const schemaMap = schema.reduce((ret, item) => {
    return {
      ...ret,
      [item.id]: item.code,
    };
  }, {});
  if (typeof dpId === 'string') {
    if (!schemaMap[dpId]) {
      return null;
    }
    return schemaMap[dpId];
  }
  return null;
};
export const onDpDataChange = (cb: (res: any) => void) => {
  if (!ty.device) {
    return;
  }
  ty.device.onDpDataChange(rest => {
    cb(rest);
  });
};

// dp下发原始方法
export const putDpDataOrigin = (dps: { [dp: string]: any }) => {
  const devInfo = devices.lamp.getDevInfo();
  const { groupId } = devInfo;
  const dpIds = {};
  dps &&
    Object.keys(dps).forEach(i => {
      const code = getDpIdByCode(i);
      code && (dpIds[code] = dps[i]);
    });
  if (!ty.device) {
    return;
  }
  console.log('%c下发dps => ', 'color:#ffb900', dpIds);
  if (groupId) {
    ty.device.publishGroupDps({
      groupId,
      dps: dpIds,
      success: () => {
        console.log('群组下发成功');
      },
      fail: () => {
        console.log('群组下发失败');
      },
    });
    return;
  }
  ty.device.publishDps({
    deviceId: devInfo.devId,
    dps: dpIds,
    mode: 2,
    pipelines: [],
    options: {},
  });
};

export default putDpDataOrigin;
