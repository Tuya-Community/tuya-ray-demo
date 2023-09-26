/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { View } from '@ray-js/ray';
import _cloneDeep from 'lodash/cloneDeep';
import React, { useEffect, useMemo } from 'react';
import { utils, useProps, useActions } from '@ray-js/panel-sdk';
import { TempSlider, TabBar, CollectColors, BrightRectSlider, ColorRow } from '@/components';
import SupportUtils from '@/utils/SupportUtils';
import Strings from '@/i18n';
import { lampSchemaMap } from '@/devices/schema';
import useThrottleFn from '@/hooks/useThrottleFn';
import styles from './index.module.less';

const { hsv2rgbString } = utils;

const { bright_value, temp_value, colour_data } = lampSchemaMap;

interface IColour {
  hue: number;
  saturation: number;
  value: number;
}

interface IProps {
  style?: React.CSSProperties;
  mode: string;
  temperature: number;
  brightness: number;
  colour: IColour;
  canEdit?: boolean;
  handleModeChange?: (v) => void;
  onRelease: (code, value) => void;
  onReleaseWhite: (cmd) => void;
  onChange?: (isColor: boolean, value) => void;
  setScrollEnabled?: (v) => void;
}

const Dimmer = (props: IProps) => {
  const {
    mode,
    style,
    temperature,
    brightness,
    colour,
    canEdit = true,
    handleModeChange,
    onRelease,
    onChange,
    onReleaseWhite,
    setScrollEnabled,
  } = props;

  const dpActions = useActions();
  const power = useProps(p => p.switch_led);
  const workMode = useProps(p => p.work_mode);

  // HSV默认的slider配置
  const hsvConfigs = useMemo(() => {
    return [
      {
        value: colour?.hue,
        min: 0,
        max: 360,
        label: 'hue',
        bg:
          'linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), linear-gradient(90.01deg, #FF0000 0.01%, #F8CB0E 12.14%, #80FE06 21.83%, #08FB2B 32.75%, #04FAFC 46.38%, #0243FC 58.38%, #8700F9 70.04%, #FC00EF 80.06%, #F00A5B 89.92%, #FF0000 99.99%)',
      },
      {
        value: colour?.saturation,
        min: 0,
        max: 1000,
        label: 'saturation',
        bg: `linear-gradient(90deg, rgba(255, 255, 255, 0), ${hsv2rgbString(
          colour?.hue,
          100,
          100
        )})`,
      },
      {
        value: colour?.value,
        min: 10,
        max: 1000,
        label: 'value',
        bg: 'linear-gradient(90deg, rgba(255, 255, 255, 0), #FFF)',
      },
    ];
  }, [colour]);

  // 如果模式不在调光，自动切成白/彩光
  useEffect(() => {
    const tabs = initWorkModeTabs();
    if (!tabs.includes(mode)) {
      handleModeChange(tabs[0]);
    }
  }, [mode]);

  // 根据当前workMode自适应
  useEffect(() => {
    if (workMode === 'colour' && !SupportUtils.isSupportDp(colour_data.code)) {
      dpActions.work_mode.set('white');
    } else if (
      workMode === 'white' &&
      !SupportUtils.isSupportDp(temp_value.code) &&
      !SupportUtils.isSupportDp(bright_value.code)
    ) {
      dpActions.work_mode.set('colour');
    }
  }, [workMode]);

  // 根据支持的路数生成tabBar
  const initWorkModeTabs = () => {
    const tabs = [];
    if (SupportUtils.isSupportDp(temp_value.code) || SupportUtils.isSupportDp(bright_value.code)) {
      tabs.push('white');
    }
    if (SupportUtils.isSupportDp(colour_data.code)) {
      tabs.push('colour');
    }
    return tabs;
  };

  const handleChange = useThrottleFn(
    (key, value) => {
      // slider调节时页面不能滑动
      setScrollEnabled?.(false);
      if (key === 'temp') onChange?.(false, { temperature: value, brightness });
      else onChange?.(false, { temperature, brightness: value });
    },
    { wait: 80 }
  ).run;
  const handleWhiteRelease = useThrottleFn(
    (code, value) => {
      setScrollEnabled?.(true);
      onRelease?.(code, value);
    },
    { wait: 80 }
  ).run;

  const renderWhite = () => {
    return (
      <View>
        {SupportUtils.isSupportDp(temp_value.code) && (
          <TempSlider
            value={temperature}
            trackStyle={{ width: 'calc(100vw - 48px)' }}
            onTouchMove={temp => handleChange('temp', temp)}
            onTouchEnd={temp => handleWhiteRelease(temp_value.code, temp)}
          />
        )}
        {/* 亮度 */}
        {SupportUtils.isSupportDp(bright_value.code) && (
          <BrightRectSlider
            value={brightness}
            min={10}
            maxTrackWidth="calc(100vw - 48px)"
            sliderHeight={54}
            onChange={bright => handleChange('bright', bright)}
            onRelease={bright => handleWhiteRelease(bright_value.code, bright)}
          />
        )}
      </View>
    );
  };

  const renderColour = () => {
    if (SupportUtils.isSupportDp(colour_data.code))
      return (
        <View>
          <View className={styles.typeTitle}>{Strings.getLang('HSV')}</View>
          {hsvConfigs.map(item => {
            const { value: v, min, max, label, bg } = item;
            return (
              <ColorRow
                key={label}
                value={v}
                min={min}
                max={max}
                label={label}
                background={bg}
                onMove={changeColorRow}
                onEnd={endColorRow}
              />
            );
          })}
        </View>
      );
    return <></>;
  };

  const changeColorRow = useThrottleFn(
    (v, type) => {
      setScrollEnabled?.(false);
      const newColorData = { ...colour, [type]: v };
      onChange?.(true, newColorData);
    },
    { wait: 80 }
  ).run;

  const endColorRow = (v, type) => {
    setScrollEnabled?.(true);
    const newColorData = { ...colour, [type]: v };
    onRelease?.(colour_data.code, newColorData);
  };

  const chooseCollect = data => {
    const { hue, saturation, value, brightness: bright, temperature: temp } = data;
    if (mode === 'colour') {
      onRelease?.(colour_data.code, { hue, saturation, value });
    } else {
      onReleaseWhite?.({ [bright_value.code]: bright, [temp_value.code]: temp });
    }
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
        showAdd={power && canEdit}
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

export default React.memo(Dimmer);
