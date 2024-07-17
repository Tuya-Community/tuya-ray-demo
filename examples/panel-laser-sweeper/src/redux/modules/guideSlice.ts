// 是否第一次配网

import { RootState } from '@models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Slice
 */
const guideSlice = createSlice({
  name: 'showGuide',
  initialState: {
    isGuide: false,
    guideDone: false,
  },
  reducers: {
    updateIsGuide(state, action: PayloadAction<boolean>) {
      state.isGuide = action.payload;
    },
    updateGuideDone(state, action: PayloadAction<boolean>) {
      state.guideDone = action.payload;
    },
  },
});

/**
 * Actions
 */
export const { updateIsGuide, updateGuideDone } = guideSlice.actions;

/**
 * Selectors
 */
export const selectIsGuide = (state: RootState) => state.guide.isGuide;
export const selectGuideDone = (state: RootState) => state.guide.guideDone;

export default guideSlice.reducer;
