import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { devInfoChangeCreator } from '@ray-js/tuya-dp-kit';
import { DevInfo } from 'tuya-panel-kit';

type UpdateDevInfoPayload = DevInfo;

/**
 * ExtraActions
 */
export const devInfoChange = devInfoChangeCreator<UpdateDevInfoPayload>();

/**
 * Slice
 */
const devInfoSlice = createSlice({
  name: 'devInfo',
  initialState: {} as DevInfo,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(devInfoChange, (state, action) => ({ ...state, ...action.payload }));
  },
});

export default devInfoSlice.reducer;
