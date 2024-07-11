import React, { useImperativeHandle, useState } from 'react';
import { usePanelConfig } from '@/hooks';
import { showToast, View, Text, Image } from '@ray-js/ray';

import Res from '@/res';
import Strings from '@/i18n';
import styles from './index.module.less';
import { globalConfig } from '@/config';

const DefaultCode = '**********';

export interface IPasswordPanelRef {
  initial: () => void;
  setCode: (newCode: string) => void;
  setCodeWithDigital: (newCode: string) => string;
}

const PasswordPanel = React.forwardRef<IPasswordPanelRef | undefined, { defaultCode?: string }>(
  ({ defaultCode = DefaultCode }, ref) => {
    const panelConfig = usePanelConfig() as any;
    const digitalBase = panelConfig?.fun?.digitalBase as number || 10;
    const isHideZero = panelConfig?.fun?.isHideZero as boolean || false;

    const [code, setCode] = useState<string>(defaultCode);
    const themeColor = globalConfig.getConfig('themeColor') as string;

    useImperativeHandle(
      ref,
      () => {
        return {
          initial: () => setCode(DefaultCode),
          setCode: (newCode: string) => setCode(newCode),
          setCodeWithDigital,
        };
      },
      []
    );

    const setCodeWithDigital = (newCode: string) => {
      const digitalCode = digitalBase === 10 ? newCode : Number(newCode).toString(digitalBase);
      let result = digitalCode;

      if (isHideZero) {
        result = digitalCode
          .split('')
          .map(n => {
            return Number(n) + 1;
          })
          .join('');
      }

      setCode(result);

      return result;
    };

    const handleCopyPress = () => {
      ty.setClipboardData({
        data: code,
        success: () => {
          showToast({ title: Strings.getLang('Password_Copy_Success'), icon: 'success' });
        },
        fail: err => {
          console.log('copy fail', err);
        },
      });
    };

    /** 是否展示密码, 存在非*号字符即位密码 */
    const isShowPassword = /[^*]/g.test(code);

    return (
      <>
        <Image src={Res.bgPassword} className={styles.passwordWrap} />
        <Text className={styles.text}>{code}</Text>
        {isShowPassword && (
          <View className={styles.copyBtn} onClick={handleCopyPress}>
            <Text style={{ color: themeColor }}>{Strings.getLang('Password_share_copy')}</Text>
          </View>
        )}
      </>
    );
  }
);

export default PasswordPanel;
