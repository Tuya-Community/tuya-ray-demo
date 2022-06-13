import { getLaunchOptions, getDeviceInfo } from '@ray-js/api';

// 本地化缓存 deviceInfo 方便随时调用
let __deviceInfo = null;

export const initDevInfo = (): Promise<DevInfo | null> => {
  return new Promise((resolve, reject) => {
    if (__deviceInfo) {
      resolve(__deviceInfo);
    }
    getLaunchOptions({
      success: data => {
        const { deviceId } = data.query;
        getDeviceInfo({
          deviceId,
          success: deviceInfo => {
            __deviceInfo = deviceInfo;
            resolve(__deviceInfo);
          },
          fail: reject,
        });
      },
      fail: reject,
    });
  });
};

export const getDevInfo = (): DevInfo => {
  return __deviceInfo;
};
