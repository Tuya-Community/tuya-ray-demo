import React, { Fragment } from 'react';

import Header from '@/common/Header';
import Code from '@/common/Code';
import Demo0 from '@/components/Radio/basic';
import Demo1 from '@/components/Radio/checked';
import Demo2 from '@/components/Radio/disabled';
import Demo3 from '@/components/Radio/group';
import Demo4 from '@/components/Radio/groupDisabled';

import DemoWrapper from '@/common/DemoWrapper';

const PagePreviewer: React.FC = () => {
  return (
    <Fragment>
      <Header title='Radio' description='Radio' />
      <Code title='基础用法'>{`<Radio color='#ff0000' />`}</Code>
      <DemoWrapper>
        <Demo0 />
      </DemoWrapper>

      <Code title='默认选中'>{`<Radio checked/>`}</Code>
      <DemoWrapper>
        <Demo1 />
      </DemoWrapper>

      <Code title='禁止选择'>{`<Radio disabled/>`}</Code>
      <DemoWrapper>
        <Demo2 />
      </DemoWrapper>

      <Code title='一组数据'>{`
const changeRadio = (e) => {
  console.log('RadioGroup的 onChange事件触发', e);
};
let options = [
  { label: 'Apple', value: 'Apple', color: '#ff00ff' },
  { label: 'Pear', value: 'Pear', checked: true },
  { label: 'Orange', value: 'Orange', disabled: true, checked: true },
];
return <RadioGroup onChange={changeRadio} options={options} />;
      `}</Code>
      <DemoWrapper>
        <Demo3 />
      </DemoWrapper>

      <Code title='全部禁止'>{`
let options = [
  { label: 'Apple', value: 'Apple', color: '#ff00ff' },
  { label: 'Pear', value: 'Pear', checked: true },
  { label: 'Orange', value: 'Orange', disabled: true },
];
return <RadioGroup disabled options={options} />;
      `}</Code>
      <DemoWrapper>
        <Demo4 />
      </DemoWrapper>
    </Fragment>
  );
};

export default PagePreviewer;
