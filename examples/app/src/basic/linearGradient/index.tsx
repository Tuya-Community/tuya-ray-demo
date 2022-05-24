import React, { Fragment } from 'react';
import Demo0 from '@/components/LinearGradient/demo0';
import Demo1 from '@/components/LinearGradient/demo1';
import Demo2 from '@/components/LinearGradient/demo2';
import Demo3 from '@/components/LinearGradient/demo3';

import Header from '@/common/Header';
import DemoWrapper from '@/common/DemoWrapper';
import Code from '@/common/Code';

const PagePreviewer: React.FC = () => {
  return (
    <Fragment>
      <Header title='LinearGradient' description='线性渐变' />
      <Code>{`
<LinearGradient
  x1='0%'
  y1='0%'
  x2='0%'
  y2='100%'
  stops={{
    '0%': 'blue',
    '100%': 'pink',
  }}
  width={300}
  height={300}
  >
</LinearGradient>
      `}</Code>
      <DemoWrapper>
        <Demo0 />
      </DemoWrapper>
      <Code>{`
  <LinearGradient
    x1='0%'
    y1='0%'
    x2='50%'
    y2='100%'
    stops={{
      '0%': 'blue',
      '100%': 'pink',
    }}
    width={300}
    height={300}
  >
  </LinearGradient>
      `}</Code>
      <DemoWrapper>
        <Demo1 />
      </DemoWrapper>
      <Code>{`
<LinearGradient
  width={300}
  height={200}
  x1='100%'
  y1='0%'
  x2='0%'
  y2='100%'
  stops={{
    '0%': '#61FF00',
    '60%': '#FFC600',
    '100%': '#FF4800',
  }}
></LinearGradient>
      `}</Code>
      <DemoWrapper>
        <Demo2 />
      </DemoWrapper>
      <Code>{`
<LinearGradient
  width={300}
  height={300}
  x1='100%'
  y1='0%'
  x2='0%'
  y2='100%'
  stops={{
    '0%': '#61FF00',
    '60%': '#FFC600',
    '100%': '#FF4800',
  }}
></LinearGradient>
      `}</Code>
      <DemoWrapper>
        <Demo3 />
      </DemoWrapper>
    </Fragment>
  );
};

export default PagePreviewer;
