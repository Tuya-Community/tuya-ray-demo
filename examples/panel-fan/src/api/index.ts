import { syncTimerTask, addTimer, updateTimer, removeTimer, updateTimerStatus } from '@ray-js/ray';
import { DEFAULT_TIMING_CATEGORY } from '@/constant';
import { getDevId } from '@/utils';

/**
 * [getCategoryTimerList description]
 * @param  {[type]} category [description]
 * @param {Number | String}} bizId [设备id或群组id]
 * @return {[type]}          [description]
 * 获取某个分类下的定时
 * 支持群组定时
 */

export const fetchTimingsApi = (category = DEFAULT_TIMING_CATEGORY) => {
  try {
    return new Promise((resolve, reject) => {
      syncTimerTask({
        deviceId: getDevId(),
        category,
        success: response => {
          resolve(response);
        },
        fail: err => {
          reject(err);
        },
      });
    });
  } catch (err) {
    return Promise.reject(err);
  }
};

// 添加定时
export const addTimingApi = async (
  category = DEFAULT_TIMING_CATEGORY,
  params: ty.device.TimerModel
) => {
  try {
    return new Promise((resolve, reject) => {
      addTimer({
        deviceId: getDevId(),
        category,
        timer: params,
        success: response => {
          resolve(response);
        },
        fail: err => {
          reject(err);
        },
      });
    });
  } catch (err) {
    return Promise.reject(err);
  }
};

// 更新定时
export const updateTimingApi = async (params: ty.device.TimerModel) => {
  try {
    return new Promise((resolve, reject) => {
      updateTimer({
        deviceId: getDevId(),
        timer: params,
        success: response => {
          resolve(response);
        },
        fail: err => {
          reject(err);
        },
      });
    });
  } catch (err) {
    return Promise.reject(err);
  }
};

// 更新定时状态
export const updateTimingStatusApi = async (param: { timerId: string; status: boolean }) => {
  try {
    return new Promise((resolve, reject) => {
      updateTimerStatus({
        deviceId: getDevId(),
        timerId: param.timerId,
        status: param.status,
        success: response => {
          resolve(response);
        },
        fail: err => {
          reject(err);
        },
      });
    });
  } catch (err) {
    return Promise.reject(err);
  }
};

// 删除定时
export const removeTimingApi = async (param: { timerId: string }) => {
  try {
    return new Promise((resolve, reject) => {
      removeTimer({
        deviceId: getDevId(),
        timerId: param.timerId,
        success: response => {
          resolve(response);
        },
        fail: err => {
          reject(err);
        },
      });
    });
  } catch (err) {
    return Promise.reject(err);
  }
};