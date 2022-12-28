// src/redux/actions/network.ts
import { SmartDeviceModelProp } from '@tuya-miniapp/sdm';
import { updateDpCreator } from '@ray-js/tuya-dp-kit';
import {
  DEV_INFO_CHANGE,
  RESPONSE_UPDATE_DP,
  UPDATE_CLOUD,
  UPDATE_UI,
  INIT_DP_STATE,
} from '@/constant';
import { createAction } from 'redux-actions';

const updateDp = updateDpCreator<Partial<DpState>>();
const updateCloud = createAction(UPDATE_CLOUD);
const updateUi = createAction(UPDATE_UI);
const initDp = createAction(INIT_DP_STATE);

type UpdatePayload = Partial<SmartDeviceModelProp>;

const devInfoChange = (payload: UpdatePayload) => {
  return {
    type: DEV_INFO_CHANGE,
    payload,
  };
};

const responseUpdateDp = (payload: UpdatePayload) => {
  return {
    type: RESPONSE_UPDATE_DP,
    payload,
  };
};

export const actions = {
  devInfoChange,
  responseUpdateDp,
  updateDp,
  updateUi,
  updateCloud,
  initDp,
};
