/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import _ from 'lodash-es';
import { View, showModal, showToast } from '@ray-js/ray';
import { utils, useSupport } from '@ray-js/panel-sdk';
import { useUnmount } from 'ahooks';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import Strings from '@/i18n';
import { Button } from '@/components';
import { devices } from '@/devices';
import { CLOUD_DATA_KEYS_MAP } from '@/constant';
import { ReduxState, useAppDispatch } from '@/redux';
import {
  selectActiveIndex,
  updateColorIndex,
  updateWhiteIndex,
} from '@/redux/modules/uiStateSlice';
import {
  selectCollectColors,
  updateCollectColors,
  updateCollectWhites,
} from '@/redux/modules/cloudStateSlice';
import styles from './index.module.less';

const { hsv2rgbString, brightKelvin2rgb } = utils;

const MAX_LENGTH = 8;
const MIN_LENGTH = 3;

interface IProps {
  showAdd?: boolean;
  style?: React.CSSProperties;
  addStyle?: React.CSSProperties;
  disable?: boolean;
  isColor: boolean;
  colourData: COLOUR;
  brightness: number;
  temperature: number;
  chooseColor: (v: COLOUR & WHITE) => void;
  addColor?: () => void;
  deleteColor?: (v: any) => void;
}

export const CollectColors = (props: IProps) => {
  const {
    isColor,
    chooseColor,
    addColor,
    addStyle,
    deleteColor,
    showAdd = true,
    disable = false,
    colourData,
    brightness,
    temperature,
    style,
  } = props;
  const [animate, setAnimate] = useState(false);
  const support = useSupport();
  const dispatch = useAppDispatch();
  const activeIndex = useSelector((state: ReduxState) => selectActiveIndex(state, isColor));
  const collectColors = useSelector((state: ReduxState) => selectCollectColors(state, isColor));

  useEffect(() => {
    if (isColor) {
      const newColorIndex = collectColors?.findIndex(item => {
        const { hue: h, saturation: s, value: v } = item;
        const { hue, saturation, value } = colourData;
        return h === hue && saturation === s && value === v;
      });
      newColorIndex !== activeIndex && dispatch(updateColorIndex(newColorIndex));
    } else if (support.isSupportTemp()) {
      const newWhiteIndex = collectColors?.findIndex(item => {
        const { brightness: b, temperature: t } = item;
        return b === brightness && t === temperature;
      });
      newWhiteIndex !== activeIndex && dispatch(updateWhiteIndex(newWhiteIndex));
    } else {
      const newWhiteIndex = collectColors?.findIndex(item => {
        const { brightness: b } = item;
        return b === brightness;
      });
      newWhiteIndex !== activeIndex && dispatch(updateWhiteIndex(newWhiteIndex));
    }
  }, [colourData, temperature, brightness, isColor, collectColors]);

  useUnmount(() => {
    setAnimate(false);
  });

  const handleAddColor = () => {
    if (activeIndex > -1) {
      showModal({
        title: Strings.getLang('repeatColor'),
        cancelText: Strings.getLang('cancel'),
        confirmText: Strings.getLang('confirm'),
      });
    } else {
      const newList = [...collectColors, isColor ? { ...colourData } : { brightness, temperature }];
      const storageKey = isColor
        ? CLOUD_DATA_KEYS_MAP.collectColors
        : CLOUD_DATA_KEYS_MAP.collectWhites;
      devices.lamp.model.abilities.storage
        .set(storageKey, newList)
        .then(() => {
          if (isColor) {
            dispatch(updateColorIndex(newList.length - 1));
            dispatch(updateCollectColors(newList as ReduxState['cloudState']['collectColors']));
          } else {
            dispatch(updateWhiteIndex(newList.length - 1));
            dispatch(updateCollectWhites(newList as ReduxState['cloudState']['collectWhites']));
          }
        })
        .catch(err => {
          showToast({ title: Strings.getLang('addColorFailed') });
          console.log('storage.save addColor failed', err);
        });
    }
    addColor?.();
  };
  const handleDeleteColor = item => {
    const newList = _.cloneDeep(collectColors);
    if (activeIndex > -1) {
      newList.splice(activeIndex, 1);
      const storageKey = isColor
        ? CLOUD_DATA_KEYS_MAP.collectColors
        : CLOUD_DATA_KEYS_MAP.collectWhites;
      devices.lamp.model.abilities.storage
        .set(storageKey, newList)
        .then(() => {
          if (isColor) {
            dispatch(updateColorIndex(-1));
            dispatch(updateCollectColors(newList as ReduxState['cloudState']['collectColors']));
          } else {
            dispatch(updateWhiteIndex(-1));
            dispatch(updateCollectWhites(newList as ReduxState['cloudState']['collectWhites']));
          }
        })
        .catch(err => {
          console.log('storage.save deleteColor failed', err);
        });
    }
    deleteColor?.(item);
  };

  const handleChoose = (item, index) => {
    if (!disable) {
      chooseColor(item);
      if (isColor) dispatch(updateColorIndex(index));
      else dispatch(updateWhiteIndex(index));
      setAnimate(true);
    }
  };

  let isAddEnabled = collectColors.length < MAX_LENGTH && showAdd;
  if (!isColor && !support.isSupportTemp()) isAddEnabled = false; // 白光仅支持亮度的情况下不支持添加

  return (
    <View className={styles.row} style={style}>
      {isAddEnabled && (
        <Button
          img="/images/add_icon.png"
          imgClassName={styles.icon}
          className={clsx(styles.button, styles.add)}
          style={addStyle}
          onClick={handleAddColor}
        />
      )}
      <View
        className={styles.colorRow}
        style={{
          marginLeft: isAddEnabled ? 108 : 0,
        }}
      >
        <View style={{ display: 'flex' }}>
          {collectColors?.map((item, index) => {
            const isActive = index === activeIndex;
            const bg = isColor
              ? hsv2rgbString(
                  item.hue,
                  item.saturation / 10,
                  (200 + 800 * (item.value / 1000)) / 10
                )
              : brightKelvin2rgb(
                  200 + 800 * (item.brightness / 1000),
                  support.isSupportTemp() ? item.temperature : 1000,
                  { kelvinMin: 4000, kelvinMax: 8000 }
                );
            return (
              <View
                key={index}
                className={`${styles.circleBox} ${styles.button}`}
                style={{
                  marginRight: index === collectColors.length - 1 ? 0 : '24rpx',
                  border: isActive ? `4rpx solid ${bg}` : 'none',
                  background: 'transparent',
                  opacity: disable ? 0.4 : 1,
                }}
                onClick={() => handleChoose(item, index)}
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
                    img="/images/delete_icon.png"
                    imgClassName={styles.deleteIcon}
                    className={clsx(styles.button, styles.noBg)}
                    onClick={() => handleDeleteColor(item)}
                  />
                )}
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};
