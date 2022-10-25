import React from 'react';
import { setNavigationBarTitle, View } from '@ray-js/ray';
import { CountdownTip, PowerButton } from '@/components';
import { useSdmDevice } from '@ray-js/sdm-react';
import styles from './index.module.less';
import { HomeBottom } from './home-bottom';

export function Home() {
  const { dpSchema } = useSdmDevice();
  const deviceName = useSdmDevice(d => d.devInfo.name);

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
