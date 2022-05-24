import React, { Fragment, useState } from 'react';
import { Modal, View, Button } from '@ray-js/components';
import styles from './index.module.less';
import clsx from 'clsx';

export default function () {
  const [isShowModal, setIsShowModal] = useState(false);
  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };
  return (
    <Fragment>
      <Button onClick={toggleModal}>点击切换Modal显示隐藏状态</Button>
      <Modal show={isShowModal} position='center' overlay={true} onClickOverlay={toggleModal}>
        <View className={clsx(styles.modalContent, styles.wFull)}>content</View>
      </Modal>
    </Fragment>
  );
}
