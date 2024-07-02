import React, { FC, useState } from 'react';
import { useCreation, useBoolean } from 'ahooks';
import { DpSchema, utils } from '@ray-js/panel-sdk';
import { View, Text, ScrollView, Slider} from '@ray-js/ray';

import { globalConfig, Code } from '@/config';
import { putDpData } from '@/utils/sendDp';
import { connectBLEDevice } from '@/utils/ble';
import { saveDeviceProps } from '@/redux/actions';
import { getSettingDpSchema } from '@/utils/getSettingDpSchema';
import { usePanelStore, useDevInfo, useDeviceOnline, useUserPermission } from '@/hooks';
import { uploadSettingRecord, setDeviceProps } from '@/api/settingApi';

import Icon from '@ray-js/components/lib/Icon';
import List from '@ray-js/components-ty-cell';
import Switch from '@ray-js/components-ty-switch';
import ActionSheet from '@ray-js/components-ty-actionsheet';

import Strings from '@/i18n';
import Codes from '@/config/dpCodes';
import styles from './index.module.less';

const Index: FC = () => {
  const [dpCode, setDpCode] = useState('');
  const [enumValue, setEnumValue] = useState('');
  const [numberValue, setNumberValue] = useState(0);
  // const [showEnum, { setTrue: setShowEnumTrue, setFalse: setShowEnumFalse }] = useBoolean();

  const { dpState, deviceProps } = usePanelStore();
  const { isOwnerOrAdmin } = useUserPermission();
  const { schema } = useDevInfo();
  const deviceOnline = useDeviceOnline();
  const { remoteSwitch } = deviceProps;

  const themeColor = globalConfig.getConfig('themeColor') as string;

  const settingsSchema = useCreation(() => {
    return getSettingDpSchema((schema as unknown) as DpSchema[], isOwnerOrAdmin ? Code.logTypeFormDpCodes : Code.noAdminLogTypeFormDpCodes);
  }, [schema]);

  const enumDpDataSource = useCreation(() => {
    return settingsSchema
      .find(d => d.code === dpCode)
      ?.property?.range?.map((rangeValue: string) => {
        return {
          label: Strings.getDpLang(dpCode, rangeValue),
          value: rangeValue,
          checked: rangeValue === enumValue,
        };
      });
  }, [dpCode, enumValue]);

  const numberDpData = useCreation(() => {
    return settingsSchema.find(d => d.code === dpCode)?.property;
  }, [dpCode]);

  const {
    modal: enumModal,
    setVisible: setShowEnum,
    visible: showEnum,
  } = ActionSheet.useActionSheet({
    header: Strings.getLang('pleaseSelect'),
    onOk: () => {
      putDpData(dpCode, enumValue);
      setShowEnum(false);
      uploadSettingRecord(dpCode, [enumValue]);
    },
    onCancel: () => setShowEnum(false),
    onClickOverlay: () => setShowEnum(false),
    okText: Strings.getLang('confirm'),
    cancelText: Strings.getLang('cancel'),
    content: () => {
      return (
        <ScrollView refresherTriggered={false} scrollY className={styles.listWarp}>
          <List.Row
            className={styles.list}
            dataSource={enumDpDataSource}
            rowKey="label"
            renderItem={item => (
              <List.Item
                className={styles.listItem}
                title={item.label}
                onClick={() => setEnumValue(item.value)}
                content={
                  item.checked ? <Icon type="icon-checkmark" size={24} color={themeColor} /> : <></>
                }
              />
            )}
            splitStyle={{ width: '100%', left: 0 }}
          />
        </ScrollView>
      );
    },
  });

  const {
    modal: valueModal,
    setVisible: setShowValue,
    visible: showValue,
  } = ActionSheet.useActionSheet({
    header: Strings.getLang('pleaseSet'),
    onOk: () => {
      putDpData(dpCode, numberValue);
      setShowValue(false);
      uploadSettingRecord(dpCode, [numberValue.toString()]);
    },
    onCancel: () => setShowValue(false),
    onClickOverlay: () => setShowValue(false),
    okText: Strings.getLang('confirm'),
    cancelText: Strings.getLang('cancel'),
    content: () => {
      return (
        <View className={styles.valueWarp}>
          <Text className={styles.valueText}>{`${utils.scaleNumber(
            numberDpData?.scale ?? 0,
            numberValue || 0
          )}${numberDpData?.unit ?? ''}`}</Text>
          <Slider
            min={numberDpData?.min || 0}
            max={numberDpData?.max || 100}
            step={numberDpData?.step || 100}
            value={numberValue}
            onChange={(e) => {
              setNumberValue(e?.detail?.value);
            }}
          />
        </View>
      );
    },
  });

  return (
    <ScrollView refresherTriggered={false} scrollY className={styles.warp}>
      <List>
        {/* 特殊情况。远程开门开关取接口数据 */}
        <List.Item
          title={Strings.getDpLang(Codes.remoteNoDpKey)}
          content={
            <Switch
              style={{ marginRight: 0 }}
              checkedColor={themeColor}
              checked={remoteSwitch}
              onChange={value => {
                setDeviceProps(JSON.stringify({ UNLOCK_PHONE_REMOTE: value }));
                uploadSettingRecord('remote_unlock_setting', [value.toString()]);
                saveDeviceProps({ remoteSwitch: value });
              }}
            />
          }
        />
        {settingsSchema.map(item => {
          let content = <></>;
          const dpMode = item.mode;
          const dpType = item.property?.type;
          const dpUnit = item.property?.unit ?? '';
          const dpScale = item.property?.scale ?? 0;
          switch (dpType) {
            case 'bool':
              content = (
                <Switch
                  style={{ marginRight: 0 }}
                  checkedColor={themeColor}
                  checked={(dpState[item.code] as unknown) as boolean}
                  onChange={value => {
                    if (!deviceOnline) {
                      connectBLEDevice();
                      return;
                    }
                    putDpData(item.code, value);
                  }}
                />
              );
              break;
            case 'enum':
              content = (
                <View className={styles.valueView}>
                  <Text className={styles.text}>{Strings.getDpLang(item.code, dpState[item.code as any])}</Text>
                  <Icon type="icon-right" size={24} color={'rgba(0,0,0,0.2)'} />
                </View>
              );
              break;
            case 'value':
              content = (
                <View className={styles.valueView}>
                  <Text className={styles.text}>{`${utils.scaleNumber(dpScale, dpState[item.code])}${dpUnit}`}</Text>
                  <Icon type="icon-right" size={24} color={'rgba(0,0,0,0.2)'} />
                </View>
              );
              break;
            default:
              break;
          }
          return (
            <List.Item
              key={item.code}
              title={Strings.getDpLang(item.code)}
              content={content}
              onClick={() => {
                console.log('item', item);
                if (dpMode === 'ro') return;
                if (['enum', 'value'].indexOf(dpType) === -1) return;
                if (dpType === 'enum') {
                  if (!deviceOnline) {
                    connectBLEDevice();
                    return;
                  }
                  setDpCode(item.code);
                  setEnumValue(dpState[item.code]);
                  setShowEnum(!showEnum);
                } else if (dpType === 'value') {
                  if (!deviceOnline) {
                    connectBLEDevice();
                    return;
                  }
                  setDpCode(item.code);
                  setNumberValue(dpState[item.code]);
                  setShowValue(!showValue);
                }
              }}
            />
          );
        })}
      </List>
      {enumModal}
      {valueModal}
    </ScrollView>
  );
};

export default Index;
