import { FC, useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  useQuery,
  showLoading,
  hideLoading,
  router,
  showToast,
  onDpDataChange,
  offDpDataChange,
} from '@ray-js/ray';
import { useStore } from 'react-redux';
import Finger from '@ray-js/lock-finger';
import Icon from '@ray-js/components/lib/Icon';
import RandomPassword from '@/components/RandomPassword';
import { debounce } from 'lodash';
import { usePanelStore } from '@/hooks';

import { useRequest, useCreation } from 'ahooks';
import { dpCodes, globalConfig } from '@/config';
import { usePageEvent } from 'ray';

import { formatDpChange, getDpCode, strParse, putDpData } from '@/utils';

import Result from './component/result';
import { Api } from '@/api';
import Strings from '@/i18n';
import styles from './index.module.less';

const { unlockMethodCreate, unlockFingerprint, unlockPassword } = dpCodes;

const Index: FC = () => {
  const store = useStore();
  const query = useQuery();

  const [currTime, setCurrTime] = useState(0);
  const [password, setPassword] = useState<string>('');
  const [isError, setIsError] = useState(false);
  const [pageStatus, setPageStatus] = useState({
    isSuccess: false,
    isShowResult: false,
    errText: '',
  });
  const [name, setName] = useState('');
  const unlockId = useRef('');
  const themeColor = globalConfig.getConfig('themeColor') as string;

  useEffect(() => {
    onDpDataChange(dpDataChangeHandle);
    return () => {
      offDpDataChange(dpDataChangeHandle);
    };
  }, []);


  usePageEvent('onUnload', () => {
    // 非密码创建且还在录入阶段，退出页面，取消录入
    if (query.dpCode !== unlockPassword && !pageStatus.isShowResult) {
      const cancelData = `${query.putDpDatas.slice(0, 2)}fe${query.putDpDatas.slice(
        4,
        8
      )}${query.putDpDatas.slice(8)}`;
      putDpData(unlockMethodCreate, cancelData);
    }
  });

  const dpDataChangeHandle = data => {
    const { getState } = store;
    const { devInfo: _devInfo } = getState();
    const _dpState = formatDpChange(_devInfo.arrSchema, data.dps);
    if (Object.keys(_dpState).length > 10) return;
    const unlockMethodCreateResult = _dpState[unlockMethodCreate];
    if (unlockMethodCreateResult) {
      hideLoading();
      const dpCode = getDpCode[unlockMethodCreateResult.slice(0, 2)]; // 类型
      unlockId.current = unlockMethodCreateResult.slice(8, 10); // 硬件ID
      const phase = unlockMethodCreateResult.slice(2, 4); // 录入阶段
      const status = unlockMethodCreateResult.slice(12); // 录入状态
      const currTimes = Number(Number(`0x${unlockMethodCreateResult.slice(10, 12)}`).toString(10));
      if (phase === 'fd') {
        setPageStatus({
          isSuccess: false,
          isShowResult: true,
          errText: Strings.getLang(`${dpCode}Error_${status}`),
        });
      }
      if (phase === 'fc') {
        // 录入中
        if (status === '00') {
          setCurrTime(currTimes);
          setIsError(false);
        } else {
          // 录入中 一般是指纹不全导致的报错
          setCurrTime(currTimes);
          setIsError(true);
        }
      }
      if (phase === 'ff') {
        setPageStatus({
          isSuccess: true,
          isShowResult: true,
          errText: '',
        });
      }
    }
  };

  const { run: add } = useRequest(Api.apis.addUnlock, {
    onBefore: () => showLoading({ title: Strings.getLang('creating'), mask: true }),
    onSuccess() {
      hideLoading();
      showToast({ title: Strings.getLang('Password_form_createSuccess'), icon: 'success' });
      router.back();
    },
    onError() {
      hideLoading();
      showToast({ title: Strings.getLang('Password_form_create_fail'), icon: 'fail' });
    },
    manual: true,
  });

  const tips = useCreation(() => {
    if (isError) {
      return Strings.getLang('addStepError');
    }
    if (query.dpCode !== unlockFingerprint) {
      return Strings.getLang('addFingerVeinTip');
    }
    if (currTime === 0) {
      return Strings.getLang('addFingerNewTip');
    }
    return Strings.getLang('addFingerTipAgain');
  }, [isError, currTime]);

  return (
    <View className={styles.container}>
      {!pageStatus.isShowResult && (
        <View>
          {['unlock_fingerprint', 'unlock_hand', 'unlock_finger_vein'].includes(query.dpCode) && (
            <View className={styles.fingerWarp}>
              <Finger
                style={{ backgroundColor: '#f2f2f2' }}
                currentNumber={currTime}
                totalNumber={query.addTimes}
                isError={isError}
                tips={tips}
                tipsStyle={{ width: '80vw', letterSpacing: '0px' }}
              />
            </View>
          )}
        </View>
      )}
      {!pageStatus.isShowResult && (
        <View>
          {['unlock_card', 'unlock_face'].includes(query.dpCode) && (
            <View className={styles.cardTextWarp}>
              <Icon type="icon-a-arrow2squarepath" size={68} color={themeColor} />
              <Text>
                {query.dpCode === 'unlock_card'
                  ? Strings.getLang('addCardTip')
                  : Strings.getLang('addFaceTip')}
              </Text>
            </View>
          )}
        </View>
      )}
      {!pageStatus.isShowResult && (
        <View>
          {['unlock_password'].includes(query.dpCode) && (
            // <View className={styles.passwordWarp}>
            //   <RandomPassword
            //     editable={true}
            //     password={password}
            //     onSavePassword={pwd => setPassword(pwd)}
            //   />
            //   <View
            //     onClick={debounce(() => {
            //       if (password.length < 6) {
            //         showToast({ title: Strings.getLang('Password_getPassword_tip'), icon: 'none' });
            //         return;
            //       }
            //       showLoading({ title: Strings.getLang('publishing'), mask: true });
            //       const pswLength = `0${password.length.toString(16)}`;
            //       const psw = strParse(password);
            //       const dpData = `${query.putDpDatas.slice(0, -4)}${pswLength}${psw}`;
            //       putDpData(unlockMethodCreate, dpData);
            //     }, 1000)}
            //     className={styles.btn}
            //     style={{ backgroundColor: themeColor }}
            //   >
            //     {Strings.getLang('Password_save')}
            //   </View>
            // </View>
            <View className={styles.passwordWarp}>
                 <Icon type="icon-a-wrenchandscrewdriverfill" size={56} color="#000"></Icon>
                 <Text>{Strings.getLang('developing')}</Text>
            </View>
          )}
        </View>
      )}
      {pageStatus.isShowResult && (
        <Result
          dpCode={query.dpCode}
          isSuccess={pageStatus.isSuccess}
          errText={pageStatus.errText}
          name={name}
          setName={setName}
          save={() => {
            const { getState } = store;
            const { devInfo: _devInfo } = getState();
            const dpId = _devInfo.arrSchema.find(item => item.code === query.dpCode)?.id;
            // const aesPwd = encrypt(password, key);
            // 密码加密功能依赖APP提供接口。先隐藏后续迭代（预计8月底）开发发布
            const params = {
              userId: query.userId,
              unlockId: `${dpId}-${unlockId.current}`,
              unlockName: name,
              unlockAttr: 0, // 是否开启特殊解锁通知 0.否 1.是
              unlockDetail: '', // 密码内容
              // query.dpCode === unlockPassword ? aesPwd : 
            };
            add(params);
          }}
        />
      )}
    </View>
  );
};

export default Index;
