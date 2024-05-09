import React from 'react';
import { useSelector } from 'react-redux';
import { Text, View } from '@ray-js/ray';
import { useDevice } from '@ray-js/panel-sdk';
import { selectSystemInfoByKey } from '@/redux/modules/systemInfoSlice';

import Styles from './index.module.less';

export const TopBar = ({ title, style }: { title?: string; style?: React.CSSProperties }) => {
  const statusBarHeight = useSelector(selectSystemInfoByKey('statusBarHeight'));
  const devInfo = useDevice(device => device.devInfo);

  return (
    <View className={Styles.topBarWrap} style={style}>
      <View className={Styles.statusBar} style={{ height: `${statusBarHeight}px` }} />
      <View className={Styles.topBar}>
        <Text>{title ?? (devInfo.name || '')}</Text>
      </View>
    </View>
  );
};
