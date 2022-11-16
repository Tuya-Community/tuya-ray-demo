import React from 'react';
import { setNavigationBarTitle, View } from '@ray-js/ray';
import { useDevice } from '@ray-js/panel-sdk';
import styles from './index.module.less';

export function Home() {
  const deviceName = useDevice(d => d.devInfo.name);

  React.useEffect(() => {
    setNavigationBarTitle({ title: deviceName });
  }, [deviceName]);

  return (
    <View className={styles.view}>
      <View className={styles.content}>
        <View className={styles['space-between']}>Public SDM Template </View>
      </View>
    </View>
  );
}

export default Home;
