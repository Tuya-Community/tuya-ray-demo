import React, { useState } from 'react';
import { usePageEvent } from 'ray';
import { View, Text, ScrollView, router, showLoading, hideLoading } from '@ray-js/ray';
import { useCreation, useRequest } from 'ahooks';

import { Api, IBleRecordItem } from '@/api';
import Strings from '@/i18n';

import Empty from '@/components/Empty';
import RecordItem from '@/components/RecordItem';

import Icon from '@ray-js/components/lib/Icon';
import styles from './index.module.less';

const Record: React.FC = () => {
  const [tempData, setTempData] = useState<IBleRecordItem[]>([]);

  usePageEvent('onShow', () => {
    run();
  });

  // 接口不包括短效动态密码
  const { run } = useRequest(Api.apis.fetchPwdList, {
    onBefore: () => showLoading({ title: '', mask: true }),
    onSuccess(data) {
      setTempData(data);
      hideLoading();
    },
    onError() {
      hideLoading();
    },
    manual: true,
  });

  const renderListItem = (item: IBleRecordItem) => {
    return <RecordItem key={item.id} reloadList={run} {...item} />;
  };

  const footerComponent = useCreation(() => {
    return (
      <View className={styles.inValid}>
        <View className={styles.inValidBtn} onClick={() => router.push('/temp-invalid-record')}>
          <Text className={styles.inValidText}>{Strings.getLang('Password_invalidList')}</Text>
          <Icon type="icon-right" size={18} color={'rgba(0,0,0,0.2)'} />
        </View>
      </View>
    );
  }, []);

  return (
    <View className={styles.container}>
      <ScrollView
        refresherTriggered={false}
        scrollY
        className={styles.warp}
      >
        {tempData.map(item => renderListItem(item))}
        {tempData.length === 0 && <Empty />}
        {footerComponent}
      </ScrollView>
    </View>
  );
};

export default Record;
