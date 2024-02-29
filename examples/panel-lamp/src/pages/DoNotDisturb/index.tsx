import { Image, View, Switch, router } from '@ray-js/ray';
import React, { useEffect, useState } from 'react';
import { useThrottleFn } from 'ahooks';
import { useActions, useProps } from '@ray-js/panel-sdk';
import { TopBar } from '@/components';
import Strings from '@/i18n';
import { useSystemInfo } from '@/hooks/useSystemInfo';
import { useHideMenuButton } from '@/hooks/useHideMenuButton';
import { isIphoneX } from '@/utils/isIphoneX';
import styles from './index.module.less';

const DoNotDisturb = () => {
  const systemInfo = useSystemInfo();
  const dpActions = useActions();
  const doNotDisturb = useProps(props => props.do_not_disturb);
  const [currentVal, setCurrentVal] = useState(doNotDisturb);

  useHideMenuButton();

  useEffect(() => {
    setCurrentVal(doNotDisturb);
  }, [doNotDisturb]);

  const handleBack = React.useCallback(() => {
    router.back();
  }, []);

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
        handleCancel={handleBack}
        cancelType="icon"
        title={Strings.getLang('doNotDisturb')}
        handleSave={handleSave}
      />
      <View className={styles.container}>
        <View className={styles.containerTop}>
          <View className={styles.imageBar}>
            <Image src="/images/do_not_disturb_lamp.png" className={styles.image} />
            <Image src="/images/do_not_shadow.png" className={styles.imageShadow} />
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
