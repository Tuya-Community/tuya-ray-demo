import React from 'react';
import { Image, View, Text } from '@ray-js/ray';
import styles from './index.module.less';

interface Props {
  title: string;
  subTitle: string;
  img: string;
  onClick?: () => void;
}

export const SceneItem: React.FC<Props> = ({ title, subTitle, img, onClick }) => {
  return (
    <View className={styles.item} onClick={onClick}>
      <Image className={styles.image} src={img} />
      <View className={styles.footer}>
        <Text className={styles.title}>{title}</Text>
        <Text className={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};
