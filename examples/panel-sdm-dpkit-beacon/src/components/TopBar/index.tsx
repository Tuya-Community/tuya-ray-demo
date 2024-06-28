/* eslint-disable react/require-default-props */
import React from 'react';
import { Text, View, Image } from '@ray-js/ray';
import strings from '@/i18n';
import res from '@/res';
import { Button } from '@/components';
import styles from './index.module.less';

interface IProps {
  cancelType?: 'icon' | 'text';
  handleCancel?: () => void;
  handleSave?: () => void;
  themeColor?: string;
  title?: string;
  style?: React.CSSProperties;
  saveEnable?: boolean;
}
export const TopBar = (props: IProps) => {
  const {
    style,
    cancelType = 'text',
    handleCancel,
    handleSave,
    themeColor = '#1082FE',
    title = '',
    saveEnable = true,
  } = props;

  return (
    <View
      className={styles.container}
      style={{
        ...(style || {}),
      }}
    >
      {handleCancel && (
        <Button onClick={handleCancel} style={{ display: 'flex' }}>
          {cancelType === 'text' ? (
            <Text className={styles.text}>{strings.getLang('cancel')}</Text>
          ) : (
            <Image src={res.icon_back} style={{ width: 48, height: 48 }} />
          )}
        </Button>
      )}
      <Text className={styles.title}>{title}</Text>
      <Button
        disabled={!saveEnable}
        style={{ opacity: handleSave ? 1 : 0 }}
        onClick={() => {
          if (saveEnable) handleSave?.();
        }}
      >
        <Text
          className={styles.text}
          style={{ color: handleSave ? themeColor : 'transparent', opacity: saveEnable ? 1 : 0.4 }}
        >
          {strings.getLang('save')}
        </Text>
      </Button>
    </View>
  );
};
