import React from 'react';

import { Input } from '@ray-js/components';
import { showToast } from '@ray-js/api';

export default function () {
  function handleConfirm(event: any) {
    showToast({ title: 'confirm click' });
  }

  // @ts-ignore
  return <Input placeholder='ID Number' type='idcard' onConfirm={handleConfirm} />;
}
