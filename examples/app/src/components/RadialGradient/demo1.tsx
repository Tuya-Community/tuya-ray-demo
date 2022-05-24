import React, { Fragment } from 'react';
import { RadialGradient } from '@ray-js/components';

export default function () {
  return (
    <RadialGradient
      width={300}
      height={200}
      stops={[
        {
          offset: '0%',
          stopColor: '#ff0',
        },
        {
          offset: '100%',
          stopColor: '#00f',
        },
      ]}
      rx='100px'
      ry='100px'
      fx='0%'
      fy='0%'
    ></RadialGradient>
  );
}
