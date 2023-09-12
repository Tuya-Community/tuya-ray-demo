/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { Button, Image, Text, View } from '@ray-js/ray';
import _cloneDeep from 'lodash/cloneDeep';
import React, { useEffect, useState } from 'react';
import { utils, useProps, useActions } from '@ray-js/panel-sdk';
import { useMemoizedFn } from 'ahooks';
import { actions, store, useSelector } from '@/redux';
import { OpacitySlider, TabBar, CollectColors, BrightRectSlider } from '@/components';
import dpCodes from '@/config/dpCodes';
import SupportUtils from '@/utils/SupportUtils';
import Strings from '@/i18n';
import useThrottleFn from '@/hooks/useThrottleFn';
import TempSlider from '@/components/TempSlider';
import styles from './index.module.less';

const { hsv2rgbString, hsv2rgb, rgb2hsv } = utils;

const { dispatch } = store;
const { brightCode, temperatureCode, colourCode, powerCode, workModeCode } = dpCodes;
const { isSupportDp, isSupportColour } = SupportUtils;

interface IColour {
  hue: number;
  saturation: number;
  value: number;
}
interface IDimmer extends IColour {
  brightness: number;
  temperature: number;
}

interface IProps {
  style?: React.CSSProperties;
  mode: string;
  temperature: number;
  brightness: number;
  colour: IColour;
  isSupportThousand?: boolean;
  isSupportKelvin?: boolean;
  handleModeChange?: (v) => void;
  onRelease: (code, value) => void;
  onReleaseWhite: (cmd) => void;
  onChange?: (isColor: boolean, value) => void;
  setScrollEnabled?: (v) => void;
}
let timer1;
let timer2;
const Dimmer = (props: IProps) => {
  const {
    mode,
    style,
    temperature,
    brightness,
    colour,
    isSupportThousand,
    isSupportKelvin,
    handleModeChange,
    onRelease,
    onChange,
    onReleaseWhite,
    setScrollEnabled,
  } = props;

  const dpActions = useActions();
  const power = useProps(props => props.switch_led);
  const workMode = useProps(props => props.work_mode);
  const themeColor = useSelector(state => state.uiState.themeColor);

  const [color, setColor] = useState({ H: 0, S: 1000, V: 1000 });

  useEffect(() => {
    const tabs = initWorkModeTabs();
    if (!tabs.includes(mode)) {
      handleModeChange(tabs[0]);
    }
  }, [mode]);

  useEffect(() => {
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      timer1 = null;
      timer2 = null;
    };
  }, []);
  useEffect(() => {
    // dp彩光更新
    if (
      SupportUtils.isSupportDp(colourCode) &&
      (colour.hue !== color.H || colour.saturation !== color.S || colour.value !== color.V)
    ) {
      const { hue: H, saturation: S, value: V } = colour;
      setColor({ H, S, V });
    }
  }, [colour]);

  useEffect(() => {
    if (workMode === 'colour' && !SupportUtils.isSupportDp(colourCode)) {
      dpActions[workModeCode].set('white');
    } else if (
      workMode === 'white' &&
      !SupportUtils.isSupportDp(temperatureCode) &&
      !SupportUtils.isSupportDp(brightCode)
    ) {
      dpActions[workModeCode].set('colour');
    }
  }, [workMode]);

  const initWorkModeTabs = () => {
    const tabs = [];
    if (SupportUtils.isSupportDp(temperatureCode) || SupportUtils.isSupportDp(brightCode)) {
      tabs.push('white');
    }
    if (SupportUtils.isSupportDp(colourCode)) {
      tabs.push('colour');
    }
    return tabs;
  };

  const handleChange = useThrottleFn(
    (key, value) => {
      setScrollEnabled?.(false);
      if (key === 'temp') onChange?.(false, { temperature: value, brightness });
      else onChange?.(false, { temperature, brightness: value });
    },
    { wait: 80 }
  ).run;

  const handleWhiteRelease = useThrottleFn(
    (code, value) => {
      onRelease?.(code, value);
    },
    { wait: 80 }
  ).run;

  const renderWhite = () => {
    return (
      <View>
        {SupportUtils.isSupportDp(temperatureCode) && (
          <TempSlider
            isSupportKelvin={isSupportKelvin}
            value={temperature}
            trackStyle={{ width: 'calc(100vw - 48px)' }}
            onTouchMove={temp => handleChange('temp', temp)}
            onTouchEnd={temp => handleWhiteRelease(temperatureCode, temp)}
          />
        )}
        {/* 亮度 */}
        <BrightRectSlider
          isUserMode={false}
          sliderId="brightRectSlider"
          value={brightness}
          isSupportThousand={isSupportThousand}
          maxTrackWidth="calc(100vw - 48px)"
          sliderHeight={54}
          onChange={bright => handleChange('bright', bright)}
          onRelease={bright => handleWhiteRelease(brightCode, bright)}
        />
      </View>
    );
  };

  const renderColour = useMemoizedFn(() => {
    const hsvConfigs = [
      {
        value: color?.H,
        min: 0,
        max: 360,
        label: Strings.getLang('H'),
        bg:
          'linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), linear-gradient(90.01deg, #FF0000 0.01%, #F8CB0E 12.14%, #80FE06 21.83%, #08FB2B 32.75%, #04FAFC 46.38%, #0243FC 58.38%, #8700F9 70.04%, #FC00EF 80.06%, #F00A5B 89.92%, #FF0000 99.99%)',
      },
      {
        value: color?.S,
        min: 0,
        max: 1000,
        label: Strings.getLang('S'),
        bg: `linear-gradient(90deg, rgba(255, 255, 255, 0), ${hsv2rgbString(color?.H, 100, 100)})`,
      },
      {
        value: color?.V,
        min: 10,
        max: 1000,
        label: Strings.getLang('V'),
        bg: 'linear-gradient(90deg, rgba(255, 255, 255, 0), #FFF)',
      },
    ];
    return (
      <View>
        <View className={styles.typeTitle}>{Strings.getLang('HSV')}</View>
        {hsvConfigs.map(item => {
          const { value: v, min, max, label, bg } = item;
          return renderColorRow(v, min, max, label, bg);
        })}
      </View>
    );
  });

  const renderColorRow = (value, min, max, label, background) => {
    return (
      <View key={label} className={styles.colorRow}>
        <View className={styles.inputBox}>
          <Text className={styles.label}>{label}：</Text>
          <View className={styles.input} style={{ color: themeColor }}>{`${Math.max(
            min,
            value
          )}`}</View>
        </View>
        <OpacitySlider
          value={Math.max(min, value)}
          min={min}
          max={max}
          trackStyle={{
            width: 'calc(100vw - 123px - 2px)',
            border: '1px solid #000',
          }}
          onTouchMove={v => changeColorRow(v, label)}
          onTouchEnd={v => endColorRow(v, label)}
          background={background}
          thumbStyle={{
            backgroundColor: label === 'H' ? hsv2rgbString(value, 100, 100) : 'transparent',
          }}
        />
      </View>
    );
  };

  const changeColorRow = useThrottleFn(
    (v, type) => {
      console.log('colour change===', v, type);
      setScrollEnabled?.(false);
      const newColorData = { ...color, [type]: v };
      setColor({ ...color, [type]: v });
      const { H, S, V } = newColorData;
      onChange?.(true, { hue: H, saturation: S, value: V });
    },
    { wait: 80 }
  ).run;

  const endColorRow = (v, type) => {
    console.log('colour end===', v, type);
    const newColorData = { ...color, [type]: v };
    const { H: hue, S: saturation, V: value } = newColorData;
    setColor(newColorData);
    onRelease?.(colourCode, { hue, saturation, value });
  };

  const chooseCollect = data => {
    const { hue, saturation, value, brightness: bright, temperature: temp } = data;
    if (mode === 'colour') {
      onRelease?.(colourCode, { hue, saturation, value });
    } else {
      onReleaseWhite?.({ [brightCode]: bright, [temperatureCode]: temp });
    }
    // dpUtils.putDpData(cmd);
  };

  return (
    <View className={styles.dimmerBox} style={style}>
      {initWorkModeTabs().length > 1 && (
        <TabBar
          itemWidth="calc((100vw - 54px) / 2)"
          itemHeight={56}
          value={['colour', 'white'].includes(mode) ? mode : 'white'}
          tabList={initWorkModeTabs()}
          onClick={v => handleModeChange?.(v)}
        />
      )}
      <CollectColors
        style={{ justifyContent: 'start', width: '100%', margin: '32rpx 0' }}
        showAdd={power}
        isColor={mode === 'colour'}
        colourData={colour}
        brightness={brightness}
        temperature={temperature}
        chooseColor={data => chooseCollect?.(data)}
      />
      {mode === 'colour' ? renderColour() : renderWhite()}
    </View>
  );
};

export default Dimmer;
