import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getSystemInfoSync } from '@ray-js/ray';
import { ReduxState } from '..';

type SystemInfo = ReturnType<typeof getSystemInfoSync>;
type SystemInfoKey = keyof SystemInfo;

/**
 * Slice
 */
const systemInfoSlice = createSlice({
  name: 'systemInfo',
  initialState: {
    statusBarHeight: 0,
    screenHeight: 0,
  } as SystemInfo,
  reducers: {
    initializeSystemInfo(state, action: PayloadAction<SystemInfo>) {
      return action.payload;
    },
    updateSystemInfo(state, action: PayloadAction<Partial<SystemInfo>>) {
      Object.assign(state, action.payload);
    },
  },
});

/**
 * Actions
 */

export const { initializeSystemInfo, updateSystemInfo } = systemInfoSlice.actions;

/**
 * Selectors
 */
export const selectSystemInfo = (state: ReduxState) => state.systemInfo;

type SelectSystemInfoByKey = <T extends SystemInfoKey>(
  dpCode: T
) => (state: ReduxState) => SystemInfo[T];
export const selectSystemInfoByKey: SelectSystemInfoByKey = key => state => state.systemInfo[key];

export default systemInfoSlice.reducer;
