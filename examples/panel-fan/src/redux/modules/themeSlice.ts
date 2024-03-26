import { get, merge } from 'lodash';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { theme as localTheme } from '../../config';
import { ReduxState } from '..';

type Theme = typeof localTheme;
type ToggleThemePayload = 'light' | 'dark' | undefined;

/**
 * Slice
 */
const themeSlice = createSlice({
  name: 'theme',
  initialState: localTheme as Theme,
  reducers: {
    toggleTheme(state, action: PayloadAction<ToggleThemePayload>) {
      if (action.payload) {
        state.type = action.payload;
      } else {
        state.type = state.type === 'light' ? 'dark' : 'light';
      }
    },
    updateTheme(state, action: PayloadAction<Theme>) {
      return merge(state, action.payload) as Theme;
    },
    updateThemeColor(state, action: PayloadAction<string>) {
      state.global.brand = action.payload;
    },
  },
});

/**
 * Actions
 */
export const { toggleTheme, updateTheme, updateThemeColor } = themeSlice.actions;

/**
 * Selectors
 */

type SelectTheme = (path: string) => (state: ReduxState) => string | number | undefined;

export const selectTheme: SelectTheme = path => state => get(state.theme, path);

export const selectThemeColor = (state: ReduxState) => state.theme.global.brand;

export default themeSlice.reducer;
