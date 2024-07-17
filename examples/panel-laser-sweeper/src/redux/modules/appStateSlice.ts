import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@models';
import { AppStateStatus } from 'react-native';

/**
 * Slice
 */
const appStateSlice = createSlice({
  name: 'appState',
  initialState: 'active' as AppStateStatus,
  reducers: {
    appStateUpdated(state, action: PayloadAction<AppStateStatus>) {
      return action.payload;
    },
  },
});

/**
 * Selectors
 */
export const selectAppState = (state: RootState) => state.appState;

/**
 * Actions
 */
export const { appStateUpdated } = appStateSlice.actions;

export default appStateSlice.reducer;
