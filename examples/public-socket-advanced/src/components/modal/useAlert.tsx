import { ReactNode, useState, useCallback } from 'react';
import { useModal } from './useModal';
import { Action, ModalProps } from './Modal';

export const useAlert = () => {
  const [message, setMessage] = useState<ReactNode>(null);
  const handleAfterClose = useCallback(() => {
    modal.hide();
    setProps(props => ({
      ...props,
      visible: false,
    }));
  }, []);
  const setBtnLoading = useCallback((i, loading) => {
    setProps(props => {
      const footer = [...(props.footer || [])];
      footer[i].loading = loading;
      return {
        ...props,
        footer,
      };
    });
  }, []);
  const [props, setProps] = useState<ModalProps>({
    visible: false,
    closable: false,
    maskClosable: false,
    footer: [{ text: '确认', onPress: handleAfterClose }],
    animationType: 'zoom',
    afterClose: handleAfterClose,
  });
  const modal = useModal(message, props);
  return (title: ReactNode, message: ReactNode, actions?: Action[], platform?: string) => {
    setProps(props => ({
      ...props,
      visible: true,
      title,
      footer:
        actions && actions.length
          ? actions.map((item, index) => ({
              ...item,
              onPress: async () => {
                try {
                  setBtnLoading(index, true);
                  await (
                    item.onPress ||
                    (() => {
                      //
                    })
                  )();
                  handleAfterClose();
                } finally {
                  setBtnLoading(index, false);
                }
              },
            }))
          : props.footer,
    }));
    setMessage(message);

    return {
      close: () => {
        modal.hide();
        handleAfterClose();
      },
    };
  };
};
