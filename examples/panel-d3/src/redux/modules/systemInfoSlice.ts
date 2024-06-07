import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxState } from '..';

/**
 * Slice
 */
const systemInfoSlice = createSlice({
  name: 'systemInfo',
  initialState: {} as SystemInfo,
  reducers: {
    updateSystemInfo(state, action: PayloadAction<Partial<SystemInfo>>) {
      return { ...state, ...action.payload };
    },
  },
});

/**
 * Actions
 */
export const { updateSystemInfo } = systemInfoSlice.actions;

/**
 * Selectors
 */
export const selectSafeArea = (state: ReduxState) => state.systemInfo.safeArea;

export const selectStaticPrefix = (state: ReduxState) => state.systemInfo.staticPrefix;

export default systemInfoSlice.reducer;
