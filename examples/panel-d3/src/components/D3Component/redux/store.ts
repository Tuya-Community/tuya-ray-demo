import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { reducers as indoorMap } from './reducers/component';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const reducers = {
  ...indoorMap,
};

type Reducers = typeof reducers;

export type ReduxState = { [K in keyof Reducers]: ReturnType<Reducers[K]> };

export const rootReducers = combineReducers(reducers);

const epicMiddleware = createEpicMiddleware();

// const isDebuggingInChrome = isNative && __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  // predicate: () => isDebuggingInChrome,
  predicate: () => true,
  collapsed: true,
  duration: true,
});

// const middleware = isDebuggingInChrome ? [epicMiddleware, logger] : [epicMiddleware];
const middleware =
  process.env.NODE_ENV === 'development'
    ? [thunk, epicMiddleware, logger]
    : [thunk, epicMiddleware];
// const middleware = [thunk, epicMiddleware];

function configureStore(initialState?: Partial<ReduxState>) {
  const appliedMiddleware = applyMiddleware(...middleware);

  const store = createStore(rootReducers, initialState, compose(appliedMiddleware));

  return store;
}

export const store = configureStore();
