import React from 'react';
import { View, Text } from '@ray-js/components';
import Strings from '@/i18n';
import style from './index.module.less';

interface DiyModeProps {
  title: string;
  onClickCancel?: () => void;
}

export const Dialog = (props: DiyModeProps) => {
  //弹窗
  const { onClickCancel, title } = props;

  return (
    <View className={style.container}>
      <View className={style.dialog}>
        <View className={style.header} style={{ position: 'relative' }}>
          <Text className={style.title}>{title}</Text>
        </View>
        <View className={style.footer} onClick={onClickCancel} style={{ position: 'relative' }}>
          <View className={style.line} style={{ position: 'absolute', top: 0 }} />
          <Text className={style.footerText}>{Strings.getLang('cancel')}</Text>
        </View>
      </View>
    </View>
  );
};

const nilFn = () => null;

Dialog.defaultProps = {
  onClickCancel: nilFn,
};
