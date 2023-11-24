import React, { useCallback, useMemo } from 'react';
import { Text, View, publishDps } from '@ray-js/ray';
import MultiSocketSwitch from '@ray-js/multi-socket-switch';
import { useActions, useDevice, useProps } from '@ray-js/panel-sdk';
import { TopBar } from '@/components';
import styles from './index.module.less';
import { HomeBottom } from './bottom';
import Strings from '@/i18n';
import { formatCountdown } from '@/utils';

export function Home() {
  const devInfo = useDevice(d => d.devInfo);
  console.log('devInfo', JSON.stringify(devInfo.schema));
  const actions = useActions();
  const dpState = useProps(d => d);
  // 取得所有开关（fetch all switchs)
  const switchCodes = useMemo(() => {
    return devInfo.schema
      .filter(item => /^switch_(\d)$/.test(item.code))
      .map(item => item.code)
      .sort((a, b) => {
        return a > b ? 1 : -1;
      });
  }, [devInfo.devId]);
  // usb
  const usbSwitchCodes = useMemo(() => {
    return devInfo.schema
      .filter(item => /^usb_switch_(\d)$/.test(item.code))
      .map(item => item.code)
      .sort((a, b) => {
        return a > b ? 1 : -1;
      });
  }, [devInfo.devId]);
  // 开关倒计时
  const countdownCodes = useMemo(() => {
    return devInfo.schema
      .filter(item => /^countdown_(\d)$/.test(item.code))
      .map(item => item.code)
      .sort((a, b) => {
        return a > b ? 1 : -1;
      });
  }, [devInfo.devId]);

  const switchData = useMemo(() => {
    return switchCodes.map(code => ({ dpCode: code, dpValue: dpState[code] as boolean }));
  }, [dpState, switchCodes]);

  const usbData = useMemo(() => {
    return usbSwitchCodes.map(code => ({ dpCode: code, dpValue: dpState[code] as boolean }));
  }, [dpState, usbSwitchCodes]);

  const mainSwitch = useMemo(() => {
    return switchData.every(item => item.dpValue) && usbData.every(item => item.dpValue);
  }, [switchData, usbData]);

  const handleMainPower = useCallback(() => {
    const dpData: Record<string, boolean> = {};
    switchCodes.reduce((res, cur) => {
      res[cur] = !mainSwitch;
      return res;
    }, dpData);
    usbSwitchCodes.reduce((res, cur) => {
      res[cur] = !mainSwitch;
      return res;
    }, dpData);
    publishDps(dpData);
  }, [mainSwitch, switchCodes, usbSwitchCodes]);

  const handlePower = useCallback(dpCode => {
    actions[dpCode].toggle();
  }, []);

  return (
    <View className={styles.view}>
      <TopBar />
      <View
        className={styles.content}
        onClick={() => {
          // actions.switch_1.toggle();
        }}
      >
        <View className={styles.main} style={{ marginTop: '50rpx' }}>
          <View>
            {/* 简单模式 */}
            {/* <MultiSocketSwitch
              switchClassName={styles.socket}
              switchList={switchData}
              usbData={usbData}
              double={switchData.length > 3}
              usbLayout={switchData.length > 3 ? 'horizontal' : 'veritical'}
            /> */}
            {/* 自定义模式 */}
            <MultiSocketSwitch.Container style={{ width: 200 }}>
              <MultiSocketSwitch.MainSwitch value={mainSwitch} onClick={handleMainPower} />
              {switchData.map(item => {
                return (
                  <MultiSocketSwitch.SubSwitch
                    key={item.dpCode}
                    dpCode={item.dpCode}
                    dpValue={item.dpValue}
                    onClick={handlePower}
                  />
                );
              })}
              {usbData.map(item => {
                return (
                  <MultiSocketSwitch.USBSwitch
                    key={item.dpCode}
                    dpCode={item.dpCode}
                    dpValue={item.dpValue}
                    onClick={handlePower}
                  />
                );
              })}
            </MultiSocketSwitch.Container>
          </View>
          {/* 倒计时处理 */}
          <View className={styles.countdownBox}>
            {/* 开关名称及倒计时 */}
            <View>
              {switchCodes.map(code => {
                // 对应的倒计时
                const id = code.match(/switch_(\d)/);
                console.log();
                let countdownCode = '';
                if (id && id[1]) {
                  countdownCode = `countdown_${id[1]}`;
                }
                const countdown = dpState[countdownCode] || 0;
                const switchPower = dpState[code];
                return (
                  <View key={code} className={styles.countdownItem}>
                    <View className={styles.name}>{Strings.getDpLang(code)}</View>
                    {countdownCodes.includes(countdownCode) && countdown > 0 && (
                      <View className={styles.countdown}>
                        {Strings.formatValue(
                          switchPower ? 'countdown_tip_off' : 'countdown_tip_on',
                          formatCountdown(countdown)
                        )}
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </View>
      <HomeBottom />
    </View>
  );
}

export default Home;
