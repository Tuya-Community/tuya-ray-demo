/* eslint-disable no-console */
import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, Button } from '@ray-js/ray';
import ClassNames from 'classnames';
import { usePageEvent } from 'ray';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector, actions } from '@/redux';
import IconFont from '@/components/Iconfont';
import { tabBottomConfig } from '@/config/home';
import PtzPanel from '@/components/PtzPanel';
import Tab from '@/components/Tab';
import CameraPlayer from '@/components/CameraPlayer';
import TopBar from '@/components/TopBar';
import { getString } from '@/utils/in18Util';
import { openShowFullButton, isIphoneX } from '@/utils/index';
import _ from '@/utils/loadsh';

import Styles from './index.module.less';

export default () => {
  const dispatch = useDispatch();
  const { isFull } = useSelector(state => state.ipcCommon);

  const [showMore, setShowMore] = useState(false);
  const [tabBottomList] = useState(tabBottomConfig);

  usePageEvent('onHide', () => {
    // 页面隐藏，更新对讲、录制UI
    dispatch(actions.common.isOneTalking(false));
    dispatch(actions.common.isTwoTalking(false));
    dispatch(actions.common.updateRecordStatus(false));
    dispatch(actions.common.isPreview(false));

    openShowFullButton();
  });

  // 更多
  const handleMore = type => {
    setShowMore(type);
  };

  const handleBottomTabClick = param => {
    const { routerFun } = param;
    if (routerFun) {
      routerFun();
    }
  };

  const notFullShow = useMemo(() => {
    return { display: !isFull ? '' : 'none' };
  }, [isFull]);

  return (
    <View className={Styles.homePage}>
      <View style={notFullShow}>
        <TopBar />
      </View>

      <CameraPlayer showMore={showMore} />

      <View style={notFullShow} className={Styles.tabWrap}>
        <View className={Styles.tabTop}>
          <Tab showMore={showMore} onMoreClick={handleMore} />
        </View>

        <View
          className={
            showMore && !isFull
              ? Styles.indexTabContentShow
              : !showMore && !isFull
              ? Styles.indexTabContentOpen
              : Styles.indexTabContent
          }
        >
          <View className={Styles.tabPanel}>
            <PtzPanel />
          </View>
          <View className={Styles.tabBottom}>
            {tabBottomList.map(item => {
              return (
                <Button
                  key={item.key}
                  className={ClassNames(Styles.tabBottomItem)}
                  style={{
                    color: item.key === 'direction' ? 'var(--hover-color)' : '',
                  }}
                  hoverClassName={Styles.fontHover}
                  onClick={_.debounce(() => handleBottomTabClick(item), 300)}
                >
                  <IconFont type={item.icon} />
                  <Text>{getString(item.text)}</Text>
                </Button>
              );
            })}
          </View>
        </View>
        <View className={ClassNames(isIphoneX && Styles.iphoneXPadding)} />
      </View>
    </View>
  );
};
