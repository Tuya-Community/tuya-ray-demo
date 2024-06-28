import React, { FC, useState, useReducer } from 'react';
import { useCreation, useRequest } from 'ahooks';

import List from '@ray-js/components-ty-cell';
import Icon from '@ray-js/components/lib/Icon';
import ActionSheet from '@ray-js/components-ty-actionsheet';

import { View, Text, ScrollView, showLoading, hideLoading } from '@ray-js/ray';
import _uniq from 'lodash/uniq';
import { globalConfig } from '@/config';
import Empty from '@/components/Empty';

import { getLogs } from '@/api/logsApi';
import { formatLog, logCategoryList, timeList, getSelectTime } from '@/utils';
import Strings from '@/i18n';

import styles from './index.module.less';

const Index: FC = () => {
  const [category, setCategory] = useState('');
  const [tempCategory, setTempCategory] = useState('');
  const [time, setTime] = useState('time');
  const [tempTime, setTempTime] = useState('time');
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const themeColor = globalConfig.getConfig('themeColor') as string;

  const Ref = useCreation(() => {
    return { lastRowKey: '', hasMore: false, logsData: [] };
  }, []);

  const { run } = useRequest(
    () =>
      getLogs({
        logCategories: category,
        startTime: getSelectTime(time)[1],
        endTime: getSelectTime(time)[0],
        lastRowKey: Ref.lastRowKey,
      }),
    {
      onBefore: () => showLoading({ title: '', mask: true }),
      onSuccess(data) {
        Ref.lastRowKey = data.lastRowKey;
        Ref.hasMore = data.hasMore;
        Ref.logsData = _uniq([...Ref.logsData, ...data.records]);
        forceUpdate();
        hideLoading();
      },
      onError() {
        hideLoading();
      },
      refreshDeps: [category, time],
    }
  );

  const onScrollToLower = () => {
    if (Ref.hasMore) {
      run();
    }
  };

  const {
    modal: categoryModal,
    setVisible: setShowCategory,
    visible: showCategory,
  } = ActionSheet.useActionSheet({
    header: Strings.getLang('pleaseSelect'),
    onOk: () => {
      Ref.lastRowKey = '';
      Ref.logsData = [];
      setCategory(tempCategory);
      setShowCategory(false);
    },
    onCancel: () => setShowCategory(false),
    okText: Strings.getLang('confirm'),
    cancelText: Strings.getLang('cancel'),
    onClickOverlay: () => setShowCategory(false),
    content: () => {
      return (
        <ScrollView refresherTriggered={false} scrollY className={styles.modalWarp}>
          <List.Row
            style={{ margin: 0 }}
            dataSource={logCategoryList}
            rowKey="key"
            renderItem={item => (
              <List.Item
                className={styles.listItem}
                title={item.title}
                onClick={() => setTempCategory(item.key)}
                content={
                  item.key === tempCategory ? (
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

  const {
    modal: timeModal,
    setVisible: setShowTime,
    visible: showTime,
  } = ActionSheet.useActionSheet({
    header: Strings.getLang('pleaseSelect'),
    onOk: () => {
      Ref.lastRowKey = '';
      Ref.logsData = [];
      setTime(tempTime);
      setShowTime(false);
    },
    onCancel: () => setShowTime(false),
    onClickOverlay: () => setShowTime(false),
    okText: Strings.getLang('confirm'),
    cancelText: Strings.getLang('cancel'),
    content: () => {
      return (
        <ScrollView refresherTriggered={false} scrollY className={styles.modalWarp}>
          <List.Row
            style={{ margin: 0 }}
            dataSource={timeList}
            rowKey="key"
            renderItem={item => (
              <List.Item
                className={styles.listItem}
                title={item.title}
                onClick={() => setTempTime(item.key)}
                content={
                  item.key === tempTime ? (
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

  return (
    <>
      <View className={styles.container}>
        <View className={styles.tabItem} onClick={() => setShowCategory(!showCategory)}>
          <Text>{logCategoryList.filter(item => item.key === category)[0]?.title}</Text>
          <Icon type="icon-down" size={24} color={'#999'} />
        </View>
        <View className={styles.tabItem} onClick={() => setShowTime(!showTime)}>
          <Text>{timeList.filter(item => item.key === time)[0]?.title}</Text>
          <Icon type="icon-down" size={24} color={'#999'} />
        </View>
      </View>
      {categoryModal}
      {timeModal}
      <ScrollView
        refresherTriggered={true}
        scrollY
        className={styles.warp}
        onScrollToLower={onScrollToLower}
      >
        {Ref.logsData.length > 0 ? (
          Ref.logsData.map((item, _) => {
            const { formatTime, formatUserName, openText } = formatLog(item);
            return (
              <View key={item.logId} className={styles.item}>
                <Text>{`${formatTime} ${formatUserName &&
                  `【${formatUserName}】`}${openText}`}</Text>
              </View>
            );
          })
        ) : (
          <Empty />
        )}
      </ScrollView>
    </>
  );
};

export default Index;
