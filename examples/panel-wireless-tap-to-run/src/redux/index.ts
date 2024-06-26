import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { useDispatch } from 'react-redux';

import uiStateReducers from './modules/uiStateSlice';
import sceneReducers from './modules/sceneSlice';

const isDev = process.env.NODE_ENV === 'development';

const logger = createLogger({
  predicate: () => isDev,
  collapsed: true,
  duration: true,
});

const middlewares = isDev ? [logger] : [];

const store = configureStore({
  reducer: {
    uiState: uiStateReducers,
    scene: sceneReducers,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
});

export type ReduxState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
