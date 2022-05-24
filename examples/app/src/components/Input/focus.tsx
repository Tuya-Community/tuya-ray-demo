import React from 'react';

import { Input, View } from '@ray-js/components';
import { showToast } from '@ray-js/api';

export default function () {
  const [focus, setFocus] = React.useState(true);

  function handleInput(event: any) {
    const { value } = event;
  }

  function handleConfirm(event: any) {
    showToast({ title: 'confirm click' });
  }

  function handleFocus() {
    setFocus(true);
    showToast({ title: 'focus', icon: 'none' });
  }

  function handleBlur() {
    setFocus(false);
    showToast({ title: 'blur', icon: 'none' });
  }
  return (
    <View>
      <Input
        value={'Auto focus'}
        placeholder='Your Name'
        maxLength={20}
        focus={focus}
        onInput={handleInput}
        onConfirm={handleConfirm}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
}
