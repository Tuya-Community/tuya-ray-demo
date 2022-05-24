import React, { Fragment } from 'react';
import Code from '@/common/Code';
import Header from '@/common/Header';
import DemoWrapper from '@/common/DemoWrapper';
// import Demo0 from '@ray-js/components-plus-demo/src/Notification/index';
const PagePreviewer: React.FC = () => {
  return (
    <Fragment>
      <Header title='Notification' description='通知' />
      <Code>{`
      <Fragment>
      <Button
        key={'b'}
        onClick={() => {
          Notification.show({ message: '一些警示提示', icon: 'warning' });
        }}
      >
        显示Notification
      </Button>
      <Button
        key={'a'}
        onClick={() => {
          Notification.hide();
        }}
      >
        隐藏Notification
      </Button>
    </Fragment>
      `}</Code>
      <DemoWrapper>
        {/* <Demo0></Demo0> */}
      </DemoWrapper>
    </Fragment>
  );
};

export default PagePreviewer;
