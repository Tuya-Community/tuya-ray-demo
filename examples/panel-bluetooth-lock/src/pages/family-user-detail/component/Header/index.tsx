import React from 'react';
import { View, Text, Image } from '@ray-js/ray';
import Icon from '@ray-js/components/lib/Icon';

import { globalConfig } from '@/config';
import { getUserTimeText } from '@/utils';
import Strings from '@/i18n';
import styles from './index.module.less';

interface RecordItemProps {
  currentUserInfo?: Record<string, any>;
  nickName?: string;
  userContact?: string;
  userType?: number;
  avatarUrl?: string;
  userId?: string;
  timeScheduleInfo?: Record<string, any>;
  unlockDetail?: Record<string, any>;
}

const Header: React.FC<RecordItemProps> = props => {
  const {
    currentUserInfo,
    nickName,
    userContact,
    avatarUrl,
    userType,
    userId,
    timeScheduleInfo,
  } = props;
  const { permanent, expiredTime } = timeScheduleInfo;
  const { userId: currentUserId } = currentUserInfo;

  const themeColor = globalConfig.getConfig('themeColor') as string;

  const timeText = getUserTimeText(timeScheduleInfo);
  const userContactText = userContact || Strings.getLang('noContact');
  const nowTime = new Date().valueOf();
  const hasExpired = !permanent && expiredTime > 0;
  const isExpired = hasExpired && nowTime - expiredTime * 1000 > 0;
  const name = currentUserId === userId ? Strings.getLang('me') : nickName;

  return (
    <View className={styles.container}>
      <Image className={styles.avatar} src={avatarUrl} />
      <View className={styles.nameView}>
        <Text className={styles.title}>{name}</Text>
        {(userType === 10 || userType === 50) && (
          <View className={styles.adminTag}>
            <Text className={styles.adminTagText} style={{ color: themeColor }}>
              {Strings.getLang('admin')}
            </Text>
          </View>
        )}
      </View>
      <Text className={styles.subTitle}>{userContactText}</Text>
      {!permanent && (
        <View className={styles.timeView}>
          <Icon type="icon-clock" size={20} color={'#999'} />
          <Text className={styles.timeText}>{timeText}</Text>
          {isExpired && <Text className={styles.expiredText}>{Strings.getLang('expired')}</Text>}
        </View>
      )}
    </View>
  );
};

export default React.memo(Header);
