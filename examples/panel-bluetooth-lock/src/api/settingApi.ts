import { uploadLogRecord, setDeviceProperties, getDeviceProperties } from '@ray-js/ray';
import { getCachedLaunchOptions } from './getCachedLaunchOptions';

// 上报日志接口（uploadLogRecord）参考文档：https://developer.tuya.com/cn/miniapp/develop/ray/api/lock/log#%E4%B8%8A%E6%8A%A5%E6%93%8D%E4%BD%9C%E6%97%A5%E5%BF%97%E8%AE%B0%E5%BD%95

export const uploadSettingRecord = (logType: string, data: string[]) => {
  const devId = getCachedLaunchOptions()?.query?.deviceId;
  return uploadLogRecord({
    devId: devId,
    logType,
    data,
  });
};

// 设置远程开门状态接口（setDeviceProperties）参考文档：https://developer.tuya.com/cn/miniapp/develop/ray/api/lock/device#%E8%AE%BE%E7%BD%AE%E8%AE%BE%E5%A4%87%E5%B1%9E%E6%80%A7

export const setDeviceProps = (propKvs: string) => {
    const devId = getCachedLaunchOptions()?.query?.deviceId;
    return setDeviceProperties({
      devId: devId,
      propKvs
    });
  };

  // 设置远程开门状态接口（getDeviceProperties）参考文档：https://developer.tuya.com/cn/miniapp/develop/ray/api/lock/device#%E6%9F%A5%E7%9C%8B%E8%AE%BE%E7%BD%AE%E7%9A%84%E8%AE%BE%E5%A4%87%E5%B1%9E%E6%80%A7
  

export const getDeviceProps = (props: string) => {
  const devId = getCachedLaunchOptions()?.query?.deviceId;
  return getDeviceProperties({
    devId: devId,
    props
  });
};