import React from 'react';

import { View } from '@ray-js/components';

import styles from './index.module.less';

export default function () {
  let t = 0;
  return (
    <View
      hoverClassName={styles.hoverView}
      className={styles.view}
      onTouchStart={() => {
        t = Date.now();
      }}
      onClick={() => {
        // showToast({
        //   title: `${Date.now() - t}ms`,
        // });
        console.log(`${Date.now() - t}ms`);
      }}
    >
      按住变色
    </View>
  );
}
