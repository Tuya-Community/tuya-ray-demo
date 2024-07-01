/* eslint-disable no-shadow */
import React, { useMemo } from 'react';
import { View, Text } from '@ray-js/ray';
import { useProps, useStructuredProps } from '@ray-js/panel-sdk';
import Strings from '@/i18n';
import { useSelector } from 'react-redux';

import { devices } from '@/devices';
import { useDebugPerf } from '@/hooks';
import { selectSmearType, updateDimmerType, updateSmearType, useAppDispatch } from '@/redux';
import styles from './index.modules.less';
import RectColorPicker from './RectColorPicker';
import BlockColorPicker from './BlockColorPicker';
import GroupColorPicker from './GroupColorPicker';

type TTab = {
  title: string;
  key: DimmerMode;
  visible: boolean;
};

type TTabs = TTab[];

/** 涂抹类型 */
enum SmearMode {
  all,
  single,
  clear,
}
enum DimmerMode {
  white,
  colour,
  colourCard,
  combination,
}

type TProps = {
  hsvList: HSV[];
  dimmerType: DimmerMode;
  checkedSet: Set<number>;
  onColorChange: (hsvList: HSV[], colorType: DimmerMode) => void;
};

export const ColorPickers = (props: TProps) => {
  const { hsvList, checkedSet, dimmerType, onColorChange } = props;
  const dispatch = useAppDispatch();
  useDebugPerf(ColorPickers, props);
  const tabs: TTabs = useMemo(() => {
    const _tabs = [
      {
        title: Strings.getLang('pickerColor'),
        key: DimmerMode.colour,
        visible: devices.lamp.model.abilities.support.isSupportColour(),
      },
      {
        title: Strings.getLang('pickerBlock'),
        key: DimmerMode.colourCard,
        visible: devices.lamp.model.abilities.support.isSupportColour(),
      },
      {
        title: Strings.getLang('pickerGroup'),
        key: DimmerMode.combination,
        visible: devices.lamp.model.abilities.support.isSupportColour(),
      },
    ];
    return _tabs.filter(i => i.visible);
  }, []);

  const smearType = useSelector(selectSmearType);
  const handleTabClick = (tab: TTab) => {
    if (tab.key === DimmerMode.combination) {
      dispatch(updateSmearType(SmearMode.all));
    }
    dispatch(updateDimmerType(tab.key));
  };
  const renderPickerTabs = () => {
    return (
      <View className={styles.pickerTabs}>
        {tabs.map(i => {
          const isActive = i.key === dimmerType;
          return (
            <View key={i.key} className={styles.pickerTab} onClick={() => handleTabClick(i)}>
              <Text
                className={styles.pickerTabText}
                style={{ color: isActive ? '#0D84FF' : '#fff', fontWeight: isActive ? 600 : 400 }}
              >
                {i.title}
              </Text>
              {isActive && <View className={styles.pickerTabActiveLine} />}
            </View>
          );
        })}
      </View>
    );
  };

  const disable = smearType === SmearMode.single && checkedSet.size === 0;
  const power = useProps(props => props.switch_led);
  const renderColorPicker = (isShow = false) => {
    return (
      <RectColorPicker
        hsv={hsvList[0]}
        disable={disable}
        closed={!power}
        isShow={isShow}
        onChange={hsvList => onColorChange(hsvList, DimmerMode.colour)}
      />
    );
  };

  const renderBlockPicker = (isShow = false) => {
    return (
      <BlockColorPicker
        hsv={hsvList[0]}
        disable={disable}
        isShow={isShow}
        onChange={hsvList => onColorChange(hsvList, DimmerMode.colourCard)}
      />
    );
  };

  const paineColorData = useStructuredProps(dp => dp.paint_colour_data);
  const renderGroupPicker = (isShow = false) => {
    const { combination = [] } = paineColorData;
    const colorList: HSV[] = combination.map(i => {
      return {
        h: i.hue,
        s: i.saturation,
        v: i.value,
      };
    });
    return (
      <View style={{ display: isShow ? 'block' : 'none' }}>
        <GroupColorPicker
          colorList={colorList}
          disable={disable}
          onClick={hsvList => onColorChange(hsvList, DimmerMode.combination)}
        />
      </View>
    );
  };
  const renderPickerContent = () => {
    return (
      <View>
        {renderColorPicker(dimmerType === DimmerMode.colour)}
        {renderBlockPicker(dimmerType === DimmerMode.colourCard)}
        {renderGroupPicker(dimmerType === DimmerMode.combination)}
      </View>
    );
    return null;
  };
  return (
    <View className={styles.pickerWrapper}>
      {renderPickerTabs()}
      {renderPickerContent()}
    </View>
  );
};

export default ColorPickers;
