import React, { useCallback } from 'react';
import { openPanel } from '@ray-js/ray';
import { useSelector } from '@/redux';

const useOpenPanel = () => {
  const devInfo = useSelector(state => state.devInfo);

  const openRNPanel = useCallback(
    (uiId, extraInfo) => {
      if (!uiId) return;
      openPanel({
        deviceId: devInfo.devId,
        extraInfo: {
          productId: devInfo.productId,
          bizClientId: uiId,
          productVersion: '1.0.0',
          i18nTime: '12344',
          uiType: 'RN',
        },
        initialProps: {
          ...extraInfo,
        },
      });
    },
    [devInfo]
  );

  return { openRNPanel };
};

export default useOpenPanel;
