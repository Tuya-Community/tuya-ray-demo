import React, { useCallback } from 'react';
import { setNavigationBarTitle, View } from '@ray-js/ray';
import { useActions, useDevice, useProps } from '@ray-js/panel-sdk';
import { CountdownTip } from '@/components';
import { TopBar } from '@/components/top-bar';
import clsx from 'clsx';
import styles from './index.module.less';
import { HomeBottom } from './home-bottom';

export function Home() {
  const { dpSchema } = useDevice();
  const deviceName = useDevice(d => d.devInfo.name);
  const power = useProps(d => d.switch_1);
  const actions = useActions();

  const handlePower = useCallback(() => {
    actions.switch_1.toggle();
  }, []);

  React.useEffect(() => {
    setNavigationBarTitle({ title: deviceName });
  }, [deviceName]);

  return (
    <View className={clsx(styles.view, { [styles.on]: power })}>
      <TopBar title={deviceName} />
      <View className={styles.content}>
        <View className={styles.main}>
          <View onClick={handlePower} className={clsx(styles.power, { [styles.on]: power })} />
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
