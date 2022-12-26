/* eslint-disable no-console */
import React from 'react';
import { View } from '@ray-js/ray';
import Icon from '@/components/Iconfont';
import classNames from 'classnames';

import Styles from './index.module.less';

function OneTalk() {
  return (
    <View className={Styles.oneTalk}>
      <View className={classNames(Styles.inner, Styles.talk)}>
        <Icon type="icon-yuyin" />
      </View>
      <View className={classNames(Styles.inner, Styles.inner1)} />
      <View className={classNames(Styles.inner, Styles.inner2)} />
      <View className={classNames(Styles.inner, Styles.inner3)} />
      <View className={classNames(Styles.inner, Styles.inner4)} />
    </View>
  );
}

export default OneTalk;
