import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxState } from '..';

type Layout = {
  screen: { width: number; height: number };
  setting: { top: number; left: number; right: number; bottom: number };
  charge: { top: number; left: number; right: number; bottom: number };
  controller: { top: number; left: number; right: number; bottom: number };
  preference: { top: number; left: number; right: number; bottom: number };
  modeBtn: { top: number; left: number; right: number; bottom: number };
  modeBar: { top: number; left: number; right: number; bottom: number };
};

const componentPositionSlice = createSlice({
  name: 'componentPosition',
  initialState: {
    screen: { width: 375, height: 667 },
    setting: { top: 0, left: 0, right: 0, bottom: 0 },
    charge: { top: 0, left: 0, right: 0, bottom: 0 },
    controller: { top: 0, left: 0, right: 0, bottom: 0 },
    preference: { top: 0, left: 0, right: 0, bottom: 0 },
    modeBtn: { top: 0, left: 0, right: 0, bottom: 0 },
    modeBar: { top: 0, left: 0, right: 0, bottom: 0 },
  },
  reducers: {
    updatePosition: (state, action: PayloadAction<Partial<Layout>>) => {
      return Object.assign({}, state, action);
    },
  },
});

export const selectComponentPosition = (state: ReduxState) => state.componentPosition;

export default componentPositionSlice.reducer;
export const { actions } = componentPositionSlice;
