import React, { FC, useState } from 'react';
import { useCreation } from 'ahooks';
import { View, Text, ScrollView, router } from '@ray-js/ray';
import { compact } from 'lodash';
import clsx from 'clsx';

import { globalConfig } from '@/config';
import { useDpPermission, usePanelConfig } from '@/hooks';

import Strings from '@/i18n';
import styles from './index.module.less';
import { PasswordType, TabItemKeys } from './interface';
import OneTimeForm from './component/OneTimeForm';
import DynamicForm from './component/DynamicForm';
import LimitTimeForm from './component/LimitTimeForm';
import CustomForm from './component/CustomForm';

const Index: FC = () => {
  const panelConfig= usePanelConfig() as any;
  const digitalBase = panelConfig?.fun?.digitalBase || 10;
  const { dpUnlockDynamic, dpUnlockOfflinePd, dpTemporaryPasswordCreat, dpUnlockTemporary } = useDpPermission();

  const themeColor = globalConfig.getConfig('themeColor') as string;

  const isSupportDynamic = !!dpUnlockDynamic;
  const isSupportOneTime = (!!dpUnlockOfflinePd || !!dpTemporaryPasswordCreat) && +digitalBase > 6;
  const isSupportLimitTime = !!dpUnlockOfflinePd && +digitalBase > 6;
  // const isSupportOnLine = !!dpUnlockTemporary; // 该密码需要设备在线
  const isSupportOnLine = false; // 密码加密功能依赖APP提供接口。先隐藏后续迭代（预计8月底）开发发布。改为true可以查看整体流程。接口调用会报错密码解析失败

  const [currentTab, setCurrentTab] = useState<TabItemKeys>(compact([
    isSupportOneTime && PasswordType.oneTime,
    isSupportDynamic && PasswordType.dynamic,
    isSupportLimitTime && PasswordType.limitTimes,
    isSupportOnLine && PasswordType.custom,
  ])[0] || PasswordType.custom);

  const tabContents = useCreation(() => {
    const contents: { [K in TabItemKeys]: React.ReactElement | null } = {
      [PasswordType.oneTime]: <OneTimeForm />,
      [PasswordType.dynamic]: <DynamicForm />,
      [PasswordType.limitTimes]: <LimitTimeForm />,
      [PasswordType.custom]: <CustomForm />,
    };
    return contents;
  }, []);

  const formTypeTitle = useCreation(() => {
    const titles: { [K in TabItemKeys]: string } = {
      [PasswordType.oneTime]: Strings.getLang('Password_OneTime'),
      [PasswordType.dynamic]: Strings.getLang('Password_Dynamic'),
      [PasswordType.limitTimes]: Strings.getLang('Password_LimitTime'),
      [PasswordType.custom]: Strings.getLang('Password_Custom'),
    };
    return titles;
  }, []);

  const passwordTypeTips = useCreation(() => {
    const tips: { [K in TabItemKeys]: string } = {
      [PasswordType.oneTime]: Strings.formatValue(
        'Password_Type_tip',
        `6${Strings.getLang('Password_Hour')}`,
        '1'
      ),
      [PasswordType.dynamic]: Strings.getLang('Password_dynamic_tips'),
      [PasswordType.limitTimes]: Strings.formatValue(
        'Password_Type_tip',
        `24${Strings.getLang('Password_Hour')}`,
        '1'
      ),
      [PasswordType.custom]: '',
    };
    return tips;
  }, []);

  return (
    <ScrollView refresherTriggered={false} scrollY className={styles.warp}>
      <View className={styles.header}>
        <View className={styles.passswordTypeWrap}>
          <Text className={styles.passwordType}>
            {Strings.getLang('Password_textType')}
          </Text>
          <Text className={styles.passwordTip}>
            {passwordTypeTips[currentTab]}
          </Text>
        </View>

        <View className={styles.tabContainer}>
          {compact([
            isSupportOneTime && PasswordType.oneTime,
            isSupportDynamic && PasswordType.dynamic,
            isSupportLimitTime && PasswordType.limitTimes,
            isSupportOnLine && PasswordType.custom,
          ]).map((key: typeof PasswordType[TabItemKeys]) => {
            const isActive = currentTab === key;
            return (
              <View key={key} onClick={() => setCurrentTab(key)}>
                <View className={clsx(styles.tabItem, isActive && styles.activeTab)}>
                  <Text
                    style={{ color: isActive ? themeColor : '#000'}}
                  >
                    {formTypeTitle[key]}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
      
      <View className={styles.formContainer}>
        {tabContents[currentTab]}
      </View>

      <View className={styles.circleButton} style={{ backgroundColor: themeColor }} onClick={() => router.push('/temp-record')}>
         <Text>{Strings.getLang('Password_record')}</Text>
      </View>
    </ScrollView>
  );
};

export default Index;
