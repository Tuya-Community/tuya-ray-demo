import React, { Fragment } from 'react';

import Header from '@/common/Header';

import Demo0 from '@/components/Motion/fade';
import Demo1 from '@/components/Motion/pullUp';
import Demo2 from '@/components/Motion/scaleFadeIn';
import Demo3 from '@/components/Motion/scalePullDown';
import Demo4 from '@/components/Motion/pushDown';

import DemoWrapper from '@/common/DemoWrapper';
// import Code from '@/common/Code';

const PagePreviewer: React.FC = () => {
  return (
    <Fragment>
      <Header title='Motion' description='动效' />
      {/* <Code>{`
      `}</Code> */}
      <DemoWrapper>
        <Demo0 />
      </DemoWrapper>
      <DemoWrapper>
        <Demo1 />
      </DemoWrapper>
      <DemoWrapper>
        <Demo2 />
      </DemoWrapper>
      <DemoWrapper>
        <Demo3 />
      </DemoWrapper>
      <DemoWrapper>
        <Demo4 />
      </DemoWrapper>
    </Fragment>
  );
};

export default PagePreviewer;
