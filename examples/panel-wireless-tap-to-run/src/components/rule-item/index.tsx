import React from 'react';
import clsx from 'clsx';
import { Image, Text, View } from '@ray-js/ray';
import styles from './index.module.less';

interface Props {
  style?: React.CSSProperties;
  isActive?: boolean;
  title: string;
  subTitle: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const RuleItem: React.FC<Props> = ({
  style,
  isActive,
  title,
  subTitle,
  disabled,
  onClick,
}) => {
  return (
    <View
      style={style}
      className={clsx(
        styles.item,
        isActive && styles.item__active,
        disabled && styles.item__disabled
      )}
      onClick={onClick}
    >
      <View className={clsx(styles.itemHeader, isActive && styles.itemHeader__active)}>
        <Text>{title}</Text>
        <Text>{subTitle}</Text>
      </View>
      {!disabled && (
        <View className={styles.itemFooter}>
          <Image
            className={styles.image}
            src={`/images/icon_${isActive ? 'checked' : 'unchecked'}.png`}
          />
        </View>
      )}
    </View>
  );
};

RuleItem.defaultProps = {
  isActive: false,
  disabled: false,
};
