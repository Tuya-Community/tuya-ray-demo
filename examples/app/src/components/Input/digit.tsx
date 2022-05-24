import React from 'react';

import { Input } from '@ray-js/components';
import { showToast } from '@ray-js/api';

export default function () {
  function handleConfirm(event: any) {
    showToast({ title: 'confirm click' });
  }

  return <Input placeholder='Product Price' type='digit' onConfirm={handleConfirm} />;
}
