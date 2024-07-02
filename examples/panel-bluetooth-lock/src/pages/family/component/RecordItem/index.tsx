import React from 'react';
import { View, Text, Image, router, showToast } from '@ray-js/ray';
import Icon from '@ray-js/components/lib/Icon';

import { globalConfig } from '@/config';
import FamilyIcon from '@/components/FamilyIcon';
import { getUserTimeText } from '@/utils';
import Strings from '@/i18n';
import styles from './index.module.less';

interface RecordItemProps {
  currentUserInfo: Record<string, any>;
  nickName: string;
  userContact: string;
  userType: number;
  avatarUrl: string;
  userId: string;
  timeScheduleInfo:  Record<string, any>;
  unlockDetail:  Record<string, any>;
}

const RecordItem: React.FC<RecordItemProps> = props => {
  const {
    currentUserInfo,
    nickName,
    userContact,
    avatarUrl,
    userType,
    userId,
    timeScheduleInfo,
    unlockDetail,
  } = props;
  const { permanent, expiredTime } = timeScheduleInfo;
  const { userId: currentUserId, userType: currentUserType } = currentUserInfo;

  const themeColor = globalConfig.getConfig('themeColor') as string;

  const timeText = getUserTimeText(timeScheduleInfo);
  const userContactText = userContact || Strings.getLang('noContact');
  const nowTime = new Date().valueOf();
  const hasExpired = !permanent && expiredTime > 0;
  const isExpired = hasExpired && nowTime - expiredTime * 1000 > 0;
  const name = currentUserId === userId ? Strings.getLang('me') : nickName;

  const renderIconList = unlockDetail => {
    const len = unlockDetail.length;
    const isHadHide = len > 5;
    const mapUnlockDetail = isHadHide ? unlockDetail.slice(0, 5) : unlockDetail;
    const renderData = [];
    const hideView = [
      <View key="hide" className={styles.imageListItem}>
        <Text style={{ color: '#333', fontSize: '32rpx' }}>...</Text>
      </View>,
    ];
    if (isHadHide) {
      return renderData.concat(
        mapUnlockDetail.map(item => (
          <View key={item.dpId} className={styles.imageListItem}>
            <FamilyIcon type={item.dpCode} size={48} />
            <Text className={styles.fingerText}>{item.count}</Text>
          </View>
        )),
        hideView
      );
    }
    return renderData.concat(
      unlockDetail.map(item => (
        <View key={item.dpId} className={styles.imageListItem}>
          <FamilyIcon type={item.dpCode} size={48} />
          <Text className={styles.fingerText}>{item.count}</Text>
        </View>
      ))
    );
  };

  const goToUserDetail = () => {
    const ordinaryUser = currentUserType === 20; // 当前用户是普通用户
    const isDisabled = ordinaryUser && currentUserId !== userId;
    //  普通用户无权限查看别人的
    if (isDisabled) {
      showToast({ title: Strings.getLang('hasNoPermission'), icon: 'none' })
      return;
    }
    router.push(`/family-user-detail?userId=${userId}`);
  };

  return (
    <View onClick={() => goToUserDetail()} className={styles.listItem} style={isExpired && { opacity: 0.5 }}>
      <Image className={styles.avatar} src={avatarUrl} />
      <View className={styles.right}>
        <View className={styles.content}>
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
        <View className={styles.imageList}>{renderIconList(unlockDetail)}</View>
        {!permanent && (
          <View className={styles.timeView}>
            <Icon type="icon-clock" size={20} color={'#999'} />
            <Text className={styles.timeText}>{timeText}</Text>
            {isExpired && <Text className={styles.expiredText}>{Strings.getLang('expired')}</Text>}
          </View>
        )}
      </View>
    </View>
  );
};

export default React.memo(RecordItem);
