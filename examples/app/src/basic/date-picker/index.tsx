import React, { Fragment } from 'react';

import Header from '@/common/Header';
import Code from '@/common/Code';
import Demo0 from '@/components/DatePicker/basic';
import Demo1 from '@/components/DatePicker/startend';
import Demo2 from '@/components/DatePicker/disabled';
import Demo3 from '@/components/DatePicker/month';

import DemoWrapper from '@/common/DemoWrapper';

const PagePreviewer: React.FC = () => {
  return (
    <Fragment>
      <Header title='DatePicker' description='日期选择器' />
      <Code title='选择日期'>{`
<DatePicker onChange={handlePickerChange}>
  <View>日期选择器</View>
</DatePicker>
      `}</Code>
      <DemoWrapper>
        <Demo0 />
      </DemoWrapper>

      <Code title='选择日期（有开始结束时间）'>{`
<DatePicker onChange={handlePickerChange} start={'2021-1-1'} end={'2021-12-12'}>
  <View>选择日期（有开始结束时间）</View>
</DatePicker>
      `}</Code>
      <DemoWrapper>
        <Demo1 />
      </DemoWrapper>

      <Code title='选择日期（不可选）'>{`
<DatePicker onChange={handlePickerChange} start={'2021-1-1'} end={'2021-12-12'} disabled>
  <View>选择日期（不可选）</View>
</DatePicker>
      `}</Code>
      <DemoWrapper>
        <Demo2 />
      </DemoWrapper>

      <Code title='日期粒度'>{`
<DatePicker onChange={handlePickerChange} start={'2021-1-1'} end={'2021-12-12'} fields="month">
  <View>选择年月</View>
</DatePicker>
      `}</Code>
      <DemoWrapper>
        <Demo3 />
      </DemoWrapper>
    </Fragment>
  );
};

export default PagePreviewer;
