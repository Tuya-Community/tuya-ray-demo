import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxState } from '..';

type AppInfo = {
  serverTimestamp: number;
  appVersion: string;
  language: string;
  countryCode: string;
  regionCode: string;
  appName: string;
  appIcon: string;
  appEnv?: number;
  appBundleId: string;
  appScheme: string;
  appId: string;
};

type AppInfoKey = keyof AppInfo;

/**
 * Slice
 */
const appInfoSlice = createSlice({
  name: 'systemInfo',
  initialState: {
    serverTimestamp: 0,
    appVersion: '',
    language: 'zh',
    countryCode: 'CN',
    regionCode: 'AY',
    appName: '',
    appIcon: '',
    appBundleId: '',
    appScheme: '',
    appId: '',
  } as AppInfo,
  reducers: {
    initializeAppInfo(state, action: PayloadAction<AppInfo>) {
      return action.payload;
    },
    updateAppInfo(state, action: PayloadAction<Partial<AppInfo>>) {
      Object.assign(state, action.payload);
    },
  },
});

/**
 * Actions
 */

export const { initializeAppInfo, updateAppInfo } = appInfoSlice.actions;

/**
 * Selectors
 */
export const selectAppInfo = (state: ReduxState) => state.appInfo;

type SelectSystemInfoByKey = <T extends AppInfoKey>(
  dpCode: T
) => (state: ReduxState) => AppInfo[T];
export const selectAppInfoByKey: SelectSystemInfoByKey = key => state => state.appInfo[key];

export default appInfoSlice.reducer;
