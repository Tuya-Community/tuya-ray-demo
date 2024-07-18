// 是否第一次配网

import { RootState } from '@models';

import { createSlice, PayloadAction, ThunkAction } from '@reduxjs/toolkit';
import * as devPropertyApi from '@api/devProperty';
import _ from 'lodash';
import { AnyAction } from 'redux';

type DevProperty = {
  /**
   * 简易模式
   */
  // easyMode: boolean;
  easyMode: string;
};

// TODO check这里这里的thunk功能有没有问题以及补全ts

/**
 * thunk
 */
export const getDevPropertys = (
  codes: string[] | string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return dispatch => {
    const promise = _.isArray(codes)
      ? codes.map(code => devPropertyApi.getDeviceCloudData(code))
      : (devPropertyApi.getDeviceCloudData(codes) as any);
    Promise.allSettled(promise).then(res => {
      let obj = {};
      _.forEach(res, item => {
        const { status, value } = item;
        if (status === 'fulfilled') {
          obj = Object.assign(obj, value);
        }
      });
      dispatch(updateDevProperty(obj));
    });
  };
};

export const saveDevProperty = (
  code: string,
  value: string | number | boolean
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async dispatch => {
    try {
      dispatch(updateDevProperty({ [code]: value }));
    } catch (error) {
      console.log('saveDevPropertys error', error);
      // TODO, 是否添加重试，还是缓存
    }
  };
};

/**
 * 存储设备属性本地缓存版本
 */
export const saveDevPropertyStorage = (
  code: string,
  value: string | number | boolean
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async dispatch => {
    try {
      await devPropertyApi.saveDeviceCloudData(code, value);
      dispatch(updateDevProperty({ [code]: value }));
    } catch (error) {
      console.log('saveDevPropertys error', error);
      // TODO, 是否添加重试，还是缓存
    }
  };
};
export const getDevPropertysStorage = (
  code: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async dispatch => {
    try {
      const data = (await devPropertyApi.getDeviceCloudData(code)) as any;
      dispatch(updateDevProperty({ [code]: data }));
    } catch (error) {
      console.log('getDevPropertysStorage error', error);
    }
  };
};

/**
 * Slice
 */
const devPropertySlice = createSlice({
  name: 'devProperty',
  initialState: {
    easyMode: 'no',
  } as DevProperty,
  reducers: {
    updateDevProperty(state, action: PayloadAction<any>) {
      return { ...state, ...action.payload };
    },
  },
});

/**
 * Actions
 */
export const { updateDevProperty } = devPropertySlice.actions;

/**
 * Selectors
 */
export const selectDevProperty = (state: RootState) => state.devProperty;

type SelectDevProperty = (code: string) => (state: RootState) => string | number | undefined;

export const selectDevPropertyByCode: SelectDevProperty = code => state =>
  _.get(state.devProperty, code);

export default devPropertySlice.reducer;
