/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { View, Text, Image } from '@ray-js/ray';
import Res from '../../res';
import Strings from '../../i18n';
import styles from './index.module.less';

interface IProps {
  isHomeMap?: boolean;
}
/**
 * 空地图显示
 * @param props
 * @returns
 */
const EmptyMap: React.FC<IProps> = props => {
  const { isHomeMap } = props;
  return (
    <View className={styles.empty}>
      <View
        className={styles.emptyContainer}
        style={isHomeMap ? { position: 'relative', top: '-90rpx' } : null}
      >
        <Image src={Res.mapEmpty} style={{ width: 240, height: 240 }} />
        <Text className={styles.textStyle} style={{ marginTop: '12rpx' }}>
          {Strings.getLang('dsc_map_is_empty')}
        </Text>
      </View>
    </View>
  );
};

export default EmptyMap;
