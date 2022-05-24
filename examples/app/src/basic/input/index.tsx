import React, { Fragment } from 'react';

import Header from '@/common/Header';

import Demo0 from '@/components/Input/control';
import Demo1 from '@/components/Input/focus';
import Demo2 from '@/components/Input/digit';
import Demo3 from '@/components/Input/idcard';
import Demo4 from '@/components/Input/search';

import DemoWrapper from '@/common/DemoWrapper';

const PagePreviewer: React.FC = () => {
  return (
    <Fragment>
      <Header title='Input' description='文本输入框' />
      <DemoWrapper title='Control Mode'>
        <Demo0 />
      </DemoWrapper>
      <DemoWrapper title='Auto Focus'>
        <Demo1 />
      </DemoWrapper>
      <DemoWrapper title='Number Keyboard'>
        <Demo2 />
      </DemoWrapper>
      <DemoWrapper title='ID Card Keyboard'>
        <Demo3 />
      </DemoWrapper>
      <DemoWrapper title='Search Input'>
        <Demo4 />
      </DemoWrapper>
    </Fragment>
  );
};

export default PagePreviewer;
