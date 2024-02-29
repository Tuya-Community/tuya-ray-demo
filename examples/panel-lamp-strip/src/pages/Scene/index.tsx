/* eslint-disable no-shadow */
import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Image,
  showLoading,
  hideLoading,
  getStorage,
  setStorage,
  setNavigationBarTitle,
} from '@ray-js/ray';
import { devices } from '@/devices';
import Strings from '@/i18n';
import { lampSchemaMap } from '@/devices/schema';
import { E_WOKE_MODE } from '@/types';

import { useProps } from '@ray-js/panel-sdk';
import SceneItem from './SceneItem';
import {
  getLightSceneLibrariesData,
  checkLightSceneLibrariesVersionsUpgradable,
  upgradeToLatestLightSceneLibrariesVersions,
} from './api';

import styles from './index.module.less';

const SceneKey = 'scene';

type TProps = {
  show: boolean;
};

const Scene = (props: TProps) => {
  const { show } = props;
  useEffect(() => {
    if (!show) {
      return;
    }
    setNavigationBarTitle({ title: Strings.getLang('sceneTitle') });
  }, [show]);

  const [isShowUpdate, setIsShowUpdate] = useState(false);
  // 前一次的情景数据，用于判断是否展示 "new" 标记
  const [preDataList, setPreDataList] = useState([]);
  useEffect(() => {
    // 查询是否存在可更新的情景数据
    checkLightSceneLibrariesVersionsUpgradable().then((isUpdate: boolean) => {
      setIsShowUpdate(isUpdate);
    });
  }, []);

  const setFormatSceneDataList = (sceneList, preSceneList = []) => {
    let _sceneList = [];
    sceneList.forEach(i => {
      (i?.data || []).forEach(ii => {
        // 符合当前尺寸的情景 ii.iconDisplayType === 1
        ii.items && ii.iconDisplayType === 1 && (_sceneList = _sceneList.concat(ii.items));
      });
    });
    _sceneList = _sceneList.sort((a, b) => a.sort - b.sort);
    if (preDataList?.length) {
      _sceneList = _sceneList.map(i => {
        const isNew = !(preSceneList.length ? preSceneList : preDataList)?.find(
          j => j.sceneId === i.sceneId
        );
        return {
          ...i,
          isNew,
        };
      });
    }
    const { iconUrl = '' } = devices.lamp.getDevInfo();
    const match = iconUrl.match(/^https:\/\/images\.\S+\.com/);
    const iconPrefix = match ? match[0] : '';
    const __sceneList = _sceneList.map(sceneItem => {
      return {
        ...sceneItem,
        icon: sceneItem.icon.replace('{0}', iconPrefix),
      };
    });
    console.log(__sceneList, '__sceneList');
    setSceneDataList(__sceneList);
  };

  // 获取云端情景数据
  const getSceneDataByFetch = () => {
    showLoading({ title: '' });
    getStorage({
      key: SceneKey,
      success: ({ data }) => {
        const preData = typeof data === 'string' ? JSON.parse(data) : data;
        if (preData?.length) {
          setPreDataList(preData);
        }
        // 使用Mock数据
        getLightSceneLibrariesData()
          .then(res => {
            setFormatSceneDataList(res, preData);
            hideLoading();
          })
          .catch(err => {
            console.error(err, 'err');
            setFormatSceneDataList([]);
            hideLoading();
          });
      },
      fail: () => {
        hideLoading();
      },
    });
  };

  // 清除之前的 "new" 标记
  const clearNewFlag = (sceneId: number) => {
    const _sceneList = sceneDataList.map(i => {
      if (i.sceneId === sceneId) {
        return {
          ...i,
          isNew: false,
        };
      }
      return i;
    });
    setSceneDataList(_sceneList);
    // 更新前一次的情景数据
    const currentSceneItem = sceneDataList.find(i => i.sceneId === sceneId);
    const _preSceneDataItem = preDataList.find(i => i.sceneId === sceneId);
    if (currentSceneItem && !_preSceneDataItem) {
      const _preSceneDataList = [...preDataList, currentSceneItem];
      currentSceneItem && setPreDataList(_preSceneDataList);
      // 更新本地存储
      setStorage({
        key: SceneKey,
        data: JSON.stringify(_preSceneDataList),
      });
    }
  };

  const power = useProps(props => props.switch_led);
  const handleSceneClick = (sceneId: number) => {
    const currentSceneItem = sceneDataList.find(i => i.sceneId === sceneId);
    clearNewFlag(sceneId);
    // 下发dp
    if (!currentSceneItem) {
      return;
    }
    const { dpCode, sceneData } = currentSceneItem;
    const dps = {
      [dpCode]: sceneData,
      [lampSchemaMap.work_mode.code]: E_WOKE_MODE.scene,
    };
    if (!power) {
      dps[lampSchemaMap.switch_led.code] = true;
    }
    devices.lamp.publishDps(dps);
  };

  useEffect(() => {
    // 获取数据
    getSceneDataByFetch();
  }, []);

  const [sceneDataList, setSceneDataList] = useState([]);

  const handleUpdateScene = useCallback(() => {
    upgradeToLatestLightSceneLibrariesVersions().then((isUpdated: boolean) => {
      // 获取数据
      if (isUpdated) {
        getSceneDataByFetch();
      }
      // 查询是否存在可更新的情景数据
      checkLightSceneLibrariesVersionsUpgradable().then((isUpdate: boolean) => {
        setIsShowUpdate(isUpdate);
      });
    });
  }, []);

  const renderSceneList = () => {
    return (
      <View className={styles.sceneList}>
        {isShowUpdate && (
          <Image
            src="/images/scene_update_tip.png"
            className={styles.sceneUpdateTip}
            onClick={handleUpdateScene}
          />
        )}
        {sceneDataList.map(sceneItem => {
          return (
            <View key={sceneItem.sceneId} className={styles.sceneItem}>
              <View className={styles.sceneName}>{sceneItem.sceneName}</View>
              <Image
                className={styles.sceneNew}
                src="/images/scene_new.png"
                style={{ display: sceneItem.isNew ? 'block' : 'none' }}
              />
              <SceneItem
                sceneIcon={sceneItem.icon}
                sceneId={sceneItem.sceneId}
                onClick={handleSceneClick}
              />
            </View>
          );
        })}
      </View>
    );
  };
  return <View className={styles.sceneWrapper}>{renderSceneList()}</View>;
};

export default Scene;
