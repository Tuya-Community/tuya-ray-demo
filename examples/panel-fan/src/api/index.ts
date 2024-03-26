import { apiRequestByAtop } from '@ray-js/ray';
import { DEFAULT_TIMING_CATEGORY } from '@/constant';
import { getDevId } from '@/utils';
import { kit } from '@ray-js/panel-sdk';
import { requestCloud } from '@ray-js/api';
import { EntityId } from '@reduxjs/toolkit';
import { decode } from 'js-base64';

const { getDevInfo } = kit;

const apiRequest = async <T>(params: { api: string; version?: string; data: any }): Promise<T> => {
  // 匿名化要求 - 带上tuya前缀
  params.api = `${decode('dHV5YQ==')}.${params.api}`;

  const response = (await requestCloud(params)) as unknown as T;

  if (typeof response === 'string') {
    return JSON.parse(response);
  }

  return response;
};

/**
 * [getOssUrl description]
 * 获取静态域名地址
 * 支持群组定时
 */
export const getOssUrl = () => {
  return new Promise((resolve, reject) => {
    apiRequestByAtop({
      api: `${decode('dHV5YQ==')}.m.app.panel.url.get`,
      version: '1.0',
      postData: {},
      success: response => resolve(response),
      fail: error => reject(error),
      complete: result => {
        console.log('apiRequestByAtop', `${decode('dHV5YQ==')}.m.app.panel.url.get`, result);
      },
    });
  });
};
/**
 * [getCategoryTimerList description]
 * @param  {[type]} category [description]
 * @param {Number | String}} bizId [设备id或群组id]
 * @param {Boolean}} isGroup [是否是群组id]
 * @return {[type]}          [description]
 * 获取某个分类下的定时
 * 支持群组定时
 */

export const fetchTimingsApi = async (category = DEFAULT_TIMING_CATEGORY, isGroup = false) => {
  try {
    const response = await apiRequest<IQueryTimerTasksResponse>({
      api: 'm.clock.dps.list',
      version: '1.0',
      data: {
        bizType: isGroup ? '1' : '0',
        bizId: getDevId(),
        category,
      },
    });
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
};

// 添加定时
export const addTimingApi = async (params: IAndSingleTime) => {
  try {
    const response = await apiRequest<EntityId>({
      api: 'm.clock.dps.add',
      version: '1.0',
      data: params,
    });
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
};

// 更新定时
export const updateTimingApi = async (params: IModifySingleTimer) => {
  try {
    const response = await apiRequest<boolean>({
      api: 'm.clock.dps.update',
      version: '1.0',
      data: params,
    });
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
};

// 删除定时
export const updateStatusOrDeleteTimingApi = async (param: { ids: string; status: 0 | 1 | 2 }) => {
  const { groupId: devGroupId, devId } = getDevInfo();
  const defaultParams = {
    bizType: devGroupId ? '1' : '0',
    bizId: devId,
  };
  try {
    const response = await apiRequest<boolean>({
      api: 'm.clock.batch.status.update',
      version: '1.0',
      data: { ...defaultParams, ...param },
    });
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
};
