import { DEV_INFO_CHANGE, RESPONSE_UPDATE_DP, INIT_DP_STATE } from '@/constant';
import { SmartDeviceModel, SmartDeviceModelNetwork } from '@tuya-miniapp/sdm';
import { handleActions } from 'redux-actions';
import { devices } from '@/devices';
import { actions } from '../actions/common';
import { store } from '../store';

export type Actions = {
  [K in keyof typeof actions]: ReturnType<typeof actions[K]>;
};

const dpState = (state = {}, action) => {
  switch (action.type) {
    case DEV_INFO_CHANGE: {
      return {
        ...state,
        ...action.payload.state,
      };
    }
    case INIT_DP_STATE: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case RESPONSE_UPDATE_DP: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
const devInfo = (state = {}, action) => {
  switch (action.type) {
    case DEV_INFO_CHANGE: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default:
      return state;
  }
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
    currentTab: 'colour',
  }
);

const cloudState = handleActions<any>(
  {
    [actions.updateCloud.toString()]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  {
    collectColors: [
      { hue: 0, saturation: 1000, value: 1000 },
      { hue: 120, saturation: 1000, value: 1000 },
      { hue: 240, saturation: 1000, value: 1000 },
    ],
    collectWhites: [
      { temperature: 1000, brightness: 1000 },
      { temperature: 500, brightness: 1000 },
      { temperature: 0, brightness: 1000 },
    ],
  }
);
export const reducers = {
  devInfo,
  dpState,
  uiState,
  cloudState,
};
