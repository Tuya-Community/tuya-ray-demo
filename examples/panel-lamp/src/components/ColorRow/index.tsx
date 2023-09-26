/* eslint-disable react/require-default-props */
import { Text, View } from '@ray-js/ray';
import React, { useEffect, useState, useRef } from 'react';
import { utils } from '@ray-js/panel-sdk';
import useThrottleFn from '@/hooks/useThrottleFn';
import Strings from '@/i18n';
import { OpacitySlider } from '@/components';
import { useSelector } from '@/redux';
import styles from './index.module.less';

const { hsv2rgbString } = utils;

interface IProps {
  value: string | number;
  min: number;
  max: number;
  label: string;
  background?: string;
  onMove?: (v: string, label: string) => void;
  onEnd: (v: string, label: string) => void;
}
export const ColorRow = React.memo((props: IProps) => {
  const themeColor = useSelector(state => state.uiState.themeColor);
  const { value, min, max, label, background, onMove, onEnd } = props;
  const [currentVal, setCurrentVal] = useState(value);
  const isMove = useRef(false);
  const timer = useRef<any>();
  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  useEffect(() => {
    if (value !== currentVal && !isMove.current) setCurrentVal(value);
  }, [value]);

  const handleMove = useThrottleFn(
    v => {
      if (v !== currentVal) setCurrentVal(v);
      isMove.current = true;
      onMove(v, label);
    },
    { wait: 100 }
  ).run;

  const handleEnd = v => {
    if (v !== currentVal) setCurrentVal(v);

    timer.current = setTimeout(() => {
      isMove.current = false;
    }, 200);
    onEnd(v, label);
  };

  return (
    <View key={label} className={styles.colorRow}>
      <View className={styles.inputBox}>
        <Text className={styles.label}>{Strings.getLang(label)}：</Text>
        <View className={styles.input} style={{ color: themeColor }}>
          {currentVal}
        </View>
      </View>
      <OpacitySlider
        value={Math.max(min, +value)}
        min={min}
        max={max}
        trackStyle={{
          width: 'calc(100vw - 123px - 2px)',
          border: '1px solid #000',
        }}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
        background={background}
        thumbStyle={{
          backgroundColor: label === 'hue' ? hsv2rgbString(currentVal, 100, 100) : 'transparent',
        }}
      />
    </View>
  );
});
