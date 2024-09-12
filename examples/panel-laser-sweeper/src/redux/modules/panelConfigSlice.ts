import _ from 'lodash';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { panelConfig as defaultPanelConfig, dpCodes } from '@/config';

const panelConfigSlice = createSlice({
  name: 'panelConfig',
  initialState: defaultPanelConfig,
  reducers: {
    initIoTConfig(state, action) {
      return { ...state, iot: action.payload };
    },

    initBicConfig(state, action) {
      return { ...state, bic: action.payload };
    },

    initFunConfig(state, action) {
      return { ...state, fun: action.payload };
    },

    updateMiscConfig: (state, action: PayloadAction<Record<string, string>>) => {
      return {
        ...state,
        misc: {
          ...state.misc,
          ...action.payload,
        },
      };
    },

    initializedConfig: state => {
      return {
        ...state,
        initialized: true,
      };
    },
  },
});

export default panelConfigSlice.reducer;
export const { actions } = panelConfigSlice;
