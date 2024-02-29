/* eslint-disable no-shadow */
import React from 'react';
import { View, Image } from '@ray-js/ray';
import styles from './index.module.less';

type IProps = {
  tabList: TTab[];
  tabActive: string;
  powerItem: TTab;
  power: boolean;
};

enum EActionType {
  Dimmer = 'dimmer',
  Scene = 'scene',
  Music = 'music',
  Clip = 'clip',
  Timer = 'timer',
  More = 'more',
}

export const ControlBar = (props: IProps) => {
  const { tabActive = '', tabList = [], power = true, powerItem } = props;
  const isHasRadius = tabActive !== EActionType.Dimmer;
  return (
    <View
      className={styles.controlBarWrapper}
      style={{
        borderRadius: isHasRadius ? '32rpx 32rpx 0 0' : 0,
        borderTop: !isHasRadius ? '1px solid #393838' : '',
      }}
    >
      <View className={power ? styles.powerOnBox : styles.powerBoxOff} onClick={powerItem.callback}>
        <Image src={powerItem.icon} className={styles.powerIcon} />
      </View>
      {tabList.map((tabItem: TTab) => {
        const isActive = tabActive === tabItem.key;
        return (
          <Image
            onClick={() => {
              tabItem?.callback();
            }}
            key={tabItem.key}
            src={isActive ? tabItem.activeIcon : tabItem.icon}
            className={styles.tabItemIcon}
          />
        );
      })}
    </View>
  );
};
