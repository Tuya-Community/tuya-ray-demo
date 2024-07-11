import React from 'react';
import { View, Text } from '@ray-js/ray';
import Strings from '@/i18n';
import styles from './index.module.less';

interface IOfflinePwdFooter {
  isInit: boolean;
  themeColor: string;
  onGetPassword?: () => void;
  onFinish?: () => void;
  onShare?: () => void;
  shareData: { message?: string };
}

const OfflinePwdFooter: React.FC<IOfflinePwdFooter> = ({
  isInit,
  themeColor,
  onGetPassword,
  onFinish,
  shareData,
}) => {
  const handleGetPwd = () => {
    onGetPassword && onGetPassword();
  };

  const handleFinish = () => {
    onFinish && onFinish();
  };

  return (
    <View className={styles.warp}>
      {isInit ? (
        <View
          className={styles.btnWrap}
          style={{ backgroundColor: themeColor }}
          onClick={handleGetPwd}
        >
          <Text className={styles.text}>{Strings.getLang('Password_getPassword')}</Text>
        </View>
      ) : (
        <View className={styles.finishWrap}>
          <Text className={styles.endText}>{Strings.getLang('Password_create_finish_tip')}</Text>
          <View
            className={styles.btnWrap}
            style={{ backgroundColor: themeColor }}
            onClick={handleFinish}
          >
            <Text className={styles.text}>{Strings.getLang('Password_finish')}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default OfflinePwdFooter;
