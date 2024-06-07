import { createSlice } from '@reduxjs/toolkit';
import { devInfoChangeCreator } from '@ray-js/tuya-dp-kit';
import { ReduxState } from '..';
import { DpState, DpStateKey } from './dpStateSlice';

export type DpValue = boolean | number | string;

type ReduxDevInfo = DevInfo & {
  schema: Record<DpStateKey, any>;
  state: DpState;
  dpIdCodeMap: Record<number, DpStateKey>;
  dpCodeIdMap: Record<DpStateKey, number>;
};

/**
 * ExtraActions
 */
export const devInfoChange = devInfoChangeCreator<ReduxDevInfo>();

/**
 * Slice
 */
const devInfoSlice = createSlice({
  name: 'devInfo',
  initialState: {} as ReduxDevInfo,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(devInfoChange, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
  },
});

/**
 * Selectors
 */
export const selectDevInfo = (state: ReduxState) => state.devInfo;
/* 选择自定义dp key的集合 */
/* 记得用useSelectorMemoized */
export const selectCustomDpCodes = (state: ReduxState) =>
  Object.keys(state.devInfo.dpCodeIdMap).filter(dpCode => state.devInfo.dpCodeIdMap[dpCode] >= 100);
// 实际拿到的好像是devInfo.deviceOnline，这里可能要改
export const selectIsLocalOnline = (state: ReduxState) => state.devInfo.isLocalOnline;
export const selectIsOnline = (state: ReduxState) => state.devInfo.isOnline;

export default devInfoSlice.reducer;
