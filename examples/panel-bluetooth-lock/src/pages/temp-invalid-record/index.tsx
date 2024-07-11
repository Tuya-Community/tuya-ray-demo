import React, { useState, useRef } from 'react';
import { View, ScrollView, showModal, showLoading, hideLoading } from '@ray-js/ray';
import { useCreation, useRequest, useMemoizedFn } from 'ahooks';
import _uniq from 'lodash/uniq';

import { Api, IBleRecordItem, FetchInvalidListParams } from '@/api';
import Strings from '@/i18n';
import { globalConfig } from '@/config';

import Icon from '@ray-js/components/lib/Icon';
import Empty from '@/components/Empty';
import RecordItem from '@/components/RecordItem';
import styles from './index.module.less';

const InValidRecord: React.FC = () => {
  const [tempValidData, setTempValidData] = useState<IBleRecordItem[]>([]);
  const pageOffsetRef = useRef<FetchInvalidListParams & { hasNext?: boolean }>({
    limit: 20,
    offSet: 0,
    hasNext: false,
  });

  const themeColor = globalConfig.getConfig('themeColor') as string;

  const { run } = useRequest(() => Api.apis.fetchInvalidPwdList(pageOffsetRef.current), {
    onBefore: () => showLoading({ title: '', mask: true }),
    onSuccess(data) {
      pageOffsetRef.current.hasNext = data.hasNext;
      setTempValidData(_uniq([...tempValidData, ...data.datas]));
      hideLoading();
    },
    onError() {
      hideLoading();
    }
  });

  const onScrollToLower = useMemoizedFn(() => {
    if (pageOffsetRef.current.hasNext) {
      run();
    }
  });

  const renderListItem = (item: IBleRecordItem) => {
    return <RecordItem key={item.id} isInvalid={true} reloadList={run} {...item} />;
  };

  const footerComponent = useCreation(() => {
    return (
      <View className={styles.circleButton} style={{ backgroundColor: '#fff' }} onClick={() => {
        showModal({
          title: Strings.getLang('Password_ask_delete_invalidList'),
          cancelText: Strings.getLang('Password_cancel'),
          confirmText: Strings.getLang('Password_confirm'),
          confirmColor: themeColor,
          success: res => {
            if (res.confirm) {
              Api.apis.clearInvalidPwdList().then(_ => {
                run();
              })
            }
          },
        });
      }}>
          <Icon type="icon-cancel" size={24} color={themeColor} />
      </View>
    );
  }, []);

  return (
    <View className={styles.container}>
      <ScrollView
        refresherTriggered={true}
        scrollY
        className={styles.warp}
        onScrollToLower={onScrollToLower}
      >
        {tempValidData.map(item => renderListItem(item))}
        {tempValidData.length === 0 && <Empty />}
        {footerComponent}
      </ScrollView>
    </View>
  );
};

export default InValidRecord;
