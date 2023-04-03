import { handleActions } from 'redux-actions';
import { toggleTheme } from '../actions/theme';

// Reducers
const theme = handleActions<any>(
  {
    [toggleTheme.toString()]: state => {
      return {
        ...state,
        type: state.type === 'dark' ? 'dark' : 'light',
      };
    },
  },
  {}
);

export const reducers = {
  theme,
};
