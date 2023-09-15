/* eslint-disable no-console */
import { store, actions as ReduxActions } from '@/redux';
import { getLaunchOptionsSync } from '@ray-js/api';
import { requestCloud, getSystemInfo } from '@ray-js/ray';
import { getAnonymityNameStr, parseJSON } from '@/utils';
import storage from './storage';
import LampApiRes from './LampApi';

export const storageUtils = storage;
export const LampApi = LampApiRes;

getSystemInfo({
  success: params => {
    const { dispatch } = store;
    dispatch(ReduxActions.common.updateCloud({ systemInfo: { ...params } }));
  },
  fail: params => {
    console.log('getSystemInfo_Erro', params);
  },
});

const errStyle = 'background: red; color: #fff;';

export function api(url: string, postData: any, version = '1.0') {
  return new Promise((resolve, reject) => {
    requestCloud({
      api: url,
      data: postData,
      version,
      success(data) {
        try {
          const res = typeof data === 'string' ? JSON.parse(data) : data;
          resolve(res);
        } catch (e) {
          console.log(`API 请求失败: %c${url}%o`, errStyle, data);
          resolve(data);
        }
      },
      fail({ errorMsg }) {
        try {
          const e = typeof errorMsg === 'string' ? JSON.parse(errorMsg) : errorMsg;
          reject(e);
        } catch (err) {
          console.log(`API 请求失败: 参数：`, postData);
          console.log(`API 请求失败: %c${url}%o`, errStyle, errorMsg);
          reject(errorMsg);
        }
      },
    });
  });
}

let isAdvanceHigh = false;

// 是否开启千分之一亮度
export const getAdvanceHigh = () => {
  const { deviceId: devId, groupId } = getLaunchOptionsSync().query;
  console.log('getAdvanceHigh===');
  return new Promise((resolve, reject) => {
    requestCloud({
      api: `${getAnonymityNameStr()}.m.light.high.power.get`,
      data: {
        bizId: groupId || devId,
        bizType: groupId ? 1 : 0,
        abilityCodes: 'tyabif5ucu',
      },
      version: '1.2',
      success: (d: any) => {
        console.log('是否配置了千分之一亮度', d);
        if (parseJSON(d) && parseJSON(d)[0]) {
          const { vasEnabled } = parseJSON(d)[0];
          resolve(vasEnabled || false);
          isAdvanceHigh = vasEnabled;
        }
      },
      fail: (err: any) => {
        console.error(err, 'getAdvanceHigh err');
        resolve(false);
      },
    });
  });
};

export const getAdvanceHighValue = () => {
  return isAdvanceHigh;
};

/**
 * 获取高级能力
 * @param bizId 单设备/群组id
 * @param bizType 0-单设备/1-群组
 * @param abilityCodes  高级能力code列表(多个以英文逗号隔开)
 * @returns
 */
export const getHighPower = (bizId: string, bizType: 0 | 1, abilityCodes: string) => {
  return new Promise((resolve, reject) => {
    requestCloud({
      api: `${getAnonymityNameStr()}.m.light.high.power.get`,
      version: '1.2',
      data: { bizId, bizType, abilityCodes },
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      },
    });
  });
};

/**
 *
 * @returns  是否配置色温能力
 */
export const getTempKelvinPower = () => {
  const { deviceId: devId, groupId } = getLaunchOptionsSync().query;
  const postData = groupId ? { devId: '', groupId: groupId } : { devId: devId };
  return new Promise((resolve, reject) => {
    requestCloud({
      api: `${getAnonymityNameStr()}.m.light.product.advanced.temp.check`,
      data: postData,
      version: '1.0',
      success: response => {
        typeof response === 'string' ? resolve(JSON.parse(response)) : resolve(response);
      },
      fail: error => {
        reject(error);
      },
    });
  });
};

/**
 *
 * @returns  获取色温值
 */
export const getTempKelvin = () => {
  const { deviceId: devId, groupId } = getLaunchOptionsSync().query;
  const postData = groupId ? { devId: '', groupId: groupId } : { devId: devId };

  return new Promise((resolve, reject) => {
    requestCloud({
      api: `${getAnonymityNameStr()}.m.light.product.gradient.temp`,
      data: postData,
      version: '1.0',
      success: response => {
        typeof response === 'string' ? resolve(JSON.parse(response)) : resolve(response);
      },
      fail: error => {
        reject(error);
      },
    });
  });
};
