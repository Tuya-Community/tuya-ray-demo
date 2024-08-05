import _ from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { LightSlider } from '@/components/LightSlider';
import Strings from '@/i18n';
import { actions as storeActions } from '@/redux/actions/common';
import LampCirclePicker from '@ray-js/lamp-circle-picker';
import { useActions, useProps } from '@ray-js/panel-sdk';
import { View } from '@ray-js/ray';

import styles from './index.module.less';

export interface WhiteProps {}

export const White: React.FC<WhiteProps> = () => {
  const actions = useActions();
  const brightness = useProps(props => +props.bright_value);
  const temperature = useProps(props => +props.temp_value);
  const work_mode = useProps(props => props.work_mode);
  const dispatch = useDispatch();

  const [showTemp, setShowTemp] = useState(temperature);

  useEffect(() => {
    dispatch(
      storeActions.updateUi({
        topBarBackgroundColor: `linear-gradient(to bottom, rgba(255, 254, 251, ${(temperature *
          0.5) /
          1000}), rgba(255, 0, 0, 0));`,
      })
    );
  }, [temperature]);

  useEffect(() => {
    setShowTemp(temperature);
  }, [temperature]);

  const setShowVal2 = useCallback(
    _.throttle(val => {
      setShowTemp(val);
    }, 100),
    []
  );

  return (
    <View className={styles.contain}>
      <View className={styles.picker}>
        <LampCirclePicker
          value={showTemp}
          onTouchMove={v => {
            setShowVal2(v);
          }}
          onTouchEnd={v => {
            actions.temp_value.set(v);
          }}
          radius={140}
        />
      </View>
      <View className={styles.slider}>
        <LightSlider
          title={Strings.getLang('light_label')}
          instanceId="slider_white"
          min={10}
          max={1000}
          value={brightness}
          onChange={v => {
            actions.bright_value.set(v);
          }}
        />
      </View>
    </View>
  );
};
