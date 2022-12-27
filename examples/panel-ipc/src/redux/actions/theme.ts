import { createAction } from 'redux-actions';

export type ToggleThemePayload = { type: 'light' | 'dark' };

// Actions
export const toggleTheme = createAction<ToggleThemePayload>('TOGGLE_THEME');
export const updateTheme = createAction('UPDATE_THEME');

export const actions = {
  toggleTheme,
  updateTheme,
};

export type Actions = {
  [K in keyof typeof actions]: ReturnType<typeof actions[K]>;
};
