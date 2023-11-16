import React from 'react';
import { Text, View } from '@ray-js/ray';
import { TopBar } from '@/components';
import { IconFont } from '@/components/icon-font';
import styles from './index.module.less';

export function Home() {
  // const actions = useActions();

  return (
    <View className={styles.view}>
      <TopBar />
      <View
        className={styles.content}
        onClick={() => {
          // actions.switch_1.toggle();
        }}
      >
        <View className={styles['space-between']} style={{ marginTop: '50rpx' }}>
          <Text>Public SDM Template</Text>
          <IconFont icon="sun" />
        </View>
      </View>
    </View>
  );
}

export default Home;
