import { getSystemInfoSync } from '@ray-js/ray';

const systemInfo = getSystemInfoSync();

export const getCachedSystemInfo = () => {
  return (systemInfo ?? {}) as typeof systemInfo;
};
