/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LIGHT_COLOR_DATA } from '@/constant';

import { ReduxState } from '..';

type CloudState = {
  [LIGHT_COLOR_DATA]: { [key: string]: string };
};

const cloudStateSlice = createSlice({
  name: 'cloudState',
  initialState: {
    [LIGHT_COLOR_DATA]: {},
  } as CloudState,
  reducers: {
    updateLightColorData(state, action: PayloadAction<CloudState[typeof LIGHT_COLOR_DATA]>) {
      state[LIGHT_COLOR_DATA] = {
        ...state[LIGHT_COLOR_DATA],
        ...action.payload,
      };
    },
  },
});

/**
 * Actions
 */
export const { updateLightColorData } = cloudStateSlice.actions;
/**
 * Selectors
 */
export const selectCloudState = (state: ReduxState) => state.cloudState;
export const selectLightColorData = (state: ReduxState) => state.cloudState[LIGHT_COLOR_DATA];

export default cloudStateSlice.reducer;
