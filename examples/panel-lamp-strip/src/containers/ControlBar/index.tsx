/* eslint-disable no-shadow */
import React, { useMemo } from 'react';
import { useActions, useProps } from '@ray-js/panel-sdk';

import { ControlBar as ControlBarCom } from '@/components';
import { lampSchemaMap } from '@/devices/schema';
import { devices } from '@/devices';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTab, updateCurrentTab } from '@/redux';
import getCdnImgUrl from '@/utils/getCdnImgUrl';
import { useDebugPerf } from '@/hooks';

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
  useDebugPerf(ControlBar);

  const updateTab = (type: EActionType) => {
    dispatch(updateCurrentTab(type));
  };

  const tabList = useMemo(() => {
    const list: TTab[] = [
      {
        // title: '调光',
        key: EActionType.Dimmer,
        icon: getCdnImgUrl('icon_dimmer.png'),
        activeIcon: getCdnImgUrl('icon_dimmer_active.png'),
        visible: true,
        callback: () => updateTab(EActionType.Dimmer),
      },
      {
        // title: '场景',
        key: EActionType.Scene,
        icon: getCdnImgUrl('icon_scene.png'),
        activeIcon: getCdnImgUrl('icon_scene_active.png'),
        visible: devices.lamp.model.abilities.support.isSupportDp(paint_colour_data?.code),
        callback: () => updateTab(EActionType.Scene),
      },
      {
        // title: '音乐律动',
        key: EActionType.Music,
        icon: getCdnImgUrl('icon_music.png'),
        activeIcon: getCdnImgUrl('icon_music_active.png'),
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
      icon: getCdnImgUrl('icon_more.png'),
      activeIcon: getCdnImgUrl('icon_more_active.png'),
      visible: true,
      callback: () => updateTab(EActionType.More),
    });
    return list.filter(i => i.visible);
  }, []);
  const currentTab = useSelector(selectCurrentTab);
  const powerItem = {
    key: 'power',
    icon: getCdnImgUrl('power.png'),
    activeIcon: getCdnImgUrl('power.png'),
    callback: () => {
      actions.switch_led?.toggle({ throttle: 300 });
    },
  };

  const power = useProps(p => p.switch_led);
  return (
    <ControlBarCom tabList={tabList} tabActive={currentTab} powerItem={powerItem} power={power} />
  );
};

export default ControlBar;
