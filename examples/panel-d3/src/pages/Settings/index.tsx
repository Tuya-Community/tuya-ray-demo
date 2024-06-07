import React, { FC } from 'react';
import { ScrollView, View } from '@ray-js/components';
import { useHideMenuButton } from '@/hooks';
import { useSelector } from 'react-redux';
import { selectSafeArea } from '@/redux/modules/systemInfoSlice';
import { TopBar } from '@/components';
import Strings from '@/i18n';

import styles from './index.module.less';
import Device from './Device';
import Features from './Features';

const Settings: FC = () => {
  const safeArea = useSelector(selectSafeArea);

  useHideMenuButton();

  return (
    <View className={styles.container} style={{ paddingTop: `${safeArea?.top ?? 48}px` }}>
      <TopBar title={Strings.getLang('dsc_settings')} />
      <View className={styles.scrollWrapper}>
        <Device />
        <View className={styles.divider} />
        <Features />
      </View>
    </View>
  );
};

export default Settings;
