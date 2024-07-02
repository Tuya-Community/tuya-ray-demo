import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  router,
  showToast,
  onDpDataChange,
  offDpDataChange,
  getCurrentPages,
  hideToast,
} from '@ray-js/ray';
import Icon from '@ray-js/components/lib/Icon';
import { usePageEvent } from 'ray';
import {
  formatDpChange,
  getDpCode,
  getModeType,
  getUserType,
  connectBLEDevice,
  putDpData,
} from '@/utils';
import { utils } from '@ray-js/panel-sdk';

import { useStore } from 'react-redux';
import { dpCodes, globalConfig } from '@/config';
import FamilyIcon from '@/components/FamilyIcon';
import { useDeviceOnline } from '@/hooks';
import Strings from '@/i18n';
import styles from './index.module.less';

interface RecordItemProps {
  currentUserInfo?: Record<string, any>;
  nickName?: string;
  userContact?: string;
  userType?: number;
  avatarUrl?: string;
  userId?: number;
  lockUserId?: number;
  timeScheduleInfo?: Record<string, any>;
  unlockDetail?: Record<string, any>;
}

const { unlockMethodCreate, unlockPassword } = dpCodes;

const RecordItem: React.FC<RecordItemProps> = props => {
  const store = useStore();
  const { currentUserInfo, unlockDetail, userType, userId, lockUserId, timeScheduleInfo } = props;
  const { userType: currentUserType } = currentUserInfo;
  const ordinaryUser = currentUserType === 20; // 当前用户是普通用户
  const time = useRef(null);
  const putDpDatas = useRef('');
  const deviceOnline = useDeviceOnline();
  const themeColor = globalConfig.getConfig('themeColor') as string;

  useEffect(() => {
    onDpDataChange(dpDataChangeHandle);
    return () => {
      offDpDataChange(dpDataChangeHandle);
    };
  }, []);

  usePageEvent('onUnload', () => {
    offDpDataChange(dpDataChangeHandle);
  });

  const dpDataChangeHandle = data => {
    const page = getCurrentPages();
    const { getState } = store;
    const { devInfo: _devInfo } = getState();
    const _dpState = formatDpChange(_devInfo.arrSchema, data.dps);
    // 先增加个路由判断，offDpDataChange 不生效，得优化
    if (Object.keys(_dpState).length > 10 || page.length > 3) return;
    const unlockMethodCreateResult = _dpState[unlockMethodCreate];
    if (unlockMethodCreateResult) {
      const dpCode = getDpCode[unlockMethodCreateResult.slice(0, 2)]; // 类型
      const phase = unlockMethodCreateResult.slice(2, 4); // 录入阶段
      const status = unlockMethodCreateResult.slice(12); // 录入状态
      const addTimes = Number(Number(`0x${unlockMethodCreateResult.slice(10, 12)}`).toString(10)); // 添加次数
      if (phase === 'fd') {
        // 异常情况提示，修复指纹或者门卡添加满，上报异常，一直loading。
        // time.current && clearTimeout(time.current); // 先清除定时
        hideToast();
        showToast({ title: Strings.getLang(`${dpCode}Error_${status}`), icon: 'error' });
        router.back(); // 返回上一页
      }
      if (phase === '00') {
        // time.current && clearTimeout(time.current); // 先清除定时
        hideToast();
        router.push(
          `/family-add-unlock?dpCode=${dpCode}&userId=${userId}&addTimes=${addTimes}&putDpDatas=${putDpDatas.current}`
        );
      }
    }
  };

  const addUnlock = dpCode => {
    //  普通用户无权限新增
    if (ordinaryUser) {
      showToast({ title: Strings.getLang('hasNoPermissionAdd'), icon: 'none' });
      return;
    }
    if (!deviceOnline) {
      connectBLEDevice();
      return;
    }
    const type = getModeType[dpCode]; // 类型（1字节）
    const phase = '00'; // 阶段（1字节）录入开始
    const adminType = getUserType[userType]; // 管理员标记1字节）
    const _userId =
      lockUserId !== 0 ? utils.numToHexString(lockUserId) : utils.numToHexString(userId);
    const hardwareNumber = 'ff'; // 硬件编号（1字节）
    const time = timeScheduleInfo.userTimeSet; // 时效性
    const times = '00';
    const pswLength = '00';
    const psw = '00';
    const dpData = `${type}${phase}${adminType}${_userId}${hardwareNumber}${time}${times}${pswLength}${psw}`;
    putDpDatas.current = dpData;
    // 密码直接进入录入页面
    if (dpCode === unlockPassword) {
      router.push(`/family-add-unlock?dpCode=${dpCode}&userId=${userId}&putDpDatas=${dpData}`);
      return;
    }
    showToast({ title: Strings.getLang('connecting'), icon: 'none' });
    // dp数据组成文档 https://developer.tuya.com/cn/docs/iot/ble?id=K9ow3vcpn71ua#title-5-%E6%B7%BB%E5%8A%A0%E5%BC%80%E9%94%81%E6%96%B9%E5%BC%8F
    putDpData(unlockMethodCreate, dpData);
    // 超时提示逻辑。待定
    // time.current = setTimeout(() => {
    //   showToast({ title: Strings.getLang('connectTimeout'), icon: 'error' });
    // }, 30000);
  };

  const editUnlock = (opModeId, dpCode, adminFlag) => {
    //  普通用户无权限编辑
    if (ordinaryUser) {
      showToast({ title: Strings.getLang('hasNoPermissionUpdate'), icon: 'none' });
      return;
    }
    router.push(`/family-edit-unlock?dpCode=${dpCode}&opModeId=${opModeId}&adminFlag=${adminFlag}`);
  };

  return (
    <View className={styles.container}>
      {unlockDetail.map(item => {
        const isFace = item.dpCode === 'unlock_face';
        const hasUnlock = item.unlockList.length > 0;
        const isFaceUpdate = isFace && hasUnlock;
        // 人脸最多添加一个
        const text = isFaceUpdate ? Strings.getLang('replace') : Strings.getLang('add');
        return (
          <View key={item.dpId} className={styles.item}>
            <View className={styles.titleWarp}>
              <FamilyIcon type={item.dpCode} size={48} />
              <Text className={styles.title}>{Strings.getDpLang(item.dpCode)}</Text>
            </View>
            {item.unlockList.map((unlockItem: Record<string, any>) => {
              return (
                <View
                  className={styles.unlockItemWarp}
                  onClick={() => editUnlock(unlockItem.opModeId, item.dpCode, unlockItem.admin)}
                  key={`${unlockItem.opModeId}`}
                >
                  <Text className={styles.unlockText}>{unlockItem.unlockName}</Text>
                  <View className={styles.tagWarp}>
                    {Boolean(unlockItem.admin) && (
                      <View className={styles.specialTag}>
                        <Text className={styles.specialTagText} style={{ color: themeColor }}>
                          {Strings.getLang('admin')}
                        </Text>
                      </View>
                    )}
                    {unlockItem.unlockAttr === 1 && (
                      <View className={styles.specialTag}>
                        <Text className={styles.specialTagText}>{Strings.getLang('special')}</Text>
                      </View>
                    )}
                  </View>
                </View>
              );
            })}
            <View onClick={() => addUnlock(item.dpCode)}>
              <View className={styles.addWarp}>
                <Icon type="icon-a-pluscirclefill" size={26} color={themeColor} />
                <Text style={{ fontSize: '32rpx', color: themeColor }}>{text}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default React.memo(RecordItem);
