import { getLockLatestLog, queryLogRecord } from '@ray-js/ray';
import { getCachedLaunchOptions } from './getCachedLaunchOptions';

// 日志接口参考文档：https://developer.tuya.com/cn/miniapp/develop/ray/api/lock/log#%E6%9F%A5%E8%AF%A2%E6%97%A5%E5%BF%97%E8%AE%B0%E5%BD%95

export const getLatestLog = () => {
  const devId = getCachedLaunchOptions()?.query?.deviceId;
  return getLockLatestLog({
    devId: devId,
  });
};

export interface ResQueryLogRecord {
  hasMore: boolean;
  lastRowKey: string;
  records: Record<string, never>[];
}

export const getLogs = (params): Promise<ResQueryLogRecord> => {
    const devId = getCachedLaunchOptions()?.query?.deviceId;
    // @ts-ignore
    // 支持传入时间参数，例如：getLogs({startTime: 1626345600000, endTime: 1626432000000})
    return queryLogRecord({
      devId: devId,
      onlyShowMediaRecord: false,
      limit: 20,
      ...params
    });
  };
  