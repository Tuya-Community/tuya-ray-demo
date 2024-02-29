/* eslint-disable no-param-reassign */
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxState } from '..';

type UiState = {
  /**
   * 收藏颜色中彩光当前选中的索引
   */
  colorIndex: number;
  /**
   * 收藏颜色中白光当前选中的索引
   */
  whiteIndex: number;
  /**
   * 断电记忆中的自定义颜色
   */
  customColor: {
    /**
     * 颜色模式，白光或彩光
     */
    colorMode: 'white' | 'colour';
    /**
     * 彩光中色相
     */
    hue: number;
    /**
     * 彩光中的饱和度
     */
    saturation: number;
    /**
     * 彩光中的亮度
     */
    value: number;
    /**
     * 白光中的亮度
     */
    brightness: number;
    /**
     * 白光中的色温
     */
    temperature: number;
  };
};

/**
 * Slice
 */
const uiStateSlice = createSlice({
  name: 'uiState',
  initialState: {
    colorIndex: -1,
    whiteIndex: -1,
    customColor: {
      colorMode: 'white',
      hue: 0,
      saturation: 0,
      value: 0,
      brightness: 1000,
      temperature: 1000,
    },
  } as UiState,
  reducers: {
    updateColorIndex(state, action: PayloadAction<UiState['colorIndex']>) {
      state.colorIndex = action.payload;
    },
    updateWhiteIndex(state, action: PayloadAction<UiState['whiteIndex']>) {
      state.whiteIndex = action.payload;
    },
    updateCustomColor(state, action: PayloadAction<Partial<UiState['customColor']>>) {
      const newCustomColor = { ...state.customColor, ...action.payload };
      let { colorMode } = action.payload;
      if (!colorMode) {
        const { brightness, temperature } = newCustomColor;
        colorMode = brightness === 0 && temperature === 0 ? 'colour' : 'white';
      }
      state.customColor = { ...newCustomColor, colorMode };
    },
  },
});

/**
 * Actions
 */
export const { updateColorIndex, updateWhiteIndex, updateCustomColor } = uiStateSlice.actions;

/**
 * Selectors
 */
export const selectColorIndex = (state: ReduxState) => state.uiState.colorIndex;
export const selectWhiteIndex = (state: ReduxState) => state.uiState.whiteIndex;
export const selectActiveIndex = createSelector(
  [
    (state: ReduxState) => state.uiState.whiteIndex,
    (state: ReduxState) => state.uiState.colorIndex,
    (_, isColor: boolean) => isColor,
  ],
  (whiteIndex, colorIndex, isColor) => {
    return isColor ? colorIndex : whiteIndex;
  }
);
export const selectCustomColor = (state: ReduxState) => state.uiState.customColor;

export default uiStateSlice.reducer;
