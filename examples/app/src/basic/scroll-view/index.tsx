import React, { Fragment } from 'react';

import Code from '@/common/Code';
import DemoWrapper from '@/common/DemoWrapper';
import Header from '@/common/Header';

import Demo0 from '@/components/ScrollView/VerticalScroll';
import Demo1 from '@/components/ScrollView/HorizontalScroll';

const PagePreviewer: React.FC = () => {
  return (
    <Fragment>
      <Header title='ScrollView' description='滚动容器' />
      <Code title='纵向滚动'>{`<ScrollView scrollY />
`}</Code>
      <DemoWrapper>
        <Demo0 />
      </DemoWrapper>
      <Code title='横向滚动'>{`<ScrollView scrollX />
`}</Code>
      <DemoWrapper>
        <Demo1 />
      </DemoWrapper>
    </Fragment>
  );
};

export default PagePreviewer;
