import React from 'react';

import { View } from '@ray-js/ray';

import { White } from '../White';
import styles from './index.module.less';

export interface LightProps {}

export const Light: React.FC<LightProps> = () => {
  return (
    <View className={styles.contain}>
      <White />
    </View>
  );
};
