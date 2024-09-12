import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { TypedUseSelectorHook, useSelector as useSelector1, useDispatch } from 'react-redux';
import systemInfoReducer from './modules/systemInfoSlice';
import commonReducer, { actions as commonInfoActions } from './modules/commonSlice';
import mapStateReducer from './modules/mapStateSlice';
import virtualStateReducer, { actions as virtualState } from './modules/virtualStateSlice';
import laserPanelConfigReducer, {
  actions as laserPanelConfig,
} from './modules/laserPanelConfigSlice';
import panelConfigReducer from './modules/panelConfigSlice';
import mapExtrasReducer from './modules/mapExtrasSlice';
import temporaryPreferenceReducer from './modules/temporaryPreferenceSlice';
import componentPositionReducer, {
  actions as componentPosition,
} from './modules/componentPositionSlice';
import customConfigReducer from './modules/customConfigSlice';

const isDev = process.env.NODE_ENV === 'development';

const logger = createLogger({
  predicate: () => isDev,
  collapsed: true,
  duration: true,
});

const middlewares = isDev ? [logger] : [];

const store = configureStore({
  reducer: {
    systemInfo: systemInfoReducer,
    commonInfo: commonReducer,
    mapState: mapStateReducer,
    laserPanelConfig: laserPanelConfigReducer,
    virtualState: virtualStateReducer,
    panelConfig: panelConfigReducer,
    mapExtras: mapExtrasReducer,
    componentPosition: componentPositionReducer,
    temporaryPreference: temporaryPreferenceReducer,
    customConfig: customConfigReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
});

export type ReduxState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useSelector: TypedUseSelectorHook<ReduxState> = useSelector1;

export const actions = {
  common: commonInfoActions,
  laserPanelConfig,
  virtualState,
  componentPosition,
};

export default store;
