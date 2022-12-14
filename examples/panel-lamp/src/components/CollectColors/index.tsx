import React, { useState, useEffect } from 'react';
import { View } from '@ray-js/components';
import { utils } from '@ray-js/panel-sdk';
import res from '@/res';
import { useUnmount } from 'ahooks';
import clsx from 'clsx';
import colorUtils from '@/utils/color.js';
import { Button } from '@/components';
import styles from './index.module.less';

const { addIcon, deleteIcon } = res;
const { hsv2rgbString, hsv2rgb } = utils;
const { brightKelvin2rgb, hsv2hex } = colorUtils;
const MAX_LENGTH = 6;
const MIN_LENGTH = 3;

interface IProps {
  style?: React.CSSProperties;
  activeIndex: number;
  isColor: boolean;
  collectColors: COLOUR[] | WHITE[];
  chooseColor: (v: COLOUR | WHITE) => void;
  addColor: () => void;
  deleteColor: (v: COLOUR | WHITE) => void;
}

export const CollectColors = (props: IProps) => {
  const { isColor, collectColors, activeIndex, chooseColor, addColor, deleteColor, style } = props;
  const [animate, setAnimate] = useState(false);
  useUnmount(() => {
    setAnimate(false);
  });
  return (
    <View className={styles.row} style={style}>
      {collectColors.map((item, index) => {
        const isActive = index === activeIndex;
        const bg = isColor
          ? hsv2rgbString(item.hue, item.saturation / 10, (200 + 800 * (item.value / 1000)) / 10)
          : brightKelvin2rgb(200 + 800 * (item.brightness / 1000), item.temperature);
        return (
          <View
            key={index}
            className={`${styles.circleBox} ${styles.button}`}
            style={{
              marginRight: index === collectColors.length - 1 ? 0 : '36rpx',
              border: isActive ? `4rpx solid ${bg}` : 'none',
              background: 'transparent',
            }}
            onClick={() => {
              chooseColor(item);
              setAnimate(true);
            }}
          >
            <View
              className={styles.circle}
              style={{
                backgroundColor: bg,
                transform: `scale(${isActive ? 0.7 : 1})`,
                transition: animate ? 'all .5s' : 'none',
              }}
            />
            {index + 1 > MIN_LENGTH && isActive && (
              <Button
                img={deleteIcon}
                imgClassName={styles.deleteIcon}
                className={clsx(styles.button, styles.noBg)}
                onClick={() => deleteColor(item)}
              />
            )}
          </View>
        );
      })}
      {collectColors.length < MAX_LENGTH && (
        <Button
          img={addIcon}
          imgClassName={styles.icon}
          className={clsx(styles.button, styles.left16)}
          onClick={addColor}
        />
      )}
    </View>
  );
};
CollectColors.defaultProps = {
  style: {},
};
