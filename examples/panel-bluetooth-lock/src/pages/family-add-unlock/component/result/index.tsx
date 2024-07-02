import React from 'react';
import { View, Text, Input, router } from '@ray-js/ray';
import Icon from '@ray-js/components/lib/Icon';

import { dpCodes, globalConfig } from '@/config';
import Strings from '@/i18n';
import styles from './index.module.less';

interface IProps {
    dpCode: string;
    isSuccess: boolean;
    errText: string;
    name: string;
    setName: (name: string) => void;
    save: () => void;
}

const Result: React.FC<IProps> = props => {
  const {
    dpCode,
    isSuccess,
    errText,
    name,
    setName,
    save,
  } = props;

  const themeColor = globalConfig.getConfig('themeColor') as string;

  if (!isSuccess) {
    return (
      <View className={styles.container}>
        <Icon style={{ marginTop: '40rpx'}} type="icon-cancel" size={68} color={'red'} />
        <View className={styles.errText}>{errText}</View>
        <View
          onClick={() => router.back()}
          className={styles.btn}
          style={{ backgroundColor: '#fff', color: '#000' }}
        >
          {Strings.getLang('Password_back')}
        </View> 
      </View>
    );
  }

  return (
    <View className={styles.container}>
      <Icon  style={{ marginTop: '40rpx'}} type="icon-checkmark-2" size={100} color={themeColor} />
      <Text className={styles.text}>{`${Strings.getDpLang(dpCode)}${Strings.getLang('addStepSuccess')}`}</Text>
      <View className={styles.inputWarp}>
        <Text className={styles.text}>{Strings.getLang('name')}</Text>
        <Input
          value={name}
          style={{ width: '400rpx' }}
          onInput={e => {
            const {
              detail: { value },
            } = e;
            setName(value);
          }}
          placeholder={Strings.getLang('Password_Name_Placeholder')}
        />
      </View>
      <View className={styles.btnWarp}>
        <View
          onClick={() => save()}
          className={styles.btn}
          style={{ backgroundColor: themeColor }}
        >
          {Strings.getLang('Password_save')}
        </View>
      </View>
    </View>
  );
};

export default React.memo(Result);
