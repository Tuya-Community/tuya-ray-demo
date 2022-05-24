import React, { Fragment } from 'react';

import Header from '@/common/Header';
import Code from '@/common/Code';

import Demo0 from '@/components/View/simple';
import Demo1 from '@/components/View/flex';

import DemoWrapper from '@/common/DemoWrapper';

const PagePreviewer: React.FC = () => {
  return (
    <Fragment>
      <Header title='View' description='基础容器组件' />
      <Code>{`<View hoverClassName="hover" />`}</Code>
      <DemoWrapper>
        <Demo0 />
      </DemoWrapper>
      <Code title='flex-direction: row'>{`<View style={{ display: 'flex' }}>
  <View style={{ flex: 1 }}>A</View>
  <View style={{ flex: 1 }}>B</View>
  <View style={{ flex: 1 }}>C</View>
</View>`}</Code>
      <DemoWrapper>
        <Demo1 />
      </DemoWrapper>
    </Fragment>
  );
};

export default PagePreviewer;
