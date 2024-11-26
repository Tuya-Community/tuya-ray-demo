import React from 'react';
import { Text, View, getCurrentPages, getSystemInfoSync, router } from '@ray-js/ray';
import { Icon } from '@ray-js/smart-ui';
import { Left } from '@tuya-miniapp/icons';
import styles from './index.module.less';

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
            <Icon name={Left} color="#000" size="24px" />
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
