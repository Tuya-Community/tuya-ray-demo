import React, { useState } from 'react';
import { Switch, ScrollView, View, showToast as showtoast, usePageEvent } from '@ray-js/ray';
import { useActions, useProps, useStructuredActions, useStructuredProps } from '@ray-js/panel-sdk';
import { cloneDeep, debounce } from 'lodash-es';
import clsx from 'clsx';

import { TopBar } from '@/components';
import TimeRange from '@/components/time-range';
import Strings from '@/i18n';
import styles from './index.module.less';

export function Settings() {
  const { charger_switch, discharge_switch } = useProps(props => props);
  const actions = useActions();
  const dpStructuredActions = useStructuredActions();
  const time_schedule = useStructuredProps(props => props.time_schedule);

  const [chargerManualSwitch, setChargerManualSwitch] = useState(charger_switch);
  const [dischargeManualSwitch, setDischargeManualSwitch] = useState(discharge_switch);
  const [peakValleyList, setPeakValleyList] = useState(time_schedule);

  const [pageContainerShow, setPageContainerShow] = useState(false);
  const [peakEdit, setPeakEdit] = useState(false);
  const [selectedPeakItemCode, setSelectedPeakItemCode] = useState<any>();

  usePageEvent('onShow', () => {
    setChargerManualSwitch(charger_switch);
    setDischargeManualSwitch(discharge_switch);
    setPeakValleyList(time_schedule);
  });

  function showToast(title, duration = 3000) {
    showtoast({ title, icon: 'none', duration });
  }
  // 校验时间段（仅支持1天内24小时）
  function checkSelectTime(curSelPeakItem, peakList) {
    function countMinutes(hour, minute) {
      return +hour * 60 + +minute;
    }
    const result = {
      isConflict: false,
      errorMessage: '',
    };
    const curTime = { ...curSelPeakItem };
    const list = cloneDeep(peakList);
    try {
      if (
        countMinutes(curTime.startTime, curTime.startMinute) >=
        countMinutes(curTime.endTime, curTime.endMinute)
      ) {
        result.isConflict = true;
        result.errorMessage = Strings.getLang('schedule_setting_compare_time_tip');
      }
      for (let i = 0, len = list.length; i < len; i++) {
        // 与时间段有交集
        if (
          (countMinutes(curTime.startTime, curTime.startMinute) >
            countMinutes(list[i].startTime, list[i].startMinute) &&
            countMinutes(curTime.startTime, curTime.startMinute) <
              countMinutes(list[i].endTime, list[i].endMinute)) ||
          (countMinutes(curTime.endTime, curTime.endMinute) >
            countMinutes(list[i].startTime, list[i].startMinute) &&
            countMinutes(curTime.endTime, curTime.endMinute) <
              countMinutes(list[i].endTime, list[i].endMinute))
        ) {
          result.isConflict = true;
          result.errorMessage = Strings.getLang('schedule_setting_time_repeat_tip');
          break;
        }
        // 包含了已有的时间段
        if (
          countMinutes(curTime.startTime, curTime.startMinute) <=
            countMinutes(list[i].startTime, list[i].startMinute) &&
          countMinutes(curTime.endTime, curTime.endMinute) >=
            countMinutes(list[i].endTime, list[i].endMinute)
        ) {
          result.isConflict = true;
          result.errorMessage = Strings.getLang('schedule_setting_time_repeat_tip');
          break;
        }
      }
    } catch (e) {
      console.error('checkSelectPeriodTime:', e);
    }
    return result;
  }
  const handleManualSwitchCharge = event => {
    setChargerManualSwitch(event.value);
  };
  const handleManualSwitchDisCharge = event => {
    setDischargeManualSwitch(event.value);
  };
  const editClick = () => {
    setPeakEdit(!peakEdit);
  };
  // 删除定时元素
  const delPeakItem = event => {
    const { code } = event.origin.currentTarget.dataset.peakItem;
    const list = [...peakValleyList];
    list.splice(code, 1);
    for (let i = 0, len = list.length; i < len; i++) {
      list[i].code = i;
    }
    setPeakValleyList(list);
  };

  // 定时充电switch
  const handleTimeSwitchCharge = event => {
    const { origin, value } = event;
    const { code } = origin.currentTarget.dataset;
    const list = [...peakValleyList];
    for (let i = 0, len = list.length; i < len; i++) {
      if (list[i].code === code) {
        list[i].chargeSwitch = value;
      }
    }
    setPeakValleyList(list);
  };

  // 定时放电switch
  const handleTimeSwitchDisCharge = event => {
    const { origin, value } = event;
    const { code } = origin.currentTarget.dataset;
    const list = [...peakValleyList];
    for (let i = 0, len = list.length; i < len; i++) {
      if (list[i].code === code) {
        list[i].disChargeSwitch = value;
      }
    }
    setPeakValleyList(list);
  };

  // 弹出时间选择器
  const showTimePageContainer = event => {
    const { code } = event.origin.currentTarget.dataset.seleItem;
    setTimeout(() => {
      setSelectedPeakItemCode(code);
      setPageContainerShow(true);
    }, 50);
  };

  // 添加定时
  const addTimeSchedule = debounce(
    function (e) {
      const list = [...peakValleyList];
      list.push({
        code: list.length,
        startTime: '00', // 起始时间
        startMinute: '00',
        endTime: '01', // 结束时间
        endMinute: '00',
        chargeSwitch: false,
        disChargeSwitch: false,
      });
      setPeakValleyList(list);
    },
    500,
    { leading: true, trailing: false }
  );

  // 保存定时设置
  const saveTimeSchedule = debounce(
    function () {
      if (chargerManualSwitch || dischargeManualSwitch) {
        // 如果手动开关开启，仅下发手动开关
        actions.charger_switch.set(chargerManualSwitch);
        actions.discharge_switch.set(dischargeManualSwitch);
      } else {
        // 时间冲突校验
        for (let i = 0, len = peakValleyList.length; i < len; i++) {
          const List = [];
          peakValleyList.forEach(item => {
            if (peakValleyList[i].code !== item.code) {
              List.push(item);
            }
          });
          const checkRes = checkSelectTime(peakValleyList[i], List);
          if (checkRes.isConflict) {
            showToast(checkRes.errorMessage);
            return;
          }
        }
        actions.charger_switch.set(chargerManualSwitch);
        actions.discharge_switch.set(dischargeManualSwitch);
        dpStructuredActions.time_schedule.set(peakValleyList);
      }
      showToast(Strings.getLang('schedule_setting_success'));
    },
    1000,
    { leading: true, trailing: false }
  );

  return (
    <>
      <ScrollView refresherTriggered scrollY className={styles.view}>
        <TopBar title="" style={{ background: 'unset' }} />

        <View className={styles.container}>
          {/* <!-- 手动开关 --> */}
          <View className={styles['tab-label-content']}>
            <View className={styles['tab-label-title']}>
              {Strings.getLang('schedule_manual_switch')}
            </View>
            <View className={styles['manual-content']}>
              <View className={styles['switch-btn-border']}>
                <View className={styles['switch-btn-label']}>
                  {Strings.getLang('schedule_charge')}:
                </View>
                <Switch
                  checked={chargerManualSwitch}
                  color="#3678E3"
                  onChange={handleManualSwitchCharge}
                />
              </View>
              <View className={styles['switch-btn-border']}>
                <View className={styles['switch-btn-label']}>
                  {Strings.getLang('schedule_discharge')}:
                </View>
                <Switch
                  checked={dischargeManualSwitch}
                  color="#3678E3"
                  onChange={handleManualSwitchDisCharge}
                />
              </View>
            </View>
          </View>
          {/* <!-- 定时开关 --> */}
          <View className={clsx(styles['tab-label-content'], styles['mt-20'])}>
            <View className={styles['tab-label-title']}>
              {Strings.getLang('schedule_char_dis_time_setting')}
            </View>
            {!chargerManualSwitch && !dischargeManualSwitch ? (
              <View className={styles['time-schedule-content']}>
                <View className={styles['edit-btn-cont']} onClick={editClick}>
                  <View className={styles['edit-btn']}>
                    {peakEdit
                      ? Strings.getLang('schedule_cancel')
                      : Strings.getLang('schedule_edit')}
                  </View>
                </View>
                {peakValleyList.map((item, index) => (
                  <View
                    key={index}
                    className={clsx(
                      styles['time-schedule-item-wrapper'],
                      peakEdit ? styles.editing : null
                    )}
                  >
                    <View
                      className={clsx(styles['del-icon'], peakEdit ? null : styles.invisible)}
                      data-peak-item={item}
                      onClick={delPeakItem}
                    />
                    <View className={styles['time-schedule-ls']}>
                      <View className={styles['schedule-switch']}>
                        <View className={styles['switch-btn-label']}>
                          {Strings.getLang('schedule_period')}
                          {index + 1}
                        </View>
                        <View className={styles['schedule-switch-content']}>
                          <View className={styles['switch-btn-border']}>
                            <View className={styles['switch-btn-label']}>
                              {Strings.getLang('schedule_charge')}:
                            </View>
                            <Switch
                              data-code={item.code}
                              checked={item.chargeSwitch}
                              color="#3678E3"
                              onChange={handleTimeSwitchCharge}
                            />
                          </View>
                          <View className={styles['switch-btn-border']}>
                            <View className={styles['switch-btn-label']}>
                              {Strings.getLang('schedule_discharge')}:
                            </View>
                            <Switch
                              data-code={item.code}
                              checked={item.disChargeSwitch}
                              color="#3678E3"
                              onChange={handleTimeSwitchDisCharge}
                            />
                          </View>
                        </View>
                      </View>
                      <View
                        className={styles.peakValley_time}
                        data-sele-item={item}
                        onClick={showTimePageContainer}
                      >
                        <View className={styles.peakValley_time_text}>
                          {item.startTime}:{item.startMinute}
                        </View>
                        <View className={styles.peakValley_time_line}>～</View>
                        <View className={styles.peakValley_time_text}>
                          {item.endTime}:{item.endMinute}
                        </View>
                      </View>
                      {index >= 3 ? null : <View className={styles['bottom-line']} />}
                    </View>
                  </View>
                ))}

                {/* <!-- 添加时段 --> */}
                {!peakEdit && peakValleyList.length < 4 ? (
                  <View className={styles['add-time-schedule']} onClick={addTimeSchedule}>
                    {Strings.getLang('schedule_add_time_period')}
                  </View>
                ) : null}
              </View>
            ) : null}
          </View>

          {/* <!-- 保存按钮 --> */}
          {!peakEdit ? (
            <View className={styles['save-btn']} onClick={saveTimeSchedule}>
              {Strings.getLang('schedule_save')}
            </View>
          ) : null}
        </View>
      </ScrollView>

      {/* <!-- page-container --> */}
      <TimeRange
        show={pageContainerShow}
        code={selectedPeakItemCode}
        list={peakValleyList}
        onHide={list => {
          if (list) {
            setPeakValleyList(list);
          }
          setPageContainerShow(false);
        }}
      />
    </>
  );
}

export default Settings;
