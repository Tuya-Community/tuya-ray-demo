import React from 'react';
import { DatePicker } from '@ray-js/components';
import { View } from '@ray-js/components';

export default function () {
  const handlePickerChange = (e) => {
    console.log('DatePicker changed', e);
  };

  return (
    <DatePicker onChange={handlePickerChange} start={'2021-1-1'} end={'2021-12-12'} disabled>
      <View>选择日期（不可选）</View>
    </DatePicker>
  );
}
