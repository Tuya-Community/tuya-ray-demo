import React, { Fragment } from 'react';

import Header from '@/common/Header';
import Code from '@/common/Code';
import Demo0 from '@/components/Switch/basic';
import Demo1 from '@/components/Switch/checked';
import Demo2 from '@/components/Switch/disabled';
import Demo3 from '@/components/Switch/checkbox';

import DemoWrapper from '@/common/DemoWrapper';

const PagePreviewer: React.FC = () => {
  return (
    <Fragment>
      <Header title='Switch' description='开关选择器' />
      <Code title='基础用法'>{`<Switch color='#ff0000' onChange={handleSwitchChange}/>`}</Code>
      <DemoWrapper>
        <Demo0 />
      </DemoWrapper>

      <Code title='默认勾选'>{`<Switch checked />`}</Code>
      <DemoWrapper>
        <Demo1 />
      </DemoWrapper>

      <Code title='禁止选择'>{`<Switch checked disabled />`}</Code>
      <DemoWrapper>
        <Demo2 />
      </DemoWrapper>

      <Code title='checkbox 类型'>{`<Switch checked type="checkbox" />`}</Code>
      <DemoWrapper>
        <Demo3 />
      </DemoWrapper>
    </Fragment>
  );
};

export default PagePreviewer;
