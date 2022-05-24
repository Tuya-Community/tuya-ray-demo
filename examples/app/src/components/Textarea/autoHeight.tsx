import React from 'react';

import { Textarea } from '@ray-js/components';

export default function TextareaDemo() {
  return (
    <React.Fragment>
      <Textarea
        autoHeight
        style={{ fontSize: 24, color: '#89aaff' }}
        placeholder='自适应高度...'
        placeholderStyle={{ color: '#999' }}
      />
    </React.Fragment>
  );
}
