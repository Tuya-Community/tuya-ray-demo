import React, { FC } from 'react';
import { openDeviceDetailPage } from '@ray-js/ray';
import { useSelector } from 'react-redux';
import { Image, Text } from '@ray-js/components';
import { TouchableOpacity } from '@/components';
import { selectDevInfo } from '@/redux/modules/devInfoSlice';
import { getDevId } from '@/utils';

import styles from './index.module.less';

const Device: FC = () => {
  const { icon: deviceIcon, name } = useSelector(selectDevInfo);

  const handleGoToDeviceDetail = () => {
    openDeviceDetailPage({
      deviceId: getDevId(),
    });
  };

  return (
    <TouchableOpacity className={styles.device} onClick={handleGoToDeviceDetail}>
      <Image src={deviceIcon} className={styles.deviceIcon} />
      <Text className={styles.deviceName}>{name}</Text>
      <Text className="iconfontpanel icon-panel-angleRight" />
    </TouchableOpacity>
  );
};

export default Device;
