/* eslint-disable react/no-unused-prop-types */
import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { Text, View } from '@ray-js/components';
import Input from '@ray-js/components-ty-input';
import { TouchableOpacity, Modal } from '@/components';
import Strings from '@/i18n';

import styles from './index.module.less';

type Props = {
  visible: boolean;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onClose?: () => void;
};

const DialogInput: FC<Props> = ({ visible, defaultValue, onChange, onClose }) => {
  const [value, setValue] = useState(defaultValue);

  const handleCancel = () => {
    setValue(defaultValue);
    onClose();
  };

  const handleConfirm = () => {
    onChange(value);
    onClose();
  };

  const handleClear = () => {
    setValue('');
  };

  return (
    <Modal visible={visible} position="center" onClickOverlay={onClose}>
      <View className={styles.container}>
        <View className={styles.header}>
          <Text className={styles.title}>{Strings.getLang('dsc_remark')}</Text>
        </View>
        <View className={styles.content}>
          {visible && (
            <Input
              focus
              wrapStyle={{ flex: 1 }}
              placeholder={Strings.getLang('dsc_less_than_20')}
              placeholderStyle={{ fontSize: '32rpx', color: 'rgba(0, 0, 0, 0.3)' }}
              maxLength={20}
              value={value}
              onInput={e => setValue(e.value)}
            />
          )}
          <TouchableOpacity
            onClick={handleClear}
            style={{ display: value.length > 0 ? 'flex' : 'none' }}
          >
            <Text className="iconfontpanel icon-panel-closeFill" />
          </TouchableOpacity>
        </View>
        <View className={styles.footer}>
          <TouchableOpacity className={styles.footerBtn} onClick={handleCancel}>
            <Text className={styles.footerBtnText}>{Strings.getLang('dsc_cancel')}</Text>
          </TouchableOpacity>
          <TouchableOpacity className={styles.footerBtn} onClick={handleConfirm}>
            <Text className={clsx(styles.footerBtnText, 'active')}>
              {Strings.getLang('dsc_confirm')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DialogInput;
