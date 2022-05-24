import React from 'react';
import { Button, View } from '@ray-js/components';
import styles from './index.module.less';

export default function () {
  return (
    <View className={styles.buttonWrapper}>
      <Button type='primary'> Primary </Button>
      <Button type='default' style={{ marginLeft: '8px', marginRight: '8px' }}>
        Default
      </Button>
      <Button type='warn'> Warn </Button>
    </View>
  );
}
