import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxState } from '..';

const commonInfoSlice = createSlice({
  name: 'commonInfo',
  initialState: {
    // 是否要展示新人引导
    showGuide: undefined,
    // 新人引导是否完成
    guideDone: false,
    // 静态资源前缀
    staticPrefix: '',
    // 临时清洁偏好是否可点击
    zone: false,
    // 缓存reginCode，后续获取图片cdn地址时会使用
    regionCode: 'EU',
    areaInfo: '',
    panelConfig: {
      iot: {
        themeColor: '#000',
        fontColor: '#999',
      },
    },
  },
  reducers: {
    updateShowGuide(state, action: PayloadAction<boolean>) {
      state.showGuide = action.payload;
    },

    updateGuideDone(state, action: PayloadAction<boolean>) {
      state.guideDone = action.payload;
    },

    initStaticPrefix(state, action: PayloadAction<string>) {
      state.staticPrefix = action.payload;
    },

    updateArea(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    updateRegionCode(state, action) {
      state.regionCode = action.payload;
    },
    updateTemporaryPreference(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const selectCommonInfo = (state: ReduxState) => state.commonInfo;
export const selectStaticPrefix = (state: ReduxState) => state.commonInfo.staticPrefix;
export default commonInfoSlice.reducer;
export const { actions } = commonInfoSlice;
export const { initStaticPrefix } = commonInfoSlice.actions;
