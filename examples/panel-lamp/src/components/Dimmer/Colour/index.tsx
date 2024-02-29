import _ from 'lodash-es';
import React, { useMemo } from 'react';
import { View, Text } from '@ray-js/ray';
import { useStructuredProps, useSupport } from '@ray-js/panel-sdk';
import { useThrottleFn } from 'ahooks';
import {
  LampColorSlider,
  LampSaturationSlider,
  LampBrightSlider,
} from '@ray-js/components-ty-lamp';
import Strings from '@/i18n';
import { lampSchemaMap } from '@/devices/schema';
import styles from './index.module.less';

const { colour_data } = lampSchemaMap;

interface IProps {
  style?: React.CSSProperties;
  /**
   * 彩光值，不传则默认使用 DP colour_data
   */
  colour?: COLOUR;
  onRelease: (code: string, value: COLOUR) => void;
  onChange?: (isColor: boolean, value: COLOUR) => void;
  setScrollEnabled?: (v: boolean) => void;
}

export const Colour = (props: IProps) => {
  const { style, onRelease, onChange, setScrollEnabled } = props;

  const support = useSupport();
  const colourDp = useStructuredProps(dpState => dpState.colour_data);
  const colour = _.isUndefined(props.colour) ? colourDp : props.colour;
  const isTouching = React.useRef(false);

  const handleColourMove = useThrottleFn(
    (v: number, type: keyof COLOUR) => {
      if (isTouching.current) setScrollEnabled?.(false);
      const newColorData = { ...colour, [type]: v };
      onChange?.(true, newColorData);
    },
    { wait: 80 }
  ).run;

  const handleColourEnd = React.useCallback(
    (v: number, type: keyof COLOUR) => {
      setScrollEnabled?.(true);
      const newColorData = { ...colour, [type]: v };
      onRelease?.(colour_data.code, newColorData);
    },
    [colour]
  );

  const handleTouchStart = React.useCallback(
    (type: 'hue' | 'saturation' | 'value') => {
      return (v: number) => {
        isTouching.current = true;
        handleColourMove(v, type);
      };
    },
    [colour]
  );

  const handleTouchEnd = React.useCallback(
    (type: 'hue' | 'saturation' | 'value') => {
      return (v: number) => {
        isTouching.current = false;
        handleColourEnd(v, type);
      };
    },
    [colour]
  );

  const configs = useMemo(() => {
    const trackStyle = {
      width: '504rpx',
      height: '56rpx',
    };

    const thumbStyle = {
      width: '68rpx',
      height: '68rpx',
      borderRadius: '100%',
    };
    return [
      {
        label: 'hue' as const,
        Component: (
          <LampColorSlider
            trackStyle={trackStyle}
            thumbStyle={thumbStyle}
            value={colour?.hue ?? 1}
            onTouchStart={handleTouchStart('hue')}
            onTouchMove={v => handleColourMove(v, 'hue')}
            onTouchEnd={handleTouchEnd('hue')}
          />
        ),
      },
      {
        label: 'saturation' as const,
        Component: (
          <LampSaturationSlider
            trackStyle={trackStyle}
            thumbStyle={thumbStyle}
            hue={colour?.hue ?? 1}
            value={colour?.saturation ?? 1}
            onTouchStart={handleTouchStart('saturation')}
            onTouchMove={v => handleColourMove(v, 'saturation')}
            onTouchEnd={handleTouchEnd('saturation')}
          />
        ),
      },
      {
        label: 'value' as const,
        Component: (
          <LampBrightSlider
            trackStyle={trackStyle}
            thumbStyle={thumbStyle}
            value={colour?.value ?? 1}
            onTouchStart={handleTouchStart('value')}
            onTouchMove={v => handleColourMove(v, 'value')}
            onTouchEnd={handleTouchEnd('value')}
          />
        ),
      },
    ];
  }, [colour]);

  if (support.isSupportColour())
    return (
      <View style={style}>
        <View className={styles.title}>{Strings.getLang('hsv')}</View>
        {configs.map(item => {
          const { label, Component } = item;
          return (
            <View key={label} className={styles.colorRow}>
              <View className={styles.inputBox}>
                <Text className={styles.label}>{Strings.getLang(label)}：</Text>
                <View className={styles.input}>{colour?.[label] ?? 1}</View>
              </View>
              {Component}
            </View>
          );
        })}
      </View>
    );
  return <></>;
};
