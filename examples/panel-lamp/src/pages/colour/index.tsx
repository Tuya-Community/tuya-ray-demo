import React, { useEffect, useState } from 'react';
import { actions } from '@/redux/actions/common';
import { LampHuePicker } from '@ray-js/components-ty-lamp';
import { LampApi } from '@/api';
import Strings from '@/i18n';
import { View } from '@ray-js/components';
import res from '@/res';
import { useSelector, store } from '@/redux';
import dpCodes from '@/config/dpCodes';
import { dpUtils } from '@/utils';
import _cloneDeep from 'lodash/cloneDeep';
import { CollectColors, SliderRow, Dialog } from '@/components';
import styled from './index.module.less';

const { satIcon, brightIcon } = res;
const { dispatch } = store;
const { colourCode, controlCode } = dpCodes;
const { updateUi, updateCloud } = actions;

const Colour = () => {
  const { colour, collectColors, colorIndex } = useSelector(
    ({ dpState, uiState, cloudState }: any) => ({
      colour: dpState[colourCode],
      colorIndex: uiState.colorIndex,
      collectColors: cloudState.collectColors,
    })
  );
  const [hue, setHue] = useState(colour?.hue); // 色调
  const [saturation, setSaturation] = useState(colour?.saturation); // 饱和度
  const [value, setValue] = useState(colour?.value); // 明度
  const [showDialog, setShowDialog] = useState(false); // 颜色重复弹窗
  useEffect(() => {
    setHue(colour?.hue);
    setSaturation(colour?.saturation);
    setValue(colour?.value);
  }, [colour]);
  useEffect(() => {
    updateColorIndex();
  }, [hue, saturation, value]);
  const putDpData = (key: string, dpValue: number, isControl = true) => {
    if (key === 'hue') setHue(dpValue); // 需要实时变更色盘里文字
    if (isControl) {
      // 如果是滑动中，则下发调节dp，间隔300ms一次
      const controlData = { hue, saturation, value, bright: 0, temp: 0 };
      controlData[key] = dpValue;
      dpUtils.putDpData({ [controlCode]: controlData }, { throttle: 300 });
    } else {
      // 释放时，下发彩光dp
      if (key === 'saturation') setSaturation(dpValue);
      if (key === 'value') setValue(dpValue);
      const colorData = { hue, saturation, value };
      colorData[key] = dpValue;
      dpUtils.putDpData({ [colourCode]: colorData }, { throttle: 300 });
    }
  };

  const handleAddColor = () => {
    // 添加收藏颜色
    if (colorIndex > -1) {
      // 如果已有重复，显示重复弹窗
      setShowDialog(true);
    } else {
      // 未重复，加入云端
      const newColorList = [...collectColors, { hue, saturation, value }];
      LampApi.saveCloudConfig!('collectColors', newColorList).then(() => {
        dispatch(updateUi({ colorIndex: newColorList.length - 1 }));
        dispatch(updateCloud({ collectColors: newColorList }));
      });
    }
  };

  const handleDeleteColor = () => {
    // 删除颜色
    const colors: COLOUR[] = _cloneDeep(collectColors);
    if (colorIndex > -1) {
      colors.splice(colorIndex, 1);
      LampApi.saveCloudConfig!('collectColors', colors).then(() => {
        dispatch(updateUi({ colorIndex: -1 }));
        dispatch(updateCloud({ collectColors: colors }));
      });
    }
  };

  const handleChooseColor = (color: COLOUR) => {
    // 选择颜色，下发对应的彩光值
    dpUtils.putDpData({ [colourCode]: color });
  };
  const updateColorIndex = () => {
    // 当hsv变化时，收藏颜色相应判断是否有相等
    const index = collectColors.findIndex(
      item => item.hue === hue && item.saturation === saturation && item.value === value
    );
    if (colorIndex !== index) {
      dispatch(updateUi({ colorIndex: index }));
    }
  };
  return (
    <View className={styled.container}>
      <LampHuePicker
        canvasId="rectPicker"
        value={hue}
        radius={135}
        innerRingRadius={77}
        onTouchMove={v => putDpData('hue', v)}
        onTouchEnd={v => putDpData('hue', v, false)}
      />
      <SliderRow
        min={0}
        max={1000}
        onChange={v => putDpData('saturation', v)}
        onRelease={v => putDpData('saturation', v, false)}
        value={saturation}
        img={satIcon}
      />
      <SliderRow
        min={1}
        max={1000}
        onChange={v => putDpData('value', v)}
        onRelease={v => putDpData('value', v, false)}
        value={value}
        img={brightIcon}
      />
      <CollectColors
        isColor
        style={{ marginBottom: 80 }}
        activeIndex={colorIndex}
        collectColors={collectColors}
        addColor={handleAddColor}
        deleteColor={handleDeleteColor}
        chooseColor={handleChooseColor}
      />
      {showDialog && (
        <Dialog onClickCancel={() => setShowDialog(false)} title={Strings.getLang('repeatColor')} />
      )}
    </View>
  );
};
export default Colour;
