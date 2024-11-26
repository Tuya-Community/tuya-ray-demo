import React, { useCallback, useMemo } from 'react';
import { View } from '@ray-js/components';
import { useActions, useProps } from '@ray-js/panel-sdk';
import styles from './index.module.less';
import Curtain from '@/components/curtain';
import Strings from '@/i18n';

export default function Home() {
  const { control, percent_control, work_state, situation_set } = useProps();
  const actions = useActions();

  const convert = useCallback(
    value => {
      if (situation_set === 'fully_close') return value;
      return 100 - value;
    },
    [situation_set]
  );

  const reverse = useCallback(
    value => {
      if (situation_set === 'fully_close') return value;
      return 100 - value;
    },
    [situation_set]
  );

  const convertPercent = useMemo(() => convert(percent_control), [percent_control, situation_set]);

  const onChangend = useCallback(
    e => {
      const nextPercent = reverse(e.detail.value);
      if (nextPercent < percent_control) {
        actions.control.set('open');
      } else {
        actions.control.set('close');
      }
      actions.percent_control.set(nextPercent);
    },
    [percent_control, situation_set]
  );

  const open = useCallback(() => {
    actions.control.set('open', { immediate: true });
    actions.percent_control.set(reverse(0), { immediate: true });
  }, [situation_set]);

  const close = useCallback(() => {
    actions.control.set('close', { immediate: true });
    actions.percent_control.set(reverse(100), { immediate: true });
  }, [situation_set]);

  const stop = useCallback(() => {
    actions.control.set('stop', { immediate: true });
  }, []);

  return (
    <View className={styles.view}>
      <View className={styles.curtainBox}>
        <View className={styles.curtain}>
          <Curtain
            control={control}
            work_state={Strings.getDpLang('work_state', work_state)}
            value={convertPercent}
            bindchangend={onChangend}
          />
        </View>
        <View className={styles.control}>
          <View className={styles.controlOpen} onClick={open} />
          <View className={styles.controlStop} onClick={stop} />
          <View className={styles.controlClose} onClick={close} />
        </View>
      </View>
    </View>
  );
}
