import React, { useEffect } from 'react';
import { Text, View, getCurrentPages, getSystemInfoSync, router } from '@ray-js/ray';
import { icons } from '@/res';
import styles from './index.module.less';
import { Icon } from '../icon';

const systemInfo = getSystemInfoSync();

interface Props {
  title?: string;
  onBack?: () => void;
}

export const TopBar: React.FC<Props> = props => {
  const pages = getCurrentPages();
  return (
    <View className={styles.topBarWrap}>
      <View className={styles.statusBar} style={{ height: `${systemInfo.statusBarHeight}px` }} />
      <View className={styles.topBar}>
        {pages.length > 1 && (
          <View className={styles.icon} onClick={props.onBack || router.back}>
            <Icon d={icons.back} fill="#000" size="24px" viewBox="0 0 24 24" />
          </View>
        )}
        <Text>{props.title}</Text>
      </View>
    </View>
  );
};

TopBar.defaultProps = {
  title: '',
  onBack: undefined,
};
