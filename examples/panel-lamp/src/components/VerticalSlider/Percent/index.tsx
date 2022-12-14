/* eslint-disable no-self-compare */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { View, Text } from '@ray-js/components';
import Slider from '@ray-js/components-ty-slider';

import style from './index.module.less';
import './iconfont/iconfont.css';

interface PercentProps {
  percent: number;
  height?: number;
  brightWidth: string;
  colorOver?: number;
  colorInner?: number;
  onClick?: () => void;
}

const Percent = (props: PercentProps) => {
  const { percent, height, brightWidth, colorOver, colorInner, onClick } = props;
  let iconName = 'icon--sun';
  if (percent > 20 && percent <= 60) {
    iconName = 'icon-icon-sun2';
  } else if (percent > 60) {
    iconName = 'icon--sun3';
  }
  const percentText = `${percent}%`;
  return (
    <View className={style.container} style={{ height: `${height}`, width: `${brightWidth}` }}>
      <View>
        <View className={style.upPercent}>
          <View
            className={`iconfont ${iconName}`}
            style={{ color: `${colorOver}`, marginLeft: '16rpx' }}
          />
          <Text style={{ marginLeft: '18rpx', width: '100rpx', color: `${colorOver}` }}>
            {percentText}
          </Text>
        </View>
        <View className={style.downPercent}>
          <View
            className={`iconfont ${iconName}`}
            style={{ color: `${colorInner}`, marginLeft: '16rpx' }}
          />
          <Text
            className={style.text}
            style={{
              color: `${colorInner}`,
            }}
          >
            {percentText}
          </Text>
        </View>
      </View>
    </View>
  );
};

const nilFn = () => null;

Percent.defaultProps = {
  height: '88rpx',
  colorOver: '#fff',
  colorInner: '#fff',
  onClick: nilFn,
};

export default Percent;
