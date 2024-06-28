import { UPDATE_UI } from '@/constant';
import { createAction } from 'redux-actions';

const updateUi = createAction(UPDATE_UI);

export const actions = {
  updateUi,
};
