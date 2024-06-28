import React, { useMemo } from 'react';
import { PickerView, PickerViewColumn, View } from '@ray-js/components';
import clsx from 'clsx';
import { isDate, times } from 'lodash';
import { useUpdateEffect } from 'ahooks';
import Color from 'color';
import { DateTimePickerProps, DatetimePickerColumnType, datePickerDefaultProps } from './props';
import { getMonthEndDay, getTrueValue, padZero, useRefState } from './utils';
import styles from './index.module.less';

type ColorRgba = {
  r: number;
  g: number;
  b: number;
  a: number;
};

const DatetimePicker: React.FC<DateTimePickerProps> = props => {
  const {
    value,
    defaultValue,
    formatter,
    columnsOrder,
    type: datePickerType,
    filter,
    minDate,
    maxDate,
    className,
    style,
    bgColor,
    fontStyle,
    fontSize,
    fontWeight,
    fontColor,
    overlayStyle,
    indicatorStyle,
    renderOverlay,
  } = props;

  const formatValue = date => {
    let newDate = date;
    if (!isDate(date)) {
      newDate = minDate;
    }
    newDate = Math.max(newDate, minDate.getTime());
    newDate = Math.min(newDate, maxDate.getTime());
    return new Date(newDate);
  };

  const [currentDate, setCurrentDate, currentDateRef] = useRefState(() =>
    formatValue(value || defaultValue)
  );

  const getBoundary = (type: 'max' | 'min', dateValue: Date) => {
    const boundary = props[`${type}Date`];
    const year = boundary.getFullYear();
    let month = 1;
    let date = 1;
    let hour = 0;
    let minute = 0;

    if (type === 'max') {
      month = 12;
      date = getMonthEndDay(dateValue.getFullYear(), dateValue.getMonth() + 1);
      hour = 23;
      minute = 59;
    }

    if (dateValue.getFullYear() === year) {
      month = boundary.getMonth() + 1;
      if (dateValue.getMonth() + 1 === month) {
        date = boundary.getDate();
        if (dateValue.getDate() === date) {
          hour = boundary.getHours();
          if (dateValue.getHours() === hour) {
            minute = boundary.getMinutes();
          }
        }
      }
    }

    return {
      [`${type}Year`]: year,
      [`${type}Month`]: month,
      [`${type}Date`]: date,
      [`${type}Hour`]: hour,
      [`${type}Minute`]: minute,
    };
  };

  const originColumns = useMemo(() => {
    const {
      maxYear,
      maxDate: maxDay,
      maxMonth,
      maxHour,
      maxMinute,
    } = getBoundary('max', currentDateRef.current);
    const {
      minYear,
      minDate: minDay,
      minMonth,
      minHour,
      minMinute,
    } = getBoundary('min', currentDateRef.current);

    let result = [
      {
        type: 'year',
        range: [minYear, maxYear],
      },
      {
        type: 'month',
        range: [minMonth, maxMonth],
      },
      {
        type: 'day',
        range: [minDay, maxDay],
      },
      {
        type: 'hour',
        range: [minHour, maxHour],
      },
      {
        type: 'minute',
        range: [minMinute, maxMinute],
      },
    ];

    switch (datePickerType) {
      case 'date':
        result = result.slice(0, 3);
        break;
      case 'year-month':
        result = result.slice(0, 2);
        break;
      case 'month-day':
        result = result.slice(1, 3);
        break;
      case 'datehour':
        result = result.slice(0, 4);
        break;
      default:
        break;
    }

    if (columnsOrder) {
      const columnsOrderArr = columnsOrder.concat(result.map(column => column.type));
      result.sort((a, b) => columnsOrderArr.indexOf(a.type) - columnsOrderArr.indexOf(b.type));
    }

    return result.map(({ type, range: rangeArr }) => {
      let values = times(rangeArr[1] - rangeArr[0] + 1, (index: number) => {
        return padZero(rangeArr[0] + index);
      }) as string[];
      if (filter) values = filter(type, values);
      return { type, values };
    });
  }, [columnsOrder, currentDateRef.current, minDate, maxDate]);

  const pickerColumns = useMemo(() => {
    return originColumns.map(column =>
      column.values.map(v => (
        <View
          key={v}
          style={{
            textAlign: 'center',
            lineHeight: '36px',
            color: fontColor,
            fontSize,
            fontWeight,
            ...fontStyle,
          }}
        >
          {formatter(column.type, v)}
        </View>
      ))
    );
  }, [originColumns, formatter]);

  const pickerValue = useMemo(() => {
    const dateValue = currentDateRef.current;
    const values = originColumns.map(column => {
      switch (column.type) {
        case 'year':
          return formatter('year', `${dateValue.getFullYear()}`);
        case 'month':
          return formatter('month', padZero(dateValue.getMonth() + 1));
        case 'day':
          return formatter('day', padZero(dateValue.getDate()));
        case 'hour':
          return formatter('hour', padZero(dateValue.getHours()));
        case 'minute':
          return formatter('minute', padZero(dateValue.getMinutes()));
        default:
          return '';
      }
    });
    return values;
  }, [props.value, currentDateRef.current, formatValue]);

  const updateInnerValue = (indexes: number[]) => {
    const { type } = props;
    const getValue = (datetimePickerColumnType: DatetimePickerColumnType) => {
      let index = 0;
      originColumns.forEach((column, columnIndex) => {
        if (datetimePickerColumnType === column.type) {
          index = columnIndex;
        }
      });
      const { values } = originColumns[index];
      return getTrueValue(values[indexes[index]]);
    };

    let year = null;
    let month = null;
    let day = null;
    if (type === 'month-day') {
      year = (currentDate || minDate).getFullYear();
      month = getValue('month');
      day = getValue('day');
    } else {
      year = getValue('year');
      month = getValue('month');
      day = type === 'year-month' ? 1 : getValue('day');
    }
    const maxDay = getMonthEndDay(year, month);
    day = day > maxDay ? maxDay : day;
    let hour = 0;
    let minute = 0;
    if (type === 'datehour') {
      hour = +getValue('hour');
    }
    if (type === 'datetime') {
      hour = +getValue('hour');
      minute = +getValue('minute');
    }
    return formatValue(new Date(year, month - 1, day, hour, minute));
  };

  const handleChange = (e: { type: 'change'; value: number[] }) => {
    const { value: _value } = e;
    const nextValue = updateInnerValue(_value);
    setCurrentDate(nextValue);
    props?.onChange?.(nextValue);
  };

  useUpdateEffect(() => {
    const nextValue = formatValue(value);
    if (nextValue && nextValue.valueOf() !== currentDate?.valueOf()) {
      setCurrentDate(nextValue);
    }
  }, [value, filter, minDate, maxDate]);

  const currValue = useMemo(() => {
    const indexArr = [];
    pickerValue.forEach((item, index) => {
      indexArr[index] = originColumns[index].values.indexOf(item);
    });
    return indexArr;
  }, [originColumns, pickerValue]);

  const maskBgImg = useMemo(() => {
    try {
      const {
        r: sR,
        g: sG,
        b: sB,
        a: sA,
      } = Color(bgColor).alpha(0.95).rgb() as unknown as ColorRgba;
      const {
        r: eR,
        g: eG,
        b: eB,
        a: eA,
      } = Color(bgColor).alpha(0.6).rgb() as unknown as ColorRgba;
      const startRgba = `rgba(${sR}, ${sG}, ${sB}, ${sA})`;
      const endRgba = `rgba(${eR}, ${eG}, ${eB}, ${eA})`;
      return `linear-gradient(${startRgba}, ${endRgba}), linear-gradient(0deg, ${startRgba}, ${endRgba})`;
    } catch (error) {
      return `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6))`;
    }
  }, [bgColor]);

  return (
    <PickerView
      className={clsx(styles.container, className)}
      style={{
        background: bgColor,
        ...style,
      }}
      value={currValue}
      onChange={handleChange}
      // @ts-ignore
      maskStyle={overlayStyle || { opacity: bgColor ? 0 : 1 }}
      // @ts-ignore
      indicatorStyle={indicatorStyle || { height: '36px' }}
    >
      {pickerColumns.map((item, index) => {
        // eslint-disable-next-line react/no-array-index-key
        return <PickerViewColumn key={index}>{item}</PickerViewColumn>;
      })}
      {bgColor && <View className={styles.maskBox} style={{ backgroundImage: maskBgImg }} />}
      {renderOverlay && renderOverlay()}
    </PickerView>
  );
};

DatetimePicker.defaultProps = datePickerDefaultProps;

export default DatetimePicker;
