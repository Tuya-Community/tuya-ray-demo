/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import _cloneDeep from 'lodash/cloneDeep';
import { View, showModal } from '@ray-js/ray';
import { utils } from '@ray-js/panel-sdk';
import { useUnmount } from 'ahooks';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import Strings from '@/i18n';
import res from '@/res';
import colorUtils from '@/utils/color.js';
import { LampApi } from '@/api';
import SupportUtils from '@/utils/SupportUtils';
import { store, actions } from '@/redux';
import dpCodes from '@/config/dpCodes';
import { Button } from '@/components';
import styles from './index.module.less';

const { add_icon, delete_icon } = res;
const { dispatch } = store;
const { temperatureCode } = dpCodes;
const { hsv2rgbString } = utils;
const { brightKelvin2rgb } = colorUtils;
const MAX_LENGTH = 8;
const MIN_LENGTH = 3;

interface IProps {
  showAdd?: boolean;
  style?: React.CSSProperties;
  addStyle?: React.CSSProperties;
  disable?: boolean;
  isColor: boolean;
  colourData: any;
  brightness: number;
  temperature: number;
  chooseColor: (v: any) => void;
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
  const { collectColours, collectWhites, colorIndex, whiteIndex } = useSelector(
    ({ uiState, cloudState, dpState }: any) => ({
      collectWhites: cloudState.collectWhites,
      collectColours: cloudState.collectColors,
      whiteIndex: uiState.whiteIndex,
      colorIndex: uiState.colorIndex,
    })
  );
  const activeIndex = isColor ? colorIndex : whiteIndex;
  const collectColors = isColor ? collectColours : collectWhites;

  useEffect(() => {
    if (isColor) {
      const newColorIndex = collectColours?.findIndex(item => {
        const { hue: h, saturation: s, value: v } = item;
        const { hue, saturation, value } = colourData;
        return h === hue && saturation === s && value === v;
      });
      newColorIndex !== colorIndex &&
        dispatch(actions.common.updateUi({ colorIndex: newColorIndex }));
    } else {
      const newWhiteIndex = collectWhites?.findIndex(item => {
        const { brightness: b, temperature: t } = item;
        return b === brightness && t === temperature;
      });
      newWhiteIndex !== whiteIndex &&
        dispatch(actions.common.updateUi({ whiteIndex: newWhiteIndex }));
    }
  }, [colourData, temperature, brightness, isColor]);

  useUnmount(() => {
    setAnimate(false);
  });
  const handleAddColor = () => {
    if (activeIndex > -1) {
      showModal({
        title: Strings.getLang('repeatColor'),
      });
    } else {
      const newList = [...collectColors, isColor ? { ...colourData } : { brightness, temperature }];
      LampApi.saveCloudConfig!(`collect${isColor ? 'Colors' : 'Whites'}`, newList).then(res1 => {
        dispatch(
          actions.common.updateUi(
            isColor ? { colorIndex: newList.length - 1 } : { whiteIndex: newList.length - 1 }
          )
        );
        dispatch(
          actions.common.updateCloud(
            isColor ? { collectColors: newList } : { collectWhites: newList }
          )
        );
      });
    }
    addColor?.();
  };
  const handleDeleteColor = item => {
    const newList = _cloneDeep(collectColors);
    if (activeIndex > -1) {
      newList.splice(activeIndex, 1);
      LampApi.saveCloudConfig!(`collect${isColor ? 'Colors' : 'Whites'}`, newList).then(res1 => {
        dispatch(actions.common.updateUi(isColor ? { colorIndex: -1 } : { whiteIndex: -1 }));
        dispatch(
          actions.common.updateCloud(
            isColor ? { collectColors: newList } : { collectWhites: newList }
          )
        );
      });
    }
    deleteColor?.(item);
  };

  const handleChoose = (item, index) => {
    if (!disable) {
      chooseColor(item);
      dispatch(actions.common.updateUi(isColor ? { colorIndex: index } : { whiteIndex: index }));
      setAnimate(true);
    }
  };
  return (
    <View className={styles.row} style={style}>
      {collectColors.length < MAX_LENGTH && showAdd && (
        <Button
          img={add_icon}
          imgClassName={styles.icon}
          className={clsx(styles.button, styles.add)}
          style={addStyle}
          onClick={handleAddColor}
        />
      )}
      <View
        className={styles.colorRow}
        style={{
          marginLeft: collectColors.length < MAX_LENGTH && showAdd ? 108 : 0,
        }}
      >
        <View style={{ display: 'flex' }}>
          {collectColors.map((item, index) => {
            const isActive = index === activeIndex;
            const bg = isColor
              ? hsv2rgbString(
                  item.hue,
                  item.saturation / 10,
                  (200 + 800 * (item.value / 1000)) / 10
                )
              : brightKelvin2rgb(
                  200 + 800 * (item.brightness / 1000),
                  SupportUtils.isSupportDp(temperatureCode) ? item.temperature : 1000
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
                    img={delete_icon}
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
