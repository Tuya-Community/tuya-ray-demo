import React, { useEffect } from 'react';
import { DpState, useSupport } from '@ray-js/panel-sdk';
import { useCreation } from 'ahooks';
import { TabBar, CollectColors } from '@/components';
import { lampSchemaMap } from '@/devices/schema';
import Strings from '@/i18n';
import { Box } from '../Box';
import { Scene } from './Scene';
import { Music } from './Music';
import { White } from './White';
import { Colour } from './Colour';

const { bright_value, temp_value, colour_data, scene_data, music_data } = lampSchemaMap;

interface IColour {
  hue: number;
  saturation: number;
  value: number;
}

type WorkMode = 'white' | 'colour' | 'scene' | 'music';

interface IProps {
  style?: React.CSSProperties;
  className?: string;
  contentClassName?: string;
  showTitle?: boolean;
  mode: WorkMode;
  temperature: number;
  brightness: number;
  colour: IColour;
  canEdit?: boolean;
  validWorkMode?: WorkMode[];
  onModeChange?: (v: string) => void;
  /**
   * 收藏彩光颜色选中或色温、亮度、彩光色相、饱和度、亮度选中回调
   */
  onRelease: (code: string, value: any) => void;
  /**
   * 收藏白光选中回调
   */
  onReleaseWhite: (cmd: DpState) => void;
  /**
   * 彩光色相、饱和度、亮度或白光的色温、亮度变更的回调
   */
  onChange?: (isColor: boolean, value: any) => void;
  setScrollEnabled?: (v: boolean) => void;
}

export const Dimmer = React.memo((props: IProps) => {
  const {
    showTitle,
    mode,
    style,
    className,
    contentClassName,
    temperature,
    brightness,
    colour,
    canEdit = true,
    validWorkMode = ['white', 'colour', 'scene', 'music'],
    onModeChange,
    onRelease,
    onChange,
    onReleaseWhite,
    setScrollEnabled,
  } = props;

  const support = useSupport();

  // 如果模式不在调光，自动切成白/彩光
  useEffect(() => {
    if (!workModeTabs.includes(mode)) {
      onModeChange(workModeTabs[0]);
    }
  }, [mode]);

  // 根据支持的路数生成 tabBar
  const workModeTabs = useCreation(() => {
    const tabs = [];
    if ((support.isSupportTemp() || support.isSupportBright()) && validWorkMode.includes('white')) {
      tabs.push('white');
    }
    if (support.isSupportColour() && validWorkMode.includes('colour')) {
      tabs.push('colour');
    }
    if (support.isSupportDp(scene_data.code) && validWorkMode.includes('scene')) {
      tabs.push('scene');
    }
    if (support.isSupportDp(music_data.code) && validWorkMode.includes('music')) {
      tabs.push('music');
    }
    return tabs;
  }, []);

  const handleChooseColor = (data: COLOUR & WHITE) => {
    const { hue, saturation, value, brightness: bright, temperature: temp } = data;
    if (mode === 'colour') {
      onRelease?.(colour_data.code, { hue, saturation, value });
    } else {
      onReleaseWhite?.({ [bright_value.code]: bright, [temp_value.code]: temp });
    }
  };

  const DimmerContent = useCreation(() => {
    const commonProps = { onChange, onRelease, setScrollEnabled };
    const genStyle = (m: WorkMode) => {
      return {
        visibility: mode === m ? 'visible' : 'hidden',
        position: mode === m ? 'relative' : 'absolute',
        top: 0,
      } as React.CSSProperties;
    };
    return (
      <>
        <Colour {...commonProps} style={genStyle('colour')} colour={props.colour} />
        <White
          {...commonProps}
          style={genStyle('white')}
          brightness={props.brightness}
          temperature={props.temperature}
        />
        <Scene style={genStyle('scene')} />
        <Music style={genStyle('music')} />
      </>
    );
  }, [mode, props.brightness, props.temperature, props.colour]);

  return (
    <Box
      style={style}
      className={className}
      contentClassName={contentClassName}
      title={showTitle ? Strings.getLang('dimming') : ''}
    >
      {workModeTabs.length > 1 && (
        <TabBar
          itemWidth={`${100 / workModeTabs.length ?? 2}%`}
          itemHeight={56}
          value={['colour', 'white', 'scene', 'music'].includes(mode) ? mode : 'white'}
          tabList={workModeTabs}
          onClick={v => onModeChange?.(v)}
        />
      )}
      {['white', 'colour'].indexOf(mode) !== -1 && (
        <CollectColors
          style={{ justifyContent: 'start', width: '100%', margin: '32rpx 0' }}
          showAdd={canEdit}
          isColor={mode === 'colour'}
          colourData={colour}
          brightness={brightness}
          temperature={temperature}
          chooseColor={data => handleChooseColor?.(data)}
        />
      )}
      {DimmerContent}
    </Box>
  );
});
