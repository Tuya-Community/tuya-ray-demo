import { navigateTo } from '@ray-js/ray';
import { devices } from '@/devices';
import { getCachedLaunchOptions } from '@/api/getCachedLaunchOptions';
import { lampSchemaMap } from '@/devices/schema';

const { deviceId, groupId } = getCachedLaunchOptions()?.query ?? {};

export const openScheduleFunctional = async () => {
  const { support } = devices.lamp.model.abilities;
  const supportCountdown = support.isSupportDp(lampSchemaMap.countdown.code);
  const supportCloudTimer = support.isSupportCloudTimer();
  const supportRctTimer = false;
  const url = `functional://rayScheduleFunctional/home?deviceId=${deviceId ||
    ''}&groupId=${groupId ||
    ''}&cloudTimer=${supportCloudTimer}&rtcTimer=${supportRctTimer}&countdown=${supportCountdown}`;
  navigateTo({
    url,
    success(e) {
      console.log('navigateTo openScheduleFunctional success', e);
    },
    fail(e) {
      console.log('navigateTo openScheduleFunctional fail', e);
    },
  });
};
