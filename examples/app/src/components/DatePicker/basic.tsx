import React from 'react';
import { DatePicker } from '@ray-js/components';
import { View } from '@ray-js/components';

export default function () {
  const handlePickerChange = (e) => {
    console.log('DatePicker changed', e);
  };

  return (
    <DatePicker onChange={handlePickerChange}>
      <View>日期选择器</View>
    </DatePicker>
  );
}
