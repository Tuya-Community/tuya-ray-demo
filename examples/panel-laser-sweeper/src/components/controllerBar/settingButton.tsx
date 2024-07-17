// 充电按钮
import Strings from '@/i18n';
import { View, router } from '@ray-js/ray';
import { GridItem } from '@ray-js/smart-ui';
import React from 'react';
import './icons/iconfont.css';
import styles from './index.module.less';

export const SettingButton = () => {
  return (
    <GridItem
      text={Strings.getLang('settings')}
      onClick={() => {
        router.push('/setting');
      }}
      iconClass={styles.cleanModeContent}
      slot={{
        icon: (
          <View
            className="iconfont icon-setting2"
            style={{ color: '#000000', fontSize: '48rpx' }}
          />
        ),
      }}
    />
  );
};
