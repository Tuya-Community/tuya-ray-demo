import React, { useMemo } from 'react';
import { View } from '@ray-js/ray';

import Res from '@/res';
import Strings from '@/i18n';
import { PanelList } from '@/components';
import { usePanelStore, useDpPermission } from '@/hooks';

import styles from './index.module.less';

const StatusBar = () => {
  const { dpAntiLockOutside, dpReverseLock } = useDpPermission();
  const { dpState } = usePanelStore();
  const { anti_lock_outside = false, reverse_lock = false, residual_electricity = 0 } = dpState;
  const panelListData = useMemo(() => {
    const data = [
      {
        key: dpAntiLockOutside && 'antiLockOutside',
        text: anti_lock_outside ? Strings.getLang('lifting') : Strings.getLang('notLift'),
        image: anti_lock_outside ? Res.liftedImage : Res.liftingImage,
      },
      {
        key: dpReverseLock && 'reverseLock',
        text: reverse_lock ? Strings.getLang('doubleLock') : Strings.getLang('notDoubleLock'),
        image: reverse_lock ? Res.unlockedImage : Res.unlockImage,
      },
    ].filter(item => !!item.key);
    return data;
  }, [dpAntiLockOutside, dpReverseLock, anti_lock_outside, reverse_lock]);

  if (panelListData.length) {
    return (
      <View className={styles.statusBar}>
        <PanelList data={panelListData} showBattery batteryValue={residual_electricity} />
      </View>
    );
  }
  return null;
};

export default StatusBar;
