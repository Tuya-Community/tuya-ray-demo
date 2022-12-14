/* eslint-disable @typescript-eslint/no-explicit-any */
import dpCodes from '@/config/dpCodes';
import { SendDpOption } from '@ray-js/tuya-dp-kit';
import { actions as CommonActions } from './actions/common';
import { store } from './store';

// 下发开关dp数据
export const putDpData = (dps: any, options?: SendDpOption, onSuccess?: (data: any) => void) => {
  const { dispatch } = store;
  dispatch(
    CommonActions.updateDp(dps, {
      ...options,
      onResponseMatched(res) {
        onSuccess && onSuccess(res);
      },
    })
  );
};

export default {
  putDpData,
  dpCodes,
};
