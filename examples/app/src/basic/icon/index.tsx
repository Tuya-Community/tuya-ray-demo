import React, { Fragment } from 'react';

import Header from '@/common/Header';

import Demo0 from '@/components/Icon/basic';
import DemoWrapper from '@/common/DemoWrapper';
import Code from '@/common/Code';
const PagePreviewer: React.FC = () => {
  return (
    <Fragment>
      <Header title='Icon' description='图标' />
      <Code>{` <Icon type='icon-right' size={30} color='#007aff'></Icon>
      `}</Code>
      <DemoWrapper>
        <Demo0 />
      </DemoWrapper>
    </Fragment>
  );
};

export default PagePreviewer;
