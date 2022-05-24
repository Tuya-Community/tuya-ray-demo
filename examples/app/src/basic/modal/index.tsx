import React, { Fragment } from 'react';

import Header from '@/common/Header';
import Code from '@/common/Code';

import Demo0 from '@/components/Modal/top';
import Demo1 from '@/components/Modal/center';
import Demo2 from '@/components/Modal/bottom';
import DemoWrapper from '@/common/DemoWrapper';

const PagePreviewer: React.FC = () => {
  return (
    <Fragment>
      <Header title='Modal' description='弹窗组件' />
      <DemoWrapper title='position: top'>
        <Demo0 />
      </DemoWrapper>
      <DemoWrapper title='position: center'>
        <Demo1 />
      </DemoWrapper>
      <DemoWrapper title='position: bottom'>
        <Demo2 />
      </DemoWrapper>
    </Fragment>
  );
};

export default PagePreviewer;
