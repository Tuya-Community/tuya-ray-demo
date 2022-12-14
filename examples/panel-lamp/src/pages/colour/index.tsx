import React, { useEffect, useState } from 'react';
import { actions } from '@/redux/actions/common';
import { LampHuePicker } from '@ray-js/components-ty-lamp';
import { LampApi } from '@/api';
import Strings from '@/i18n';
import { View } from '@ray-js/components';
import res from '@/res';
import { useSelector, store, dpUtils } from '@/redux';
import dpCodes from '@/config/dpCodes';
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
  const [hue, setHue] = useState(0);
  const [saturation, setSaturation] = useState(1000);
  const [value, setValue] = useState(1000);
  const [showDialog, setShowDialog] = useState(false);
  useEffect(() => {
    setHue(colour.hue);
    setSaturation(colour.saturation);
    setValue(colour.value);
  }, [colour]);
  useEffect(() => {
    updateColorIndex();
  }, [hue, saturation, value]);
  const putDpData = (key: string, dpValue: number, isControl = true) => {
    if (key === 'hue') setHue(dpValue); // 需要实时变更色盘里文字
    if (isControl) {
      const controlData = { hue, saturation, value, bright: 0, temp: 0 };
      controlData[key] = dpValue;
      dpUtils.putDpData({ [controlCode]: controlData }, { throttle: 300 });
    } else {
      // 其余色盘都是半受控，松手set
      if (key === 'saturation') setSaturation(dpValue);
      if (key === 'value') setValue(dpValue);
      const colorData = { hue, saturation, value };
      colorData[key] = dpValue;
      dpUtils.putDpData({ [colourCode]: colorData }, { throttle: 300 });
    }
  };
  // const handleHueChange = (v: number, isControl = true) => {
  //   setHue(v);
  //   if (isControl) {
  //     dpUtils.putDpData(
  //       { [controlCode]: { hue: v, saturation, value, bright: 0, temp: 0 } },
  //       { throttle: 300 }
  //     );
  //   } else {
  //     dpUtils.putDpData({ [colourCode]: { hue: v, saturation, value } }, { throttle: 300 });
  //   }
  // };
  // // todo 封装
  // const handleSatChange = (v: number, isControl = true) => {
  //   // sat: 饱和度值，isControl：是否为实时调节
  //   if (isControl) {
  //     dpUtils.putDpData(
  //       { [controlCode]: { hue, saturation: v, value, bright: 0, temp: 0 } },
  //       { throttle: 300 }
  //     );
  //   } else {
  //     setSaturation(v);
  //     dpUtils.putDpData({ [colourCode]: { hue, saturation: v, value } }, { throttle: 300 });
  //   }
  // };

  // const handleBrightChange = (v: number, isControl = true) => {
  //   if (isControl) {
  //     dpUtils.putDpData(
  //       { [controlCode]: { hue, saturation, value: v, bright: 0, temp: 0 } },
  //       { throttle: 300 }
  //     );
  //   } else {
  //     setValue(v);
  //     dpUtils.putDpData({ [colourCode]: { hue, saturation, value: v } }, { throttle: 300 });
  //   }
  // };

  const handleAddColor = () => {
    if (colorIndex > -1) {
      setShowDialog(true);
    } else {
      const newColorList = [...collectColors, { hue, saturation, value }];
      LampApi.saveCloudConfig!('collectColors', newColorList).then(res1 => {
        dispatch(updateUi({ colorIndex: newColorList.length - 1 }));
        dispatch(updateCloud({ collectColors: newColorList }));
      });
    }
  };

  const handleDeleteColor = () => {
    const colors: COLOUR[] = _cloneDeep(collectColors);
    if (colorIndex > -1) {
      colors.splice(colorIndex, 1);
      LampApi.saveCloudConfig!('collectColors', colors).then(res1 => {
        dispatch(updateUi({ colorIndex: -1 }));
        dispatch(updateCloud({ collectColors: colors }));
      });
    }
  };

  const handleChooseColor = (color: COLOUR) => {
    dpUtils.putDpData({ [colourCode]: color });
  };
  const updateColorIndex = () => {
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
