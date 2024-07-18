import React, { useState, useEffect } from 'react';
import { View, Text, Input, Image, ScrollView, Button, showToast } from '@ray-js/ray';
import { isEmojiCharacter } from '@/hybrid-mini-robot-map/protocol/utils/nameUtil';
import { stringToByte } from '@/hybrid-mini-robot-map/protocol/utils/stringsUtil';
import { brand } from '@/config';
import Strings from '../../i18n';
import IModal from '../../components/iModal';
import Res from '../../res';
import styles from './index.module.less';

interface IProps {
  show: boolean;
  toggleShow?: (v: boolean) => void;
  onConfirm: (tag: string) => void;
  onCancel: () => void;
  tags: { text: string }[];
  title: string;
}

const RoomNamePopLayout: React.FC<IProps> = props => {
  const { tags, title = '', show } = props;
  const [tag, setTag] = useState('');
  const [errText, setErrText] = useState('');
  const [showErrText, setShowErrText] = useState(false);
  const [visible, setVisible] = useState(show);
  const iconColor = brand;

  const _onCancel = () => {
    const { onCancel } = props;
    onCancel && onCancel();
    setTag('');
    setVisible(false);
  };

  const _onConfirm = () => {
    const { onConfirm } = props;
    if (!tag.replace(/\s+/g, '')) {
      showToast({
        title: Strings.getLang('room_rename_illegal'),
        icon: 'none',
      });
      return;
    }
    if (showErrText) return;
    onConfirm && onConfirm(tag);
    setVisible(false);
  };

  const onChangeText = (e: { type: string; value: string; origin: any }) => {
    const { value } = e;
    if (isEmojiCharacter(value)) {
      setErrText(Strings.getLang('room_rename_illegal'));
      setShowErrText(true);
      setTag(value);
      return;
    }
    if (stringToByte(value).length > 19) {
      setErrText(Strings.getLang('room_name_too_long'));
      setShowErrText(true);
      setTag(value);
      return;
    }
    setShowErrText(false);
    setTag(value);
  };

  return (
    visible && (
      <IModal
        show
        title={title}
        confirmText={Strings.getLang('confirm')}
        position="center"
        onClickOverlay={() => props.toggleShow(false)}
        showCancelBtn={false}
        showConfirmBtn={false}
        customStyle={{
          width: 'calc(100% - 24px)',
          marginLeft: '12px',
          marginRight: '12px',
          borderRadius: '16px',
          paddingBottom: '24px',
        }}
        headerStyle={{ marginRight: '32px', marginLeft: '32px', height: '60px', borderBottom: 0 }}
        titleStyle={{ fontFamily: 'Gilroy', fontSize: '17px', fontWeight: '700' }}
      >
        <ScrollView refresherTriggered={false}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginRight: '32px',
              marginLeft: '32px',
            }}
          >
            <Input
              type="text"
              placeholder={Strings.getLang('enterRoomName')}
              maxLength={20}
              onInput={onChangeText}
              value={tag}
              style={{
                height: '48px',
                borderRadius: '16px',
                borderWidth: '1px',
                borderColor: 'rgba(0, 0, 0, 0.1)',
              }}
            />
            <Image
              src={Res.inputClose}
              style={{
                width: '20px',
                height: '20px',
                position: 'absolute',
                right: '56px',
                top: '14px',
                caretColor: iconColor,
                zIndex: 99,
              }}
              onClick={() => {
                setTag('');
              }}
            />
          </View>
          {showErrText && (
            <View>
              <Text
                style={{ marginRight: '32px', marginLeft: '32px', color: 'red', fontSize: '14px' }}
              >
                {errText}
              </Text>
            </View>
          )}
          <View className={styles.content}>
            {tags.map(item => {
              return (
                <View
                  className={styles.nameTag}
                  onClick={() => {
                    setTag(item.text);
                  }}
                >
                  <Text className={styles.nameText}>{item.text}</Text>
                </View>
              );
            })}
          </View>
          <View className={styles.controlBarContent}>
            <Button
              className={styles.buttonCancel}
              style={{ borderWidth: 4, borderColor: iconColor, borderStyle: 'solid' }}
              onClick={_onCancel}
            >
              <Text style={{ color: iconColor }}>{Strings.getLang('cancel')}</Text>
            </Button>
            <Button
              className={styles.buttonConfirm}
              style={{ backgroundColor: iconColor }}
              onClick={_onConfirm}
            >
              <Text style={{ color: '#ffffff' }}>{Strings.getLang('confirm')}</Text>
            </Button>
          </View>
        </ScrollView>
        <View />
      </IModal>
    )
  );
};

export default RoomNamePopLayout;
