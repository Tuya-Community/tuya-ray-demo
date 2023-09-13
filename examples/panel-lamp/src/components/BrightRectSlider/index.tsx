/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable prettier/prettier */
/* eslint-disable no-self-compare */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import React, { useEffect, useState, useRef } from 'react';
import { View, Image, Text } from '@ray-js/ray';
import { getLaunchOptionsSync } from '@ray-js/api';
import SupportUtils from '@/utils/SupportUtils';
import { getDpIdByCode, formatPercent } from '@/utils';
import res from '@/res';
import Strings from '@/i18n';
import dpCodes from '@/config/dpCodes';
import useThrottleFn from '@/hooks/useThrottleFn';
import colorUtils from '@/utils/color.js';
import { useSelector, store, actions } from '@/redux';
import SjsSlider from './Slider';
import styles from './index.module.less';
import { Button, OpacitySlider } from '@/components';

const { brightKelvin2rgb } = colorUtils;
const { dispatch } = store;
const { brightCode } = dpCodes;
interface BrightRectSliderProps {
  disable?: boolean;
  value: number;
  sliderHeight?: number;
  isUserMode?: boolean;
  containerStyle?: React.CSSProperties;
  step?: number;
  min?: number;
  max?: number;
  maxTrackWidth?: string;
  maxTrackRadius?: string;
  sliderId?: string;
  isSupportThousand?: boolean;
  onRelease?: (num: number) => void;
  onChange?: (num: number) => void;
}

const { deviceId: devId, groupId } = getLaunchOptionsSync().query;

export const BrightRectSlider = (props: BrightRectSliderProps) => {
  const {
    containerStyle,
    value,
    step,
    min = 10,
    max = 1000,
    sliderHeight,
    maxTrackWidth,
    maxTrackRadius = 24,
    isSupportThousand,
    sliderId,
    isUserMode = true,
    onChange,
    onRelease,
    disable = false,
  } = props;

  const [textVal, setTextVal] = useState('');
  const [currentVal, setCurrentVal] = useState(value);
  const sliderLoading = useSelector(state => state.uiState.sliderLoading);
  const themeColor = useSelector(state => state.uiState.themeColor);
  const move = useRef(false);

  // useTimeout(() => {
  //   if (sliderLoading !== true) {
  //     formatText(value);
  //   }
  // }, 300)

  const formatText = useThrottleFn((v) => {
    setCurrentVal(v);
    if (isSupportThousand) {
      ty.device.dpTranslateAdvancedCapability({
        resId: groupId || devId,
        dps: [
          {
            dpCode: brightCode,
            dpValue: Math.max(10, v ?? 1000),
            dpId: getDpIdByCode(brightCode),
          },
        ],
        type: SupportUtils.isGroupDevice() ? '5' : '6',
        success: r => {
          setTextVal(r?.advancedCapability?.[0]?.translatedValue
            ? `${r?.advancedCapability?.[0]?.translatedValue}${r?.advancedCapability[0]?.unit}`
            : `${formatPercent(v, { min, max, minPercent: 1 })}%`);
          dispatch(actions.common.updateUi({ sliderLoading: false }));
        },
        fail: err => {
          setTextVal(`${formatPercent(v, { min, max, minPercent: 1 })}%`);
          dispatch(actions.common.updateUi({ sliderLoading: false }));
        },
      });
    } else {
      setTextVal(`${formatPercent(v, { min, max, minPercent: 1 })}%`);
      dispatch(actions.common.updateUi({ sliderLoading: false }));
    }
  }, { wait: 100 }).run;

  useEffect(() => {
    if (sliderLoading !== true) {
      formatText(value);
    }
    if (!move.current && currentVal !== value) {
      setCurrentVal(value);
    }
  }, [value, sliderLoading])

  const handleSliderMove = (v) => {
    formatText(v);
    onChange?.(v);
    move.current = true;
  }

  const handleSliderEnd = useThrottleFn(v => {
    formatText(v);
    onRelease?.(v);
    move.current = false;
  }, { wait: 80 }).run;

  const renderTextRow = () => {
    return (
      <View className={styles.textRow}>
        <Text className={styles.label}>{Strings.getLang('brightness')}</Text>
        <Text className={styles.label} style={{ margin: '0 4px' }}>
          ·
        </Text>
        <Text className={styles.value} style={{ color: themeColor }}>
          {textVal || `${formatPercent(currentBright)}%`}
        </Text>
      </View>
    );
  };
  const currentBright = textVal.includes('%')
    ? +textVal.substring(0, textVal.length - 1) * 10
    : +textVal.substring(0, textVal.length - 1);

  return (
    <View>
      {!isUserMode && renderTextRow()}
      <View className={styles.container} style={{ ...containerStyle, opacity: disable ? 0.4 : 1 }}>
        <OpacitySlider
          disable={disable}
          showMask
          textValue={textVal}
          value={Math.max(min, value)}
          trackStyle={{ width: maxTrackWidth, height: `${sliderHeight}rpx` }}
          onTouchMove={handleSliderMove}
          onTouchEnd={handleSliderEnd}
          background="linear-gradient(270deg, #FFFFFF 2.57%, rgba(255, 255, 255, 0) 100.64%)"
          thumbStyle={{ backgroundColor: brightKelvin2rgb(currentBright, 600) }}
        />
      </View>
    </View>

  );
};




