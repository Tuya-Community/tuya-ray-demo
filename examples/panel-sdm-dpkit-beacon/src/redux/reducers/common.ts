import { handleActions } from 'redux-actions';
import { actions } from '../actions/common';

export type Actions = {
  [K in keyof typeof actions]: ReturnType<typeof actions[K]>;
};

const uiState = handleActions<any>(
  {
    [actions.updateUi.toString()]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  {
    colorIndex: -1,
    whiteIndex: -1,
    currentTab: 'dimmer',
    customCloudAction: {},
    sliderLoading: true,
    themeColor: '#1082FE',
    topBarBackgroundColor: null,
    customColor: {
      colorMode: 0, // 白光模式
      hue: 0,
      saturation: 0,
      value: 0,
      brightness: 1000,
      temperature: 1000,
    },
  }
);

export const reducers = {
  uiState,
};
