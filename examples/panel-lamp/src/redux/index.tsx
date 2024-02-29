/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { useDispatch } from 'react-redux';
import uiStateSlice from './modules/uiStateSlice';
import cloudStateSlice from './modules/cloudStateSlice';

const isDev = process.env.NODE_ENV === 'development';

const logger = createLogger({
  predicate: () => isDev,
  collapsed: true,
  duration: true,
});

const middlewares = isDev ? [logger] : [];

const store = configureStore({
  reducer: {
    uiState: uiStateSlice,
    cloudState: cloudStateSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
});

export type ReduxState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
