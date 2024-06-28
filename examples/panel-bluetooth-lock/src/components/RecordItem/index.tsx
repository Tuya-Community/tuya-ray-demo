import React, { useState } from 'react';
import { View, Text, router, Input, ScrollView, showToast } from '@ray-js/ray';
import { useCreation } from 'ahooks';

import List from '@ray-js/components-ty-cell';
import Icon from '@ray-js/components/lib/Icon';
import ActionSheet from '@ray-js/components-ty-actionsheet';

import { Api, IRecordItem } from '@/api';
import { globalConfig } from '@/config';
import { useDeviceOnline } from '@/hooks';
import { connectBLEDevice } from '@/utils/ble';
import { PasswordOperates } from '@/pages/temp/interface';

import Strings from '@/i18n';
import PasswordIcon from '@/components/PasswordIcon';
import { formatRecordItemText, getItemStatusText } from '@/utils/temp';

import styles from './index.module.less';

const RecordItem: React.FC<IRecordItem & {
  reloadList: () => void;
  isInvalid?: boolean;
}> = props => {
  const {
    pwdType,
    id: pwdId,
    name: passwordName,
    isInvalid = false,
    password,
    scheduleList,
    effectiveTime,
    invalidTime,
    sn,
    reloadList,
  } = props;
  const [btnValue, setBtnValue] = useState(PasswordOperates.reName);
  const [name, setName] = useState(passwordName);
  const themeColor = globalConfig.getConfig('themeColor') as string;
  const deviceOnline = useDeviceOnline();

  const itemStatus = getItemStatusText(props, isInvalid);

  const ButtonList = useCreation(() => {
    const list = [
      {
        key: 'delete',
        title: Strings.getLang('Password_delete'),
        value: PasswordOperates.delete,
        visible: [0, 1].includes(pwdType),
      },
      {
        key: 'edit',
        title: Strings.getLang('Password_edit'),
        value: PasswordOperates.edit,
        visible: pwdType === 0,
      },
      {
        key: 'reName',
        title: Strings.getLang('Password_reName'),
        value: PasswordOperates.reName,
        visible: true,
      },
    ];

    return list.filter(i => i.visible !== false);
  }, [pwdType]);

  const handleDelete = () => {
    Api.apis
      .deletePwd({
        deviceOnline,
        ...props,
      })
      .then(res => {
        if (res) {
          reloadList();
        }
      });
  };

  const handleEdit = () => {
    const param = {
      id: pwdId,
      name: passwordName,
      password,
      startDate: effectiveTime * 1000,
      endDate: invalidTime * 1000,
      sn,
    }
    const queryString = Object.keys(param)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(param[key])}`)
    .join('&');
    router.push(`/temp-update?${queryString}`);
  };

  const {
    modal: reNameModal,
    setVisible: setShowReName,
    visible: showReName,
  } = ActionSheet.useActionSheet({
    header: Strings.getLang('Password_reName'),
    onOk: () => {
      /** 密码名称 不能超过25 */
      if (name.trim().length === 0) {
        showToast({ title: Strings.getLang('Password_form_name_null'), icon: 'error' });
        return;
      }
      if (name && name.length > 25) {
        showToast({ title: Strings.getLang('Password_form_name_maxLimit'), icon: 'error' });
        return;
      }

      Api.apis
        .rePwdName({
          pwdId: String(pwdId),
          pwdType,
          name,
        })
        .then(() => {
          reloadList();
          showToast({ title: Strings.getLang('Password_form_modifySuccess'), icon: 'success' });
          setShowReName(false);
        })
        .catch(err => {
          if (err.message || err.errorMsg) {
            showToast({ title: err.message || err.errorMsg, icon: 'error' });
          }
          setShowReName(false);
        });
    },
    onCancel: () => setShowReName(false),
    onClickOverlay: () => setShowReName(false),
    okText: Strings.getLang('confirm'),
    cancelText: Strings.getLang('cancel'),
    content: () => {
      return (
        <View className={styles.inputWarp}>
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
      );
    },
  });

  const { modal: btnModal, setVisible: setShowBtn, visible: showBtn } = ActionSheet.useActionSheet({
    header: Strings.getLang('pleaseSelect'),
    onOk: () => {
      const fns = {
        [PasswordOperates.delete]: () => {
          setShowBtn(false);
          handleDelete();
        },
        [PasswordOperates.edit]: handleEdit,
        [PasswordOperates.reName]: () => {
          setShowBtn(false);
          setShowReName(!showReName);
        },
      };
      if (!deviceOnline) {
        connectBLEDevice();
        return;
      }
      const fn = fns[btnValue];
      fn && fn();
    },
    onCancel: () => setShowBtn(false),
    onClickOverlay: () => setShowBtn(false),
    okText: Strings.getLang('confirm'),
    cancelText: Strings.getLang('cancel'),
    content: () => {
      return (
        <ScrollView refresherTriggered={false} scrollY className={styles.listWarp}>
          <List.Row
            style={{ height: `${ButtonList.length * 100}rpx` }}
            dataSource={ButtonList}
            rowKey="key"
            renderItem={item => (
              <List.Item
                className={styles.listItem}
                title={item.title}
                onClick={() => setBtnValue(item.value)}
                content={
                  item.value === btnValue ? (
                    <Icon type="icon-checkmark" size={24} color={themeColor} />
                  ) : (
                    <></>
                  )
                }
              />
            )}
            splitStyle={{ width: '100%', left: 0 }}
          />
        </ScrollView>
      );
    },
  });

  const formatFooterText = formatRecordItemText({
    isInvalid,
    pwdType,
    scheduleList,
    effectiveTime,
    invalidTime,
  });

  const disabled = itemStatus?.text === Strings.getLang('Password_recordStatus_toBeSure');

  return (
    <View
      onClick={() => {
        if (isInvalid) {
          return;
        } else {
          setShowBtn(!showBtn)
        }
      }}
      className={styles.itemWrap}
      style={disabled && { backgroundColor: 'rgba(255, 255, 255, 0.65)' }}
    >
      <View className={styles.itemHeader}>
        <PasswordIcon isInvalid={isInvalid} type={pwdType} />
        <Text className={styles.itemTitle}>{passwordName}</Text>
        {/* 状态标签 */}
        <View className={styles.itemStatus} style={{ backgroundColor: itemStatus?.colors.bgColor }}>
          <Text style={{ color: itemStatus?.colors.fontColor, fontSize: '24rpx' }}>{itemStatus?.text}</Text>
        </View>
      </View>

      <View className={styles.itemFooter}>
        <View className={styles.footerText}>
          <Text className={styles.text}>{formatFooterText}</Text>
        </View>
      </View>
      {btnModal}
      {reNameModal}
    </View>
  );
};

export default React.memo(RecordItem);
