import { navigateTo } from '@ray-js/ray';
import { getCachedLaunchOptions } from '@/api/getCachedLaunchOptions';

const { deviceId, groupId } = getCachedLaunchOptions()?.query ?? {};

export const openRhythmFunctional = () => {
  const url = `functional://rayRhythmFunctional/home?deviceId=${deviceId || ''}&groupId=${groupId ||
    ''}`;
  navigateTo({
    url,
    success(e) {
      console.log('navigateTo openRhythmFunctional success', e);
    },
    fail(e) {
      console.log('navigateTo openRhythmFunctional fail', e);
    },
  });
};
