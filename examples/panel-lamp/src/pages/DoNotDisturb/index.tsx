import {
  Image,
  View,
  Switch,
  hideMenuButton,
  setNavigationBarColor,
  showMenuButton,
} from '@ray-js/ray';
import { router } from 'ray';
import React, { useEffect, useState } from 'react';
import { useActions, useProps } from '@ray-js/panel-sdk';
import Res from '@/res';
import { useSelector } from '@/redux';
import { TopBar } from '@/components';
import Strings from '@/i18n';
import styles from './index.module.less';
import useThrottleFn from '@/hooks/useThrottleFn';
import { lampSchemaMap } from '@/devices/schema';
import { isIphoneX } from '@/utils';

const { do_not_disturb } = lampSchemaMap;

const DoNotDisturb = () => {
  const systemInfo = useSelector(state => state.cloudState.systemInfo);
  const dpActions = useActions();
  const doNotDisturb = useProps(props => props[do_not_disturb.code]);
  const [currentVal, setCurrentVal] = useState(doNotDisturb);
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
    setCurrentVal(doNotDisturb);
  }, [doNotDisturb]);
  const backToHome = () => {
    router.back();
  };

  const handleSave = useThrottleFn(
    () => {
      dpActions.do_not_disturb.set(currentVal, { throttle: 300 });
      router.back();
    },
    { wait: 100 }
  ).run;
  const handleSwitchPress = useThrottleFn(
    v => {
      setCurrentVal(v?.value);
    },
    { wait: 80 }
  ).run;
  return (
    <View
      style={{
        paddingTop: systemInfo?.safeArea?.top * 2,
        paddingBottom: isIphoneX(systemInfo) ? 120 : 60,
      }}
      className={styles.view}
    >
      <TopBar
        handleCancel={backToHome}
        cancelType="icon"
        title={Strings.getLang('doNotDisturb')}
        handleSave={handleSave}
      />
      <View className={styles.container}>
        <View className={styles.containerTop}>
          <View className={styles.imageBar}>
            <Image src={Res.do_not_disturb_lamp} className={styles.image} />
            <Image src={Res.do_not_shadow} className={styles.imageShadow} />
          </View>
          <View className={styles.describeTitle}>{Strings.getLang('tip_doNotDisturb')}</View>
        </View>
        <View className={styles.containerBottom}>
          <View className={styles.bottomBarLeft}>
            <View style={{ fontSize: 28, marginBottom: 10, color: '#fff' }}>
              {Strings.getLang('label_doNotDisturb')}
            </View>
            <View style={{ fontSize: 24, opacity: 0.5, color: '#fff' }}>
              {Strings.getLang('sub_label_doNotDisturb')}
            </View>
          </View>
          <Switch className={styles.switch} checked={currentVal} onChange={handleSwitchPress} />
        </View>
      </View>
    </View>
  );
};

export default DoNotDisturb;
