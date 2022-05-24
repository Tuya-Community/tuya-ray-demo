import React from 'react';
import { RadioGroup } from '@ray-js/components';

export default function () {
  const changeRadio = (e) => {
    console.log('RadioGroup的 onChange事件触发', e);
  };
  const options = [
    { label: 'Apple', value: 'Apple', color: '#ff00ff' },
    { label: 'Pear', value: 'Pear', checked: true },
    { label: 'Orange', value: 'Orange', disabled: true, checked: true },
  ];
  return <RadioGroup onChange={changeRadio} options={options} />;
}
