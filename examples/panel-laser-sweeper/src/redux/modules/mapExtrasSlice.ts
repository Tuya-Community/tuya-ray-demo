import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxState } from '..';

type MapExtras = {
  appointData: any[];
  virtualAreaData: any[];
  virtualMopAreaData: any[];
  sweepRegionData: any[];
  virtualWallData: any[];
  materialObjData: any[];
};

/**
 * Slice
 */
const mapExtrasSlice = createSlice({
  name: 'mapExtras',
  initialState: {
    appointData: [],
    virtualAreaData: [],
    virtualMopAreaData: [],
    sweepRegionData: [],
    virtualWallData: [],
    materialObjData: [],
  } as MapExtras,
  reducers: {
    mapExtrasUpdated(state, action: PayloadAction<Partial<MapExtras>>) {
      return { ...state, ...action.payload };
    },
  },
});

/**
 * Selectors
 */
export const selectMapExtraByKey = (key: keyof MapExtras) => (state: ReduxState) =>
  state.mapExtras[key];
export const selectMapExtras = (state: ReduxState) => state.mapExtras;

/**
 * Actions
 */
export const { mapExtrasUpdated } = mapExtrasSlice.actions;

export default mapExtrasSlice.reducer;
