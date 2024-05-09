import Strings from '@/i18n';
import { PromisifyTTT } from '@ray-js/panel-sdk';
import { home, showToast } from '@ray-js/ray';

// @ts-expect-error
// eslint-disable-next-line prefer-destructuring
const getCurrentHomeInfoBase: PromisifyTTT<typeof home.getCurrentHomeInfo> =
  home.getCurrentHomeInfo;

export const getCurrentHomeInfo = (
  callback?: (res: GetTTTSuccessData<typeof home.getCurrentHomeInfo>) => void
) => {
  return getCurrentHomeInfoBase({})
    .then(res => {
      if (!res.admin) {
        showToast({
          title: Strings.getLang('adminTip'),
          icon: 'error',
        });
        return;
      }
      callback(res);
    })
    .catch(err => {
      showToast({
        title: Strings.getLang('requestFailed'),
        icon: 'error',
      });
    });
};
