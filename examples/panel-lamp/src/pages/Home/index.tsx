import React, { useEffect, useState } from 'react';
import {
  setNavigationBarTitle,
  setNavigationBarColor,
  View,
  Image,
  Text,
  ScrollView,
} from '@ray-js/ray';
import clsx from 'clsx';
import {
  useDevice,
  useActions,
  useProps,
  useStructuredActions,
  useStructuredProps,
} from '@ray-js/panel-sdk';
import { router } from 'ray';
import { lampSchemaMap } from '@/devices/schema';
import { ControlBar, Button } from '@/components';
import Res from '@/res';
import { devices } from '@/devices';
import SupportUtils from '@/utils/SupportUtils';
import { useSelector, store, actions } from '@/redux';
import Strings from '@/i18n';
import useThrottleFn from '@/hooks/useThrottleFn';
import styles from './index.module.less';
import Dimmer from '../Dimmer';

const { dispatch } = store;

const {
  control_data,
  white_gradi_time,
  switch_gradient,
  colour_gradi_time,
  colour_data,
  power_memory,
  do_not_disturb,
} = lampSchemaMap;
export function Home() {
  const deviceName = useDevice(d => d.devInfo.name);

  const { systemInfo } = useSelector(({ cloudState }) => ({
    systemInfo: cloudState.systemInfo,
  }));
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const dpActions = useActions();
  const dpStructuredActions = useStructuredActions();
  const colour = useStructuredProps(props => props.colour_data);
  const brightness = useProps(props => props.bright_value);
  const temperature = useProps(props => props.temp_value);
  const power = useProps(props => props.switch_led);
  const workMode = useProps(props => props.work_mode);

  const moreFuncs = [
    {
      code: 'powerMemory',
      hidden: !SupportUtils.isSupportDp(power_memory.code),
    },
    {
      code: 'doNotDisturb',
      hidden: !SupportUtils.isSupportDp(do_not_disturb.code),
    },
    {
      code: 'switchGradient',
      hidden:
        !SupportUtils.isSupportDp(switch_gradient.code) &&
        !SupportUtils.isSupportDp(white_gradi_time.code) &&
        !SupportUtils.isSupportDp(colour_gradi_time.code),
    },
  ].filter(item => !item.hidden);
  useEffect(() => {
    // 把导航栏切换成黑色
    setNavigationBarColor({
      backgroundColor: '#000000',
      frontColor: '#ffffff',
      animation: null,
    });
  }, []);
  useEffect(() => {
    // 根据workMode切换对应显示页面
    dispatch(actions.common.updateUi({ currentTab: workMode }));
  }, [workMode]);

  useEffect(() => {
    setNavigationBarTitle({ title: deviceName });
  }, [deviceName]);

  const handleChangeTab = (val: string) => {
    // 切换tab,对应下发工作模式
    dpActions.work_mode.set(val, { checkRepeat: false, throttle: 300 });
  };

  const handleColorChange = (isColour: boolean, data: any) => {
    if (!SupportUtils.isSupportDp(control_data.code)) return;
    let controlData = { hue: 0, saturation: 0, value: 0, bright: 0, temp: 0 };
    if (isColour) {
      const { hue, saturation, value } = data;
      controlData = { hue, saturation, value, bright: 0, temp: 0 };
    } else {
      const { brightness: bright, temperature: temp } = data;
      controlData = { hue: 0, saturation: 0, value: 0, bright, temp };
    }
    dpStructuredActions.control_data.set(controlData, { throttle: 300 });
  };

  const putColorData = (code: string, value: any) => {
    if (code === colour_data.code) {
      dpStructuredActions[code].set(value, { throttle: 300, immediate: true });
    } else {
      dpActions[code].set(value, { throttle: 300 });
    }
  };

  const handleReleaseWhite = (value: any) => {
    devices.lamp.publishDps(value, { throttle: 300 });
  };

  const handleJump = useThrottleFn(
    (code: string) => {
      router.push(`/${code}`);
    },
    { wait: 80 }
  ).run;

  const renderMore = () => {
    return (
      <View className={styles.moreContainer}>
        <Text className={styles.title}>{Strings.getLang('more')}</Text>
        <View className={styles.row}>
          {moreFuncs.map((item, index) => {
            return (
              <Button
                key={item.code}
                className={clsx(styles.greyCard, styles.item)}
                style={{ marginRight: moreFuncs.length > 1 && index === 0 ? 16 : 0 }}
                onClick={() => handleJump(item.code)}
              >
                <Text className={styles.funcTitle}>{Strings.getLang(item.code)}</Text>
                <Image
                  style={{ width: 48, height: 48, marginRight: 12 }}
                  src={Res[`setting_${item.code}`]}
                />
              </Button>
            );
          })}
        </View>
      </View>
    );
  };
  return (
    <View className={styles.view} style={{ paddingTop: systemInfo?.statusBarHeight * 2 }}>
      {/* 根据开关显示不同的页面状态 */}
      <View className={styles.devName}>{deviceName}</View>

      {power ? (
        <ScrollView
          scrollY={scrollEnabled}
          refresherTriggered
          style={{ height: `calc(100vh - 320rpx - ${systemInfo?.statusBarHeight * 2}rpx)` }}
        >
          <Dimmer
            setScrollEnabled={setScrollEnabled}
            mode={workMode}
            colour={colour}
            brightness={brightness}
            temperature={temperature}
            handleModeChange={handleChangeTab}
            onChange={handleColorChange}
            onRelease={putColorData}
            onReleaseWhite={handleReleaseWhite}
          />
          {moreFuncs.length > 0 && renderMore()}
          <View style={{ height: 60 }} />
        </ScrollView>
      ) : (
        <View className={clsx(styles.flexCenter, styles.flex1)}>
          <Image src={Res.power_off} style={{ width: 550, height: 550 }} />
        </View>
      )}
      <ControlBar />
    </View>
  );
}

export default Home;
