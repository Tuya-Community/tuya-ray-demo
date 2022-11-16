import React from 'react';
import { setNavigationBarTitle, View } from '@ray-js/ray';
import { CountdownTip, PowerButton } from '@/components';
import { useDevice } from '@ray-js/panel-sdk';
import styles from './index.module.less';
import { HomeBottom } from './home-bottom';

export function Home() {
  const { dpSchema } = useDevice();
  const deviceName = useDevice(d => d.devInfo.name);

  React.useEffect(() => {
    setNavigationBarTitle({ title: deviceName });
  }, [deviceName]);

  return (
    <View className={styles.view}>
      <View className={styles.content}>
        <View className={styles['space-between']}>
          <PowerButton dpCode={dpSchema?.switch_1?.code} />
          <CountdownTip
            powerCode={dpSchema?.switch_1?.code}
            countdownCode={dpSchema?.countdown_1?.code}
          />
        </View>
      </View>
      <HomeBottom />
    </View>
  );
}

export default Home;
