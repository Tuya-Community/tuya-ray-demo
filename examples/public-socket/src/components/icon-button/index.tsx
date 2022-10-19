import React from 'react';
import { View, Text } from '@ray-js/ray';
import { Icon, Props as IconProps } from '../icon';
import styles from './index.module.less';

interface Props extends IconProps {
  text?: string;
  onClick?: () => void;
}

export const IconButton: React.FC<Props> = props => {
  const { text, onClick, ...iconProps } = props;
  return (
    <View className={styles['icon-button-wrapper']} onClick={onClick}>
      <View className={styles['icon-button']}>
        <Icon {...iconProps} />
      </View>
      {!!text && <Text className={styles['icon-button-text']}>{text}</Text>}
    </View>
  );
};

IconButton.defaultProps = {
  text: null,
  onClick: null,
};
