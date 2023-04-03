import React from 'react';
import { router } from 'ray';
import { useBoolean } from 'ahooks';
import { ControllerBar, CountdownActionSheet } from '@/components';
import { icons } from '@/res';
import Strings from '@/i18n';
import { useProps, useActions, useDevice } from '@ray-js/panel-sdk';

export const HomeBottom = React.memo(() => {
  const { dpSchema } = useDevice();
  const [visible, { setTrue, setFalse }] = useBoolean(false);

  const actions = useActions();

  const countdown = useProps(p => p.countdown_1);

  const handleSettingClick = () => {
    router.push('/setting');
  };

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
            d: icons.countdown,
            text: Strings.getDpLang(dpSchema?.countdown_1?.code),
            onClick: setTrue,
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
});
