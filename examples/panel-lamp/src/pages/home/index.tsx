import React, { useEffect } from 'react';
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
import { ControlBar, Button } from '@/components';
import Res from '@/res';
import SupportUtils from '@/utils/SupportUtils';
import { useSelector, store, actions } from '@/redux';
import Strings from '@/i18n';
import dpCodes from '@/config/dpCodes';
import styles from './index.module.less';
import Dimmer from '../Dimmer';
import useThrottleFn from '@/hooks/useThrottleFn';

const { dispatch } = store;
const {
  brightCode,
  temperatureCode,
  controlCode,
  workModeCode,
  colourCode,
  powerMemoryCode,
  doNotDisturbCode,
  toningGradCode,
  dimmingGradCode,
  switchGradientCode,
} = dpCodes;
export function Home() {
  const deviceName = useDevice(d => d.devInfo.name);

  const { currentTab, colorBrightCheckValue, colorTempCheckValue, systemInfo } = useSelector(
    ({ uiState, cloudState }) => ({
      currentTab: uiState.currentTab,
      colorBrightCheckValue: cloudState.colorBrightCheckValue,
      colorTempCheckValue: cloudState.colorTempCheckValue,
      systemInfo: cloudState.systemInfo,
    })
  );
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
      hidden: !SupportUtils.isSupportDp(powerMemoryCode),
    },
    {
      code: 'doNotDisturb',
      hidden: !SupportUtils.isSupportDp(doNotDisturbCode),
    },
    {
      code: 'switchGradient',
      hidden:
        !SupportUtils.isSupportDp(switchGradientCode) ||
        !SupportUtils.isSupportDp(toningGradCode) ||
        !SupportUtils.isSupportDp(dimmingGradCode),
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
  React.useEffect(() => {
    setNavigationBarTitle({ title: deviceName });
  }, [deviceName]);

  const handleChangeTab = (val: string) => {
    // 切换tab,对应下发工作模式
    dpActions[workModeCode].set(val, { checkRepeat: false, throttle: 300 });
  };

  const handleColorChange = (isColour, data) => {
    if (!SupportUtils.isSupportDp(controlCode)) return;
    let controlData = {};
    if (isColour) {
      const { hue, saturation, value } = data;
      controlData = { hue, saturation, value, bright: 0, temp: 0 };
    } else {
      const { brightness: bright, temperature: temp } = data;
      controlData = { hue: 0, saturation: 0, value: 0, bright, temp };
    }
    dpStructuredActions[controlCode].set(controlData, { throttle: 300 });
  };

  const putColorData = (code, value) => {
    if (code === colourCode) {
      dpStructuredActions[code].set(value, { throttle: 300 });
    } else {
      dpActions[code].set(value, { throttle: 300 });
    }
  };
  const handleReleaseWhite = value => {
    dpActions[brightCode].set(value[brightCode], { throttle: 300 });
    dpActions[temperatureCode].set(value[temperatureCode], { throttle: 300 });
  };

  const handleJump = useThrottleFn(
    code => {
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
          scrollY
          refresherTriggered
          style={{ height: `calc(100vh - 206rpx - ${systemInfo?.statusBarHeight * 2}rpx)` }}
        >
          <Dimmer
            mode={workMode}
            colour={colour}
            brightness={brightness}
            temperature={temperature}
            isSupportKelvin={colorTempCheckValue}
            isSupportThousand={colorBrightCheckValue}
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
