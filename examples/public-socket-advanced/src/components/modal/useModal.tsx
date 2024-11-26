import React, { useEffect, useMemo, useRef } from 'react';
import { useModal as useBaseModal } from '@ray-core/runtime';
import Modal, { ModalProps } from './Modal';

export const useModal = (content: React.ReactNode, props: ModalProps) => {
  const modal = useBaseModal(null);
  const runFirst = useRef(true);
  useEffect(() => {
    if (runFirst.current) {
      runFirst.current = false;
      if (!props.visible) {
        // 第一次如果不显示，则不做渲染处理
        return;
      }
    }
    const handleClose = () => {
      props.afterClose && props.afterClose();
      modal.remove();
    };
    modal.update(
      <Modal {...props} afterClose={handleClose}>
        {content}
      </Modal>
    );
  }, [props.visible, content]);
  return useMemo(
    () => ({
      show: () => {
        if (modal.isShow) {
          modal.toggle();
        }
      },
      hide: () => {
        if (!modal.isShow) {
          modal.toggle();
        }
      },
      remove: modal.remove,
    }),
    []
  );
};
