import React, { useState } from 'react';
import { View, Text } from '@ray-js/components';
import CustomKeyboard from '@ray-js/components-ty-keyboard';

import { getCustomPwdTitle, getPwdLengthRange } from '@/utils/temp';
import PasswordPanel from '@/components/PasswordPanel';
import { globalConfig } from '@/config';
import Strings from '@/i18n';
import { usePanelConfig } from '@/hooks';

import styles from './index.module.less';

interface IRandomPassword {
  editable: boolean;
  password: string;
  onSavePassword?: (pwd: string) => void;
}

const RandomPassword: React.FC<IRandomPassword> = ({ editable, password, onSavePassword }) => {
  const [value, setValue] = useState(password || '');

  const panelConfig = usePanelConfig() as any;
  const digitalBase = panelConfig?.fun?.digitalBase as number || 10;
  const isHideZero = panelConfig?.fun?.isHideZero as boolean || false;

  const maxNum = isHideZero ? +digitalBase : +digitalBase - 1; // 支持的最大数字


  const themeColor = globalConfig.getConfig('themeColor') as string;

   // 获取随机密码
  const _getRandomPassword = () => {
    let result = '';
    const arr = new Array(getPwdLengthRange(digitalBase, false)[0]).fill(0);
    arr.map(_ => {
      const _item = Math.round(Math.random() * maxNum);
      const item = isHideZero && _item === 0 ? _item + 1 : _item;
      result += item.toString();
    });
    setValue(result);
    onSavePassword && onSavePassword(result);
  };
  const _handleValueChange = (password: string) => {
    const PLength = password.length;
    if (PLength <= getPwdLengthRange(digitalBase, false)[1]) {
      setValue(password);
    }
    console.log('onChange value =====>', value);
  };

  return (
    <>
    {
      editable ? (
        <View className={styles.randomPassword}>
          <Text className={styles.randomPasswordTitle}>{getCustomPwdTitle(digitalBase, false)}</Text>
          <CustomKeyboard
            inputContainerStyle={{
              marginTop: '16rpx',
              marginBottom: '56rpx',
              width: '560rpx',
              height: '120rpx',
            }}
            placeholder={Strings.getLang('Password_placeholder')}
            confirmText={Strings.getLang('Password_confirm')}
            value={value}
            isHideZero={isHideZero}
            digitalBase={digitalBase}
            confirmColor={themeColor}
            renderButton={() => (
              <View
                onClick={() => _getRandomPassword()}
                style={{ marginRight: '8rpx' }}
              >
                <Text style={{ color: themeColor }}>{Strings.getLang('Password_getPassword_random')}</Text>
              </View>
            )}
            onChange={_handleValueChange}
            onConfirm={value => console.log('onConfirm value ====>', value)}
          />
        </View>
      ) : (
        <PasswordPanel defaultCode={value} />
      )
    }
    </>
  );
};

export default RandomPassword;
