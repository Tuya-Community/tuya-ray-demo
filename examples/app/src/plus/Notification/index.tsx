import React, { Fragment } from 'react';
import { Button } from '@ray-js/components';
import { Notification } from '@ray-js/ray-components-plus'
import Code from '@/common/Code';
import Header from '@/common/Header';
import DemoWrapper from '@/common/DemoWrapper';

const PagePreviewer: React.FC = () => {
  return (
    <Fragment>
      <Header title='Notification' description='通知' />
      <Code>{`
      <Fragment>
      <Button
        onClick={() => {
          Notification.show({ message: '一些警示提示', icon: 'warning' });
        }}
      >
        显示Notification
      </Button>
      <Button
        onClick={() => {
          Notification.hide();
        }}
      >
        隐藏Notification
      </Button>
    </Fragment>
      `}</Code>
      <DemoWrapper>
        <Button
          onClick={() => {
            Notification.show({ message: '一些警示提示', icon: 'warning' });
          }}
        >
          显示Notification
        </Button>
        <Button
          onClick={() => {
            Notification.hide();
          }}
        >
          隐藏Notification
        </Button>
      </DemoWrapper>
    </Fragment>
  );
};

export default PagePreviewer;
