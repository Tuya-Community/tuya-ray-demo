/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState, useEffect, useMemo } from 'react';
import { View, Text } from '@ray-js/ray';
import { useDebounceFn } from 'ahooks';
import { formatPercent } from '@/utils';
import { useSelector } from '@/redux';
import styles from './index.module.less';
import Slider from './components/slider';
import { defaultProps, IProps } from './props';

export function OpacitySlider(props: IProps) {
  const themeColor = useSelector(state => state.uiState.themeColor);
  const preValue = useRef(-1);
  const lastValue = useRef(null);
  const timer = useRef(null);
  const isMove = useRef(false);
  const {
    label,
    min = 0,
    max = 1000,
    value,
    style,
    trackStyle = {},
    thumbStyle = {},
    textValue,
    wait = false,
    disable = false,
    background,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    showMask,
  } = props;

  const startRefValue = useRef(-1);
  const handleTouchStart = ({ detail }) => {
    if (!onTouchStart || disable) {
      return;
    }
    if (detail.end === startRefValue.current) {
      return;
    }
    isMove.current = false;
    onTouchStart && onTouchStart(detail.end);
    startRefValue.current = detail.end;
  };

  const handTouchMove = ({ detail }) => {
    if (!onTouchMove || disable) {
      return;
    }
    isMove.current = true;
    lastValue.current = detail.end + min;
    if (detail.end + min === preValue.current) {
      return;
    }
    if (timer.current) {
      return;
    }

    onTouchMove && onTouchMove(detail.end + min);
    preValue.current = detail.end + min;
    clearTimeout(timer.current);
    timer.current = null;

    if (lastValue.current !== preValue.current) {
      onTouchMove && onTouchMove(lastValue.current + min);
    }
  };

  const endRefValue = useRef(-1);

  const handTouchEnd = ({ detail }) => {
    if (!onTouchEnd || disable) {
      return;
    }
    if (detail.end + min === endRefValue.current) {
      return;
    }

    isMove.current = false;
    onTouchEnd && onTouchEnd(detail.end + min);
    endRefValue.current = detail.end + min;
  };

  const instanceId = useRef(
    `Color_${String(+new Date()).slice(-4)}_${String(Math.random()).slice(-2)}`
  );
  const [controllerValue, setControllerValue] = useState(wait ? -1 : value);

  useEffect(() => {
    if (!isMove.current && value !== controllerValue) {
      updateControlVal(value);
    }
  }, [value]);

  const updateControlVal = useDebounceFn(
    val => {
      setControllerValue(val);
    },
    { wait: 150 }
  ).run;
  const renderTextRow = () => {
    return (
      <View className={styles.textRow}>
        <Text className={styles.label}>{label}</Text>
        <Text className={styles.label} style={{ margin: '0 4px' }}>
          ·
        </Text>
        <Text className={styles.value} style={{ color: themeColor }}>
          {textValue || `${formatPercent(value, { min, max: 1000, minPercent: min })}%`}
        </Text>
      </View>
    );
  };

  return (
    <View style={style}>
      {label && renderTextRow()}
      <View
        style={{
          position: 'relative',
          width: `${646}rpx`,
          height: `${56}rpx`,
          borderRadius: `${28}rpx`,
          ...trackStyle,
        }}
      >
        <Slider
          instanceId={instanceId.current}
          min={0}
          max={max - min}
          closed={false}
          disable={disable}
          end={controllerValue - min}
          step={1}
          enableTouch
          maxRangeOffset={38}
          bindstart={handleTouchStart}
          bindmove={handTouchMove}
          bindend={handTouchEnd}
          trackStyle={{
            width: `${646}rpx`,
            height: `${56}rpx`,
            borderRadius: `${28}rpx`,
            ...trackStyle,
            background,
          }}
          barStyle={{
            background: 'transparent',
          }}
          thumbEndStyle={{
            width: 68,
            height: 68,
            border: `8rpx solid #fff`,
            borderRadius: '50%',
            boxShadow: 'rgb(255 255 255 / 10%) 0px 0px 1px',
            background: `${disable ? '#000' : 'transparent'}`,
            ...thumbStyle,
          }}
        />
      </View>
    </View>
  );
}

OpacitySlider.defaultProps = defaultProps;
