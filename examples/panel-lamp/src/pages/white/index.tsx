import React, { useState, useEffect } from 'react';
import { View } from '@ray-js/ray';
import _ from 'lodash-es';
import { LampCirclePicker } from '@ray-js/components-ty-lamp';
import { useActions, useDevice, useProps, useStructuredActions } from '@ray-js/panel-sdk';
import Strings from '@/i18n';
import res from '@/res';
import { LampApi } from '@/api';
import { Dialog, SliderRow, CollectColors, VerticalSlider } from '@/components';
import { devices } from '@/devices';
import { useSelector, store } from '@/redux';
import { actions } from '@/redux/actions/common';
import styled from './index.module.less';

const { updateUi, updateCloud } = actions;
const { dispatch } = store;

const { brightIcon } = res;

const White = () => {
  const { collectWhites, whiteIndex } = useSelector(({ uiState, cloudState }: any) => ({
    collectWhites: cloudState.collectWhites,
    whiteIndex: uiState.whiteIndex,
  }));
  const dpActions = useActions();
  const dpStruActions = useStructuredActions();
  const dpSchema = useDevice(device => device.dpSchema);
  const brightness = useProps(props => props.bright_value);
  const temperature = useProps(props => props.temp_value);
  const [temp, setTemp] = useState(temperature); // 色温
  const [bright, setBright] = useState(brightness); // 亮度
  const [showDialog, setShowDialog] = useState(false); // 颜色重复弹窗

  useEffect(() => {
    // 当dp更新时，当前值也更新
    setTemp(temperature);
    setBright(brightness);
    updateWhiteIndex();
  }, [brightness, temperature]);
  const putDpData = (key: string, value: number, isControl = true) => {
    if (key === 'temp') {
      setTemp(value);
    }
    if (isControl) {
      // 当滑动时，下发调节dp，时隔300ms
      const controlData = { hue: 0, saturation: 0, value: 0, bright, temp };
      controlData[key] = value;
      dpStruActions.control_data.set(controlData, { throttle: 300 });
    } else {
      if (key === 'temp') {
        // 释放时，下发色温
        dpActions.temp_value.set(value, { throttle: 300 });
      }
      if (key === 'bright') {
        // 释放时，下发亮度
        dpActions.bright_value.set(value, { throttle: 300 });
      }
    }
  };

  const handleAddWhite = () => {
    // 添加收藏白光
    if (whiteIndex > -1) {
      // 颜色重复时，显示弹窗
      setShowDialog(true);
    } else {
      // 颜色不重复，存储至云端
      const newWhiteList = [...collectWhites, { temperature, brightness }];
      LampApi.saveCloudConfig!('collectWhites', newWhiteList).then(res1 => {
        dispatch(updateUi({ whiteIndex: newWhiteList.length - 1 }));
        dispatch(updateCloud({ collectWhites: newWhiteList }));
      });
    }
  };
  const updateWhiteIndex = () => {
    // 当色温、亮度改变时，判断是否有收藏白光相等，如相等则选中
    const index = collectWhites.findIndex(item => {
      return item.temperature === temperature && item.brightness === brightness;
    });
    if (whiteIndex !== index) {
      dispatch(updateUi({ whiteIndex: index }));
    }
  };

  const handleDeleteWhite = () => {
    // 删除收藏白光
    const whites: WHITE[] = _.cloneDeep(collectWhites);
    if (whiteIndex > -1) {
      whites.splice(whiteIndex, 1);
      LampApi.saveCloudConfig!('collectWhites', whites).then(res1 => {
        dispatch(updateUi({ whiteIndex: -1 }));
        dispatch(updateCloud({ collectWhites: whites }));
      });
    }
  };

  const handleChooseWhite = (value: WHITE) => {
    // 选中收藏白光，下发色温、亮度
    const { temperature: t, brightness: b } = value;
    devices.lamp.publishDps({ temp_value: t, bright_value: b });
  };

  return (
    <View className={styled.container}>
      {dpSchema.temp_value ? (
        <>
          {/* <WhiteRing
            temperature={temp}
            onMove={v => putDpData('temp', v)}
            onEnd={v => putDpData('temp', v, false)}
          /> */}
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
