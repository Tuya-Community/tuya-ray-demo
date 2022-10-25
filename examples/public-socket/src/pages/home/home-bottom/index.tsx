import React from 'react';
import { router } from 'ray';
import { useBoolean } from 'ahooks';
import { getProductInfo, preloadPanel, openPanel } from '@ray-js/ray';
import { ControllerBar, CountdownActionSheet } from '@/components';
import { icons } from '@/res';
import Strings from '@/i18n';
import { useSdmProps, useActions, useSdmDevice } from '@ray-js/sdm-react';

// @ts-expect-error 本身就支持 promise 只是 ts 类型不符
const getProductInfoAsync: PromisifyTTT<typeof getProductInfo> = getProductInfo;

export const HomeBottom = React.memo(() => {
  const { dpSchema } = useSdmDevice();
  const [visible, { setTrue, setFalse }] = useBoolean(false);
  const { devInfo } = useSdmDevice();

  const actions = useActions();

  const countdown = useSdmProps(dpState => dpState.countdown_1);

  const getSubPanelParams = async () => {
    const { devId, productId } = devInfo;

    const productInfo = await getProductInfoAsync({ productId });
    return {
      deviceId: devId,
      initialProps: {
        brand: '#ef550d',
      },
      extraInfo: {
        productId,
        productVersion: productInfo.productVer,
        i18nTime: `${productInfo.i18nTime}`,
        bizClientId: '000001d7tx',
        uiType: 'RN',
        uiPhase: productInfo.uiPhase,
      },
    };
  };

  const handleSettingClick = () => {
    router.push('/setting');
  };

  const preloadOrGotoSubPanel = async (preload?: boolean) => {
    const params = await getSubPanelParams();
    return preload ? preloadPanel(params) : openPanel(params);
  };

  React.useEffect(() => {
    preloadOrGotoSubPanel(true);
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
            d: icons.timer,
            text: Strings.getLang('schedule'),
            onClick: () => preloadOrGotoSubPanel(false),
          },
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
