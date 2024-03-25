import React, { FC, useCallback, useEffect, useState } from 'react';
import { usePageInstance, createPortal } from '@ray-core/runtime';
import ModalComp, { ModalProps } from './Modal';
import { useModal } from './useModal';
import { useAlert } from './useAlert';
import { usePrompt } from './usePrompt';

const Modal: FC<ModalProps> = ({ visible, afterClose, ...props }) => {
  const pageInstance = usePageInstance();
  const [show, setShow] = useState(visible);
  const handleClose = useCallback(() => {
    setShow(false);
    afterClose && afterClose();
  }, [afterClose]);

  useEffect(() => {
    visible && setShow(visible);
  }, [visible]);

  if (!show) {
    return null;
  }

  return createPortal(
    <ModalComp afterClose={handleClose} visible={visible} {...props} />,
    pageInstance.modalContainer
  );
};

export default Modal;

export { useModal, useAlert, usePrompt };
