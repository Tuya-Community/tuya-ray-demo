import React, { useState, useRef } from 'react';
import { showToast, showModal, View } from '@ray-js/ray';
import { debounce } from 'lodash';
import { utils } from '@ray-js/panel-sdk';

import PasswordNameInput from '@/components/PasswordNameInput';
import OfflinePwdFooter from '@/components/OfflinePwdFooter';
import DateRangePicker from '@/components/DateRangePicker';
import PasswordPanel, { IPasswordPanelRef } from '@/components/PasswordPanel';

import { Api } from '@/api';
import Strings from '@/i18n';
import { globalConfig } from '@/config';
import { usePanelStore } from '@/hooks';
import styles from '../index.module.less';

const formatTime = (time: number) => parseInt(String(time / 1000), 10);

const LimitTimeForm: React.FC = () => {
  const { dpState, lockData, devInfo } = usePanelStore();
  const { t0Time } = lockData;

  const themeColor = globalConfig.getConfig('themeColor') as string;

  const DefaultDateRange = {
    startDate: new Date().getTime(),
    endDate: undefined,
  };

  const PasswordPanelRef = useRef<IPasswordPanelRef>();
  const [editable, setEditable] = useState<boolean>(true);
  const [passwordName, setPasswordName] = useState<string>();
  const [password, setPassword] = useState<string>('');
  const [dateRange, setDateRange] = useState(DefaultDateRange);

  const handleGetPwd = debounce(() => {
    // ⚠️ 注意要判断endDate大于startDate
    if (dateRange.endDate && dateRange.startDate) {
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
          pwdType: '0',
          gmtStart: formatTime(dateRange.startDate),
          gmtExpired: formatTime(dateRange.endDate),
          pwdName: passwordName,
        })
        .then((res: any) => {
          if (res) {
            const newCode = PasswordPanelRef.current?.setCodeWithDigital(res.pwd);
            setPassword(newCode!);
            setPasswordName(res.pwdName);
            setEditable(false);
            showToast({ title: Strings.getLang('Password_Fetch_Success'), icon: 'success' });
          }
        })
        .catch(e => {
          if (e?.innerError?.errorMsg) {
            showToast({ title: e?.innerError?.errorMsg, icon: 'error' });
          }
        });
    } else {
      showToast({ title: Strings.getLang('Password_form_mustInputTip'), icon: 'error' });
    }
  }, 500);

  const handleFinish = () => {
    setEditable(true);
    setPasswordName('');
    setDateRange(DefaultDateRange);
    PasswordPanelRef.current?.initial();
  };

  const _passwordText = Strings.formatValue(
    'Password_unlimited_share_text',
    devInfo.name,
    password,
    utils.dateFormat('yyyy-MM-dd hh:00', new Date(dateRange.startDate)),
    utils.dateFormat('yyyy-MM-dd hh:00', new Date(dateRange.endDate))
  );

  return (
    <>
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

        <DateRangePicker
          style={{
            width: '100%',
            borderBottomColor: '#efefef',
            borderBottomWidth: 1,
            marginBottom: '32rpx',
          }}
          startDate={dateRange?.startDate}
          endDate={dateRange?.endDate}
          onEndChange={range => {
            setDateRange(range);
          }}
        />

        <PasswordPanel ref={PasswordPanelRef} />

        <OfflinePwdFooter
          themeColor={themeColor}
          shareData={{ message: _passwordText }}
          onFinish={handleFinish}
          onGetPassword={handleGetPwd}
          isInit={editable}
        />
      </View>
    </>
  );
};

export default LimitTimeForm;
