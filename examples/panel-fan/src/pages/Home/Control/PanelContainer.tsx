import React, { FC } from 'react';
import clsx from 'clsx';
import { View } from '@ray-js/components';

import styles from './index.module.less';

type Props = {
  visible: boolean;
  style?: React.CSSProperties;
};

const PanelContainer: FC<Props> = ({ children, visible, style }) => {
  return (
    <View className={clsx(styles.panelContainer, visible && 'active')} style={style}>
      {children}
    </View>
  );
};

export default PanelContainer;
