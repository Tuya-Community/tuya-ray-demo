import React, { useState, useRef } from 'react';
import { showToast, View } from '@ray-js/ray';
import { debounce } from 'lodash';
import { utils } from '@ray-js/panel-sdk';

import Strings from '@/i18n';
import { globalConfig } from '@/config';
import { usePanelStore } from '@/hooks';

import PasswordPanel, { IPasswordPanelRef } from '@/components/PasswordPanel';
import OfflinePwdFooter from '@/components/OfflinePwdFooter';

import { Api } from '@/api';
import styles from '../index.module.less';

const DynamicForm: React.FC = () => {
  const PasswordPanelRef = useRef<IPasswordPanelRef>();
  const [editable, setEditable] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');

  const { devInfo } = usePanelStore();
  const themeColor = globalConfig.getConfig('themeColor') as string;

  const handleFinish = () => {
    setEditable(true);
    PasswordPanelRef.current?.initial();
  };

  const handleGetPwd = debounce(() => {
    Api.apis.getDynamicPwd().then((res: { dynamicPassword: string }) => {
      if (res) {
        setEditable(false);
        const newCode = PasswordPanelRef.current?.setCodeWithDigital(res.dynamicPassword);
        setPassword(newCode!);
        showToast({ title: Strings.getLang('Password_Fetch_Success'), icon: 'success' });
      }
    }).catch(e => {
      if (e?.innerError?.errorMsg) {
        showToast({ title: e?.innerError?.errorMsg, icon: 'error' });
      }
    });
  }, 1000);

  const passwordText = Strings.formatValue(
    'Password_dynamic_share_text',
    devInfo.name,
    password,
    utils.dateFormat(
      'yyyy-MM-dd hh:mm',
      new Date()
    )
  );

  return (
    <View className={styles.customForm}>
      <PasswordPanel ref={PasswordPanelRef} />
      <OfflinePwdFooter
        themeColor={themeColor}
        shareData={{ message: passwordText }}
        onFinish={handleFinish}
        onGetPassword={handleGetPwd}
        isInit={editable}
      />
    </View>
  );
};

export default DynamicForm;
