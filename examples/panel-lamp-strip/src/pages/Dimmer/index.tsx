/* eslint-disable no-shadow */
import { View, Image, Text, setNavigationBarTitle, hideLoading } from '@ray-js/ray';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  utils,
  useStructuredActions,
  useStructuredProps,
  useActions,
  useDevice,
  useProps,
} from '@ray-js/panel-sdk';
import { useDispatch, useSelector } from 'react-redux';

import Strings from '@/i18n';
import { ColorPickers } from '@/containers';
import { LIGHT_COLOR_DATA } from '@/constant';
import { E_WOKE_MODE } from '@/types';
import { devices } from '@/devices';
import getCdnImgUrl from '@/utils/getCdnImgUrl';
import { convertRange } from '@/utils';

import {
  updateDimmerType,
  updateSmearType,
  selectSmearType,
  selectLightColorData,
  selectDimmerType,
  updateLightColorData,
} from '@/redux';
import { useDebugPerf } from '@/hooks';
import DimmerStrip from './DimmerStrip';
import styles from './index.module.less';

const { hsv2rgbString } = utils;

// ---- 涂抹tab选中逻辑 -----
/**
 * 1. 选中全选时
 *  - checkedSet 全选
 *  - 全部选中，色盘可操作，操作时同步灯带颜色
 *  - 点击灯带无变化
 * 2. 选中单选时
 *  - checkedSet 置为空，当手指滑过灯珠时 checkedSet 设置
 *  - 如果没有选中 色盘置灰不可操作，有选中色盘恢复可操作，滑动色盘灯带颜色变化，点选回
 *  - 点击灯带会反选
 *    - 2.1 如果从已选中的灯珠上开始滑动，那么后续选择的都会选中
 *    - 2.2 如果从未选中的灯珠上开始滑动，那么后续选择的都会取消
 *    - 2.3 如果已经全部选中，那么后续选中的会取消
 * 3. 选中橡皮擦
 *  - 置灰选中的灯珠
 * 4. 选中渐变
 *  - 添加渐变效果
 */

enum SmearMode {
  all,
  single,
  clear,
}

enum SmearModeAll {
  all,
  single,
  clear,
  gradient,
}

enum DimmerMode {
  white,
  colour,
  colourCard,
  combination,
}

type TProps = {
  show: boolean;
};

const Dimmer = (props: TProps) => {
  const { show } = props;
  const deviceName = useDevice(device => device.devInfo.name);
  const paintColorData = useStructuredProps(dp => dp.paint_colour_data);
  useEffect(() => {
    if (!show) {
      return;
    }
    setNavigationBarTitle({ title: deviceName });
  }, [deviceName, show]);

  useDebugPerf(Dimmer, props);

  const smearType = useSelector(selectSmearType);
  const checkedMapColorCloud = useSelector(selectLightColorData);
  const dimmerType = useSelector(selectDimmerType);

  useEffect(() => {
    const { dimmerMode } = paintColorData;
    dispatch(updateDimmerType(dimmerMode));
  }, []);
  const dealAllCheck = () => {
    const arr = new Array(20).fill(0).map((_, index) => index);
    setCheckedSet(new Set(arr));
  };

  const isAll = smearType === SmearMode.all;
  const isSingle = smearType === SmearMode.single;
  useEffect(() => {
    if (isAll) {
      dealAllCheck();
    } else if (isSingle) {
      setCheckedSet(new Set());
    }
  }, [smearType]);

  const dispatch = useDispatch();

  const power = useProps(dp => dp.switch_led);
  const workMode = useProps(dp => dp.work_mode);
  const action = useActions();
  // 灯珠的颜色
  const [checkedMapColor, setCheckedMapColor] = useState(
    checkedMapColorCloud as { [idx: number]: string }
  );
  const updateMapColor = checkedMapColor => {
    const { data } = checkedMapColor || {};
    if (!data) {
      return;
    }
    const { value } = data;
    dispatch(updateLightColorData(value));
  };

  const updateMapColorByNull = () => {
    const { hue, saturation, value: _value } = paintColorData;
    const value = {};
    new Array(20).fill(0).forEach((_, index) => {
      value[index] = hsv2rgbString(hue, saturation, convertRange(_value), 1);
    });
    dispatch(updateLightColorData(value));
  };

  const fetchColorCloudData = () => {
    devices.lamp.model.abilities.storage
      .get(LIGHT_COLOR_DATA, _checkedMapColor => {
        if (!_checkedMapColor) {
          updateMapColorByNull();
        }
      })
      .then(_checkedMapColor => {
        if (!_checkedMapColor) {
          updateMapColorByNull();
          return;
        }
        const { data, __isEqual__ } = _checkedMapColor;
        if (!data || __isEqual__) {
          return;
        }
        updateMapColor(_checkedMapColor);
      });
  };

  useEffect(() => {
    // 处理多端多端同步数据问题，如果当前设备正在操作则不进行响应
    if (isHandling.current) {
      return;
    }
    // 同步云端灯珠颜色数据，多端操作时
    fetchColorCloudData();
    // 更新涂抹模式
    const { smearMode } = paintColorData;
    dispatch(updateSmearType(smearMode));
    // 更新选色器模式
    const { dimmerMode } = paintColorData;
    dispatch(updateDimmerType(dimmerMode));
    // 更新色盘颜色数据
    const { hue, saturation, value } = paintColorData;
    const hsv = [
      {
        h: hue,
        s: saturation,
        v: value,
      },
    ];
    setHsvList(hsv);
    isHandling.current = false;
  }, [paintColorData]);

  useEffect(() => {
    setCheckedMapColor(checkedMapColorCloud);
  }, [checkedMapColorCloud]);

  // 灯珠选中
  const [checkedSet, setCheckedSet] = useState(new Set<number>());
  const dpStructuredActions = useStructuredActions();
  //  缓存之前的类型 用于记忆展示，防止tab展示异常
  const handleSmearTabs = {
    [SmearMode.all]: () => {
      dispatch(updateSmearType(SmearMode.single));
      setCheckedSet(new Set());
    },
    [SmearMode.single]: () => {
      dispatch(updateSmearType(SmearMode.all));
    },
    [SmearMode.clear]: () => {
      // 关闭灯光
      const checkedList = [...checkedSet];
      if (!checkedList.length) {
        return;
      }
      const _checkedMapColor = {};
      checkedList.forEach(i => {
        const color = ''; // 空默认为关闭
        _checkedMapColor[i] = color;
      });
      const newColorMap = {
        ...checkedMapColor,
        ..._checkedMapColor,
      };
      setCheckedMapColor(newColorMap);

      putPaintColorDataWithCloud(
        {
          smearMode: SmearMode.clear,
          indexs: new Set(checkedList),
        },
        newColorMap
      );
    },
    [SmearModeAll.gradient]: () => {
      // 切换渐变
      putPaintColorDataWithCloud({
        effect: paintColorData.effect === 1 ? 0 : 1, // 1 渐变 0 关闭
        checkedSet,
      });
    },
  };
  const dimmerTabList = useMemo(() => {
    const isCombination = dimmerType === DimmerMode.combination;
    const isColor = dimmerType === DimmerMode.colour || dimmerType === DimmerMode.colourCard;
    const _defaultDimmerTabList = [
      {
        title: Strings.getLang('smearAll'),
        key: SmearMode.all,
        icon: getCdnImgUrl('icon_smear_all.png'),
        visible: smearType === SmearMode.all && isColor,
        disabled: false,
      },
      {
        title: Strings.getLang('smearSingle'),
        key: SmearMode.single,
        visible: smearType === SmearMode.single && !isCombination,
        icon: getCdnImgUrl('icon_smear_single.png'),
        disabled: false,
      },
      {
        title: Strings.getLang('smearEraser'),
        icon: getCdnImgUrl('icon_smear_eraser.png'),
        key: SmearMode.clear,
        visible: isColor,
        disabled: false,
      },
      {
        title: Strings.getLang('smearGradient'),
        icon: getCdnImgUrl('icon_smear_gradient.png'),
        key: SmearModeAll.gradient,
        visible: true,
        disabled: isCombination ? false : isAll,
      },
    ];
    return _defaultDimmerTabList.filter(item => item.visible);
  }, [smearType, dimmerType]);
  const isHandling = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const putPaintColorDataWithCloud = (dpRes = {}, _checkedMapColor?) => {
    const dpVale = {
      ...paintColorData,
      ...dpRes,
    };
    dpStructuredActions.paint_colour_data.set(dpVale);
    // 正在操作下发
    isHandling.current = true;
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      isHandling.current = false;
    }, 1000);
    workMode !== E_WOKE_MODE.colour && action.work_mode.set(E_WOKE_MODE.colour);

    devices.lamp.model.abilities.storage.set(LIGHT_COLOR_DATA, _checkedMapColor || checkedMapColor);
  };

  const { hue = 0, saturation = 1000, value = 1000 } = paintColorData || {};
  const [hsvList, setHsvList] = useState([
    {
      h: hue,
      s: saturation,
      v: value,
    },
  ]);

  const handleColorChange = (_hsvList: HSV[], _colorType: DimmerMode) => {
    setHsvList(_hsvList);
    dispatch(updateDimmerType(_colorType));
    const isAll = smearType === SmearMode.all;
    const isCombination = _colorType === DimmerMode.combination;
    const isColor = _colorType === DimmerMode.colour || _colorType === DimmerMode.colourCard;

    if (!power) {
      action.switch_led.set(true);
    }

    if (isCombination && isAll) {
      // 组合模式
      dealAllCheck();
      const combinationList = _hsvList.map((item, index) => {
        return {
          hue: item.h,
          saturation: item.s,
          value: item.v,
        };
      });
      const _checkedMapColor = {};
      const color = _hsvList[0];
      if (!color) {
        return;
      }
      let mapIdx = 0;
      _hsvList.forEach((hsv, idx) => {
        const _color = hsv;
        const colorRgba = hsv2rgbString(_color.h, _color.s / 10, convertRange(_color.v) / 10);
        let num = 5;
        if (_hsvList.length === 5) {
          num = 4;
        } else if (_hsvList.length === 6) {
          num = 3;
        }
        if (idx === 0) {
          while (mapIdx < (idx + 1) * num) {
            _checkedMapColor[mapIdx] = colorRgba;
            mapIdx++;
          }
          if (_hsvList.length === 6) {
            _checkedMapColor[18] = colorRgba;
            _checkedMapColor[19] = colorRgba;
          }
        } else if (idx === 1) {
          while (mapIdx < (idx + 1) * num) {
            _checkedMapColor[mapIdx] = colorRgba;
            mapIdx++;
          }
        } else if (idx === 2) {
          while (mapIdx < (idx + 1) * num) {
            _checkedMapColor[mapIdx] = colorRgba;
            mapIdx++;
          }
        } else if (idx === 3) {
          while (mapIdx < (idx + 1) * num) {
            _checkedMapColor[mapIdx] = colorRgba;
            mapIdx++;
          }
        } else if (idx === 4) {
          while (mapIdx < (idx + 1) * num) {
            _checkedMapColor[mapIdx] = colorRgba;
            mapIdx++;
          }
        } else if (idx === 5) {
          while (mapIdx < (idx + 1) * num) {
            _checkedMapColor[mapIdx] = colorRgba;
            mapIdx++;
          }
        }
      });
      setCheckedMapColor(_checkedMapColor);
      putPaintColorDataWithCloud(
        {
          dimmerMode: dimmerType,
          smearMode: smearType,
          combination: combinationList,
        },
        _checkedMapColor
      );
      return;
    }
    // 全选时 操作色盘
    if (isAll && isColor) {
      dealAllCheck();
      const color = _hsvList[0];
      if (!color) {
        return;
      }
      const colorRgba = hsv2rgbString(color.h, color.s / 10, convertRange(color.v) / 10);
      const checkedList = [...checkedSet];
      const _checkedMapColor = {};
      checkedList.forEach(i => {
        _checkedMapColor[i] = colorRgba;
      });
      const newColorMap = { ...checkedMapColor, ..._checkedMapColor };
      setCheckedMapColor(newColorMap);
      putPaintColorDataWithCloud(
        {
          dimmerMode: dimmerType,
          smearMode: smearType,
          hue: color.h,
          saturation: color.s,
          value: color.v,
        },
        newColorMap
      );
      return;
    }
    const isSingle = smearType === SmearMode.single;
    if (isSingle) {
      const color = _hsvList[0];
      if (!color) {
        return;
      }
      const checkedList = [...checkedSet];
      if (!checkedList.length) {
        return;
      }
      const _checkedMapColor = {};
      const colorStr = hsv2rgbString(color.h, color.s / 10, convertRange(color.v) / 10, 1);
      checkedList.forEach(i => {
        _checkedMapColor[i] = colorStr;
      });
      const newColorMap = { ...checkedMapColor, ..._checkedMapColor };
      setCheckedMapColor(newColorMap);
      putPaintColorDataWithCloud(
        {
          dimmerMode: dimmerType,
          smearMode: smearType,
          hue: color.h,
          saturation: color.s,
          value: color.v,
          indexs: checkedSet,
        },
        newColorMap
      );
    }
  };

  const handleLightChange = (lightSet: Set<number>) => {
    setCheckedSet(lightSet);
  };

  const handleLightEnd = (lightSet: Set<number>) => {
    const _checkedSet = lightSet;
    const isAll = smearType === SmearMode.all;
    if (isAll) {
      return;
    }
    const isClear = smearType === SmearMode.clear;
    // 下发dp
    setCheckedSet(_checkedSet);
    const color = hsvList[0];
    if (!color) {
      return;
    }
    const { h, s, v } = color;
    const checkedList = [..._checkedSet];
    if (!checkedList.length) {
      return;
    }
    const _checkedMapColor = {};
    const colorStr = hsv2rgbString(color.h, color.s / 10, convertRange(color.v) / 10, 1);
    checkedList.forEach(i => {
      _checkedMapColor[i] = colorStr;
    });
    const newColorMap = { ...checkedMapColor, ..._checkedMapColor };
    setCheckedMapColor(newColorMap);
    putPaintColorDataWithCloud(
      {
        hue: h,
        saturation: s,
        value: v,
        indexs: _checkedSet,
        smearMode: isClear ? SmearMode.clear : smearType,
        dimmerMode: dimmerType,
      },
      newColorMap
    );
  };
  // 防止重复渲染
  if (Object.keys(checkedMapColor || {}).length === 0) {
    return null;
  }
  return (
    <>
      <View className={styles.dimmerStripWrapper}>
        <View
          style={{
            width: '750rpx',
            height: 'calc(100vh * 0.3)',
          }}
        >
          <DimmerStrip
            colorList={hsvList}
            checkedMapColor={checkedMapColor}
            checkedSet={checkedSet}
            type={smearType}
            gradient={paintColorData.effect === 1}
            onLightChange={handleLightChange}
            onLightEnd={handleLightEnd}
          />
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            bottom: 0,
            right: 0,
            height: '120rpx',
          }}
        >
          <View className={styles.tabWrapper}>
            {dimmerTabList.map(tab => {
              const { disabled } = tab;
              const _handleClick = disabled ? () => null : handleSmearTabs[tab.key];
              return (
                <View
                  key={tab.title}
                  className={styles.tabItem}
                  style={{
                    opacity: disabled ? 0.5 : 1,
                  }}
                >
                  <View className={styles.tabIconWrapper} onClick={_handleClick}>
                    <Image src={tab.icon} className={styles.tabIcon} />
                  </View>
                  <Text className={styles.tabTitle}>{tab.title}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>

      <ColorPickers
        dimmerType={dimmerType}
        checkedSet={checkedSet}
        hsvList={hsvList}
        onColorChange={handleColorChange}
      />
    </>
  );
};

export default Dimmer;
