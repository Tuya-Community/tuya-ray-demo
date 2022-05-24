import React, { Fragment } from 'react';

import Header from '@/common/Header';

import Demo0 from '@/components/Swiper/simple';
import Demo1 from '@/components/Swiper/autoplay';
import Demo2 from '@/components/Swiper/circular';
import Demo3 from '@/components/Swiper/vertical';
import Demo4 from '@/components/Swiper/nested';

import DemoWrapper from '@/common/DemoWrapper';

const PagePreviewer: React.FC = () => {
  return (
    <Fragment>
      <Header title='Swiper' description='滑块视图容器' />
      <DemoWrapper title='受控模式'>
        <Demo0 />
      </DemoWrapper>
      <DemoWrapper title='autoplay'>
        <Demo1 />
      </DemoWrapper>
      <DemoWrapper title='衔接滑动'>
        <Demo2 />
      </DemoWrapper>
      <DemoWrapper title='纵向滑动'>
        <Demo3 />
      </DemoWrapper>
      <DemoWrapper title='嵌套'>
        <Demo4 />
      </DemoWrapper>
    </Fragment>
  );
};

export default PagePreviewer;
