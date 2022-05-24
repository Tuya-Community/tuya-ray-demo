import React from 'react';
import { TimePicker } from '@ray-js/components';
import { View } from '@ray-js/components';

export default function () {
  const [currentTime, setCurrentTime] = React.useState('12:00');
  const handlePickerChange = (e) => {
    console.log('TimePicker changed', e);
    setCurrentTime(e.value);
  };

  return (
    <TimePicker onChange={handlePickerChange} start={'09:30'} end={'17:30'} value={currentTime}>
      <View>选择时间（朝九晚五）</View>
    </TimePicker>
  );
}
