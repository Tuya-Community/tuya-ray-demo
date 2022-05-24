import React, { Fragment } from 'react';

import Header from '@/common/Header';
import Code from '@/common/Code';
import Demo0 from '@/components/Checkbox/basic';
import Demo1 from '@/components/Checkbox/checked';
import Demo2 from '@/components/Checkbox/disabled';
import Demo3 from '@/components/Checkbox/checkboxGroup';

import DemoWrapper from '@/common/DemoWrapper';

const PagePreviewer: React.FC = () => {
  return (
    <Fragment>
      <Header title='Checkbox' description='Checkbox' />
      <Code title='基础用法'>{`<Checkbox />`}</Code>
      <DemoWrapper>
        <Demo0 />
      </DemoWrapper>

      <Code title='默认勾选'>{`<Checkbox checked />`}</Code>
      <DemoWrapper>
        <Demo1 />
      </DemoWrapper>

      <Code title='禁止选择'>{`<Checkbox checked disabled />`}</Code>
      <DemoWrapper>
        <Demo2 />
      </DemoWrapper>

      <Code title='群组'>{`<CheckboxGroup
  options={[
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear', checked: true },
    { label: 'Orange', value: 'Orange', disabled: true },
  ]}
  onChange={handleChange}
/>`}</Code>
      <DemoWrapper>
        <Demo3 />
      </DemoWrapper>
    </Fragment>
  );
};

export default PagePreviewer;
