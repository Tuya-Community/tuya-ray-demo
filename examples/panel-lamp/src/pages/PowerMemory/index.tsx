/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { Image, Text, View } from '@ray-js/components';
import { router } from 'ray';
import React, { useEffect, useState } from 'react';
import { useTriggerChildrenFunction } from '@ray-js/lamp-module-schedule';
import { hideMenuButton, setNavigationBarColor, showMenuButton } from '@ray-js/ray';
import { useStructuredActions, useStructuredProps } from '@ray-js/panel-sdk';
import { useDebounceFn } from 'ahooks';
import { actions, store, useSelector } from '@/redux';
import { Button, TopBar } from '@/components';
import colorUtils from '@/utils/color.js';
import dpCodes from '@/config/dpCodes';
import Strings from '@/i18n';
import config from '@/config/default';
import res from '@/res';
import styles from './index.module.less';

const { dispatch } = store;
const { defaultMemoryMode } = config;
const { brightKelvin2rgb, hsv2hex } = colorUtils;
const { powerMemoryCode } = dpCodes;

export function PowerMemory() {
  const safeArea = useSelector(state => state.cloudState.systemInfo?.safeArea);
  const dpActions = useStructuredActions();
  const powerMemory = useStructuredProps(props => props[powerMemoryCode]);
  const [mode, setMode] = useState(`${powerMemory?.mode}` ?? '1');
  const customColor = useSelector(state => state.uiState.customColor);
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
    if (
      powerMemory &&
      powerMemory?.brightness !== 0 &&
      !Number.isNaN(powerMemory?.brightness) &&
      !Number.isNaN(powerMemory?.temperature)
    ) {
      const { brightness, temperature } = powerMemory;
      dispatch(
        actions.common.updateUi({
          customColor: { brightness: brightness ?? 1000, temperature: temperature ?? 1000 },
        })
      );
    }
    setMode(`${powerMemory?.mode}`);
  }, [powerMemory]);
  const backToHome = () => {
    router.back();
  };
  const handleEdit = () => {
    setMode('2');
    router.push('/customColor');
  };
  const handleSave = useDebounceFn(
    () => {
      const newMemory = {
        mode: +mode,
        hue: 0,
        saturation: 0,
        value: 0,
        ...customColor,
      };
      dpActions[powerMemoryCode].set(newMemory, { checkRepeat: false });
      // dpUtils.putDpData({ [memoryCode]: newMemory }, { checkRepeat: false });
      // dispatch(actions.common.updateDp({ [memoryCode]: newMemory }));
      router.back();
    },
    { wait: 100 }
  ).run;
  return (
    <View style={{ paddingTop: safeArea?.top }} className={styles.view}>
      <TopBar
        handleCancel={backToHome}
        cancelType="icon"
        title={Strings.getLang('powerMemory')}
        handleSave={handleSave}
      />
      <View style={{ marginTop: 48, marginBottom: 16 }}>
        <Text className={styles.detail}>{Strings.getLang('powerMemory_desc')}</Text>
      </View>
      <View className={styles.box}>
        {defaultMemoryMode.map(item => {
          const isActive = mode === item.mode;
          return (
            <View
              key={item.mode}
              style={{
                backgroundColor: isActive ? '#393838' : '#232222',
              }}
            >
              <Button
                className={styles.row}
                style={{
                  borderBottom: `1px solid ${item.mode === '2' ? 'transparent' : '#393838'}`,
                }}
                opacity={item.mode !== '2' ? 0.7 : 1}
                onClick={() => {
                  setMode(item.mode);
                }}
              >
                {item.mode !== '2' ? (
                  <Image className={styles.icon} src={item.icon} />
                ) : (
                  <View
                    className={styles.icon}
                    style={{
                      backgroundColor: brightKelvin2rgb(
                        customColor.brightness,
                        customColor.temperature
                      ),
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      borderRadius: 28,
                    }}
                  />
                )}
                <View className={styles.colBox}>
                  <Text className={styles.title}>{item.title}</Text>
                  <Text className={styles.desc}>{item.desc}</Text>
                </View>
                {item.mode === '2' && (
                  <Button className={styles.editBtn} onClick={handleEdit}>
                    <Image className={styles.editIcon} src={res.icon_edit} />
                  </Button>
                )}
              </Button>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default PowerMemory;
