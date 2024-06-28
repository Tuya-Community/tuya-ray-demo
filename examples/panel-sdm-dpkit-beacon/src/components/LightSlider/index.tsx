import _ from 'lodash';
import React from 'react';

import TySlider from '@ray-js/components-ty-slider/lib/SjsSlider';
import { Text, View } from '@ray-js/ray';
import PerfText from '@ray-js/components-ty-perf-text';

import styles from './index.module.less';

export interface LightSliderProps {
  value: number;
  onChange(value: number): void;
  min: number;
  max: number;
  hidden?: boolean;
  instanceId: string;
  title: string;
  showScale?: number;
}

export const LightSlider: React.FC<LightSliderProps> = ({
  value,
  onChange,
  min,
  max,
  hidden,
  instanceId,
  title,
  showScale = 10,
}) => {
  return (
    <View className={styles.contain}>
      <View className={styles.header}>
        <Text className={styles.title}>{title}</Text>
        <Text className={styles.valueDot}>·</Text>
        <PerfText
          className={styles.value}
          eventName="sliderValue"
          defaultValue={`${Math.ceil(value / showScale)}`}
          valueScale={1 / showScale}
        />
        <Text className={styles.value}>%</Text>
      </View>
      <TySlider
        instanceId={instanceId}
        moveEventName="sliderValue"
        hidden={hidden}
        min={min}
        max={max}
        end={value}
        bindend={event => onChange(event?.detail?.value)}
        trackStyle={{
          backgroundColor: 'rgba(255, 255, 255,0.1)',
          height: '32rpx',
          borderRadius: '32rpx',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
        barStyle={{
          backgroundColor: '#fff',
          height: '32rpx',
          borderRadius: '32rpx',
        }}
        thumbStyle={{
          borderRadius: '22px',
        }}
      />
    </View>
  );
};
