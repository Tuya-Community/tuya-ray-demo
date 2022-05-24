import React, { Fragment } from 'react';
import Demo0 from '@/components/RadialGradient/demo0';
import Demo1 from '@/components/RadialGradient/demo1';
import Header from '@/common/Header';
import DemoWrapper from '@/common/DemoWrapper';
import Code from '@/common/Code';

const PagePreviewer: React.FC = () => {
  return (
    <Fragment>
      <Header title='LinearGradient' description='径向渐变' />
      <Code>{`
 <RadialGradient
 width={300}
 height={200}
 stops={[
   {
     offset: '0%',
     stopColor: '#ff0',
   },
   {
     offset: '100%',
     stopColor: '#00f',
   },
 ]}
 rx="50%"
 ry="50%"
 fx="50%"
 fy="50%"
></RadialGradient>
      `}</Code>
      <DemoWrapper>
        <Demo0 />
      </DemoWrapper>
      <Code>{`
  <RadialGradient
  width={300}
  height={200}
  stops={[
    {
      offset: '0%',
      stopColor: '#ff0',
    },
    {
      offset: '100%',
      stopColor: '#00f',
    },
  ]}
  rx="100px"
  ry="100px"
  fx="0%"
  fy="0%"
></RadialGradient>
      `}</Code>
      <DemoWrapper>
        <Demo1 />
      </DemoWrapper>
    </Fragment>
  );
};

export default PagePreviewer;
