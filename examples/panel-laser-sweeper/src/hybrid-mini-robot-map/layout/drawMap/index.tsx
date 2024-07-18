/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { View, Image, Text } from '@ray-js/ray';
import { useSelector } from '@/redux';
import Strings from '../../i18n';
import styles from './index.module.less';

interface IProps {
  isHomeMap?: boolean;
}

const DrawMap: React.FC<IProps> = props => {
  const { isHomeMap } = props;
  const systemInfo = useSelector(state => state.systemInfo);
  return (
    <View className={styles.root}>
      <View
        className={styles.loadingContainer}
        style={isHomeMap ? { position: 'relative', top: '-150rpx' } : null}
      >
        <View style={{ position: 'relative', width: '600rpx', height: '300rpx' }}>
          {/* <ILiteLoading sysInfo={systemInfo} /> */}
        </View>
        <Text className={styles.textStyle} style={{ position: 'relative', top: '-80rpx' }}>
          {Strings.getLang('dsc_map_loading')}
        </Text>
      </View>
    </View>
  );
};

export default DrawMap;
