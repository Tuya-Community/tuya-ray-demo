import React from 'react';

import { View, Button, Text } from '@ray-js/components';
import DemoWrapper from '@/common/DemoWrapper';

import { showTabBar, hideTabBar } from '@ray-js/api';

const PagePreviewer = () => {
  return (
    <DemoWrapper align='center'>
      <Button
        onClick={() => {
          showTabBar({ animation: Math.random() > 0.5 });
        }}
      >
        showTabBar
      </Button>
      <Button
        onClick={() => {
          hideTabBar({ animation: Math.random() > 0.5 });
        }}
      >
        hideTabBar
      </Button>
    </DemoWrapper>
  );
};

export default PagePreviewer;
