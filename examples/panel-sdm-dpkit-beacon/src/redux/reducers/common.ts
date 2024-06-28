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
  // init state
  {}
);

export const reducers = {
  uiState,
};
