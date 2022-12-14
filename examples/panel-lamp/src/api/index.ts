/* eslint-disable no-console */
import { store, actions as ReduxActions } from '@/redux';
import { requestCloud } from '@ray-js/ray';
export { initDevInfo, getDevInfo } from './devinfo';
import { initDevInfo } from './devinfo';
import storage from './storage';
import LampApiRes from './LampApi';

export const storageUtils = storage;
export const LampApi = LampApiRes;

setTimeout(() => {
  console.log(store.getState(), 'store.getState()');
}, 2000);

/// 设备状态监听
ty.device.onDeviceInfoUpdated(data => {
  console.log('onDeviceInfoUpdated: ', data);
  const { dispatch } = store;
  initDevInfo();
  // @ts-ignore
  dispatch(ReduxActions.common.devInfoChange(data));
});

ty.device.onDeviceOnlineStatusUpdate(() => {
  console.log('onDeviceOnlineStatusUpdate');
  initDevInfo();
});

ty.getSystemInfo({
  success: params => {
    const { dispatch } = store;
    dispatch(ReduxActions.common.updateCloud({ systemInfo: { ...params } }));
  },
  fail: params => {
    console.log('getSystemInfo_Erro', params);
  },
});

const sucStyle = 'background: green; color: #fff;';
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
