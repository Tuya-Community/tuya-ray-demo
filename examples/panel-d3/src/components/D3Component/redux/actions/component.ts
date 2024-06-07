import { createAction } from 'redux-actions';

// Actions
export const initComponent = createAction('INIT_COMPONENT');
export const willUnmount = createAction('WILL_UNMOUNT');

export const actions = {
  initComponent,
  willUnmount,
};

export type Actions = {
  [K in keyof typeof actions]: ReturnType<(typeof actions)[K]>;
};
