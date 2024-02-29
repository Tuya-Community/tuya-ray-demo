/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { router, View } from '@ray-js/ray';
import { useSelector } from 'react-redux';
import { useThrottleFn } from 'ahooks';
import { lampSchemaMap } from '@/devices/schema';
import Strings from '@/i18n';
import { TopBar, Dimmer } from '@/components';
import { useSystemInfo } from '@/hooks/useSystemInfo';
import { useHideMenuButton } from '@/hooks/useHideMenuButton';
import { useAppDispatch } from '@/redux';
import { selectCustomColor, updateCustomColor } from '@/redux/modules/uiStateSlice';
import styles from './index.module.less';

const { bright_value, colour_data, temp_value } = lampSchemaMap;

export function CustomColor() {
  const { safeArea } = useSystemInfo();
  const dispatch = useAppDispatch();
  const customColor = useSelector(selectCustomColor);
  const [newCustomColor, setNewCustomColor] = useState(customColor);

  useHideMenuButton();

  useEffect(() => {
    setNewCustomColor(customColor);
  }, [customColor]);

  const handleBack = React.useCallback(() => {
    router.back();
  }, []);

  const handleColorRelease = React.useCallback(
    (key: string, value: COLOUR | number) => {
      let result: typeof newCustomColor;
      if (key === colour_data.code) {
        result = { ...newCustomColor, ...(value as COLOUR) };
      } else if (key === bright_value.code) {
        result = { ...newCustomColor, brightness: value as number };
      } else {
        result = { ...newCustomColor, temperature: value as number };
      }
      setNewCustomColor(result);
    },
    [newCustomColor]
  );

  const handleWhiteRelease = React.useCallback(
    (value: any) => {
      const result = {
        ...newCustomColor,
        brightness: value[bright_value.code],
        temperature: value[temp_value.code],
      };
      setNewCustomColor(result);
    },
    [newCustomColor]
  );

  const handlePowerModeChange = React.useCallback(
    (mode: string) => {
      if (mode !== 'colour' && mode !== 'white') return;
      // 断电记忆切换白彩光
      setNewCustomColor({ ...newCustomColor, colorMode: mode });
    },
    [newCustomColor]
  );

  const handleSave = React.useCallback(() => {
    router.back();
    const { colorMode, hue, saturation, value, brightness, temperature } = newCustomColor;
    let newColor: typeof newCustomColor;
    if (colorMode === 'white') {
      newColor = { brightness, temperature, hue: 0, saturation: 0, value: 0, colorMode };
    } else {
      newColor = { brightness: 0, temperature: 0, hue, saturation, value, colorMode };
    }
    dispatch(updateCustomColor(newColor));
  }, [newCustomColor]);

  const handleColorChange = useThrottleFn(
    (isColor: boolean, v: any) => {
      setNewCustomColor({ ...newCustomColor, ...v, colorMode: isColor ? 'colour' : 'white' });
    },
    { wait: 80 }
  ).run;

  return (
    <View style={{ paddingTop: safeArea?.top * 2 }} className={styles.view}>
      <TopBar
        handleCancel={handleBack}
        cancelType="icon"
        title={Strings.getLang('customMemory')}
        handleSave={handleSave}
      />

      <Dimmer
        showTitle={false}
        canEdit={false}
        style={{ marginTop: 48 }}
        mode={newCustomColor?.colorMode}
        validWorkMode={['white', 'colour']}
        onModeChange={handlePowerModeChange}
        colour={{
          hue: newCustomColor?.hue,
          saturation: newCustomColor?.saturation,
          value: newCustomColor?.value,
        }}
        brightness={newCustomColor?.brightness}
        temperature={newCustomColor?.temperature}
        onChange={handleColorChange}
        onRelease={handleColorRelease}
        onReleaseWhite={handleWhiteRelease}
      />
    </View>
  );
}

export default React.memo(CustomColor);
