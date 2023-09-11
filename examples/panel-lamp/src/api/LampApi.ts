/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import _ from 'lodash-es';
import { decode } from 'base64-browser';
import { requestCloud, getDeviceProperty, setGroupProperty, setDeviceProperty } from '@ray-js/ray';
import StorageUtils from './storage';
import { devices } from '@/devices';

const sucStyle = 'background: green; color: #fff;';
const errStyle = 'background: red; color: #fff;';
/**
 * 同步操作类型
 */
enum SyncType {
  ADD,
  UPDATE,
  REMOVE,
}
interface Api {
  getCloudFun?(name: string, defaultValue: any): any;
  getUiConfig?(productId: any, timestamp: string): any;
  getAllCloudConfig?(devId: string, groupId: string): Promise<any>;
  saveCloudConfig?(code: string, data: any): Promise<any>;
  deleteCloudConfig?(code: string): Promise<any>;
  syncCloudConfig?(devId: string, groupId: string): void;
  fetchLocalConfig?(): Promise<any>;
  fetchCloudConfig?(devId: string, groupId: string): Promise<any>;
}

export const LampApi: Api = {};

export function api(url: string, postData: any, version = '1.0') {
  return new Promise((resolve, reject) => {
    requestCloud({
      api: url,
      data: postData,
      version,
      success(data) {
        try {
          const res = typeof data === 'string' ? JSON.parse(data) : data;
          console.log(
            `API 请求成功: %c${url}%o`,
            sucStyle,
            '请求参数：',
            postData,
            '接口结果：',
            res
          );
          resolve(res);
        } catch (e) {
          console.log(`API 请求失败: %c${url}%o`, errStyle, data);
          resolve(data);
        }
      },
      fail({ errorMsg }) {
        try {
          const e = typeof errorMsg === 'string' ? JSON.parse(errorMsg) : errorMsg;
          console.log(`API 请求失败: %c${url}%o`, errStyle, e);
          console.log(`API 请求失败: 参数：`, postData);
          reject(e);
        } catch (err) {
          console.log(`API 请求失败: %c${url}%o，参数：${postData}`, errStyle, errorMsg);
          console.log(`API 请求失败: 参数：`, postData);
          reject(errorMsg);
        }
      },
    });
  });
}

// 由于standard组件库 没有内置这个方法，导致需要污染TYNative，后续修复。
if (!LampApi.getUiConfig) {
  LampApi.getUiConfig = function getUiConfig(productId: any, timestamp = '0') {
    return api(`${decode('dHV5YQ==')}.m.app.panel.info.get`, {
      productId,
      timestamp,
    });
  };
}

LampApi.getCloudFun = (name: string, defaultValue: any = null) => {
  const devInfo = devices.lamp.getDevInfo();
  return _.get(devInfo, ['panelConfig', 'fun', name], defaultValue);
};

LampApi.getAllCloudConfig = (devId: string, groupId: string) => {
  // @ts-ignore
  return getDeviceProperty({ deviceId: groupId || devId }).then(data => {
    const result: any = {};
    Object.keys(data).forEach(key => {
      try {
        const res = JSON.parse(data[key]);
        result[key] = res;
      } catch (e) {
        console.log('========e', e);
      }
    });
    return result;
  });
};

// 云端数据对应的本地缓存
const LOCAL_DATA_KEY = 'LOCAL_DATA_KEY';
const formateCacheData = (data: any) => {
  const result: any = {};
  Object.keys(data).forEach(key => {
    const {
      type,
      data: { data: value },
    } = data[key];
    if (type !== SyncType.REMOVE && value) {
      result[key] = value;
    }
  });
  return result;
};

const handleSyncCloudData = async (syncCloudData: any, syncLocalData: any) => {
  if (!_.isEmpty(syncCloudData) || !_.isEmpty(syncLocalData)) {
    ty.emitChannel({
      eventName: 'beginSyncCloudData',
      event: { syncCloudData, syncLocalData },
    });
    if (!_.isEmpty(syncLocalData)) {
      const cacheData = (await StorageUtils.getDevItem(LOCAL_DATA_KEY)) || {};
      Object.keys(syncLocalData).forEach(key => {
        const { type } = syncLocalData[key];
        if (type === SyncType.REMOVE) {
          delete cacheData[key];
        } else {
          cacheData[key] = syncLocalData[key];
        }
      });
      StorageUtils.setDevItem(LOCAL_DATA_KEY, cacheData);
      if (_.isEmpty(syncCloudData)) {
        ty.emitChannel({
          eventName: 'endSyncCloudData',
          event: formateCacheData(cacheData),
        });
      }
    }
    if (!_.isEmpty(syncCloudData)) {
      // 同步数据到云端
      const codes = Object.keys(syncCloudData);
      let total = codes.length;
      const handleEnd = () => {
        total--;
        if (total === 0) {
          StorageUtils.getDevItem(LOCAL_DATA_KEY).then((d: any) => {
            ty.emitChannel({
              eventName: 'endSyncCloudData',
              event: formateCacheData(d || {}),
            });
          });
        }
      };

      codes.forEach(key => {
        const target = syncCloudData[key];
        let syncCount = 3; // 如果失败，会再次同步，共同步三次
        if (target.type === SyncType.REMOVE) {
          // 删除
          const handle = () => {
            syncCount--;
            handleSaveCloudConfig(key, { ...target, data: { time: target.data.time, data: null } })
              .then(handleEnd)
              .catch(() => {
                if (syncCount > 0) {
                  handle();
                } else {
                  ty.emitChannel({
                    eventName: 'syncCloudDataError',
                    event: { [key]: target.data },
                  });
                  handleEnd();
                }
              });
          };
          handle();
        } else {
          const handle = () => {
            syncCount--;
            handleSaveCloudConfig(key, target)
              .then(handleEnd)
              .catch(() => {
                if (syncCount > 0) {
                  handle();
                } else {
                  ty.emitChannel({
                    eventName: 'syncCloudDataError',
                    event: { [key]: target.data },
                  });
                  handleEnd();
                }
              });
          };
          handle();
        }
      });
    }
  }
};

const syncComplete = async (code: any, data: any) => {
  const cacheData: any = StorageUtils.getDevItem(LOCAL_DATA_KEY) || {};
  const target = cacheData[code];
  // 校验数据是否被动过
  if (_.isEqual(data, target)) {
    switch (data.type) {
      case SyncType.ADD:
      case SyncType.UPDATE:
        target.status = 1;
        break;
      case SyncType.REMOVE:
        delete cacheData[code];
        break;
      default:
    }

    StorageUtils.setDevItem(LOCAL_DATA_KEY, cacheData);
  }
};

const handleSaveCloudConfig = async (code: string, cacheData: any) => {
  const { devId, groupId } = devices.lamp.getDevInfo();
  if (groupId) {
    setGroupProperty({
      groupId,
      code,
      value: cacheData,
      success: () => {
        syncComplete(code, cacheData);
      },
      fail: () => {
        console.log('保存群组数据失败', syncComplete(code, cacheData));
      },
    });
  } else {
    setDeviceProperty({
      deviceId: devId,
      code,
      value: cacheData,
      success: () => {
        syncComplete(code, cacheData);
      },
      fail: () => {
        console.log('保存数据失败', syncComplete(code, cacheData));
      },
    });
  }
};

LampApi.saveCloudConfig = async (code: string, data: any) => {
  try {
    const cacheConfigData = (await StorageUtils.getDevItem(LOCAL_DATA_KEY)) || {};
    let isExist = false;
    if (cacheConfigData && cacheConfigData[code]) {
      isExist = true;
    }
    // status 0 表示未同步, 1 为同步
    const cacheData = {
      status: 0,
      type: isExist ? SyncType.UPDATE : SyncType.ADD,
      data: { time: +new Date(), data }, // 加入一个时间标记数据的前后，这里依赖于客户端的时间，如果客房手机时间不准确，可能会出现同步问题
    };
    cacheConfigData[code] = cacheData;
    await StorageUtils.setDevItem(LOCAL_DATA_KEY, cacheConfigData);
    handleSaveCloudConfig(code, cacheData);
    return Promise.resolve(formateCacheData(cacheConfigData));
  } catch (err) {
    console.log('saveCloudConfig err', err);
  }
};

/**
 * 删除一个code
 * 不做真删除，只删除其数据
 */
LampApi.deleteCloudConfig = async (code: string) => {
  const cacheConfigData = (await StorageUtils.getDevItem(LOCAL_DATA_KEY)) || {};
  let isExist = false;
  if (cacheConfigData && cacheConfigData[code]) {
    isExist = true;
  }
  if (isExist) {
    const data = cacheConfigData[code];
    // status 0 表示未同步, 1 为同步
    data.status = 0;
    data.type = SyncType.REMOVE;
    data.data.time = +new Date();
    data.data.data = null;
    await StorageUtils.setDevItem(LOCAL_DATA_KEY, cacheConfigData);
    handleSaveCloudConfig(code, data);
    return Promise.resolve();
  }
};
LampApi.fetchLocalConfig = async () => {
  // 获取配置缓存数据
  const cacheData = (await StorageUtils.getDevItem(LOCAL_DATA_KEY)) || {};
  // 存在缓存数据，优先以缓存数据显示
  if (cacheData) {
    return formateCacheData(cacheData);
  }
  return null;
};

LampApi.syncCloudConfig = (devId: string, groupId: string) => {
  return LampApi.getAllCloudConfig(devId, groupId).then(res => {
    StorageUtils.getDevItem(LOCAL_DATA_KEY).then((cacheData: any) => {
      cacheData = cacheData || {};
      // 同步数据
      const syncCloudData: any = {};
      const syncLocalData: any = {};
      const needSyncKeys = Object.keys(res);
      Object.keys(cacheData).forEach(key => {
        const {
          status,
          type,
          data: { time, data },
        } = cacheData[key];
        const cloudData = res[key];
        if (!cloudData) {
          if (type !== SyncType.REMOVE) {
            syncCloudData[key] = cacheData[key];
          } else {
            // 删除数据
            delete cacheData[key];
          }
        } else {
          // 删除掉已经比较的key
          needSyncKeys.splice(needSyncKeys.indexOf(key), 1);
          const { time: cloundTime, data: cloudValue } = cloudData;

          // 如果云端的时间大，则同步到本地
          if (cloundTime > time) {
            if (cloudValue) {
              // 同步本地数据
              syncLocalData[key] = { status: 1, type: SyncType.UPDATE, data: cloudData };
            } else {
              // 同步本地数据
              syncLocalData[key] = { status: 1, type: SyncType.REMOVE, data: cloudData };
            }
          } else if (cloundTime < time) {
            // 需要同步数据到云端
            syncCloudData[key] = cacheData[key];
          } else {
            // 云端数据直接同步到本地数据
            cacheData[key] = { status: 1, type: SyncType.UPDATE, data: cloudData };
            StorageUtils.setDevItem(LOCAL_DATA_KEY, cacheData);
          }
        }
      });
      // 需要添加的数据
      if (needSyncKeys.length) {
        needSyncKeys.forEach(key => {
          syncLocalData[key] = { status: 1, type: SyncType.UPDATE, data: res[key] };
        });
      }
      // 同步数据, 触发同步数据事件
      handleSyncCloudData(syncCloudData, syncLocalData);
    });
  });
};
LampApi.fetchCloudConfig = async (devId: string, groupId: string) => {
  // 获取配置缓存数据
  try {
    return LampApi.getAllCloudConfig(devId, groupId).then(data => {
      const result: any = {};
      Object.keys(data).forEach(key => {
        const target = data[key];
        result[key] = { status: 1, type: SyncType.UPDATE, data: target };
      });
      StorageUtils.setDevItem(LOCAL_DATA_KEY, result);
      return formateCacheData(result);
    });
  } catch (err) {
    console.log('getAllCloudConfig', err);
  }
};

export default LampApi;
