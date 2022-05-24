import React from 'react';

import { Button } from '@ray-js/components';
import DemoWrapper from '@/common/DemoWrapper';

import { setNavigationBarTitle, setNavigationBarColor } from '@ray-js/api';
import { randomColor } from '@/utils/randomColor';

const PagePreviewer = () => {
  return (
    <DemoWrapper align='center'>
      <Button
        onClick={() => {
          setNavigationBarColor({ backgroundColor: randomColor(), frontColor: '#ffffff' });
        }}
      >
        setNavigationBarColor
      </Button>
      <Button
        onClick={() => {
          setNavigationBarTitle({ title: '新标题 ' + Math.floor(Math.random() * 100) });
        }}
      >
        setNavigationBarTitle
      </Button>
    </DemoWrapper>
  );
};

export default PagePreviewer;
