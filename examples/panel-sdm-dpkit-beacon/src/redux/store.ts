import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { reducers as commonReducers } from './reducers/common';

const reducers = {
  ...commonReducers,
};

type Reducers = typeof reducers;

export type ReduxState = { [K in keyof Reducers]: ReturnType<Reducers[K]> };

export const rootReducers = combineReducers(reducers);

const isDebuggingInChrome = true;
const logger = createLogger({
  predicate: () => true,
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
