/* eslint-disable no-param-reassign */
import { hideLoading, showLoading, showToast } from '@ray-js/ray';
import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import config from '@/config/default';
import { ReduxState } from '..';
import { CLOUD_DATA_KEYS_MAP } from '@/constant';
import { devices } from '@/devices';
import Strings from '@/i18n';

type CollectColors = Array<{
  hue?: number;
  saturation?: number;
  value?: number;
  temperature?: number;
  brightness?: number;
}>;

type CloudState = {
  /**
   * 收藏的彩光颜色列表
   */
  collectColors: Array<{ hue: number; saturation: number; value: number }>;
  /**
   * 收藏的白光颜色列表
   */
  collectWhites: Array<{ temperature: number; brightness: number }>;
};

/**
 * Slice
 */
const cloudStateSlice = createSlice({
  name: 'cloudState',
  initialState: {
    collectColors: config.defaultColors,
    collectWhites: config.defaultWhite,
  } as CloudState,
  reducers: {
    initCloud(_, action: PayloadAction<CloudState>) {
      return action.payload;
    },
    updateCollectColors(state, action: PayloadAction<CloudState['collectColors']>) {
      state.collectColors = action.payload;
    },
    updateCollectWhites(state, action: PayloadAction<CloudState['collectWhites']>) {
      state.collectWhites = action.payload;
    },
  },
});

/**
 * Actions
 */
export const { initCloud, updateCollectColors, updateCollectWhites } = cloudStateSlice.actions;

/**
 * Selectors
 */
export const selectCollectColours = (state: ReduxState) =>
  state.cloudState.collectColors || config.defaultColors;
export const selectCollectWhites = (state: ReduxState) =>
  state.cloudState.collectWhites || config.defaultWhite;
export const selectCollectColors = createSelector(
  [
    (state: ReduxState) => state.cloudState.collectWhites,
    (state: ReduxState) => state.cloudState.collectColors,
    (_, isColor: boolean) => isColor,
  ],
  (collectWhites, collectColors, isColor) => {
    const isSupportTemp = devices.lamp.model.abilities.support.isSupportTemp();
    if (isColor) return collectColors as CollectColors;
    if (isSupportTemp) return collectWhites as CollectColors;
    return config.defaultWhiteC as CollectColors;
  }
);

/**
 * Effects
 */
export const initCloudDataAsync = createAsyncThunk(
  'cloudState/initCloudDataAsync',
  async (__, thunkApi) => {
    showLoading({ title: '' });
    const storageKeys = [CLOUD_DATA_KEYS_MAP.collectColors, CLOUD_DATA_KEYS_MAP.collectWhites];
    return Promise.all(storageKeys.map(k => devices.lamp.model.abilities.storage.get(k)))
      .then(data => {
        // 在云端没有数据的情况下，使用默认值
        const cloudData = {
          [CLOUD_DATA_KEYS_MAP.collectColors]: [...config.defaultColors],
          [CLOUD_DATA_KEYS_MAP.collectWhites]: [...config.defaultWhite],
        } as Parameters<typeof initCloud>['0'];
        data.forEach((resp, i) => {
          const storageKey = storageKeys[i];
          const value = resp?.data?.value;
          if (typeof value !== 'undefined') {
            // @ts-ignore TODO: fix typing
            cloudData[storageKey] = resp?.data?.value;
          }
        });
        thunkApi.dispatch(initCloud(cloudData));
        hideLoading();
      })
      .catch(err => {
        hideLoading();
        showToast({ title: Strings.getLang('initCloudDataFailed') });
        console.log('storage.get failed', err);
      });
  }
);

export default cloudStateSlice.reducer;
