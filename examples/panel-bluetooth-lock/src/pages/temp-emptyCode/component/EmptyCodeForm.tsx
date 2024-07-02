import React, { useState, useRef } from 'react';
import { showToast, Text, View, router } from '@ray-js/ray';

import dayjs from 'dayjs';
import { utils } from '@ray-js/panel-sdk';
import Switch from '@ray-js/components-ty-switch';

import PasswordNameInput from '@/components/PasswordNameInput';
import PasswordPanel, { IPasswordPanelRef } from '@/components/PasswordPanel';
import OfflinePwdFooter from '@/components/OfflinePwdFooter';

import { Api } from '@/api';
import Strings from '@/i18n';
import { globalConfig } from '@/config';
import { usePanelStore } from '@/hooks';
import styles from '../index.module.less';

import { formatRecordItemText } from '@/utils/temp';

import { IRecordItem } from '../../temp/interface';

type IEmptyCodeForm = Pick<
  IRecordItem,
  'id' | 'name' | 'scheduleList' | 'effectiveTime' | 'invalidTime' | 'pwdType' | 'authId'
>;

const EmptyCodeForm: React.FC<IEmptyCodeForm> = ({
  name,
  effectiveTime,
  invalidTime,
  id,
  scheduleList,
  pwdType,
  authId,
}) => {
  const { devInfo } = usePanelStore();

  const themeColor = globalConfig.getConfig('themeColor') as string;

  const pwdPanelRef = useRef<IPasswordPanelRef>();
  const [passwordName, setPasswordName] = useState<string>();
  const [clearAll, setClearAll] = useState<boolean>(false);
  const [editable, setEditAble] = useState<boolean>(true);
  const [password, setPassword] = useState<string>();
  const [unEffectTime, setUnEffectTime] = useState<string>('');

  const handleGetCode = () => {
    Api.apis
      .getPwdEmptyCode({ pwdId: id, authId, pwdName: passwordName, clearAll })
      .then(res => {
        const newCode = pwdPanelRef.current?.setCodeWithDigital(res.pwd);
        setEditAble(false);
        setPasswordName(res.pwdName);
        setUnEffectTime(dayjs(Number(res.gmtExpired) * 1000).format('YYYY/MM/DD HH:mm'));
        setPassword(newCode);
        showToast({ title: Strings.getLang('Password_Fetch_Success'), icon: 'success' });
      })
      .catch(e => {
        if (e?.innerError?.errorMsg) {
          showToast({ title: e?.innerError?.errorMsg, icon: 'error' });
        }
      });
  };

  const handleFinish = () => {
    // 重新刷新下temp-record页面数据
    router.back();
  };

  const formatItemText = formatRecordItemText({
    pwdType,
    scheduleList,
    effectiveTime,
    invalidTime,
  });

  const clearPasswordText = Strings.formatValue(
    clearAll ? 'Password_clear_all_share_text' : 'Password_clear_one_share_text',
    devInfo.name,
    password,
    utils.dateFormat('yyyy-MM-dd hh:00', new Date())
  );

  return (
    <View className={styles.container}>
      <View className={styles.header}>
        <Text
          style={{ margin: '32rpx 0', fontSize: '32rpx' }}
        >{Strings.getLang('Password_cleanType_HeaderTitle')}</Text>
        {clearAll ? (
          <Text style={{ color: '#999', fontSize: '24rpx' }}>{Strings.getLang('Password_cleanType_allTip')}</Text>
        ) : (
          <>
          <Text style={{ color: '#999', fontSize: '24rpx' }}>{Strings.getLang('Password_cleanType_select')}</Text>

            <View className={styles.deletePassword}>
              <Text style={{ marginBottom: '8rpx', fontSize: '28rpx' }}>{name}</Text>
              <Text style={{ color: '#999', fontSize: '24rpx' }}>{formatItemText}</Text>
            </View>
          </>
        )}
      </View>

      {/* form */}
      <View className={styles.body}>
        <View className={styles.customForm}>
          {!editable && <PasswordPanel ref={pwdPanelRef} />}

          <PasswordNameInput
            editable={editable}
            value={passwordName}
            onChangeText={e => {
              const {
                detail: { value },
              } = e;
              setPasswordName(value)
            }}
          />

          {editable && (
            <View className={styles.inputWarp}>
              <Text>{Strings.getLang('Password_cleanType_all')}</Text>
              <Switch
                checkedColor={themeColor}
                checked={clearAll}
                onChange={val => setClearAll(val)}
              />
            </View>
          )}

          {!editable && (
            <View className={styles.inputWarp}>
              <Text>{Strings.getLang('Password_form_unEffectTime')}</Text>
              {unEffectTime}
            </View>
          )}

          {!editable && (
            <OfflinePwdFooter
              themeColor={themeColor}
              shareData={{ message: clearPasswordText }}
              onFinish={handleFinish}
              isInit={false}
            />
          )}
        </View>

        {editable && (
          <View className={styles.customFooterButtonArea}>
            <View
              className={styles.btnWrap} // width: '100%'
              style={{ backgroundColor: themeColor }}
              onClick={handleGetCode}
            >
              <Text className={styles.text}>{Strings.getLang('Password_Get_EmptyCode')}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default EmptyCodeForm;
