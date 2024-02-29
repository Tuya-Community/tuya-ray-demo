import { getLaunchOptionsSync } from '@ray-js/ray';

const launchOptions = getLaunchOptionsSync();

export const getCachedLaunchOptions = () => {
  return launchOptions;
};
