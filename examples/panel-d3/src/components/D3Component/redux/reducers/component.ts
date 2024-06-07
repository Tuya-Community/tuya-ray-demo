import { handleActions } from 'redux-actions';
import { initComponent, willUnmount } from '../actions/component';

const component = handleActions<any>(
  {
    [initComponent.toString()]: (state: any, action: any) => {
      const { componentId } = action.payload;
      return {
        ...state,
        [componentId]: action.payload,
      };
    },
    [willUnmount.toString()]: (state: any, action: any) => {
      const { componentId } = action.payload;
      // eslint-disable-next-line no-param-reassign
      delete state[componentId];
      return {
        ...state,
      };
    },
  },
  {}
);

export const reducers = {
  component,
};
