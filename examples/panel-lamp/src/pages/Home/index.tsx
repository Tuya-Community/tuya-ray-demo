import React, { useState } from 'react';
import { View, Image, Text, ScrollView, router } from '@ray-js/ray';
import clsx from 'clsx';
import {
  useDevice,
  useActions,
  useProps,
  useStructuredActions,
  useStructuredProps,
  useSupport,
} from '@ray-js/panel-sdk';
import { useCreation, useThrottleFn } from 'ahooks';
import { lampSchemaMap } from '@/devices/schema';
import { ControlBar, Button, Dimmer } from '@/components';
import { getCachedSystemInfo } from '@/api/getCachedSystemInfo';
import { devices } from '@/devices';
import Strings from '@/i18n';
import { openScheduleFunctional } from '@/utils/openScheduleFunctional';
import { openRhythmFunctional } from '@/utils/openRhythmFunctional';
import { Box } from '@/components/Box';
import styles from './index.module.less';

const {
  countdown,
  control_data,
  white_gradi_time,
  switch_gradient,
  colour_gradi_time,
  colour_data,
  power_memory,
  do_not_disturb,
  rhythm_mode,
} = lampSchemaMap;

const HeaderHeight = 59;

const sysInfo = getCachedSystemInfo();

export function Home() {
  const support = useSupport();
  const deviceName = useDevice(d => d.devInfo.name);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const dpActions = useActions();
  const dpStructuredActions = useStructuredActions();
  const colour = useStructuredProps(props => props.colour_data);
  const brightness = useProps(props => props.bright_value);
  const temperature = useProps(props => props.temp_value);
  const power = useProps(props => props.switch_led);
  const workMode = useProps(props => props.work_mode);

  const moreFuncs = useCreation(() => {
    const isGroupDevice = support.isGroupDevice();
    return [
      {
        code: 'powerMemory',
        hidden: !support.isSupportDp(power_memory.code) || isGroupDevice,
        disabled: !power,
      },
      {
        code: 'doNotDisturb',
        hidden: !support.isSupportDp(do_not_disturb.code) || isGroupDevice,
        disabled: !power,
      },
      {
        code: 'switchGradient',
        hidden:
          (!support.isSupportDp(switch_gradient.code) &&
            !support.isSupportDp(white_gradi_time.code) &&
            !support.isSupportDp(colour_gradi_time.code)) ||
          isGroupDevice,
        disabled: !power,
      },
      {
        code: 'schedule',
        hidden: !support.isSupportCloudTimer() && !support.isSupportDp(countdown.code),
        onClick: openScheduleFunctional,
        disabled: false,
      },
      {
        code: 'bioRhythm',
        hidden: !support.isSupportDp(rhythm_mode.code) || isGroupDevice,
        onClick: openRhythmFunctional,
        disabled: !power,
      },
    ].filter(item => !item.hidden);
  }, [power]);

  const handleChangeTab = React.useCallback((val: string) => {
    // 切换tab,对应下发工作模式
    dpActions.work_mode.set(val, { checkRepeat: false, throttle: 300 });
  }, []);

  const handleColorChange = React.useCallback((isColour: boolean, data: any) => {
    if (!support.isSupportDp(control_data.code)) return;
    let controlData = { hue: 0, saturation: 0, value: 0, bright: 0, temp: 0 };
    if (isColour) {
      const { hue, saturation, value } = data;
      controlData = { hue, saturation, value, bright: 0, temp: 0 };
    } else {
      const { brightness: bright, temperature: temp } = data;
      controlData = { hue: 0, saturation: 0, value: 0, bright, temp };
    }
    dpStructuredActions.control_data.set(controlData, { throttle: 300 });
  }, []);

  const handleRelease = React.useCallback((code: string, value: any) => {
    if (code === colour_data.code) {
      dpStructuredActions[code].set(value, { throttle: 300, immediate: true });
    } else {
      dpActions[code].set(value, { throttle: 300 });
    }
  }, []);

  const handleReleaseWhite = React.useCallback((value: any) => {
    devices.lamp.publishDps(value, { throttle: 300 });
  }, []);

  const handleJump = useThrottleFn(
    (code: string) => {
      router.push(`/${code}`);
    },
    { wait: 80 }
  ).run;

  const renderMore = React.useCallback(() => {
    return (
      <Box contentClassName={styles.row} title={Strings.getLang('more')}>
        {moreFuncs.map((item, index) => {
          return (
            <Button
              key={item.code}
              className={clsx(styles.greyCard, styles.item)}
              disabled={item.disabled}
              style={{
                marginRight: moreFuncs.length > 1 && index % 2 === 0 ? 14 : 0,
              }}
              onClick={item.onClick || (() => handleJump(item.code))}
            >
              <Text className={styles.funcTitle}>{Strings.getLang(item.code as any)}</Text>
              <Image
                style={{ width: 48, height: 48, marginRight: 12 }}
                src={`/images/setting_${item.code}.png`}
              />
            </Button>
          );
        })}
      </Box>
    );
  }, [moreFuncs]);

  return (
    <View className={styles.view} style={{ paddingTop: `${sysInfo.statusBarHeight}px` }}>
      {/* 根据开关显示不同的页面状态 */}
      <View className={styles.devName}>{deviceName}</View>

      <ScrollView
        scrollY={scrollEnabled}
        refresherTriggered
        style={{
          height: `calc(100vh - ${HeaderHeight}px - ${ControlBar.height}px - ${sysInfo.statusBarHeight}px)`,
        }}
      >
        <Dimmer
          contentClassName={clsx(!power && styles.disabled)}
          setScrollEnabled={setScrollEnabled}
          showTitle
          mode={workMode as any}
          colour={colour}
          brightness={brightness}
          temperature={temperature}
          onModeChange={handleChangeTab}
          onChange={handleColorChange}
          onRelease={handleRelease}
          onReleaseWhite={handleReleaseWhite}
        />
        {moreFuncs.length > 0 && renderMore()}
        <View style={{ height: 60 }} />
      </ScrollView>
      <ControlBar />
    </View>
  );
}

export default Home;
