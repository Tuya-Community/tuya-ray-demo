// 是否第一次配网

import { ReduxState } from '..';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Slice
 */
const temporaryPreferenceSlice = createSlice({
  name: 'temporaryPreference',
  initialState: { zone: false },
  reducers: {
    updateTemporaryPreference(state, action: PayloadAction<any>) {
      return { ...state, ...action.payload };
    },
  },
});

/**
 * Actions
 */
export const { updateTemporaryPreference } = temporaryPreferenceSlice.actions;

/**
 * Selectors
 */
export const selectTemporaryPreference = (state: ReduxState) => state.temporaryPreference;

export default temporaryPreferenceSlice.reducer;
