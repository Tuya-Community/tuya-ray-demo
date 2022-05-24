import React, { Fragment } from 'react';

import Header from '@/common/Header';
import DemoWrapper from '@/common/DemoWrapper';
import Demo0 from '@/components/PickerView/basic';
import Demo1 from '@/components/PickerView/multi';
import Code from '@/common/Code';

const PagePreviewer: React.FC = () => {
  return (
    <Fragment>
      <Header title='PickerView' description='滚动选择器' />
      <Code title='基础'>{`const [current, setCurrent] = React.useState(0);

  const handlePickerChange = (e) => {
    setCurrent(e.value);
  };

  const range = ['巴西', '中国', '日本', '美国'];

  return <PickerView onChange={handlePickerChange} range={range} value={current}></PickerView>;
      `}</Code>
      <DemoWrapper>
        <Demo0 />
      </DemoWrapper>
      <Code title='基础'>{`const [current, setCurrent] = React.useState(0);

  const handlePickerChange = (e) => {
    setCurrent(e.value);
  };

  const range = [
    ['巴西', '中国', '日本', '美国'],
    ['橘子', '苹果', '香蕉', '西瓜'],
  ];

  return <PickerView onChange={handlePickerChange} range={range} value={current}></PickerView>;
      `}</Code>
      <DemoWrapper>
        <Demo1 />
      </DemoWrapper>
    </Fragment>
  );
};

export default PagePreviewer;
