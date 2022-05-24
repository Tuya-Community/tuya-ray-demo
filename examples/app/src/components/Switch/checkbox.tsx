import React from 'react';
import { Switch } from '@ray-js/components';
import { showToast } from '@ray-js/api';

export default function () {
  return (
    <Switch
      checked
      type='checkbox'
      onChange={(event) => {
        showToast({ title: JSON.stringify(event), icon: 'none' });
      }}
    />
  );
}
