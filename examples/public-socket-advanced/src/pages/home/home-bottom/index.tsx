import React, { useCallback } from 'react';
import { useBoolean } from 'ahooks';
import { useProps, useActions, useDevice } from '@ray-js/panel-sdk';
import { ControllerBar, CountdownActionSheet } from '@/components';
import { router } from '@ray-js/ray';
import { icons } from '@/res';
import Strings from '@/i18n';

export const HomeBottom = () => {
  const { dpSchema } = useDevice();
  const [visible, { setTrue, setFalse }] = useBoolean(false);

  const actions = useActions();

  const countdown = useProps(p => p.countdown_1);
  const power = useProps(p => p.switch_1);
  const handleSettingClick = useCallback(() => {
    router.push('/setting');
  }, []);

  const handleToStats = useCallback(() => {
    router.push('/stats');
  }, []);

  const handlePower = React.useCallback(() => {
    actions.switch_1.toggle();
  }, []);

  const handleStop = React.useCallback(() => {
    setFalse();
    actions.countdown_1.set(0);
  }, []);

  const handleOK = React.useCallback(value => {
    setFalse();
    actions.countdown_1.set(value * 60);
  }, []);

  return (
    <>
      <ControllerBar
        dataSource={[
          {
            d: icons.power,
            text: Strings.getDpLang(dpSchema?.switch_1?.code),
            onClick: handlePower,
            fill: power ? '#fff' : '#437D48',
            iconBg: power ? '#437D48' : undefined,
          },
          {
            d: icons.countdown,
            text: Strings.getDpLang(dpSchema?.countdown_1?.code),
            onClick: setTrue,
          },
          {
            d: icons.chart,
            text: Strings.getLang('statistics'),
            onClick: handleToStats,
          },
          {
            d: icons.setting,
            text: Strings.getLang('setting'),
            onClick: handleSettingClick,
          },
        ]}
      />
      <CountdownActionSheet
        visible={visible}
        title={Strings.getDpLang(dpSchema.countdown_1.code)}
        value={Math.round(countdown / 60)}
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
};
