import React from 'react';
import { View, Text } from '@ray-js/ray';

import Strings from '@/i18n';
import styles from './index.module.less';

interface TabAnimationProps {
  value: string;
  padding?: number;
  containerBgColor?: string;
  activeColor?: string;
  activeBgColor?: string;
  borderRadius?: number;
  itemWidth?: string;
  itemHeight?: number;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  tabList: any;
  marginBottom?: number;
  onClick?: (v: string) => void;
  style?: React.CSSProperties;
  disable?: boolean;
}

export const TabBar = (props: TabAnimationProps) => {
  const {
    style,
    padding = 3,
    containerBgColor,
    activeColor,
    activeBgColor,
    borderRadius,
    itemWidth,
    itemHeight,
    tabList,
    fontSize,
    fontWeight,
    color,
    value,
    marginBottom,
    disable = false,
    onClick,
  } = props;
  const selectIndex =
    tabList.findIndex(item => item === value) === -1
      ? 0
      : tabList.findIndex(item => item === value);
  return (
    <View
      className={styles.container}
      style={{
        width: `calc(${itemWidth} * 2 + ${padding}px)`,
        height: itemHeight + padding * 2,
        borderRadius,
        backgroundColor: `${containerBgColor}`,
        marginBottom: `${marginBottom}rpx`,
        ...style,
      }}
    >
      {tabList.map((item, index) => {
        const isActive = item === value;
        return (
          <View
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={styles.singleTab}
            style={{
              width: itemWidth,
              height: itemHeight,
              marginLeft: index === 0 ? padding : 0,
            }}
            // @ts-ignore
            onClick={() => {
              !disable && onClick(item);
            }}
          >
            <Text
              style={{
                fontSize: `${fontSize}`,
                fontWeight: isActive ? 600 : `${fontWeight}`,
                color: `${isActive ? activeColor : color}`,
              }}
            >
              {Strings.getLang(item)}
            </Text>
          </View>
        );
      })}
      <View
        className={styles.selectedBg}
        style={{
          width: `calc(50% - ${padding}rpx)`,
          height: itemHeight,
          borderRadius: 94,
          backgroundColor: activeBgColor || '#fff',
          left: padding,
          // top: padding,
          transform: `translate(calc(${selectIndex} * 100%))`,
        }}
      />
    </View>
  );
};

const nilFn = () => null;

TabBar.defaultProps = {
  containerBgColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: 94,
  itemWidth: 160,
  itemHeight: 64,
  fontSize: 24,
  fontWeight: 400,
  color: '#FFFFFF',
  activeColor: '#000',
  padding: 8,
  marginBottom: 4,
  onClick: nilFn,
  activeBgColor: '#fff',
  style: {},
  disable: false,
};
