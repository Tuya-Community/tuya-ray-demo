import { View } from '@ray-js/ray';
import React, { FC, useCallback, useMemo } from 'react';
import Strings from '@/i18n';
import dayjs from 'dayjs';
import { Left, Right } from '@tuya-miniapp/icons';
import { Icon, Tab, Tabs } from '@ray-js/smart-ui';
import styles from './index.module.less';

export type TimeType = 'day' | 'month' | 'year';

interface Props {
  date: dayjs.Dayjs;
  type: TimeType;
  onChange: (date: dayjs.Dayjs, type: TimeType) => void;
  onSelectDate: () => void;
}

const Footer: FC<Props> = ({ type, date, onChange, onSelectDate }) => {
  const options = useMemo(() => {
    const now = dayjs();
    const maxDate: Record<TimeType, dayjs.Dayjs> = {
      day: now,
      month: now,
      year: now,
    };
    const minDate = {
      day: now.subtract(30, 'day'),
      month: now.subtract(12, 'month'),
      year: now.subtract(12, 'month'),
    };
    return {
      maxDate,
      minDate,
    };
  }, []);

  const setting = useMemo(() => {
    let isAddDisabled = false;
    let isMinusDisabled = false;
    let readableFormatToken: string;
    if (type === 'day') {
      const tk = 'YYYYMMDD';
      isAddDisabled = date.add(1, 'day').format(tk) > options.maxDate.day.format(tk); // 大于今天则不允许点击
      isMinusDisabled = date.format(tk) <= options.minDate.day.format(tk); // 最多只能展示近30天的数据
      readableFormatToken = 'YYYY/MM/DD';
    }
    if (type === 'month') {
      const tk = 'YYYYMM';
      isAddDisabled = date.add(1, 'month').format(tk) > options.maxDate.month.format(tk); // 大于本月则不允许点击
      isMinusDisabled = date.format(tk) <= options.minDate.month.format(tk); // 最多只能展示近12个月的数据
      readableFormatToken = 'YYYY.MM';
    }
    if (type === 'year') {
      const tk = 'YYYY';
      isAddDisabled = date.add(1, 'year').format(tk) > options.maxDate.year.format(tk); // 大于本年则不允许点击
      isMinusDisabled = date.format(tk) <= options.minDate.year.format(tk); // 最多只能展示近12个月的数据
      readableFormatToken = 'YYYY';
    }
    return { isAddDisabled, isMinusDisabled, readableFormatToken };
  }, [type, options]);

  const handleChange = useCallback(
    event => {
      const name = event.detail.name as Props['type'];
      // 切换的时候当前时间超出最大或最小时间则设置成最大或最小值
      let result: dayjs.Dayjs = date;
      switch (name) {
        case 'day': {
          const tk = 'YYYYMMDD';
          if (date.format(tk) > options.maxDate.day.format(tk)) {
            result = options.maxDate.day;
          }
          if (date.format(tk) <= options.minDate.day.format(tk)) {
            result = options.minDate.day;
          }
          break;
        }
        case 'month': {
          const tk = 'YYYYMM';
          if (date.format(tk) > options.maxDate.month.format(tk)) {
            result = options.maxDate.month;
          }
          if (date.format(tk) <= options.minDate.month.format(tk)) {
            result = options.minDate.month;
          }
          break;
        }
        case 'year': {
          const tk = 'YYYY';
          if (date.format(tk) > options.maxDate.year.format(tk)) {
            result = options.maxDate.year;
          }
          if (date.format(tk) <= options.minDate.year.format(tk)) {
            result = options.minDate.year;
          }
          break;
        }
        default:
      }
      onChange(result, name);
    },
    [date]
  );

  return (
    <View className={styles['date-selector-container']}>
      <View className={styles['date-selector-content']}>
        <View
          className={styles['date-selector-image-wrapper']}
          style={{ opacity: setting.isMinusDisabled ? 0.3 : 1 }}
          onClick={() => {
            if (setting.isMinusDisabled) return;
            onChange(date.subtract(1, type), type);
          }}
        >
          <Icon name={Left} />
        </View>
        <View className={styles['date-selector-text']} onClick={onSelectDate}>
          {date.format(setting.readableFormatToken)}
        </View>
        <View
          className={styles['date-selector-image-wrapper']}
          style={{ opacity: setting.isAddDisabled ? 0.3 : 1 }}
          onClick={() => {
            if (setting.isAddDisabled) return;
            onChange(date.add(1, type), type);
          }}
        >
          <Icon name={Right} />
        </View>
      </View>
      <Tabs type="card" onChange={handleChange}>
        <Tab name="day" title={Strings.getLang('stats_day')} />
        <Tab name="month" title={Strings.getLang('stats_month')} />
        <Tab name="year" title={Strings.getLang('stats_year')} />
      </Tabs>
    </View>
  );
};

export default Footer;
