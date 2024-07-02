import React from 'react';

import { useProps } from '@ray-js/panel-sdk';
import { View } from '@ray-js/ray';

import { White } from '../White';
import styles from './index.module.less';

export interface LightProps {}

export const Light: React.FC<LightProps> = ({}) => {
  const work_mode = useProps(state => state?.work_mode);

  return (
    <View className={styles.contain}>
      <View style={{ display: work_mode === 'light_white' ? 'block' : 'none' }}>
        <White />
      </View>
    </View>
  );
};
