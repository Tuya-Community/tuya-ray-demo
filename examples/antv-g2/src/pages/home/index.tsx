import { location, router, usePageEvent } from 'ray';
import React from 'react';

import G2Chart from '@/components/g2-chart';
import { View } from '@ray-js/components';

import styles from './index.module.less';

export default function Home() {
  return (
    <View className={styles.view}>
      <G2Chart />
    </View>
  );
}
