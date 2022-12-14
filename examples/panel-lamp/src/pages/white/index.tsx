import React, { useState, useEffect } from 'react';
import { View } from '@ray-js/components';
import Strings from '@/i18n';
import dpCodes from '@/config/dpCodes';
import { actions } from '@/redux/actions/common';
import res from '@/res';
import { useSelector, store } from '@/redux';
import { LampCirclePicker } from '@ray-js/components-ty-lamp';
import _cloneDeep from 'lodash/cloneDeep';
import { LampApi } from '@/api';
import { Dialog, SliderRow, CollectColors, VerticalSlider, WhiteRing } from '@/components';
import SupportUtils from '@/utils/SupportUtils';
import { dpUtils } from '@/utils';
import styled from './index.module.less';

const { updateUi, updateCloud } = actions;
const { dispatch } = store;

const { brightCode, tempCode, controlCode } = dpCodes;
const { brightIcon } = res;
const { isSupportDp } = SupportUtils;

const White = () => {
  const { brightness, temperature, collectWhites, whiteIndex } = useSelector(
    ({ dpState, uiState, cloudState }: any) => ({
      brightness: dpState[brightCode],
      temperature: dpState[tempCode],
      collectWhites: cloudState.collectWhites,
      whiteIndex: uiState.whiteIndex,
    })
  );
  const [temp, setTemp] = useState(temperature);
  const [bright, setBright] = useState(brightness);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    updateWhiteIndex();
  }, [brightness, temperature]);
  const putDpData = (key: string, value: number, isControl = true) => {
    if (isControl) {
      const controlData = { hue: 0, saturation: 0, value: 0, bright, temp };
      controlData[key] = value;
      dpUtils.putDpData({ [controlCode]: controlData }, { throttle: 300 });
    } else {
      if (key === 'temp') {
        setTemp(value);
        dpUtils.putDpData({ [tempCode]: value }, { throttle: 300 });
      }
      if (key === 'bright') {
        setBright(value);
        dpUtils.putDpData({ [brightCode]: value }, { throttle: 300 });
      }
    }
  };
  // const handleTempChange = (v: number, isControl = true) => {
  //   setTemp(v);
  //   if (isControl) {
  //     putControlData('temp', v, isControl);
  //   } else {
  //     dpUtils.putDpData({ [tempCode]: v }, { throttle: 300 });
  //   }
  // };

  // const handleBrightChange = (v: number, isControl = true) => {
  //   if (isControl) {
  //     putControlData('bright', v);
  //   } else {
  //     setBright(v);
  //     dpUtils.putDpData({ [brightCode]: v }, { throttle: 300 });
  //   }
  // };
  const handleAddWhite = () => {
    if (whiteIndex > -1) {
      setShowDialog(true);
    } else {
      const newWhiteList = [...collectWhites, { temperature, brightness }];
      LampApi.saveCloudConfig!('collectWhites', newWhiteList).then(res1 => {
        dispatch(updateUi({ whiteIndex: newWhiteList.length - 1 }));
        dispatch(updateCloud({ collectWhites: newWhiteList }));
      });
    }
  };
  const updateWhiteIndex = () => {
    const index = collectWhites.findIndex(item => {
      return item.temperature === temperature && item.brightness === brightness;
    });
    if (whiteIndex !== index) {
      dispatch(updateUi({ whiteIndex: index }));
    }
  };
  // const handleVerticalBrightChange = (v: number) => {
  //   setBright(v);
  //   handleBrightChange(v);
  // };
  const handleDeleteWhite = () => {
    const whites: WHITE[] = _cloneDeep(collectWhites);
    if (whiteIndex > -1) {
      whites.splice(whiteIndex, 1);
      LampApi.saveCloudConfig!('collectWhites', whites).then(res1 => {
        dispatch(updateUi({ whiteIndex: -1 }));
        dispatch(updateCloud({ collectWhites: whites }));
      });
    }
  };

  const handleChooseWhite = (value: WHITE) => {
    const { temperature: t, brightness: b } = value;
    dpUtils.putDpData({ [tempCode]: t, [brightCode]: b });
  };

  return (
    <View className={styled.container}>
      {isSupportDp(tempCode) ? (
        <>
          <LampCirclePicker
            canvasId="whiteCircle"
            temperature={temp}
            radius={140}
            innerRingRadius={80}
            isShowColorTip
            onTouchMove={v => putDpData('temp', v)}
            onTouchEnd={v => putDpData('temp', v, false)}
          />

          <SliderRow
            min={1}
            max={1000}
            onChange={v => putDpData('bright', v)}
            onRelease={v => putDpData('bright', v, false)}
            value={bright}
            img={brightIcon}
          />
          <CollectColors
            isColor={false}
            activeIndex={whiteIndex}
            collectColors={collectWhites}
            style={{ marginBottom: 80 }}
            addColor={handleAddWhite}
            deleteColor={handleDeleteWhite}
            chooseColor={handleChooseWhite}
          />
        </>
      ) : (
        <VerticalSlider
          value={bright}
          handleMove={v => putDpData('bright', v)}
          handleRelease={v => putDpData('bright', v, false)}
        />
      )}

      {showDialog && (
        <Dialog onClickCancel={() => setShowDialog(false)} title={Strings.getLang('repeatColor')} />
      )}
    </View>
  );
};
export default White;
