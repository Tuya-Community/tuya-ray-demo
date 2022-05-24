import * as React from 'react';

import { Input } from '@ray-js/components';
import { showToast } from '@ray-js/api';

export default function () {
  function handleConfirm(event: any) {
    showToast({ title: 'confirm click' });
  }

  return (
    <React.Fragment>
      <Input
        placeholder='Search'
        type='text'
        wechat-confirm-type='search'
        onConfirm={handleConfirm}
      />
    </React.Fragment>
  );
}
