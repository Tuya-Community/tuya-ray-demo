import { DEV_INFO_CHANGE, RESPONSE_UPDATE_DP } from '@/constant';
import { handleActions } from 'redux-actions';
import { actions } from '../actions/common';

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
      { temperature: 0, brightness: 1000 },
      { temperature: 500, brightness: 1000 },
      { temperature: 1000, brightness: 1000 },
    ],
  }
);
export const reducers = {
  dpState,
  uiState,
  cloudState,
};
