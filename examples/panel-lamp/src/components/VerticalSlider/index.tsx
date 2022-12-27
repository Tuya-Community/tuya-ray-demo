import React from 'react';
import { View } from '@ray-js/components';
import Slider from '@ray-js/components-ty-slider';
import colorUtils from '@/utils/color.js';
import styled from './index.module.less';

import Percent from './Percent';

const { brightKelvin2rgb } = colorUtils;
interface IProps {
  containerStyle?: React.CSSProperties;
  value: number;
  handleMove: (num: number) => void;
  handleRelease?: (num: number) => void;
  maxTrackWidth?: number;
  maxTrackRadius?: string;
  minTrackRadius?: string;
}

export const VerticalSlider = (props: IProps) => {
  const {
    containerStyle,
    value,
    handleMove,
    handleRelease,
    maxTrackRadius,
    minTrackRadius,
  } = props;
  const brightToV = (v: number) => {
    return Math.round((v * 1000) / 255);
  };
  return (
    <View className={styled.container} style={{ marginTop: '4rpx', ...containerStyle }}>
      <Slider
        isVertical
        min={1}
        max={254}
        value={value}
        maxTrackWidth="320rpx"
        maxTrackHeight="650rpx"
        minTrackWidth="320rpx"
        minTrackHeight="28px"
        maxTrackColor="rgba(255,255,255,.1)"
        maxTrackRadius={maxTrackRadius}
        minTrackRadius={minTrackRadius}
        thumbWidth={0}
        minTrackColor={`linear-gradient(0deg, #1f1f1f 0%, ${brightKelvin2rgb(
          Math.min(1000, brightToV(value) + 150),
          1000
        )} 100%)`}
        onChange={handleMove}
        onAfterChange={handleRelease}
      />
      <View className={styled.percent}>
        <Percent percent={Math.max(1, Math.round(brightToV(value) / 10))} brightWidth="320rpx" />
      </View>
    </View>
  );
};

const nilFn = () => null;

VerticalSlider.defaultProps = {
  containerStyle: {},
  handleRelease: () => { },
  maxTrackWidth: 622,
  maxTrackRadius: '24rpx',
  minTrackRadius: '0rpx 0rpx 24rpx 24rpx',
};

