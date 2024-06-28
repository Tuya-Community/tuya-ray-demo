import { FC, useState } from 'react';
import { View, useQuery, Text, Input, showLoading, hideLoading, router, showToast } from '@ray-js/ray';
import { useRequest } from 'ahooks';
import { usePageEvent } from 'ray';
import { dpCodes, globalConfig } from '@/config';

import { Api } from '@/api';
import Strings from '@/i18n';
// import { usePanelStore } from '@/hooks';
import styles from './index.module.less';

const Index: FC = () => {
  const [detailInfo, setDetailInfo] = useState({
    unlockName: '',
  });
  const [name, setName] = useState('');
  const query = useQuery();
  // const { user } = usePanelStore();
  const themeColor = globalConfig.getConfig('themeColor') as string;

  usePageEvent('onShow', () => {
    run();
  });

  const { run } = useRequest(() => Api.apis.fetchUnlockDetail(query.opModeId), {
    onBefore: () => showLoading({ title: '', mask: true }),
    onSuccess(data) {
      setDetailInfo(data);
      hideLoading();
    },
    onError() {
      hideLoading();
    },
    manual: true,
    ready: query && query.opModeId,
  });

  const { run: update } = useRequest(Api.apis.updateUnlock, {
    onBefore: () => showLoading({ title: Strings.getLang('changing'), mask: true }),
    onSuccess() {
      hideLoading();
      showToast({ title: Strings.getLang('Password_form_modifySuccess'), icon: 'success'});
      router.back();
    },
    onError() {
      hideLoading();
      showToast({ title: Strings.getLang('Password_form_modifyError'), icon: 'fail'});
    },
    manual: true,
  });

  const { run: deleteUnlock } = useRequest(Api.apis.deleteUnlock, {
    onBefore: () => showLoading({ title: Strings.getLang('deleting'), mask: true }),
    onSuccess() {
      hideLoading();
      showToast({ title: Strings.getLang('Password_delete_success'), icon: 'success'});
      router.back();
    },
    onError() {
      hideLoading();
      showToast({ title: Strings.getLang('Password_delete_failure'), icon: 'fail'});
    },
    manual: true,
  });

  if (Object.keys(detailInfo).length === 0) {
    return null;
  }

  console.log('detailInfo', detailInfo);

  return (
    <View className={styles.container}>
      <View className={styles.inputWarp}>
        <Text className={styles.text}>{Strings.getLang('name')}</Text>
        <Input
          value={detailInfo?.unlockName}
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
          onClick={() => {
            const updateParams = {
              opModeId: query.opModeId,
              unlockName: name,
              unlockAttr: 0, // 是否开启特殊解锁通知 0.否 1.是
              unlockDetail: '', // 设备为密码时，密码的内容。后续迭代开发
            };
            update(updateParams);
          }}
          className={styles.btn}
          style={{ backgroundColor: themeColor }}
        >
          {Strings.getLang('Password_save')}
        </View>
        <View
          onClick={() => deleteUnlock(query.opModeId)}
          className={styles.btn}
          style={{ color: 'red', marginLeft: '40rpx' }}
        >
          {Strings.getLang('Password_delete')}
        </View>
      </View>
    </View>
  );
};

export default Index;
