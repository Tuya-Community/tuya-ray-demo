// 是否第一次配网

import { ReduxState } from '..';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Slice
 */
const customConfigSlice = createSlice({
  name: 'customConfig',
  initialState: {} as any,
  reducers: {
    setCustomConfig(state, action: PayloadAction<any>) {
      return { ...state, ...action.payload };
    },
    clearCustomConfig() {
      return {};
    },
  },
});

/**
 * Actions
 */
export const { setCustomConfig, clearCustomConfig } = customConfigSlice.actions;

/**
 * Selectors
 */
export const selectCustomConfig = (state: ReduxState) => state.customConfig;

export default customConfigSlice.reducer;
