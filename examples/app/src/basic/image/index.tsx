import React, { Fragment } from 'react';

import Header from '@/common/Header';

import Demo0 from '@/components/Image/scaleToFill';
import Demo1 from '@/components/Image/aspectFit';
import Demo2 from '@/components/Image/widthFix';
import Demo13 from '@/components/Image/aspectFill';

import DemoWrapper from '@/common/DemoWrapper';

const PagePreviewer: React.FC = () => {
  return (
    <Fragment>
      <Header title='Image' description='图片' />
      <DemoWrapper title='mode="scaleToFill"' align='center'>
        <Demo0 />
      </DemoWrapper>
      <DemoWrapper title='mode="aspectFit"' align='center'>
        <Demo1 />
      </DemoWrapper>
      <DemoWrapper title='mode="widthFix"' align='center'>
        <Demo2 />
      </DemoWrapper>
      <DemoWrapper title='mode="aspectFill"' align='center'>
        <Demo13 />
      </DemoWrapper>
    </Fragment>
  );
};

export default PagePreviewer;
