import React, { useState, useCallback, useRef, useMemo, useEffect } from 'react';
import { Input, View } from '@ray-js/ray';
import Strings from '@/i18n';
import { useModal } from './useModal';
import styles from './index.module.less';
import { Action, ModalProps } from './Modal';

type InputType = 'text' | 'password' | 'number' | 'digit' | 'idcard';

export const usePrompt = (themeColor?: string) => {
  const [message, setMessage] = useState({
    tip: '' as React.ReactNode,
    type: 'text' as InputType,
    defaultValue: '',
    placeholder: '',
    maxLength: 10000,
  });
  const [error, setError] = useState<string>('');
  const data = useRef('');
  const handleAfterClose = useCallback(() => {
    modal.hide();
    setProps(props => ({
      ...props,
      visible: false,
    }));
  }, []);
  const [props, setProps] = useState<ModalProps>({
    visible: false,
    transparent: true,
    closable: false,
    maskClosable: false,
    themeColor,
    footer: [{ text: '确认', onPress: handleAfterClose }],
    transitionName: 'zoom',
    maskTransitionName: 'fade',
    afterClose: handleAfterClose,
  });

  const content = useMemo(() => {
    return (
      <View className={styles.promt}>
        <View>{message.tip}</View>
        <View className={styles.modalInputBox}>
          <Input
            className={styles.modalInput}
            type={message.type === 'password' ? 'text' : message.type}
            password={message.type === 'password'}
            value={data.current}
            onInput={e => {
              data.current = e.value;
            }}
            placeholder={message.placeholder}
            maxLength={message.maxLength}
          />
          {!!error && <View className={styles.modalInputError}>{error}</View>}
        </View>
      </View>
    );
  }, [message, error]);
  const modal = useModal(content, props);

  return (
    title: React.ReactNode,
    content: React.ReactNode,
    callbackOrActions: (v: string) => any | Action[],
    option?: {
      defaultValue?: string;
      placeholder?: string;
      maxLength?: number;
      type?: InputType;
    }
  ) => {
    const { defaultValue, placeholder, type = 'text', maxLength } = option || {};
    if (typeof defaultValue !== 'undefined') {
      data.current = defaultValue;
    }
    let footer;
    let close = false;
    if (typeof callbackOrActions === 'function') {
      footer = [
        { text: Strings.getLang('cancel'), onPress: handleAfterClose },
        {
          text: Strings.getLang('confirm'),
          onPress: () => {
            if (close) {
              return;
            }
            close = true;
            const err = callbackOrActions(data.current);
            if (err) {
              if (err.then && err.catch) {
                err
                  .then(() => {
                    handleAfterClose();
                  })
                  .catch(err => {
                    close = false;
                    setError(err);
                  });
              } else {
                close = false;
                setError(err);
              }
            } else {
              handleAfterClose();
            }
          },
        },
      ];
    } else {
      footer =
        callbackOrActions && callbackOrActions.length
          ? callbackOrActions.map(item => {
              return {
                ...item,
                onPress: () => {
                  if (close) {
                    return;
                  }
                  close = true;
                  if (item.onPress) {
                    const err = item.onPress(data.current);
                    if (err) {
                      if (err.then && err.catch) {
                        err
                          .catch(err => {
                            close = false;
                            setError(err);
                          })
                          .then(() => {
                            handleAfterClose();
                          });
                      } else {
                        close = false;
                        setError(err as string);
                      }
                    } else {
                      handleAfterClose();
                    }
                  } else {
                    handleAfterClose();
                  }
                },
              };
            })
          : [
              { text: Strings.getLang('cancel'), onPress: handleAfterClose },
              { text: Strings.getLang('confirm'), onPress: handleAfterClose },
            ];
    }
    setProps(props => ({
      ...props,
      visible: true,
      title,
      footer,
    }));

    setError('');
    setMessage({ tip: content, type, defaultValue, placeholder, maxLength });

    return {
      close: () => {
        handleAfterClose();
      },
    };
  };
};
