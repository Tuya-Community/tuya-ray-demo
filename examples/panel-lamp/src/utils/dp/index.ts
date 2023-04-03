/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SendDpOption } from '@ray-js/tuya-dp-kit';
import { store } from '@/redux';
import { actions as CommonActions } from '@/redux/actions/common';
import { getDpIdByCode } from './putDpData';
import SupportUtils from '@/utils/SupportUtils';
import { putDpDataOrigin } from '@/utils/dp/putDpData';

import dpCodes from '@/config/dpCodes';
import dpMaps from './dpMaps';

// 下发dp数据
export const putDpData = (
  dps: Record<string, DpValue>,
  options?: SendDpOption,
  onSuccess?: (data: any) => void
) => {
  const { dispatch } = store;
  dispatch(
    CommonActions.updateDp(dps, {
      // immediate: !!SupportUtils.isGroupDevice(),
      immediate: true,
      ...options,
      onResponseMatched(res) {
        onSuccess && onSuccess(res);
      },
    })
  );
};

export default {
  putDpData,
  putDpDataOrigin,
  dpCodes,
  dpMaps,
  getDpIdByCode,
};
