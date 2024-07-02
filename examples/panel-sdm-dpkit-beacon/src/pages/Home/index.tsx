import React from 'react';

import { TopBar } from '@/components';
import { Header } from '@/components/Header';
import { useSelector } from '@/redux';
import { useDevInfo } from '@ray-js/panel-sdk';
import { ScrollView, View, getSystemInfoSync } from '@ray-js/ray';

import { Light } from '../../components/Light';
import styles from './index.module.less';

export function Home() {
  const systemInfo = getSystemInfoSync();

  const devInfo = useDevInfo();
  const topBarBackgroundColor = useSelector(state => state?.uiState?.topBarBackgroundColor);
  let title = devInfo?.name;

  return (
    <View className={styles.contain} style={{ paddingTop: systemInfo?.statusBarHeight * 2 }}>
      <View className={styles.topBg} style={{ background: topBarBackgroundColor }}></View>
      <TopBar style={{ zIndex: 1 }} cancelType="icon" title={title} />
      <ScrollView scrollY refresherTriggered={false} className={styles.content}>
        <Header style={{ background: 'transparent' }} />
        <View
          style={{
            paddingTop: '128rpx',
            flexGrow: 1,
            height: '100%',
          }}
        >
          <Light />
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
