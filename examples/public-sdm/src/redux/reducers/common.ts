import { SYSTEM_INFO } from '@/constant';
import { actions } from '../actions/common';

export type Actions = {
  [K in keyof typeof actions]: ReturnType<typeof actions[K]>;
};

/**
 * reducers
 */
const appInfoDefaultState = {
  statusBarHeight: 0,
  screenHeight: 0,
};

const appInfo = (state = appInfoDefaultState, action) => {
  switch (action.type) {
    case SYSTEM_INFO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const reducers = {
  appInfo,
};
