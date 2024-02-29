import { getCachedLaunchOptions } from '@/api/getCachedLaunchOptions';
import { navigateTo } from '@ray-js/ray';

const { deviceId, groupId } = getCachedLaunchOptions()?.query ?? {};

export const openPlayCoolFunctional = () => {
  const url = `functional://rayPlayCoolFunctional/home?deviceId=${deviceId ||
    ''}&groupId=${groupId || ''}`;
  navigateTo({
    url,
    success(e) {
      console.log('navigateTo openPlayCoolFunctional success', e);
    },
    fail(e) {
      console.log('navigateTo openPlayCoolFunctional fail', e);
    },
  });
};
