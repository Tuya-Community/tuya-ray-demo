import React, { Fragment } from 'react';

import Code from '@/common/Code';
import Header from '@/common/Header';

import Demo0 from '@/components/Text/simple';
import Demo1 from '@/components/Text/size';

import DemoWrapper from '@/common/DemoWrapper';

const PagePreviewer: React.FC = () => {
  return (
    <Fragment>
      <Header title='Text' description='文本' />
      <Code>{`<Text>Ray 跨端研发</Text>`}</Code>
      <DemoWrapper>
        <Demo0 />
      </DemoWrapper>
      <Code>{`<Text style={{ fontSize: 24 }}>
 遵循 React DSL 语法
</Text>`}</Code>
      <DemoWrapper>
        <Demo1 />
      </DemoWrapper>
    </Fragment>
  );
};

export default PagePreviewer;
