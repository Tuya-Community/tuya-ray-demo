import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

export interface ThemeColor {
  colors: {
    [color: string]: string;
  };
  // eslint-disable-next-line camelcase
  color_alpha: {
    [alpha: string]: number;
  };
  corner: {
    [alpha: string]: string;
  };
  font: {
    [alpha: string]: string;
  };
}

/**
 * Slice
 */
const appThemeSlice = createSlice({
  name: 'appTheme',
  initialState: {} as ThemeColor,
  reducers: {
    updateAppTheme(state, action: PayloadAction<Partial<ThemeColor>>) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

/**
 * Actions
 */
export const { updateAppTheme } = appThemeSlice.actions;

export default appThemeSlice.reducer;
