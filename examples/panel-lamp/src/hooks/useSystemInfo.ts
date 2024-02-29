import { useCallback, useState } from 'react';
import { useAppEvent, getSystemInfo } from '@ray-js/ray';
import { GetTTTSuccessData } from '@ray-js/panel-sdk';
import { getCachedSystemInfo } from '@/api/getCachedSystemInfo';

type SystemInfo = GetTTTSuccessData<typeof getSystemInfo>;

const systemInfo = getCachedSystemInfo();

export function useSystemInfo() {
  const [sysInfo, setSysInfo] = useState<SystemInfo>(systemInfo);

  const handleThemeChange = useCallback(data => {
    setSysInfo(curSysInfo => {
      const result = { ...curSysInfo, ...data };
      return result;
    });
  }, []);

  useAppEvent('onThemeChange', handleThemeChange);

  return sysInfo;
}
