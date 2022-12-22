import React, { useState, useEffect } from 'react';
import { View, Image, Text } from '@ray-js/components';
import res from '@/res';
import clsx from 'clsx';
import Strings from '@/i18n';
import { useThrottleFn } from 'ahooks';
import LampCirclePicker from './WhiteCircle/index';
import styled from './index.module.less';

interface IProps {
  temperature: number;
  onMove: (v: number) => void;
  onEnd: (v: number) => void;
}

const { ring } = res;

export const WhiteRing = (props: IProps) => {
  const { temperature, onMove, onEnd } = props;
  const [temp, setTemp] = useState(temperature);
  useEffect(() => {
    setTemp(temperature);
  }, [temperature]);
  const updateTemp = useThrottleFn(
    v => {
      setTemp(v);
    },
    { wait: 100 }
  ).run;
  return (
    <View className={clsx(styled.container, styled.flexCenter)}>
      <LampCirclePicker
        canvasId="whiteCircle"
        value={temp}
        radius={140}
        innerRingRadius={80}
        isShowColorTip
        onTouchMove={v => {
          onMove(v);
          updateTemp(v);
        }}
        onTouchEnd={v => {
          onEnd(v);
          updateTemp(v);
        }}
      />

      <View className={clsx(styled.innerBox, styled.flexCenter)}>
        <Image src={ring} className={styled.ringIcon} />
        <View className={clsx(styled.textBox, styled.flexCenter)}>
          <Text className={styled.title}>{Math.round(temp / 10)}%</Text>
          <Text className={styled.desc}>{Strings.getLang('temperature')}</Text>
        </View>
      </View>
    </View>
  );
};
