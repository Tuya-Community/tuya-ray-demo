/* eslint-disable no-console */
import { isNative } from '@ray-js/env';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { reducers as commonReducers } from './reducers/common';
import { reducers as theme } from './reducers/theme';

const reducers = {
  ...commonReducers,
  ...theme,
};

type Reducers = typeof commonReducers & typeof theme;

export type ReduxState = { [K in keyof Reducers]: ReturnType<Reducers[K]> };

export const rootReducers = combineReducers(reducers);

const isDebuggingInChrome = isNative && global.__DEV__ && !!window.navigator.userAgent;
const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

const middleware = isDebuggingInChrome ? [thunk, logger] : [thunk];

function configureStore(initialState?: Partial<ReduxState>) {
  const appliedMiddleware = applyMiddleware(...middleware);

  const store = createStore(rootReducers, initialState, compose(appliedMiddleware));
  return store;
}

export const store = configureStore();
