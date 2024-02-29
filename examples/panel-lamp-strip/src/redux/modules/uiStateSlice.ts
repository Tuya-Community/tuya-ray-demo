/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxState } from '..';

/** 涂抹类型 */
enum SmearMode {
  all,
  single,
  clear,
}
enum DimmerMode {
  white,
  colour,
  colourCard,
  combination,
}
enum EActionType {
  Dimmer = 'dimmer',
  Scene = 'scene',
  Music = 'music',
  Clip = 'clip',
  Timer = 'timer',
  More = 'more',
}

type UiState = {
  currentTab: EActionType;
  themeColor: string;
  smearType: SmearMode;
  dimmerType: DimmerMode;
  deviceInfo: DevInfo;
};

const uiStateSlice = createSlice({
  name: 'uiState',
  initialState: {
    currentTab: EActionType.Dimmer,
    themeColor: '#1082FE',
    smearType: SmearMode.single,
    dimmerType: DimmerMode.colour,
    deviceInfo: {} as DevInfo,
  } as UiState,
  reducers: {
    updateCurrentTab(state, action: PayloadAction<UiState['currentTab']>) {
      state.currentTab = action.payload;
    },
    updateDeviceInfo(state, action: PayloadAction<UiState['deviceInfo']>) {
      state.deviceInfo = action.payload;
    },
    updateThemeColor(state, action: PayloadAction<UiState['themeColor']>) {
      state.themeColor = action.payload;
    },
    updateSmearType(state, action: PayloadAction<UiState['smearType']>) {
      state.smearType = action.payload;
    },
    updateDimmerType(state, action: PayloadAction<UiState['dimmerType']>) {
      state.dimmerType = action.payload;
    },
  },
});

/**
 * Actions
 */
export const {
  updateCurrentTab,
  updateDeviceInfo,
  updateThemeColor,
  updateSmearType,
  updateDimmerType,
} = uiStateSlice.actions;
/**
 * Selectors
 */
export const selectThemeColor = (state: ReduxState) => state.uiState.themeColor;
export const selectCurrentTab = (state: ReduxState) => state.uiState.currentTab;
export const selectSmearType = (state: ReduxState) => state.uiState.smearType;
export const selectDimmerType = (state: ReduxState) => state.uiState.dimmerType;
export const selectDeviceInfo = (state: ReduxState) => state.uiState.deviceInfo;

export default uiStateSlice.reducer;
