import { useSelector } from '@/redux';
import { Button, Text, View } from '@ray-js/ray';
import React from 'react';
import { brand, fontColor } from '@/config';
import styles from './index.module.less';

interface Props {
  text: string;
  confirmText: string;
  cancelText: string;
  onCancel: () => void;
  onConfirm: () => void;
}

function SimpleDialog(props: Props) {
  // 主题色
  return (
    <View className={styles.container}>
      <Text className={styles.text} style={{ color: fontColor }}>
        {props.text}
      </Text>
      <View className={styles.operationContainer}>
        <Button
          className={styles.btn}
          style={{
            borderStyle: 'solid',
            borderWidth: 2,
            borderColor: brand,
            color: brand,
            backgroundColor: 'transparent',
          }}
          onClick={props.onCancel}
        >
          {props.cancelText}
        </Button>
        <Button
          className={styles.btn}
          style={{ backgroundColor: brand, color: '#ffffff' }}
          onClick={props.onConfirm}
        >
          {props.confirmText}
        </Button>
      </View>
    </View>
  );
}

export default SimpleDialog;
