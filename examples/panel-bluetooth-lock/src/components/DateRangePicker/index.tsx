import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { View, Text } from '@ray-js/ray';
import dayjs from 'dayjs';

import List from '@ray-js/components-ty-cell';
import Icon from '@ray-js/components/lib/Icon';
import ActionSheet from '@ray-js/components-ty-actionsheet';
import DatetimePicker from '@/components/DateTimePicker';

import Strings from '@/i18n';
import styles from './index.module.less';

const dateformat = (type: "datetime" | 'date' | 'year-month' | 'month-day' | 'datehour') => {
  switch (type) {
    case 'datetime':
      return 'YYYY-MM-DD HH:mm';
    case 'date':
      return 'YYYY-MM-DD';
    case 'year-month':
      return 'YYYY-MM';
    case 'month-day':
      return 'MM-DD';
    case 'datehour':
      return 'YYYY-MM-DD HH:00';
    default:
      return 'YYYY-MM-DD HH:mm';
  }
}

const formatDate = (date: number, type: "datetime" | 'date' | 'year-month' | 'month-day' | 'datehour') => {
  if (date) {
    return dayjs(+date).format(dateformat(type))
  } else {
    return ''
  }
}

interface IDateRangePicker {
  type?: "datetime" | 'date' | 'year-month' | 'month-day' | 'datehour';
  columnsOrder?: string[];
  startDate?: number;
  endDate?: number;
  onEndChange?: (e: any) => void;
  style?: React.CSSProperties;
}

const DateRangePicker: React.FC<IDateRangePicker> = ({ type = 'datehour', columnsOrder, startDate, endDate, style, onEndChange }) => {
  const [startTime, setStartTime] = useState<Date>(new Date(startDate));
  const endTime = useRef(endDate);

  useEffect(() => {
    setStartTime(new Date(startDate)); // 更新组件
    endTime.current = endDate
  }, [endDate])

  const {
    modal: startDateModal,
    setVisible: setShowStartDate,
    visible: showStartDate,
  } = ActionSheet.useActionSheet({
    header: Strings.getLang('pleaseSelect'),
    onOk: () => {
      onEndChange && onEndChange({
        startDate: startTime.getTime(),
        endDate: endTime.current ? new Date(endTime.current).getTime() : 0,
      })
      setShowStartDate(!showStartDate);
    },
    onCancel: () => setShowStartDate(!showStartDate),
    okText: Strings.getLang('confirm'),
    cancelText: Strings.getLang('cancel'),
    content: () => {
      const newDate = new Date().valueOf(); // number型
      const nowDate = new Date(newDate); // Date型
      return (
        <View className={styles.pickerWarp}>
          <DatetimePicker
            type={type}
            columnsOrder={columnsOrder}
            minDate={new Date(newDate)}
            maxDate={new Date(nowDate.setFullYear(nowDate.getFullYear() + 1))} // 一年后的今天
            value={new Date(startTime || Date.now())}
            onChange={(value) => {
              console.log('setStartTime value', value)
              setStartTime(value);
            }}
          />
        </View>
      );
    },
  });

  const {
    modal: endDateModal,
    setVisible: setShowEndDate,
    visible: endStartDate,
  } = ActionSheet.useActionSheet({
    header: Strings.getLang('pleaseSelect'),
    onOk: () => {
      onEndChange && onEndChange({
        startDate: startTime.getTime(),
        endDate: endTime.current ? new Date(endTime.current).getTime() : 0,
      })
      setShowEndDate(!endStartDate);
    },
    onCancel: () => setShowEndDate(!endStartDate),
    okText: Strings.getLang('confirm'),
    cancelText: Strings.getLang('cancel'),
    content: () => {
      const newDate = new Date().valueOf(); // number型
      const nowDate = new Date(newDate); // Date型
      return (
        <View className={styles.pickerWarp}>
          <DatetimePicker
            type={type}
            columnsOrder={columnsOrder}
            minDate={startTime}
            maxDate={new Date(nowDate.setFullYear(nowDate.getFullYear() + 1))} // 一年后的今天
            value={new Date(endTime.current || Date.now())}
            onChange={(value) => {
              endTime.current = value.getTime()
            }}
          />
        </View>
      );
    },
  });

  return (
    <View className={clsx(styles.container, style)}>
      <List>
        <List.Item
          title={Strings.getLang('Password_form_effectTime')}
          onClick={() => setShowStartDate(true)}
          contentStyle={{ width: '65%' }}
          content={
            <View className={styles.valueView}>
              <Text className={styles.text}>{formatDate(startDate, type)}</Text>
              <Icon type="icon-right" size={24} color={'rgba(0,0,0,0.2)'} />
            </View>
          }
        />
        <List.Item
          title={Strings.getLang('Password_form_unEffectTime')}
          contentStyle={{ width: '65%' }}
          onClick={() => setShowEndDate(true)}
          content={
            <View className={styles.valueView}>
              <Text className={styles.text}>{formatDate(endDate, type)}</Text>
              <Icon type="icon-right" size={24} color={'rgba(0,0,0,0.2)'} />
            </View>
          }
        />
      </List>
      {startDateModal}
      {endDateModal}
    </View>
  );
};

export default DateRangePicker;
