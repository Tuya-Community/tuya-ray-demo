import React from 'react';
import clsx from 'clsx';
import { View, Text, Input } from '@ray-js/ray';

import Strings from '@/i18n';
import styles from './index.module.less';

interface PasswordNameInput {
  value?: string;
  onChangeText?: (e: any) => void;
  editable?: boolean;
  style?: React.CSSProperties;
}

const PasswordNameInput: React.FC<PasswordNameInput> = ({
  editable,
  value,
  style,
  onChangeText,
}) => {
  return (
    <View className={clsx(styles.inputWarp, style)}>
        <Text className={styles.text}>{Strings.getLang('Password_form_name')}</Text>
        <Input
          disabled={!editable}
          value={value}
          style={{ width: '400rpx' }}
          onInput={onChangeText}
          placeholder={Strings.getLang('Password_Name_Placeholder')}
        />
    </View>
  );
};

export default PasswordNameInput;
