/* eslint-disable react/require-default-props */
import React, { useEffect, useState, useRef } from 'react';
import { View, Text } from '@ray-js/ray';
import { formatPercent } from '@/utils';
import Strings from '@/i18n';
import useThrottleFn from '@/hooks/useThrottleFn';
import colorUtils from '@/utils/color.js';
import { useSelector } from '@/redux';
import { OpacitySlider } from '@/components';
import styles from './index.module.less';

const { brightKelvin2rgb } = colorUtils;
interface BrightRectSliderProps {
  disable?: boolean;
  value: number;
  sliderHeight?: number;
  containerStyle?: React.CSSProperties;
  min?: number;
  max?: number;
  maxTrackWidth?: string;
  onRelease?: (num: number) => void;
  onChange?: (num: number) => void;
}

export const BrightRectSlider = (props: BrightRectSliderProps) => {
  const {
    containerStyle,
    value,
    min = 10,
    max = 1000,
    sliderHeight,
    maxTrackWidth,
    onChange,
    onRelease,
    disable = false,
  } = props;

  const [textVal, setTextVal] = useState('');
  const themeColor = useSelector(state => state.uiState.themeColor);
  const move = useRef(false);

  const formatText = useThrottleFn(
    v => {
      setTextVal(`${formatPercent(v, { min, max, minPercent: 1 })}%`);
    },
    { wait: 100 }
  ).run;

  useEffect(() => {
    formatText(value);
  }, [value]);

  const handleSliderMove = v => {
    formatText(v);
    onChange?.(v);
    move.current = true;
  };

  const handleSliderEnd = useThrottleFn(
    v => {
      formatText(v);
      onRelease?.(v);
      move.current = false;
    },
    { wait: 80 }
  ).run;

  const renderTextRow = () => {
    return (
      <View className={styles.textRow}>
        <Text className={styles.label}>{Strings.getLang('brightness')}</Text>
        <Text className={styles.label} style={{ margin: '0 4px' }}>
          ·
        </Text>
        <Text className={styles.value} style={{ color: themeColor }}>
          {textVal || `${formatPercent(currentBright)}%`}
        </Text>
      </View>
    );
  };
  const currentBright = textVal.includes('%')
    ? +textVal.substring(0, textVal.length - 1) * 10
    : +textVal.substring(0, textVal.length - 1);

  return (
    <View>
      {renderTextRow()}
      <View className={styles.container} style={{ ...containerStyle, opacity: disable ? 0.4 : 1 }}>
        <OpacitySlider
          disable={disable}
          min={10}
          max={1000}
          textValue={textVal}
          value={Math.max(min, value)}
          trackStyle={{ width: maxTrackWidth, height: `${sliderHeight}rpx` }}
          onTouchMove={handleSliderMove}
          onTouchEnd={handleSliderEnd}
          background="linear-gradient(270deg, #FFFFFF 2.57%, rgba(255, 255, 255, 0) 100.64%)"
          thumbStyle={{ backgroundColor: brightKelvin2rgb(currentBright, 600) }}
        />
      </View>
    </View>
  );
};
