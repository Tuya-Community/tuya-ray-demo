/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { View } from '@ray-js/ray';
import LampMusicCard from '@ray-js/lamp-music-card';
import {
  utils,
  useStructuredActions,
  useStructuredProps,
  useActions,
  useProps,
} from '@ray-js/panel-sdk';
import { E_WOKE_MODE } from '@/types';
import { useDebugPerf } from '@/hooks';

import { getLocalMusicList, TMusicItem } from './config';
import styles from './index.module.less';

const { hsv2rgbString } = utils;
const defaultList = getLocalMusicList();
const LocalMusic = () => {
  const [musicList, setMusicList] = useState(defaultList);
  const micMusicData = useStructuredProps(props => props.dreamlightmic_music_data);
  useDebugPerf(LocalMusic);
  useEffect(() => {
    if (!micMusicData && !musicList) {
      return;
    }
    const { power, id } = micMusicData;
    const _musicList = musicList
      .filter(i => i.id !== undefined)
      .map(i => {
        return {
          ...i,
          power: false,
        };
      });
    const currentItem = musicList.find(i => i.id === id);
    const _currentItem = {
      ...currentItem,
      power,
    };
    _musicList[id] = _currentItem;
    setMusicList([..._musicList]);
  }, [micMusicData]);

  const structuredAction = useStructuredActions();
  const action = useActions();
  const workMode = useProps(props => props.work_mode);
  const power = useProps(props => props.switch_led);
  const onPlay = (active: boolean, index: number) => {
    if (!musicList) {
      return;
    }
    // 此处可以根据状态进行dp的下发
    const currentItem = musicList[index];
    if (!currentItem) {
      return;
    }
    const _musicList = musicList.map(i => {
      return {
        ...i,
        power: false,
      };
    });
    const _currentItem = {
      ...currentItem,
      power: active,
    };
    _musicList[index] = _currentItem;
    setMusicList([..._musicList]);
    // 调用下发dp方法
    structuredAction.dreamlightmic_music_data.set(_currentItem);
    workMode !== E_WOKE_MODE.music && action.work_mode.set(E_WOKE_MODE.music);
    !power && action.switch_led.set(_currentItem.power);
  };

  const isMusicMode = workMode === E_WOKE_MODE.music;
  const isShowOpen = isMusicMode && power;
  const renderMusicList = () => {
    return (
      <View className={styles.musicListWrapper}>
        {musicList.map((musicItem: TMusicItem, index: number) => {
          if (!musicItem) {
            return null;
          }
          const { title, power: musicPower, colors, brightness, icon } = musicItem;
          const colorArr = colors.map(({ hue, saturation }) => {
            // 注意：此处的 saturation, brightness 范围为0-100
            return hsv2rgbString(hue, saturation, brightness, 1);
          });
          return (
            <LampMusicCard
              key={title}
              data={{
                title,
                icon,
                colorArr,
              }}
              style={{
                width: '686rpx',
                marginBottom: '16rpx',
                border: '1px solid rgba(255, 255, 255, 0.1) ',
              }}
              active={musicPower && isShowOpen}
              onPlay={(active: boolean) => {
                onPlay(active, index);
              }}
            />
          );
        })}
      </View>
    );
  };
  return <View className={styles.localMusicWrapper}>{renderMusicList()}</View>;
};

export default LocalMusic;
