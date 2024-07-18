import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

const devInfoSlice = createSlice({
  name: 'devInfo',
  initialState: {
    devId: '',
  },
  reducers: {
    devInfoChange(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { actions } = devInfoSlice;
export const { devInfoChange } = devInfoSlice.actions;
export default devInfoSlice.reducer;
