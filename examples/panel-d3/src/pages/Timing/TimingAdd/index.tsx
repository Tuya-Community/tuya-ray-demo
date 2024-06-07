import React, { FC, useMemo, useState } from 'react';
import { vibrateShort, showToast, getSystemInfoSync } from '@ray-js/ray';
import clsx from 'clsx';
import { EntityId } from '@reduxjs/toolkit';
import { PageContainer, ScrollView, Switch, Text, View } from '@ray-js/components';
import TimePicker from '@ray-js/components-ty-time-picker';
import { useSelector } from 'react-redux';
import { DialogInput, TouchableOpacity, WeekSelector } from '@/components';
import Strings from '@/i18n';
import { WEEKS } from '@/constant';
import { checkDpExist, getDpIdByCode } from '@/utils';
import { lightCode, switchCode } from '@/config/dpCodes';
import { addTiming, selectTimingById, updateTiming } from '@/redux/modules/timingsSlice';
import { ReduxState, useAppDispatch } from '@/redux';

import styles from './index.module.less';

type Props = {
  visible: boolean;
  onClose: () => void;
  id?: EntityId;
};

const TimingAdd: FC<Props> = ({ id, visible, onClose }) => {
  const dispatch = useAppDispatch();
  const { language } = useMemo(() => getSystemInfoSync(), []);

  // 编辑时的初始值
  const currentTiming = useSelector((state: ReduxState) =>
    id ? selectTimingById(state, id) : null
  );

  const [timeState, setTimeState] = useState(() => {
    if (currentTiming) {
      const [h, m] = currentTiming?.time.split(':');
      return {
        hour: Number(h),
        minute: Number(m),
      };
    }

    return {
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
    };
  });

  const dpsObject = useMemo(() => {
    return currentTiming?.dps ? currentTiming.dps : {};
  }, [currentTiming]);

  const [loops, setLoops] = useState((currentTiming?.loops ?? '0000000').split(''));
  const [dialogVisible, setDialogVisible] = useState(false);
  const [remark, setRemark] = useState(currentTiming?.aliasName ?? '');
  const [fanSwitch, setFanSwitch] = useState(() => dpsObject?.[getDpIdByCode(switchCode)] ?? false);
  const [lightSwitch, setLightSwitch] = useState(
    () => dpsObject?.[getDpIdByCode(lightCode)] ?? false
  );

  const handleSave = async () => {
    const { hour, minute } = timeState;
    const time = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;

    const dps = {
      [getDpIdByCode(switchCode)]: fanSwitch,
      [getDpIdByCode(lightCode)]: lightSwitch,
    };

    try {
      if (id) {
        await dispatch(
          updateTiming({
            id,
            time,
            loops: loops.join(''),
            aliasName: remark,
            dps,
          })
        ).unwrap();
      } else {
        await dispatch(
          addTiming({
            time,
            loops: loops.join(''),
            aliasName: remark,
            dps,
          })
        ).unwrap();
      }

      showToast({
        title: Strings.getLang(id ? 'dsc_edit_success' : 'dsc_create_success'),
        icon: 'success',
      });

      onClose();
    } catch (err) {
      showToast({
        title: err?.message ?? Strings.getLang('dsc_error'),
        icon: 'fail',
      });
    }
  };

  const handleTimeChange = newTime => {
    setTimeState(newTime);
    vibrateShort({ type: 'light' });
  };

  const handleFilterChange = (newLoops: string[]) => {
    setLoops(newLoops);
  };

  return (
    <PageContainer
      show={visible}
      customStyle="backgroundColor: transparent"
      position="bottom"
      overlayStyle="background: rgba(0, 0, 0, 0.1);"
      onLeave={onClose}
      onClickOverlay={onClose}
    >
      <View className={styles.container}>
        <View className={styles.header}>
          <TouchableOpacity className={styles.headerBtnText} onClick={onClose}>
            {Strings.getLang('dsc_cancel')}
          </TouchableOpacity>
          <Text className={styles.title}>
            {Strings.getLang(id ? 'dsc_edit_timing' : 'dsc_add_timing')}
          </Text>
          <TouchableOpacity className={clsx(styles.headerBtnText, 'active')} onClick={handleSave}>
            {Strings.getLang('dsc_save')}
          </TouchableOpacity>
        </View>
        <View className={styles.content}>
          <TimePicker
            columnWrapClassName={styles.pickerColumn}
            indicatorStyle={{ height: '60px', lineHeight: '60px' }}
            wrapStyle={{ width: '400rpx', height: '480rpx', marginBottom: '64rpx' }}
            is24Hour={false}
            value={timeState}
            fontSize="52rpx"
            fontWeight="600"
            unitAlign={language.includes('zh') ? 'left' : 'right'}
            onChange={handleTimeChange}
            amText={Strings.getLang('dsc_am')}
            pmText={Strings.getLang('dsc_pm')}
          />
          <WeekSelector
            value={loops}
            texts={WEEKS.map(item => Strings.getLang(`dsc_week_full_${item}`))}
            onChange={handleFilterChange}
          />
          <View className={styles.featureRow}>
            <Text className={styles.featureText}>{Strings.getLang('dsc_remark')}</Text>
            <TouchableOpacity className={styles.featureBtn} onClick={() => setDialogVisible(true)}>
              <Text className={styles.remark}>{remark}</Text>
              <Text className="iconfontpanel icon-panel-angleRight" />
            </TouchableOpacity>
          </View>
          {checkDpExist(switchCode) && (
            <View className={styles.featureRow}>
              <Text className={styles.featureText}>{Strings.getDpLang(switchCode)}</Text>
              <Switch
                color="#6395f6"
                checked={fanSwitch}
                onChange={() => {
                  setFanSwitch(!fanSwitch);
                  vibrateShort({ type: 'light' });
                }}
              />
            </View>
          )}
          {checkDpExist(lightCode) && (
            <View className={styles.featureRow}>
              <Text className={styles.featureText}>{Strings.getDpLang(lightCode)}</Text>
              <Switch
                color="#6395f6"
                checked={lightSwitch}
                onChange={() => {
                  setLightSwitch(!lightSwitch);
                  vibrateShort({ type: 'light' });
                }}
              />
            </View>
          )}
        </View>
      </View>
      <DialogInput
        defaultValue={remark}
        onChange={setRemark}
        visible={dialogVisible}
        onClose={() => setDialogVisible(false)}
      />
    </PageContainer>
  );
};

export default TimingAdd;
