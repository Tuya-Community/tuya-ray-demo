import React from 'react';
import { Text, View } from '@ray-js/components';
import clsx from 'clsx';

import './index.less';
import TouchableOpacity from '../TouchableOpacity';

const prefixCls = 'rayui-week-selector';

type Props = {
  /**
   * 必填
   * 受控数据源 [1, 1, 1, 1, 1, 1, 1]
   */
  value: string[];
  /**
   * 文本 [周日，周一，周二，周三，周四，周五，周六]
   */
  texts: string[];
  /**
   * 选择项变化
   */
  onChange: (value: string[]) => void;
  /**
   *
   */
  type?: 'radio' | 'checkbox';
};

const WeekSelector: React.FC<Props> = ({ value, texts, onChange, type = 'checkbox' }) => {
  const alertCls = clsx(prefixCls);

  const handleSelect = (index: number) => {
    const newValue = [...value];

    if (type === 'checkbox') {
      newValue[index] = newValue[index] === '1' ? '0' : '1';
      onChange?.(newValue);
    }

    if (type === 'radio' && newValue[index] === '0') {
      newValue.fill('0');
      newValue[index] = '1';
      onChange?.(newValue);
    }
  };

  return (
    <View className={alertCls}>
      {value.map((item, index) => {
        const isActive = item === '1';
        return (
          <TouchableOpacity
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={clsx(`${prefixCls}-item`, isActive && 'active')}
            onClick={() => handleSelect(index)}
          >
            <Text className={clsx(`${prefixCls}-item-text`, isActive && 'active')}>
              {texts[index]}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default WeekSelector;
