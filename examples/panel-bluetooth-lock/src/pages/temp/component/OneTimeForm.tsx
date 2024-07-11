import React, { useState, useRef } from 'react';
import { showToast, showModal, View } from '@ray-js/ray';
import { debounce } from 'lodash';
import { utils } from '@ray-js/panel-sdk';

import { Api } from '@/api';
import Strings from '@/i18n';
import { globalConfig } from '@/config';
import { usePanelStore } from '@/hooks';

import PasswordPanel, { IPasswordPanelRef } from '@/components/PasswordPanel';
import PasswordNameInput from '@/components/PasswordNameInput';
import OfflinePwdFooter from '@/components/OfflinePwdFooter';
import styles from '../index.module.less';

const OneTimeForm: React.FC = () => {
  const { dpState, lockData, devInfo } = usePanelStore();
  const { t0Time } = lockData;

  const themeColor = globalConfig.getConfig('themeColor') as string;

  /** 提交之后不可编辑 */
  const PasswordPanelRef = useRef<IPasswordPanelRef>();
  const [editable, setEditable] = useState<boolean>(true);
  const [passwordName, setPasswordName] = useState<string>();
  const [password, setPassword] = useState<string>('');

  const handleGetPassword = debounce(() => {
    /** 密码名称 不能超过25 */
    if (passwordName && passwordName.length > 25) {
      showToast({ title: Strings.getLang('Password_form_name_maxLimit'), icon: 'none' });
      return;
    }
    if (dpState?.password_offline_time !== String(t0Time)) {
      showModal({
        title: Strings.getLang('Password_get_failed'),
        content: Strings.getLang('Password_connect_ips'),
        confirmText: Strings.getLang('Password_confirm'),
        confirmColor: themeColor,
        showCancel: false,
      });
      return;
    }
    
    Api.apis
      .getOfflinePwd({
        pwdType: '1', // 0.多次使用的密码 1. 单次使用的密码 9. 清空码
        gmtStart: 0, // (非多次密码暂时传0)
        gmtExpired: 0, // (非多次密码暂时传0)
        pwdName: passwordName,
      })
      .then((res: any) => {
        if (res) {
          const newCode = PasswordPanelRef.current?.setCodeWithDigital(res.pwd);
          setPasswordName(res.pwdName);
          setPassword(newCode!);
          setEditable(false);
          showToast({ title: Strings.getLang('Password_Fetch_Success'), icon: 'success' });
        }
      })
      .catch(e => {
        if (e?.innerError?.errorMsg) {
          showToast({ title: e?.innerError?.errorMsg, icon: 'error' });
        }
      });
  }, 500);

  const handleFinish = () => {
    setEditable(true);
    setPasswordName('');
    PasswordPanelRef.current?.initial();
  };

  // 分享文案保留。需接入分享组件
  const _passwordText = Strings.formatValue(
    'Password_single_share_text',
    devInfo?.name || '',
    password,
    utils.dateFormat(
      'yyyy-MM-dd hh:00',
      new Date()
    )
  );

  return (
    <View className={styles.customForm}>
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

      <PasswordPanel ref={PasswordPanelRef} />

      <OfflinePwdFooter
        isInit={editable}
        themeColor={themeColor}
        onFinish={handleFinish}
        shareData={{ message: _passwordText }}
        onGetPassword={handleGetPassword}
      />
    </View>
  );
};

export default OneTimeForm;
