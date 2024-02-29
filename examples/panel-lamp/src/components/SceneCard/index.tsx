import React from 'react';
import { Image, Text } from '@ray-js/components';
import styles from './index.module.less';
import { Button } from '../Button';

type Props = {
  style?: React.CSSProperties;
  data: any;
  onClick: () => void;
};

export const SceneCard = (props: Props) => {
  const { data, style, onClick } = props;
  return (
    <Button onClick={onClick} className={styles.container} style={{ ...style }}>
      <Image className={styles.icon} src={data.icon} />
      <Text className={styles.title}>{data.sceneName}</Text>
    </Button>
  );
};
