import React from 'react';
import { PickerView } from '@ray-js/components';

export default function () {
  const [current, setCurrent] = React.useState([0, 1]);

  const handlePickerChange = (e) => {
    console.log(e);
    setCurrent(e.value);
  };

  const range = [
    ['巴西', '中国', '日本', '美国'],
    ['橘子', '苹果', '香蕉', '西瓜'],
  ];
  return <PickerView onChange={handlePickerChange} range={range} value={current}></PickerView>;
}
