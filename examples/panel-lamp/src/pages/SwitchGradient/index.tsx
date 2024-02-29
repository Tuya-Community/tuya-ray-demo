import React, { useEffect, useState } from 'react';
import { router, Text, View } from '@ray-js/ray';
import {
  useActions,
  useProps,
  useStructuredActions,
  useStructuredProps,
  useSupport,
} from '@ray-js/panel-sdk';
import { useThrottleFn } from 'ahooks';
import { TopBar, Stepper } from '@/components';
import Strings from '@/i18n';
import { lampSchemaMap } from '@/devices/schema';
import { useSystemInfo } from '@/hooks/useSystemInfo';
import { useHideMenuButton } from '@/hooks/useHideMenuButton';
import styles from './index.module.less';

const { switch_gradient, white_gradi_time, colour_gradi_time } = lampSchemaMap;

const SwitchGradient = () => {
  const { safeArea } = useSystemInfo();
  const support = useSupport();
  const dpActions = useActions();
  const dpStructuredActions = useStructuredActions();
  const switchGradient = useStructuredProps(props => props[switch_gradient.code]);
  const dpProps = useProps(props => props);
  const toningGradient = useProps(props => props[white_gradi_time.code]);
  const dimmingGradient = useProps(props => props[colour_gradi_time.code]);
  const [gradientState, setGradientState] = useState({
    on: 0,
    off: 0,
    [white_gradi_time.code]: 0,
    [colour_gradi_time.code]: 0,
  });

  useHideMenuButton();

  useEffect(() => {
    setGradientState({
      on: switchGradient?.on ?? 0,
      off: switchGradient?.off ?? 0,
      [white_gradi_time.code]: toningGradient ?? 0,
      [colour_gradi_time.code]: dimmingGradient ?? 0,
    });
  }, [switchGradient, toningGradient, dimmingGradient]);

  const handleBack = React.useCallback(() => {
    router.back();
  }, []);

  const gradientConfig = [white_gradi_time.code, colour_gradi_time.code].filter(item =>
    support.isSupportDp(item)
  );
  const switchGradientState = ['on', 'off'];

  const handleGradientChange = (key, value) => {
    const newGradientData = { ...gradientState };
    newGradientData[key] = value;
    setGradientState(newGradientData);
  };

  const handleSave = useThrottleFn(
    () => {
      if (support.isSupportDp(switch_gradient.code)) {
        const { on, off } = gradientState;
        dpStructuredActions.switch_gradient.set({ version: 0, on, off }, { throttle: 300 });
      }
      if (support.isSupportDp(white_gradi_time.code)) {
        dpActions.white_gradi_time.set(gradientState[white_gradi_time.code], { throttle: 300 });
      }
      if (support.isSupportDp(colour_gradi_time.code)) {
        dpActions.colour_gradi_time.set(gradientState[colour_gradi_time.code], { throttle: 300 });
      }
      router.back();
    },
    { wait: 100 }
  ).run;

  return (
    <View style={{ paddingTop: safeArea?.top * 2 }} className={styles.view}>
      <TopBar
        handleCancel={handleBack}
        cancelType="icon"
        title={Strings.getLang('gradientSetting')}
        handleSave={handleSave}
      />
      <View className={styles.scroll}>
        {support.isSupportDp(switch_gradient.code) && (
          <View className={styles.box}>
            {switchGradientState.map(item => (
              <View
                className={styles.singleSwitch}
                key={item}
                style={{
                  borderBottom: `1px solid ${
                    item === 'on' ? 'rgba(255,255,255,.1)' : 'transparent'
                  }`,
                }}
              >
                <View className={styles.row}>
                  <View>
                    <Text className={styles.subTitle}>
                      {Strings.getLang(`switchGradient_${item}` as any)}
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
                  {Strings.getLang(`switchGradient_${item}_desc` as any)}
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
                  value={`${dpProps[item]}`}
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
