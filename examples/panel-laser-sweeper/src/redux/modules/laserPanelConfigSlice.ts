import { createSlice } from '@reduxjs/toolkit';
import { ReduxState } from '..';

const laserPanelConfigSlice = createSlice({
  name: 'laserPanelConfig',
  initialState: {
    forbiddenAreaConfig: {
      mapForbiddenAvailable: true,
      mapForbiddenSmartAvailable: false,
      pileConfig: {
        pileRingAvailable: true,
        ringBgColor: 'rgba(55, 200, 82, 0.1)',
      },
      sweepForbiddenArea: {
        sweepForbiddenBgColor: 'rgba(255, 68, 68, 0.05)',
        sweepForbiddenLineColor: 'rgba(255, 68, 68, 1)',
        sweepForbiddenMinWidth: 0.5,
      },
      mopForbiddenArea: {
        mopForbiddenAvailable: true,
        mopForbiddenBgColor: 'rgba(254, 138, 7, 0.2)',
        mopForbiddenLineColor: 'rgba(254, 138, 7, 1)',
      },
      virtualWall: {
        virtualWallLineColor: 'rgba(255, 68, 68, 1)',
      },
    },
    selectAreaConfig: {
      selectAreaBgColor: 'rgba(93, 104, 254, 0.1)',
      selectAreaLineColor: 'rgba(93, 104, 254, 1)',
    },
  },
  reducers: {
    initLaserPanelConfig(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    updateLaserPanelConfig(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const selectLaserPanelConfig = (state: ReduxState) => state.laserPanelConfig;

export default laserPanelConfigSlice.reducer;

export const { actions } = laserPanelConfigSlice;
export const { initLaserPanelConfig, updateLaserPanelConfig } = laserPanelConfigSlice.actions;
