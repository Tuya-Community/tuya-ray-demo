import { isNative } from '@ray-js/env';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { reducers as commonReducers } from './modules/common';
import { setCommonDispatch } from './actions';

const reducers = {
  ...commonReducers,
};

type Reducers = typeof commonReducers;

export type ReduxState = { [K in keyof Reducers]: ReturnType<Reducers[K]> };

export const rootReducers = combineReducers(reducers);

const isDebuggingInChrome = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test';

const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

const middleware = isDebuggingInChrome ? [thunk, logger] : [thunk];

function configureStore(initialState?: Partial<ReduxState>) {
  const appliedMiddleware = applyMiddleware(...middleware);

  const store = createStore(rootReducers, initialState, compose(appliedMiddleware));
  setCommonDispatch(store.dispatch);
  return store;
}

export const store = configureStore();
