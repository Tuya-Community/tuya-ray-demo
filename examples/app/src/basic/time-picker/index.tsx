import React, { Fragment } from 'react';

import Header from '@/common/Header';
import Code from '@/common/Code';
import Demo0 from '@/components/TimePicker/basic';
import Demo1 from '@/components/TimePicker/startend';
import Demo2 from '@/components/TimePicker/disabled';

import DemoWrapper from '@/common/DemoWrapper';

const PagePreviewer: React.FC = () => {
  return (
    <Fragment>
      <Header title='TimePicker' description='时间选择器' />
      <Code title='选择时间'>{`
const [currentTime, setCurrentTime] = React.useState('12:00')
const handlePickerChange = (e) => {
  console.log('TimePicker changed', e.detail);
  setCurrentTime(e.detail.value)
};

return (
  <TimePicker onChange={handlePickerChange} value={currentTime}>
    <View>时间选择器</View>
  </TimePicker>
);
      `}</Code>
      <DemoWrapper>
        <Demo0 />
      </DemoWrapper>

      <Code title='选择时间（有开始结束时间）'>{`
<TimePicker onChange={handlePickerChange} start={'09:00'} end={'17:00'} >
  <View>选择时间（有开始结束时间）</View>
</TimePicker>
      `}</Code>
      <DemoWrapper>
        <Demo1 />
      </DemoWrapper>

      <Code title='选择时间（不可选）'>{`
<TimePicker onChange={handlePickerChange} start={'09:00'} end={'17:00'} disabled>
  <View>选择时间（不可选）</View>
</TimePicker>
      `}</Code>
      <DemoWrapper>
        <Demo2 />
      </DemoWrapper>
    </Fragment>
  );
};

export default PagePreviewer;
