import React, { useCallback, useMemo, useState } from 'react';
import { View, router } from 'ray';
import { useBoolean } from 'ahooks';
import Actionsheet from '@ray-js/components-ty-actionsheet';
import { useProps, useActions, useDevice } from '@ray-js/panel-sdk';
import { ControllerBar, CountdownActionSheet } from '@/components';
import { icons } from '@/res';
import Strings from '@/i18n';

export const HomeBottom = React.memo(() => {
  const { devInfo } = useDevice();
  const [visible, { setTrue, setFalse }] = useBoolean(false);
  const [selectVisible, { setTrue: showSelection, setFalse: hideSelectioin }] = useBoolean(false);
  const [countdownCode, setCountdownCode] = useState('');
  const actions = useActions();

  const dpState = useProps(p => p);

  // 开关倒计时
  const countdownCodes = useMemo(() => {
    return devInfo.schema
      .filter(item => /^countdown_(\d)$/.test(item.code))
      .map(item => item.code)
      .sort((a, b) => {
        return a > b ? 1 : -1;
      });
  }, [devInfo.devId]);

  const handleSettingClick = () => {
    router.push('/setting');
  };

  const handleToChart = () => {
    router.push('/chart');
  };

  const handleStop = React.useCallback(() => {
    setFalse();
    actions.countdown_1.set(0);
  }, []);

  const handleOK = React.useCallback(
    value => {
      setFalse();
      actions[countdownCode].set(value * 60);
    },
    [countdownCode]
  );
  const handleSelect = useCallback(e => {
    const { code } = e.origin.target.dataset;
    setCountdownCode(code);
    hideSelectioin();
    setTrue();
  }, []);

  return (
    <>
      <ControllerBar
        dataSource={[
          {
            d: icons.countdown,
            text: Strings.getLang('countdown'),
            onClick: showSelection,
          },
          {
            d: icons.chart,
            text: Strings.getLang('statistics'),
            onClick: handleToChart,
          },
          {
            d: icons.setting,
            text: Strings.getLang('setting'),
            onClick: handleSettingClick,
          },
        ]}
      />
      <Actionsheet
        show={selectVisible}
        header={Strings.getLang('selectCountdown')}
        cancelText={Strings.getLang('cancel')}
        okText=""
        onCancel={hideSelectioin}
      >
        {countdownCodes.map(item => {
          return (
            <View
              style={{ height: 96, lineHeight: '96rpx', textAlign: 'center' }}
              key={item}
              data-code={item}
              onClick={handleSelect}
            >
              {Strings.getDpLang(item)}
            </View>
          );
        })}
      </Actionsheet>
      <CountdownActionSheet
        visible={visible}
        title={Strings.getDpLang(countdownCode)}
        value={Math.round(dpState[countdownCode] / 60)}
        cancelText={Strings.getLang('cancel')}
        okText={Strings.getLang('confirm')}
        startText={Strings.getLang('start')}
        hourText={Strings.getLang('hour')}
        minuteText={Strings.getLang('minute')}
        countdownCloseText={Strings.getLang('countdownClose')}
        countdownCloseTipText={Strings.getLang('countdownCloseTip')}
        onClickOverlay={setFalse}
        onStop={handleStop}
        onCancel={setFalse}
        onOk={handleOK}
      />
    </>
  );
});
