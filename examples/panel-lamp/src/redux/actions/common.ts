import { UPDATE_CLOUD, UPDATE_UI } from '@/constant';
import { createAction } from 'redux-actions';

const updateCloud = createAction(UPDATE_CLOUD);
const updateUi = createAction(UPDATE_UI);

export const actions = {
  updateUi,
  updateCloud,
};
