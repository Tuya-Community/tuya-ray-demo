import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  PageContainer,
  PickerView,
  PickerViewColumn,
  View,
  showToast as showtoast,
} from '@ray-js/ray';
import { utils } from '@ray-js/panel-sdk';
import { cloneDeep } from 'lodash-es';
import clsx from 'clsx';

import Strings from '@/i18n';
import styles from './index.module.less';

const { toFixed } = utils;

function showToast(title, duration = 3000) {
  showtoast({ title, icon: 'none', duration });
}

function TimeRange({ show, code, list: peakValleyList, onHide }) {
  const [startTimeViewValue, setStartTimeViewValue] = useState([0, 0]);
  const [endTimeViewValue, setEndTimeViewValue] = useState([0, 0]);
  const itemRef = useRef<any>({});
  const [pickerShow, setPickerShow] = useState(false);

  const { startHours, startMinute, endHours, endMinute } = useMemo(() => {
    const hours = Array.from({ length: 24 }, (x, i) => `${i}`);
    const minutes = Array.from({ length: 60 }, (x, i) => `${toFixed(i, 2)}`);
    return {
      startHours: hours,
      startMinute: minutes,
      endHours: hours,
      endMinute: minutes,
    };
  }, []);

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

  // 取消时间选择器
  const cancelPickerSet = (list?: any) => {
    onHide(list);
  };

  // 确认时间选择
  const confirmPickerSet = () => {
    const selectedPeakItem = itemRef.current;
    const { code, startTime, endTime, startMinute, endMinute } = selectedPeakItem;
    // 当前正在编辑的时间段不需要判断冲突
    const filerList = [];
    const list = [...peakValleyList];
    list.forEach((ele, index) => {
      if (code !== index) {
        filerList.push(ele);
      }
    });
    // 校验定时冲突
    const checkRes = checkSelectTime(selectedPeakItem, filerList);
    if (checkRes.isConflict) {
      showToast(checkRes.errorMessage);
      return;
    }
    for (let i = 0, len = list.length; i < len; i++) {
      if (list[i].code === code) {
        list[i].startTime = startTime;
        list[i].startMinute = startMinute;
        list[i].endTime = endTime;
        list[i].endMinute = endMinute;
      }
    }
    cancelPickerSet(list);
  };

  // 切换开始时间
  const startTimeChange = event => {
    const selectedPeakItem = itemRef.current;
    const hourIndex = event.value[0];
    const minIndex = event.value[1];
    // 记录选中的开始时间
    selectedPeakItem.startTime = toFixed(startHours[hourIndex], 2);
    selectedPeakItem.startMinute = toFixed(startMinute[minIndex], 2);
  };

  const endTimeChange = event => {
    const selectedPeakItem = itemRef.current;
    const hourIndex = event.value[0];
    const minIndex = event.value[1];
    // 记录选中的结束时间
    selectedPeakItem.endTime = toFixed(endHours[hourIndex], 2);
    selectedPeakItem.endMinute = toFixed(endMinute[minIndex], 2);
  };

  useEffect(() => {
    if (show && code != null && peakValleyList?.length) {
      const item = peakValleyList.find(i => i.code === code);
      if (!item) return;

      itemRef.current = { ...item };

      const { startTime, endTime, startMinute, endMinute } = item;
      const startTimeIndex = startHours.indexOf(`${+startTime}`);
      const startMinuteIndex = startMinute.indexOf(startMinute);
      const endTimeIndex = endHours.indexOf(`${+endTime}`);
      const endMinuteIndex = endMinute.indexOf(endMinute);
      setStartTimeViewValue([startTimeIndex, startMinuteIndex]);
      setEndTimeViewValue([endTimeIndex, endMinuteIndex]);

      setPickerShow(true);
    } else {
      setPickerShow(false);
      if (show) {
        onHide();
      }
    }
  }, [code, show, peakValleyList]);

  return (
    <PageContainer
      className={styles['page-cell']}
      show={pickerShow}
      onClickOverlay={() => cancelPickerSet()}
    >
      {pickerShow ? (
        <>
          <View className={styles['picker-view-title']}>
            {Strings.getLang('schedule_setting_time_popup')}
          </View>
          <View className={styles['page-section']}>
            <View className={clsx(styles['page-section-demo'], styles['timeline-wrp'])}>
              <PickerView
                style={{ width: '50%', height: '400rpx' }}
                indicator-style="height: 80rpx;"
                onChange={startTimeChange}
                value={startTimeViewValue}
                mask-style="background:transparent"
              >
                <PickerViewColumn>
                  {startHours.map(item => (
                    <View key={item} className={styles['time-view-content']}>
                      {item}
                    </View>
                  ))}
                </PickerViewColumn>
                <PickerViewColumn>
                  {startMinute.map(item => (
                    <View key={item} className={styles['time-view-content']}>
                      {item}
                    </View>
                  ))}
                </PickerViewColumn>
              </PickerView>
              <PickerView
                style={{ width: '50%', height: '400rpx' }}
                indicator-style="height: 80rpx;"
                onChange={endTimeChange}
                value={endTimeViewValue}
                mask-style="background:transparent"
              >
                <PickerViewColumn>
                  {endHours.map(item => (
                    <View key={item} className={styles['time-view-content']}>
                      {item}
                    </View>
                  ))}
                </PickerViewColumn>
                <PickerViewColumn>
                  {endMinute.map(item => (
                    <View key={item} className={styles['time-view-content']}>
                      {item}
                    </View>
                  ))}
                </PickerViewColumn>
              </PickerView>
            </View>
          </View>
          <View className={styles['pickerView-bottom-but']}>
            <View className={styles['pickerView-bottom-box']} onClick={() => cancelPickerSet()}>
              <View className={styles['pickerView-bottom-cancel']}>
                {Strings.getLang('schedule_cancel')}
              </View>
            </View>
            <View className={styles.line} />
            <View className={styles['pickerView-bottom-box']} onClick={confirmPickerSet}>
              <View className={styles['pickerView-bottom-confirm']}>
                {Strings.getLang('schedule_confirm')}
              </View>
            </View>
          </View>
        </>
      ) : null}
    </PageContainer>
  );
}

export default TimeRange;
