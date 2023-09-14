/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { Image, Text, View, Input } from '@ray-js/components';
import { router } from 'ray';
import React, { useEffect, useState } from 'react';
import { hideMenuButton, setNavigationBarColor, showMenuButton } from '@ray-js/ray';
import {
  useDevice,
  useActions,
  useProps,
  useStructuredActions,
  useStructuredProps,
} from '@ray-js/panel-sdk';
import { actions, store, useSelector } from '@/redux';
import { Button, TopBar, Stepper } from '@/components';
import dpCodes from '@/config/dpCodes';
import Strings from '@/i18n';
import styles from './index.module.less';
import useThrottleFn from '@/hooks/useThrottleFn';
import SupportUtils from '@/utils/SupportUtils';

const { dispatch } = store;
const { switchGradientCode, toningGradCode, dimmingGradCode } = dpCodes;

const SwitchGradient = () => {
  const safeArea = useSelector(state => state.cloudState.systemInfo?.safeArea);
  const dpActions = useActions();
  const dpStructuredActions = useStructuredActions();
  const switchGradient = useStructuredProps(props => props[switchGradientCode]);
  const dpProps = useProps(props => props);
  const toningGradient = useProps(props => props[toningGradCode]);
  const dimmingGradient = useProps(props => props[dimmingGradCode]);
  const [gradientState, setGradientState] = useState({
    on: 0,
    off: 0,
    [toningGradCode]: 0,
    [dimmingGradCode]: 0,
  });
  useEffect(() => {
    setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: 'transparent',
      animation: {
        duration: 300,
        timingFunc: 'linear',
      },
    });
    hideMenuButton();
    return () => {
      showMenuButton();
    };
  }, []);

  useEffect(() => {
    setGradientState({
      on: switchGradient?.on ?? 0,
      off: switchGradient?.off ?? 0,
      [toningGradCode]: toningGradient ?? 0,
      [dimmingGradCode]: dimmingGradient ?? 0,
    });
  }, [switchGradient, toningGradient, dimmingGradient]);

  const backToHome = () => {
    router.back();
  };

  const gradientConfig = [toningGradCode, dimmingGradCode].filter(item =>
    SupportUtils.isSupportDp(item)
  );
  const switchGradientState = ['on', 'off'];
  const handleGradientChange = (key, value) => {
    const newGradientData = { ...gradientState };
    newGradientData[key] = value;
    setGradientState(newGradientData);
  };
  const handleSave = useThrottleFn(
    () => {
      if (SupportUtils.isSupportDp(switchGradientCode)) {
        const { on, off } = gradientState;
        dpStructuredActions[switchGradientCode].set({ on, off }, { throttle: 300 });
      }
      if (SupportUtils.isSupportDp(toningGradCode)) {
        dpActions[toningGradCode].set(gradientState[toningGradCode], { throttle: 300 });
      }
      if (SupportUtils.isSupportDp(dimmingGradCode)) {
        dpActions[dimmingGradCode].set(gradientState[dimmingGradCode], { throttle: 300 });
      }
      router.back();
    },
    { wait: 100 }
  ).run;

  return (
    <View style={{ paddingTop: safeArea?.top }} className={styles.view}>
      <TopBar
        handleCancel={backToHome}
        cancelType="icon"
        title={Strings.getLang('gradientSetting')}
        handleSave={handleSave}
      />
      <View className={styles.scroll}>
        {SupportUtils.isSupportDp(switchGradientCode) && (
          <View className={styles.box}>
            {switchGradientState.map(item => (
              <View
                className={styles.singleSwitch}
                key={item}
                style={{
                  borderBottom: `1px solid ${item === 'on' ? 'rgba(255,255,255,.1)' : 'transparent'
                    }`,
                }}
              >
                <View className={styles.row}>
                  <View>
                    <Text className={styles.subTitle}>
                      {Strings.getLang(`switchGradient_${item}`)}
                    </Text>
                    <Text className={styles.unit}>{Strings.getLang('gradient_unit')}</Text>
                  </View>
                  <Stepper
                    value={switchGradient?.[item]}
                    step={200}
                    max={60000}
                    min={0}
                    onChange={v => handleGradientChange(item, v)}
                  />
                </View>
                <View className={styles.arrow} />
                <View className={styles.desc}>
                  {Strings.getLang(`switchGradient_${item}_desc`)}
                </View>
              </View>
            ))}
          </View>
        )}
        {gradientConfig.map(item => (
          <View key={item} className={styles.box} style={{ marginTop: 16 }}>
            <View className={styles.singleSwitch}>
              <View className={styles.row}>
                <View>
                  <Text className={styles.subTitle}>{Strings.getLang(item)}</Text>
                  <Text className={styles.unit}>{Strings.getLang('gradient_unit')}</Text>
                </View>
                <Stepper
                  step={200}
                  max={10000}
                  min={0}
                  value={dpProps[item]}
                  onChange={v => handleGradientChange(item, v)}
                />
              </View>
              <View className={styles.arrow} />
              <View className={styles.desc}>{Strings.getLang(`${item}_desc`)}</View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default SwitchGradient;
