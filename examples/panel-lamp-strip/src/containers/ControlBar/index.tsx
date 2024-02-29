/* eslint-disable no-shadow */
import React, { useMemo } from 'react';
import { useActions, useProps } from '@ray-js/panel-sdk';

import { ControlBar as ControlBarCom } from '@/components';
import { lampSchemaMap } from '@/devices/schema';
import { devices } from '@/devices';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTab, updateCurrentTab } from '@/redux';

const { paint_colour_data, music_data, dreamlightmic_music_data } = lampSchemaMap;

enum EActionType {
  Dimmer = 'dimmer',
  Scene = 'scene',
  Music = 'music',
  Clip = 'clip',
  Timer = 'timer',
  More = 'more',
}

export const ControlBar = () => {
  const actions = useActions();
  const dispatch = useDispatch();

  const updateTab = (type: EActionType) => {
    dispatch(updateCurrentTab(type));
  };

  const tabList = useMemo(() => {
    const list: TTab[] = [
      {
        // title: '调光',
        key: EActionType.Dimmer,
        icon: '/images/icon_dimmer.png',
        activeIcon: '/images/icon_dimmer_active.png',
        visible: true,
        callback: () => updateTab(EActionType.Dimmer),
      },
      {
        // title: '场景',
        key: EActionType.Scene,
        icon: '/images/icon_scene.png',
        activeIcon: '/images/icon_scene_active.png',
        visible: devices.lamp.model.abilities.support.isSupportDp(paint_colour_data?.code),
        callback: () => updateTab(EActionType.Scene),
      },
      {
        // title: '音乐律动',
        key: EActionType.Music,
        icon: '/images/icon_music.png',
        activeIcon: '/images/icon_music_active.png',
        visible:
          devices.lamp.model.abilities.support.isSupportDp(music_data.code) ||
          devices.lamp.model.abilities.support.isSupportDp(dreamlightmic_music_data.code),
        callback: () => updateTab(EActionType.Music),
      },
    ];
    // 默认更多按钮
    // title: '更多',
    list.push({
      key: EActionType.More,
      icon: '/images/icon_more.png',
      activeIcon: '/images/icon_more_active.png',
      visible: true,
      callback: () => updateTab(EActionType.More),
    });
    return list.filter(i => i.visible);
  }, []);
  const currentTab = useSelector(selectCurrentTab);
  const powerItem = {
    // title: '开关',
    key: 'power',
    icon: '/images/power.png',
    activeIcon: '/images/power.png',
    callback: () => {
      actions.switch_led.toggle({ throttle: 300 });
    },
  };

  const power = useProps(p => p.switch_led);
  return (
    <ControlBarCom tabList={tabList} tabActive={currentTab} powerItem={powerItem} power={power} />
  );
};

export default ControlBar;
