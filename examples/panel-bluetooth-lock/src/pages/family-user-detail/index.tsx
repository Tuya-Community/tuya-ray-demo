import { FC, useState } from 'react';
import { ScrollView, useQuery, showLoading, hideLoading } from '@ray-js/ray';
import { useRequest } from 'ahooks';
import { get } from 'lodash';
import { usePageEvent } from 'ray';

import Header from './component/Header';
import RecordItem from './component/RecordItem';

import { Api } from '@/api';
import { usePanelStore } from '@/hooks';
import styles from './index.module.less';

const Index: FC = () => {
  const [userInfo, setUserInfo] = useState({});
  const query = useQuery();
  const { user } = usePanelStore();

  usePageEvent('onShow', () => {
    run();
  });

  const { run } = useRequest(() => Api.apis.fetchUserList(get(user, 'allOpenDps')), {
    onBefore: () => showLoading({ title: '', mask: true }),
    onSuccess(data) {
      if (query && query.userId) {
        const detailData = data.find((item: Record<string, any>) => item.userId === query.userId);
        setUserInfo(detailData);
      }
      hideLoading();
    },
    onError() {
      hideLoading();
    },
    manual: true,
  });

  if (Object.keys(userInfo).length === 0) {
    return null;
  }

  return (
    <ScrollView  refresherTriggered={true} scrollY className={styles.container}>
        <Header {...userInfo} currentUserInfo={user}/>
        <RecordItem {...userInfo} currentUserInfo={user} />
    </ScrollView>
  );
};

export default Index;
