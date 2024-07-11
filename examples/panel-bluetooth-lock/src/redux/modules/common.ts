import {
  DEVICE_INFO_CHANGE,
  DEV_INFO_CHANGE,
  RESPONSE_UPDATE_DP,
  SET_USER_REGION,
  GET_LAST_LOG,
  GET_USER,
  GET_PANEL_INFO,
  SET_DEVICE_PROPS,
  GET_DEVICE_PROPS,
  SET_LOCK_DATA
} from '@/constant';
import { formatDevSchema } from '@/utils';
import { createAction, handleActions } from 'redux-actions';

export type Actions = {
  [K in keyof typeof actions]: ReturnType<typeof actions[K]>;
};
export type DpValue = boolean | number | string;

/**
 * actions
 */

const devInfoChange = (devInfo: DevInfo) => {
  return {
    type: DEV_INFO_CHANGE,
    payload: devInfo,
  };
};

const deviceChange = (devInfo: DevInfo) => {
  return { type: DEVICE_INFO_CHANGE, payload: devInfo };
};

const responseUpdateDp = (dpData: Record<string, any>) => {
  return { type: RESPONSE_UPDATE_DP, payload: dpData };
};

export const userRegionChange = createAction(SET_USER_REGION);
export const getLastLog = createAction(GET_LAST_LOG);
export const getUser = createAction(GET_USER);
export const getPanelInfo = createAction(GET_PANEL_INFO);
export const getDeviceProp = createAction(GET_DEVICE_PROPS);
export const setDeviceProp = createAction(SET_DEVICE_PROPS);
export const setLockData = createAction(SET_LOCK_DATA);

export const actions = {
  devInfoChange,
  deviceChange,
  responseUpdateDp,
  userRegionChange,
  getLastLog,
  getUser,
  getPanelInfo,
  getDeviceProp,
  setDeviceProp,
  setLockData
};

/**
 * reducers
 */
const dpState = (state = {}, action) => {
  switch (action.type) {
    case DEV_INFO_CHANGE: {
      const { state: devState } = formatDevSchema(action.payload);
      return {
        ...state,
        ...devState,
      };
    }

    case RESPONSE_UPDATE_DP:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const devInfo = (state = {}, action) => {
  switch (action.type) {
    case DEV_INFO_CHANGE: {
      const { arrSchema, schema, state: devState } = formatDevSchema(action.payload);

      return {
        ...state,
        ...action.payload,
        schema,
        arrSchema,
        state: devState,
      };
    }

    case DEVICE_INFO_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const userRegion = handleActions(
  {
    [SET_USER_REGION]: (_, action) => {
      const data = action.payload;
      return data;
    },
  },
  ''
);

const lastLog = handleActions(
  {
    [GET_LAST_LOG]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  { exist: false, unReadCount: 0 }
);

const user = handleActions(
  {
    [GET_USER]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  {
    lockUserId: 0,
    userId: 0,
  }
);

const lockData = handleActions(
  {
    [SET_LOCK_DATA]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  {
    lockRandom: {
      distributed: false,
      devUnlockId: '0',
      ins: '0',
      wakeUpIns: '0',
    },
    t0Time: 0,
  }
);

const deviceProps = handleActions(
  {
    [SET_DEVICE_PROPS]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  {
    remoteSwitch: false,
    bleOnlineState: false
  }
);

const panelInfo = handleActions(
  {
    [GET_PANEL_INFO]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  {}
);

export const reducers = {
  dpState,
  devInfo,
  userRegion,
  lastLog,
  user,
  panelInfo,
  lockData,
  deviceProps
};
