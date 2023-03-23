import React from 'react';
import { setNavigationBarTitle, View } from '@ray-js/ray';
import { useDevice, useActions } from '@ray-js/panel-sdk';
import { TopBar } from '@/components';
import styles from './index.module.less';

export function Home() {
  const deviceName = useDevice(d => d.devInfo.name);

  React.useEffect(() => {
    setNavigationBarTitle({ title: deviceName });
  }, [deviceName]);

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
          Public SDM Template
        </View>
      </View>
    </View>
  );
}

export default Home;
