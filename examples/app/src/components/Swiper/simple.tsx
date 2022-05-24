import React from 'react';

import { Button, View, Swiper } from '@ray-js/components';
import { showToast } from '@ray-js/api';

import styles from './index.module.less';

function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function Demo() {
  const [current, setCurrent] = React.useState(0);

  const getRandomCurrent = React.useCallback(() => {
    let newCurrent = (current + Math.ceil(Math.random() * 3)) % 3;
    while (newCurrent === current) {
      newCurrent = (current + Math.ceil(Math.random() * 3)) % 3;
    }
    return newCurrent;
  }, [current]);

  return (
    <React.Fragment>
      <Swiper
        current={current}
        dots
        className={styles.swiper}
        dataSource={[randomColor(), randomColor(), randomColor()]}
        renderItem={(color: string) => {
          return <View className={styles.swiperItem} style={{ backgroundColor: color }} />;
        }}
        onChange={(event) => {
          const { current } = event.detail;
          setCurrent(current);
        }}
      />
      <Button
        onClick={() => {
          const nc = getRandomCurrent();
          setCurrent(nc);
          showToast({ title: '切换到第 ' + nc + ' 个元素', icon: 'none' });
        }}
      >
        手动切换
      </Button>
    </React.Fragment>
  );
}
