import React, { useState, useEffect } from 'react';
import { Text, Image, View } from '@ray-js/ray';
import { getDeviceInitDate } from '@/api/homeApi';
import Res from '@/res';

import styles from './index.module.less';
import { defaultProps, IProps } from './props';

function DefendTime(props: IProps) {
  const { imageStyle, fontText, backText, textStyle, tipTextStyle } = props;

  const [time, setTime] = useState(0);
  useEffect(() => {
    getDeviceInitDate()
      .then((d: any) => {
        setTime(d);
      })
      .catch(e => {
        console.warn(e);
      });
  }, []);

  return (
    <View className={styles.container}>
      <Image src={Res.safeImage} className={styles.safeImage} style={imageStyle} />
      <Text className={styles.safeText} style={textStyle}>
        {fontText}
      </Text>
      <Text className={styles.tip} style={tipTextStyle}>
        {time}
      </Text>
      <Text className={styles.safeText} style={textStyle}>
        {backText}
      </Text>
    </View>
  );
}

DefendTime.defaultProps = defaultProps;

export default DefendTime;
