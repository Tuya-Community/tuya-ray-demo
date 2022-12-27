/* eslint-disable no-console */
import React, { useMemo } from 'react';
import { View, Text, Button, Image, Icon } from '@ray-js/ray';
import { useSelector } from '@/redux';
import Strings from '@/i18n';
import { goToAlbum } from '@/utils/util';

import Styles from './index.module.less';

function RecordTip() {
  const { recordType, recordPic } = useSelector(state => state.ipcCommon);
  const { windowWidth } = useSelector(state => state.appInfo);

  const tipText = useMemo(() => {
    const langKey = recordType === 1 ? 'ipc_screen_shot_text' : 'ipc_record_save';
    return Strings.getLang(langKey);
  }, [recordType]);

  return (
    <View className={Styles.RecordTipWrap} style={{ width: `${windowWidth - 10}px` }}>
      <View className={Styles.left}>
        <View className={Styles.imageWrap}>
          {recordPic.map((pic, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <View className={Styles.image} key={`pic${index}`}>
                <View className={Styles.play} style={{ display: recordType === 2 ? '' : 'none' }}>
                  <Icon type="icon-a-playfill" size={20} color="#ffffff" />
                </View>
                <Image src={pic} className={Styles.pic} />
              </View>
            );
          })}
        </View>
        <Text>{tipText}</Text>
      </View>
      <Button className={Styles.goAlbum} onClick={goToAlbum}>
        {Strings.getLang('ipc_enter_album')}
      </Button>
    </View>
  );
}

export default RecordTip;
