import React from 'react';

import { PageContainer, Button, View } from '@ray-js/components';

export default function Demo() {
  const [isShow, setIsShow] = React.useState(false);
  const toggleIsShow = () => {
    setIsShow(!isShow);
  };
  return (
    <React.Fragment>
      <Button onClick={toggleIsShow}>从顶部弹出无蒙层</Button>
      <PageContainer show={isShow} position='top' onClickOverlay={toggleIsShow} overlay={false}>
        <View style={{ height: '200px' }}>
          <Button onClick={toggleIsShow}>关闭</Button>
        </View>
      </PageContainer>
    </React.Fragment>
  );
}
