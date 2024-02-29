/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { View, Input, Image } from '@ray-js/ray';
import { useUpdateEffect, useThrottleFn } from 'ahooks';
import { Button } from '@/components';
import styles from './index.module.less';

interface IProps {
  style?: React.CSSProperties;
  min?: number;
  max?: number;
  value?: string;
  onChange?: (string) => void;
  step?: number;
}
export const Stepper = (props: IProps) => {
  const { min = 0, max = 1000, value = 0, style, step = 10, onChange } = props;
  const [currentVal, setCurrentVal] = useState(value);
  useUpdateEffect(() => {
    setCurrentVal(value);
  }, [value]);
  const handleAdd = useThrottleFn(
    () => {
      setCurrentVal(Math.min(max, +currentVal + step));
      onChange?.(Math.min(max, +currentVal + step));
    },
    { wait: 80 }
  ).run;
  const handleMinus = useThrottleFn(
    () => {
      setCurrentVal(Math.max(min, +currentVal - step));
      onChange?.(Math.max(min, +currentVal - step));
    },
    { wait: 80 }
  ).run;
  const handleInputChange = v => {
    let newVal = v?.detail?.value;
    if (newVal > max) {
      newVal = max;
    } else if (newVal < min) {
      newVal = min;
    }
    onChange?.(newVal);
    // 因为input不完全受控，所以这么处理
    if (currentVal !== newVal) setCurrentVal(newVal);
    else setCurrentVal(`${newVal} `);
  };
  return (
    <View className={styles.row} style={style}>
      <Button disabled={+value <= min} className={styles.actionButton} onClick={handleMinus}>
        <Image style={{ height: 4 }} className={styles.icon} src="/images/delete_icon.png" />
      </Button>
      <Input
        className={styles.input}
        value={`${currentVal}`}
        onInput={handleInputChange}
        type="number"
      />
      <Button disabled={+value >= max} className={styles.actionButton} onClick={handleAdd}>
        <Image className={styles.icon} src="/images/add_icon.png" />
      </Button>
    </View>
  );
};
