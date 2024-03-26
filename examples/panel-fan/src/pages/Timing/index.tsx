import React, { FC, useCallback, useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from '@ray-js/components';
import { useHideMenuButton } from '@/hooks';
import { EntityId } from '@reduxjs/toolkit';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectSafeArea } from '@/redux/modules/systemInfoSlice';
import { TopBar, TouchableOpacity } from '@/components';
import Strings from '@/i18n';
import { fetchTimings, selectAllTimingIds, selectTimingsTotal } from '@/redux/modules/timingsSlice';
import { imgTimingEmpty } from '@/res';

import styles from './index.module.less';
import TimingAdd from './TimingAdd';
import TimingItem from './TimingItem';

const Empty: FC = () => {
  return (
    <View className={styles.empty}>
      <Image src={imgTimingEmpty} className={styles.emptyImg} />
      <Text className={styles.emptyText}>{Strings.getLang('dsc_no_timing')}</Text>
    </View>
  );
};

const Timing: FC = () => {
  const dispatch = useDispatch();
  const safeArea = useSelector(selectSafeArea);
  const timingTotal = useSelector(selectTimingsTotal);
  const timingIds = useSelector(selectAllTimingIds);
  const [addVisible, setAddVisible] = useState(false);
  const [editId, setEditId] = useState<null | EntityId>(null);
  const [currentOpenedId, setCurrentOpenedId] = useState<null | EntityId>(null);

  useHideMenuButton();

  useEffect(() => {
    dispatch(fetchTimings());
  }, []);

  const handleShowAdd = () => {
    setEditId(null);
    setAddVisible(true);
  };

  const handleShowEdit = useCallback(id => {
    setEditId(id);
    setAddVisible(true);
  }, []);

  const handleHideAdd = useCallback(() => {
    setAddVisible(false);
  }, []);

  const handleSwipeOpen = useCallback(id => {
    setCurrentOpenedId(id);
  }, []);

  return (
    <>
      <View
        className={clsx(styles.container, addVisible && 'tranz')}
        style={{
          paddingTop: `${safeArea?.top ?? 48}px`,
        }}
      >
        <TopBar title={Strings.getLang('dsc_timing')} />

        {timingTotal > 0 ? (
          <View style={{ overflowY: 'auto', flex: 1, padding: '32rpx 0' }}>
            {timingIds.map(timingId => (
              <TimingItem
                key={timingId}
                id={timingId}
                onEdit={handleShowEdit}
                onOpen={handleSwipeOpen}
                currentOpenedId={currentOpenedId}
              />
            ))}
          </View>
        ) : (
          <Empty />
        )}

        <TouchableOpacity className={styles.btnAdd} onClick={handleShowAdd}>
          <Text className="iconfontpanel icon-panel-add" />
          <Text className={styles.btnText}>{Strings.getLang('dsc_add')}</Text>
        </TouchableOpacity>
      </View>
      {addVisible && <TimingAdd id={editId} visible={addVisible} onClose={handleHideAdd} />}
    </>
  );
};

export default Timing;
