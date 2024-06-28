/* eslint-disable react/require-default-props */
import React, { useState, useImperativeHandle } from 'react';
import { showToast, Text, View, showLoading, hideLoading } from '@ray-js/ray';
// import { encrypt } from '@ray-js/aes-utils';
import { debounce } from 'lodash';
import { utils } from '@ray-js/panel-sdk';
import CryptoJS from 'crypto-js';

import PasswordNameInput from '@/components/PasswordNameInput';
import OfflinePwdFooter from '@/components/OfflinePwdFooter';
import DateRangePicker from '@/components/DateRangePicker';
import RandomPassword from '@/components/RandomPassword';

import Strings from '@/i18n';
import { Api, IUpdateParams } from '@/api';
import { globalConfig } from '@/config';
import { usePanelStore, usePanelConfig, useDeviceOnline } from '@/hooks';
import styles from '../index.module.less';

import { connectBLEDevice } from '@/utils/ble';
import { formatScheduleText, getPwdLengthRange, checkNumIsInRange } from '@/utils/temp';
import { TimeRangeType, ICustomDetailData } from '../interface';

const toInt = (num: number) => ~~num;

interface ICustomForm {
  // isDetail?: boolean;
  onFinish?: () => void;
  detailData?: ICustomDetailData;
  type?: string;
}
interface ICustomFormRef {
  getValues: () => Omit<IUpdateParams, 'operate'> | undefined;
}

const CustomForm = React.forwardRef<ICustomFormRef | undefined, ICustomForm>(
  ({ detailData, onFinish, type = 'add' }, ref) => {
    const forUpdate = !!detailData; // 详情页么
    console.log('detailData', detailData)
    console.log('new Date().getTime()', new Date().getTime())
    const DefaultDateRange = {
      startDate: detailData?.startDate || new Date().getTime(),
      endDate: detailData?.endDate || 0,
    };
    const DefaultTimeRange = {
      beginTime: detailData?.schedule?.startTime || 480,
      endTime: detailData?.schedule?.endTime || 1200,
    };

    const panelConfig = usePanelConfig() as any;
    const digitalBase = panelConfig?.fun?.digitalBase || 10;
    const { devInfo } = usePanelStore();
    const deviceOnline = useDeviceOnline();
    const { localKey } = devInfo;
    const themeColor = globalConfig.getConfig('themeColor') as string;

    const key = CryptoJS.enc.Utf8.parse(localKey);

    const pwdLengthRange = getPwdLengthRange(digitalBase, false);

    const [editable, setEditable] = useState<boolean>(true);
    const [passwordName, setPasswordName] = useState<string>(detailData?.name || '');
    const [password, setPassword] = useState<string>(detailData?.password || '');
    const [dateRange, setDateRange] = useState(DefaultDateRange);
    const [repeat, setRepeat] = useState<boolean>(!!detailData?.schedule);
    const [timeRange, setTimeRange] = useState<TimeRangeType>(DefaultTimeRange);
    const [weekDays, setWeekDays] = useState<string>(
      (detailData?.schedule?.weekDays || '1111111')
        .toString()
        .padStart(7, '0')
        .split('')
        .reverse()
        .join('')
    );

    const checkAndComposeValues = (): Omit<IUpdateParams, 'operate'> | undefined => {
      const scheDuleDetail = [
        {
          allDay: false,
          effectiveTime: timeRange.beginTime,
          invalidTime: timeRange.endTime,
          workingDay: parseInt(weekDays, 2),
        },
      ];

      if (
        /(?:(?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){5,9}|(2(?=1)|3(?=2)|4(?=3)|5(?=4)|6(?=5)|7(?=6)|8(?=7)|9(?=8)|1(?=0)){5,9})\d/.test(
          password
        ) ||
        /(\d)\1{5,9}/g.test(password)
      ) {
        showToast({ title: Strings.getLang('Password_phone_reg_is_error'), icon: 'none' });
        return;
      }

      if (password && !checkNumIsInRange(password.length, pwdLengthRange) && type === 'add') {
        showToast({
          title: Strings.formatValue(
            'Password_form_codeLength_limit',
            String(pwdLengthRange[0]),
            String(pwdLengthRange[1])
          ),
          icon: 'none',
        });

        return;
      }

      /** 密码名称 不能超过25 */
      if (passwordName && passwordName.length > 25) {
        showToast({ title: Strings.getLang('Password_form_name_maxLimit'), icon: 'none' });
        return;
      }

      const checkRequiredItem =
        (!password && type === 'add') ||
        !dateRange ||
        !dateRange.startDate ||
        !dateRange.endDate ||
        (repeat && (!timeRange.beginTime || !timeRange.endTime || !weekDays));

      if (checkRequiredItem) {
        showToast({ title: Strings.getLang('Password_form_mustInputTip'), icon: 'none' });
        return;
      }

      return {
        password,
        name: passwordName,
        effectiveTime: toInt((dateRange.startDate as number) / 1000),
        invalidTime: toInt((dateRange.endDate as number) / 1000),
        schedule: repeat ? JSON.stringify(scheDuleDetail) : '',
      };
    };

    useImperativeHandle(ref, () => {
      return {
        getValues: checkAndComposeValues,
      };
    });

    const handleCreate = debounce(() => {
      const values = checkAndComposeValues();
      if (!values) return;
      if (!deviceOnline) {
        connectBLEDevice();
        return;
      }
      showLoading({ title: ' ' });
      const aesPwd = encrypt(password, key);
      console.log('aesPwd', aesPwd)
      Api.apis
        .createPwd({
          ...values,
          password: aesPwd,
          originalPassword: password,
        })
        .then((res: { pwdName: string; name: string }) => {
          setEditable(false);
          hideLoading();
          setPasswordName(res.pwdName || res.name);
          showToast({ title: Strings.getLang('Password_form_createSuccess'), icon: 'success' });
        })
        .catch(e => {
          hideLoading();
          if (e?.errorMsg) {
            showToast({ title: e?.errorMsg, icon: 'error' });
          }
        });
    }, 1000);

    const handleFinish = () => {
      setEditable(true);
      setPassword('');
      setPasswordName('');
      setDateRange(DefaultDateRange);
      setTimeRange(DefaultTimeRange);
      setWeekDays('0000000');
      setRepeat(false);

      onFinish && onFinish();
    };

    const _passwordText = Strings.formatValue(
      'Password_custom_share_text',
      devInfo.name,
      password,
      utils.dateFormat('yyyy-MM-dd hh:mm', new Date(dateRange.startDate)),
      utils.dateFormat('yyyy-MM-dd hh:mm', new Date(dateRange.endDate))
    );

    const passwordUnlimitedText = Strings.formatValue(
      'Password_custom_unlimited_share_text',
      devInfo.name,
      password,
      utils.dateFormat('yyyy-MM-dd hh:mm', new Date(dateRange.startDate)),
      utils.dateFormat('yyyy-MM-dd hh:mm', new Date(dateRange.endDate)),
      formatScheduleText(weekDays, timeRange as Required<TimeRangeType>)
    );

    const passwordText = repeat ? passwordUnlimitedText : _passwordText;

    return (
      <View className={styles.customWarp}>
        <View className={styles.customForm}>
          {!forUpdate && (
            <RandomPassword
              editable={editable}
              password={password}
              onSavePassword={pwd => setPassword(pwd)}
            />
          )}

          <PasswordNameInput
            editable={editable}
            value={passwordName}
            style={{ borderColor: '#efefef', borderTopWidth: 1 }}
            onChangeText={e => {
              const {
                detail: { value },
              } = e;
              setPasswordName(value)
            }}
          />

          <DateRangePicker
            type="datetime"
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

          {/* 提交之后显示表单内部的操作按钮 */}
          {!editable && (
            <OfflinePwdFooter
              themeColor={themeColor}
              shareData={{ message: passwordText }}
              isInit={false}
              onFinish={handleFinish}
            />
          )}
        </View>

        {/* 外层 创建按钮 固定底部, 提交之后隐藏外部按钮 */}
        {editable && !forUpdate && (
          <View className={styles.customFooterButtonArea}>
            <View
              className={styles.btnWrap} // width: '100%'
              style={{ backgroundColor: themeColor }}
              onClick={handleCreate}
            >
              <Text className={styles.text}>
                {Strings.getLang('Password_Form_ButtonText_CreatePassword')}
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  }
);

export default CustomForm;
