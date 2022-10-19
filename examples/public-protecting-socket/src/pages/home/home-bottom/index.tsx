import React from 'react';
import { router } from 'ray';
import { useBoolean } from 'ahooks';
import { getProductInfo, preloadPanel, openPanel } from '@ray-js/ray';
import { ControllerBar, CountdownActionSheet } from '@/components';
import { devices } from '@/devices';
import { icons } from '@/res';
import Strings from '@/i18n';
import { useSdmProps } from '@ray-js/sdm-react';

// @ts-expect-error 本身就支持 promise 只是 ts 类型不符
const getProductInfoAsync: PromisifyTTT<typeof getProductInfo> = getProductInfo;

const getSubPanelParams = async () => {
  const { devId, productId } = devices.socket.getDevInfo();
  const productInfo = await getProductInfoAsync({ productId });
  // console.log('productInfo', productInfo);
  return {
    deviceId: devId,
    initialProps: {
      brand: '#00B294',
    },
    extraInfo: {
      productId,
      productVersion: productInfo.productVer,
      i18nTime: `${productInfo.i18nTime}`,
      bizClientId: '000001d7tx',
      // uiType: productInfo.uiType,
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
  // console.log('params', params);
  return preload ? preloadPanel(params) : openPanel(params);
  // preload ? preloadPanel(params) : openRNPanel(params);
};

export const HomeBottom = React.memo(() => {
  const dpSchema = devices.socket.getDpSchema();
  const [visible, { setTrue, setFalse }] = useBoolean(false);

  const countdown = useSdmProps(dpState => dpState.countdown_1);

  React.useEffect(() => {
    preloadOrGotoSubPanel(true);
  }, []);

  const handleStop = React.useCallback(() => {
    setFalse();
    devices.socket.model.actions.countdown_1.set(0);
  }, []);

  const handleOK = React.useCallback(value => {
    setFalse();
    devices.socket.model.actions.countdown_1.set(value * 60);
  }, []);

  // const [a, setA] = React.useState(1);

  // console.log('a', a);

  // React.useEffect(() => {
  //   const handler = devices.socket.model.watch.countdown_1((value: number) => {
  //     console.log('=== countdown_1 value', value);
  //     try {
  //       // 倒计时弹窗没有打开前才允许更新
  //       if (show) return;
  //       const [h, m] = utils.parseSecond(value);
  //       const newA = +h + +m;
  //       console.log('newA', newA);
  //       setA(newA);
  //       // setValue([+h, +m]);
  //       // setTimeout(() => {
  //       //   setValue([+h, +m]);
  //       // }, 0);
  //     } catch (error) {
  //       console.log('error', error);
  //     }
  //   });
  //   return () => handler.unwatch();
  // }, []);

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
