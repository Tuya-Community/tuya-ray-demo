import React from 'react';
import { CheckboxGroup } from '@ray-js/components';

export default function () {
  const changeCheckbox = (e) => {
    console.log('CheckboxGroup的 onChange事件触发', e.detail);
  };
  const options = [
    { label: 'Apple', value: 'Apple', color: '#ff00ff' },
    { label: 'Pear', value: 'Pear', checked: true },
    { label: 'Orange', value: 'Orange', disabled: true },
  ];
  return <CheckboxGroup onChange={changeCheckbox} options={options} />;
}
