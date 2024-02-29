import _ from 'lodash-es';
import { View, Text } from '@ray-js/ray';
import { useProps, useSupport, utils } from '@ray-js/panel-sdk';
import React from 'react';
import { useThrottleFn } from 'ahooks';
import { LampTempSlider, LampBrightSlider } from '@ray-js/components-ty-lamp';
import { lampSchemaMap } from '@/devices/schema';
import Strings from '@/i18n';
import styles from './index.module.less';

const { bright_value, temp_value } = lampSchemaMap;

interface IProps {
  style?: React.CSSProperties;
  /**
   * 色温值，不传则默认使用 DP temp_value
   */
  temperature?: number;
  /**
   * 亮度值，不传则默认使用 DP bright_value
   */
  brightness?: number;
  onRelease: (code: string, value: number) => void;
  onChange?: (isColor: boolean, value: { temperature: number; brightness: number }) => void;
  setScrollEnabled?: (v: boolean) => void;
}

export const White = (props: IProps) => {
  const { style, onRelease, onChange, setScrollEnabled } = props;

  const support = useSupport();
  const brightnessDp = useProps(dpState => dpState.bright_value);
  const temperatureDp = useProps(dpState => dpState.temp_value);
  const brightness = _.isUndefined(props.brightness) ? brightnessDp : props.brightness;
  const temperature = _.isUndefined(props.temperature) ? temperatureDp : props.temperature;
  const isTouching = React.useRef(false);

  const handleTouchStart = React.useCallback(() => {
    isTouching.current = true;
  }, []);

  const handleChange = useThrottleFn(
    (key, value) => {
      // slider调节时页面不能滑动
      if (isTouching.current) setScrollEnabled?.(false);
      if (key === 'temp') onChange?.(false, { temperature: value, brightness });
      else onChange?.(false, { temperature, brightness: value });
    },
    { wait: 80 }
  ).run;

  const handleWhiteRelease = useThrottleFn(
    (code, value) => {
      isTouching.current = false;
      setScrollEnabled?.(true);
      onRelease?.(code, value);
    },
    { wait: 80 }
  ).run;

  const trackStyle = {
    width: '656rpx',
    height: '56rpx',
  };

  const thumbStyle = {
    width: '68rpx',
    height: '68rpx',
    borderRadius: '100%',
  };

  const temperaturePercent = Math.round(utils.calcPosition(temperature, 0, 1000, 0, 100));
  const brightnessPercent = Math.round(utils.calcPosition(brightness, 10, 1000, 1, 100));

  return (
    <View style={style} className={styles.container}>
      {support.isSupportTemp() && (
        <View>
          <View className={styles.textBox}>
            <Text className={styles.label}>{Strings.getLang('temp')}</Text>
            <Text className={styles.value}>{`${temperaturePercent}%`}</Text>
          </View>
          <LampTempSlider
            value={temperature}
            trackStyle={trackStyle}
            thumbStyle={thumbStyle}
            onTouchStart={handleTouchStart}
            onTouchMove={temp => handleChange('temp', temp)}
            onTouchEnd={temp => handleWhiteRelease(temp_value.code, temp)}
          />
        </View>
      )}
      {/* 亮度 */}
      {support.isSupportBright() && (
        <View>
          <View className={styles.textBox}>
            <Text className={styles.label}>{Strings.getLang('brightness')}</Text>
            <Text className={styles.value}>{`${brightnessPercent}%`}</Text>
          </View>
          {/* FIXME: 加了个 View 作为临时的兼容方案，避免切换 TabBar 布局不更新 */}
          <View />
          <LampBrightSlider
            value={brightness}
            trackStyle={trackStyle}
            thumbStyle={thumbStyle}
            onTouchStart={handleTouchStart}
            onTouchMove={bright => handleChange('bright', bright)}
            onTouchEnd={bright => handleWhiteRelease(bright_value.code, bright)}
          />
        </View>
      )}
    </View>
  );
};
