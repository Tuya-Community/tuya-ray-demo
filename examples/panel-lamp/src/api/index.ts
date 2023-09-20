/* eslint-disable no-console */
import { store, actions as ReduxActions } from '@/redux';
import { requestCloud, getSystemInfo } from '@ray-js/ray';
import { getAnonymityNameStr } from '@/utils';
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
