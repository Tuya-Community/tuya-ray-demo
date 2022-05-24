import React from 'react';

import { Button } from '@ray-js/components';
import { navigateBack, redirectTo } from '@ray-js/api';
import DemoWrapper from '@/common/DemoWrapper';
import { isWechat } from '@ray-js/env';

const PagePreviewer = () => {
  const back = () => {
    navigateBack();
  };
  const redirect = () => {
    redirectTo({
      url: isWechat ? '/api/redirect-to/index' : 'api/redirect-to/index',
    });
  };
  return (
    <DemoWrapper>
      <Button onClick={redirect}>navigation 重定向到新页面</Button>
      <Button onClick={back}>navigation back 返回上一页面</Button>
    </DemoWrapper>
  );
};

export default PagePreviewer;
