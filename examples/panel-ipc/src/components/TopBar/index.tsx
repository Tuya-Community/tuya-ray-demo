import React from 'react';
import { Text, View } from '@ray-js/ray';
import { useSelector } from '@/redux';
import { useDevInfo } from '@ray-js/panel-sdk';

import Styles from './index.module.less';

const TopBar = () => {
  const { statusBarHeight } = useSelector(state => state.appInfo);
  const devInfo = useDevInfo();

  return (
    <View className={Styles.topBarWrap}>
      <View className={Styles.statusBar} style={{ height: `${statusBarHeight}px` }} />
      <View className={Styles.topBar}>
        <Text>{devInfo.name || ''}</Text>
      </View>
    </View>
  );
};

export default TopBar;
