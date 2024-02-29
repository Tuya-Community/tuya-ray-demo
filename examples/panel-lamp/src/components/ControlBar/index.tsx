import React from 'react';
import { View, Image } from '@ray-js/ray';
import { useActions } from '@ray-js/panel-sdk';
import { Button } from '@/components';
import styles from './index.module.less';

export const ControlBar = () => {
  const actions = useActions();

  const handleTogglePower = React.useCallback(() => {
    actions.switch_led.toggle({ throttle: 300 });
  }, []);

  return (
    <View className={styles.container}>
      <Image className={styles.bg} mode="aspectFill" src="/images/bottom_dark.png" />
      <Button
        img="/images/power.png"
        onClick={handleTogglePower}
        imgClassName={styles.powerBtn}
        className={styles.powerBox}
      />
    </View>
  );
};

ControlBar.height = 103;
