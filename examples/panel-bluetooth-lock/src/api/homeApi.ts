import {
  getLaunchOptionsSync,
  getDeviceInfo,
  onDeviceInfoUpdated,
  getUiConfig as getUiConfigApi,
  getUserRegion as getUserRegionApi,
  getLockActivePeriod,
  getCurrentMemberInfo,
  remoteLockExecute,
  syncLockBatch,
  queryDeviceActiveDate,
} from '@ray-js/ray';
import { store, actions as ReduxActions } from '@/redux';

// 本地化缓存 deviceInfo 方便随时调用
let globalDevId = '';
let _deviceInfo_ = null;
export const initDevInfo = (): Promise<DevInfo | null> => {
  const { deviceId: devId } = getLaunchOptionsSync()?.query;
  globalDevId = devId;
  return new Promise(resolve => {
    getDeviceInfo({
      deviceId: devId,
      success: deviceInfo => {
        _deviceInfo_ = deviceInfo;
        resolve(_deviceInfo_);
      },
      fail: console.log,
    });
  });
};

export const getDevInfo = () => {
  return _deviceInfo_;
};

// 设备状态监听
onDeviceInfoUpdated(data => {
  const { dispatch } = store;
  initDevInfo();
  // @ts-ignore
  dispatch(ReduxActions.common.deviceChange(data));
});

// 获取云能力
export const getUiConfig = (
  productId,
  productConfigTimestamp = '0',
  productPanelPowerTimestamp = '0'
) => {
  return getUiConfigApi({
    productId,
    productConfigTimestamp,
    productPanelPowerTimestamp,
  });
};

// 获取当前帐号所属地区
export const getUserRegion = () => {
  return getUserRegionApi();
};

export const getDeviceInitDate = () => {
  return getLockActivePeriod({
    devId: globalDevId,
  });
};

export const getUserInfo = () => {
  return getCurrentMemberInfo({
    devId: globalDevId,
    dpIds: ''
  });
};

export const getSyncLockData = () => {
  return syncLockBatch({
    devId: globalDevId,
  });
};

export const putPassWordOfflineTime = () => {
  return queryDeviceActiveDate({
    devId: globalDevId,
  });
};

export const remoteOpen = open => {
  return remoteLockExecute({
    devId: globalDevId,
    open,
  });
};
