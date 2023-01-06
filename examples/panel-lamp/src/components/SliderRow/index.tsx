import React, { useState, useEffect } from 'react';
import Slider from '@ray-js/components-ty-slider';
import { Text, View, Image } from '@ray-js/components';
import { useThrottleFn } from 'ahooks';
import styles from './index.module.less';

interface IProps {
  style?: any;
  img?: string;
  imgSize?: number;
  min?: number;
  max?: number;
  onChange: (v: number) => void;
  onRelease?: (v: number) => void;
  value: number;
}

export const SliderRow = (props: IProps) => {
  const { img, value, imgSize, style, onChange, onRelease, min, max } = props;
  const [percentVal, setPercentVal] = useState(value);
  useEffect(() => {
    setPercentVal(value);
  }, [value]);

  const formatVal = (v: number) => {
    // 将值转换成百分比
    const percent = Math.min(Math.round(((100 - min) / (max - min)) * v + min), 100);
    return `${percent}%`;
  };

  const handleChangeVal = useThrottleFn(
    v => {
      // 滑动时内部改变值
      setPercentVal(v);
    },
    { wait: 80 }
  ).run;

  return (
    <View className={styles.brightBox} style={style}>
      {img && (
        <Image
          src={img}
          style={{ width: `${imgSize}rpx`, height: `${imgSize}rpx` }}
          mode="aspectFill"
          className={styles.icon}
        />
      )}
      <View className={styles.sliderBox}>
        <Slider
          style={{ width: 500, height: 12, padding: 0, borderRadius: 4 }}
          minTrackColor="#fff"
          maxTrackColor="rgba(255,255,255,0.2)"
          thumbWidth="56rpx"
          thumbHeight="56rpx"
          maxTrackHeight="12rpx"
          minTrackHeight="12rpx"
          min={min}
          max={max}
          step={1}
          value={percentVal}
          onChange={v => {
            onChange(v);
            handleChangeVal(v);
          }}
          onAfterChange={v => {
            onRelease(v);
            handleChangeVal(v);
          }}
        />
      </View>
      <View>
        <Text className={styles.text}>{formatVal(percentVal)}</Text>
      </View>
    </View>
  );
};
SliderRow.defaultProps = {
  style: {},
  img: null,
  imgSize: 40,
  min: 1,
  max: 1000,
  onRelease: () => null,
};
