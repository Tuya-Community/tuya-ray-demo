import React from 'react';
import clsx from 'clsx';
import { utils } from '@ray-js/panel-sdk';
import { View, PickerView, PickerViewColumn, Text } from '@ray-js/ray';
import { IProps, defaultProps } from './props';
import { minute2HMText, minute2Hour, minute2PickerValues } from './utils';
import './style.less';

const prefix = 'rayui-countdown-picker';

export const CountdownPicker: React.FC<IProps> = React.memo<IProps>(props => {
  const {
    style,
    className,
    value,
    mode,
    min,
    max,
    step,
    hourText,
    minuteText,
    countdownCloseText,
    countdownCloseTipText,
    onChange,
    onStop,
    onReset,
  } = props;

  const countdownValues = minute2PickerValues(value);
  const [currentHour, currnetMinute] = countdownValues;

  const maxHour = React.useRef(minute2Hour(max)).current;
  const minHour = React.useRef(minute2Hour(min)).current;
  const hoursColumns = React.useRef(utils.range(minHour, maxHour + 1));
  const minutesColumns = React.useRef(utils.range(0, 60, step));
  const remainMins = max % 60;
  const shiftMins = min % 60;

  const equalMinutesColumns = React.useRef(utils.range(shiftMins, remainMins + 1, step)); // 当最大小时与最小小时相等的分钟
  const remainMinutesColumns = React.useRef(utils.range(0, remainMins + 1, step)); // 选中最大小时时剩余的分钟
  const shiftMinutesColumns = React.useRef(utils.range(shiftMins, 60, step)); // 选中最小小时时剩余的分钟

  const isMaxHour = currentHour === maxHour; // 当前 Picker 是否位于最大小时
  const isMinHour = currentHour === minHour; // 当前 Picker 是否位于最小小时

  let minuteValues: number[];
  if (isMaxHour && isMinHour) {
    minuteValues = equalMinutesColumns.current;
  } else if (isMaxHour && !isMinHour) {
    minuteValues = remainMinutesColumns.current;
  } else if (isMinHour && !isMaxHour) {
    minuteValues = shiftMinutesColumns.current;
  } else {
    minuteValues = minutesColumns.current;
  }

  const handleChange = React.useCallback(evt => {
    let [curH, curM] = evt.value; // eslint-disable-line prefer-const
    const isMaxH = curH === maxHour;
    const isMinH = curH === minHour;
    let curMinute = currnetMinute;
    // 如果此前选择的分钟在选中最大小时情况下的剩余分钟中不存在，则把分钟置为0
    if (isMaxH && remainMinutesColumns.current.indexOf(curMinute) === -1) {
      curMinute = remainMinutesColumns.current[0];
    }
    // 如果此前选择的分钟在选中最小时情况下的剩余分钟中不存在，则把分钟置为最初值中的最小值
    if (isMinH && shiftMinutesColumns.current.indexOf(curMinute) === -1) {
      curMinute = shiftMinutesColumns.current[0];
    }

    /**
     * 由于 PickerView 回调返回的值为索引，
     * 因此需要将索引转换为业务层可理解的值返回出去
     */
    curM = curM * step + (isMinH ? min : 0);
    const resultH = utils.inMaxMin(minHour, maxHour, curH);
    const resultM = utils.inMaxMin(0, 60, curM);
    const resultValue = utils.inMaxMin(min, max, resultH * 60 + resultM);
    const result = {
      hour: resultH,
      minute: resultM,
      value: resultValue,
    };
    typeof onChange === 'function' && onChange(result);
  }, []);

  const PickerViewColumns = React.useMemo(() => {
    return [hoursColumns.current, minuteValues].map((item, index) => {
      return (
        <PickerViewColumn key={`${index}`}>
          {item.map(v => {
            return (
              <View key={`${index}_${v}`} className={clsx(`${prefix}-picker-column-wrap`)}>
                <Text>{v}</Text>
              </View>
            );
          })}
        </PickerViewColumn>
      );
    });
  }, [minuteValues]);

  /**
   * 由于 PickerView 的值必须为索引，
   * 因此需要将接受到的值根据 step 和 min 转换为对应所处的索引地址
   */
  countdownValues[1] = currnetMinute / step - (isMinHour ? min / step : 0);

  return (
    <View className={clsx(`${prefix}-container`)}>
      {mode === 'display' ? (
        <View className={clsx(`${prefix}-countdown-view`)}>
          <Text className={clsx(`${prefix}-countdown-tip`)}>{countdownCloseTipText}</Text>
          <Text className={clsx(`${prefix}-countdown-title`)} onClick={onReset}>
            {minute2HMText(value)}
          </Text>
          <View className={clsx(`${prefix}-countdown-close`)} onClick={onStop}>
            {countdownCloseText}
          </View>
        </View>
      ) : (
        <>
          <PickerView
            className={clsx(`${prefix}-picker-view`, className)}
            style={style}
            value={countdownValues}
            onChange={handleChange}
          >
            {PickerViewColumns}
          </PickerView>
          <Text className={clsx(`${prefix}-picker-unit`, `${prefix}-picker-unit-hour`)}>
            {hourText}
          </Text>
          <Text className={clsx(`${prefix}-picker-unit`, `${prefix}-picker-unit-minute`)}>
            {minuteText}
          </Text>
        </>
      )}
    </View>
  );
});

CountdownPicker.defaultProps = defaultProps;
