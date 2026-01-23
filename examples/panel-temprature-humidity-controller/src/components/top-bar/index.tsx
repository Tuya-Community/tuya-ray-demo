import React from 'react';
import { useSelector } from 'react-redux';
import { View } from '@ray-js/ray';
import { selectSystemInfoByKey } from '@/redux/modules/systemInfoSlice';

import Styles from './index.module.less';
import clsx from 'clsx';

interface TopBarProps {
  className?: string;
  children?: React.ReactNode;
}

export const TopBar = (props: TopBarProps) => {
  const statusBarHeight = useSelector(selectSystemInfoByKey('statusBarHeight'));

  return (
    <View className={clsx(Styles.topBarWrap, props.className)}>
      <View className={Styles.statusBar} style={{ height: `${statusBarHeight}px` }} />
      <View className={Styles.topBar}>
        {props.children}
      </View>
    </View>
  );
};
