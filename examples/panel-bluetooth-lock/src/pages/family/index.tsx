import React, { FC, useState } from 'react';
import { usePageEvent } from 'ray';
import { View, ScrollView, showLoading, hideLoading } from '@ray-js/ray';
import { useRequest } from 'ahooks';
import { get } from 'lodash';

import RecordItem from './component/RecordItem';
import Empty from '@/components/Empty';

import { Api } from '@/api';
import { usePanelStore } from '@/hooks';

import styles from './index.module.less';

const Index: FC = () => {
  const [userData, setUserData] = useState([]);

  const { user } = usePanelStore();

  usePageEvent('onShow', () => {
    run();
  });

  const { run } = useRequest(() => Api.apis.fetchUserList(get(user, 'allOpenDps')), {
    onBefore: () => showLoading({ title: '', mask: true }),
    onSuccess(data) {
      setUserData(data);
      hideLoading();
    },
    onError() {
      hideLoading();
    },
    manual: true,
  });

  return (
    <ScrollView refresherTriggered={true} scrollY className={styles.container}>
      {userData.length > 0 &&
        userData.map(item => <RecordItem key={item.userId} {...item} currentUserInfo={user} />)}
      {userData.length === 0 && <Empty />}
    </ScrollView>
  );
};

export default Index;
