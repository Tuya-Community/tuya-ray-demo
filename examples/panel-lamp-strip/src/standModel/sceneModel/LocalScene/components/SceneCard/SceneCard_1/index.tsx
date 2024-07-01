/* eslint-disable react/require-default-props */
import React from 'react';
import { Image, Text } from '@ray-js/ray';
import { Button } from '../../Button';
import { TSceneData } from '../../../types';
import defaultImg from '../../../res/defaultImg.png';
import styles from './index.module.less';

type Props = {
  style?: React.CSSProperties;
  data: TSceneData;
  isActive: boolean;
  onClick: () => void;
};

export const SceneCard = (props: Props) => {
  const { data, style, isActive, onClick } = props;
  const active = isActive ? styles.active : '';
  const currentImg = isActive ? data.icon : defaultImg;
  return (
    <Button onClick={onClick} className={`${styles.container} ${active}`} style={{ ...style }}>
      <Text className={styles.title}>{data.sceneName}</Text>
      <Image className={styles.icon} key={currentImg} src={currentImg} />
    </Button>
  );
};

export default SceneCard;
