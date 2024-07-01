/* eslint-disable no-shadow */
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setNavigationBarColor,
  View,
  showModal,
  navigateTo,
  getLaunchOptionsSync,
} from '@ray-js/ray';
import { useProps, useStructuredProps } from '@ray-js/panel-sdk';
import Strings from '@/i18n';
import { ControlBar } from '@/containers';
import { SmearMode } from '@ray-js/panel-sdk/lib/protocols/lamp/SmearTransformer';
import { updateCurrentTab, updateSmearType, selectCurrentTab } from '@/redux';
import { devices } from '@/devices';
import { useDebugPerf } from '@/hooks';

import styles from './index.module.less';
import Dimmer from '../Dimmer';
import Scene from '../Scene';
import More from '../More';
import Music from '../Music';

enum EActionType {
  Dimmer = 'dimmer',
  Scene = 'scene',
  Music = 'music',
  Clip = 'clip',
  Timer = 'timer',
  More = 'more',
}

export function Home() {
  const currentTab = useSelector(selectCurrentTab);
  const paintColorData = useStructuredProps(props => props.paint_colour_data);
  const workMode = useProps(props => props.work_mode);

  useDebugPerf(Home);

  useEffect(() => {
    let { smearMode } = paintColorData;
    if (smearMode === SmearMode.clear) {
      smearMode = SmearMode.all;
    }
    dispatch(updateSmearType(smearMode));
  }, []);

  useEffect(() => {
    // 把导航栏切换成黑色
    setNavigationBarColor({
      backgroundColor: '#000000',
      frontColor: '#ffffff',
      animation: null,
    });
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    // 根据workMode切换对应显示页面
    const isDimmerType = workMode === 'colour' || workMode === 'white';
    dispatch(updateCurrentTab((isDimmerType ? 'dimmer' : workMode) as EActionType));
  }, [workMode]);

  useEffect(() => {
    // 首次进入进行裁剪提示， 群组不进行提示
    if (devices.lamp.model.abilities.support.isGroupDevice()) {
      return;
    }
    const key = 'isConfigSlice3';
    devices.lamp.model.abilities.storage.get(key).then(res => {
      if (res) {
        return;
      }
      const tips = Strings.getLang('tips');
      const title = Strings.getLang('jumpToSlice');
      showModal({
        title: tips,
        confirmText: Strings.getLang('confirm'),
        cancelText: Strings.getLang('cancel'),
        content: title,
        success({ confirm }) {
          if (confirm) {
            const { deviceId, groupId } = getLaunchOptionsSync().query;
            const jumpUrl = `functional://rayStripClipFunctional/home?deviceId=${deviceId ||
              ''}&groupId=${groupId || ''}`;
            navigateTo({
              url: jumpUrl,
            });
          }
          devices.lamp.model.abilities.storage.set(key, true);
        },
      });
    });
  }, []);

  const renderDimmer = () => {
    return (
      <View
        style={{
          display: currentTab === EActionType.Dimmer ? 'block' : 'none',
        }}
      >
        <Dimmer show={currentTab === EActionType.Dimmer} />
      </View>
    );
  };
  const isLoadedScene = useRef(false);
  !isLoadedScene.current && (isLoadedScene.current = currentTab === EActionType.Scene);
  const renderScene = () => {
    if (currentTab !== EActionType.Scene) {
      return null;
    }
    return <Scene show={currentTab === EActionType.Scene} />;
  };

  const renderMusic = () => {
    if (currentTab !== EActionType.Music) {
      return null;
    }
    return <Music />;
  };

  const renderMore = () => {
    if (currentTab !== EActionType.More) {
      return null;
    }
    return <More />;
  };

  return (
    <View className={styles.homeWrapper}>
      {renderDimmer()}
      {renderScene()}
      {renderMusic()}
      {renderMore()}
      <ControlBar />
    </View>
  );
}

export default Home;
