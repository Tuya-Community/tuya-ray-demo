// 充电按钮
import { dpCodes } from '@/config';
import Strings from '@/i18n';
import { actions, useSelector } from '@/redux';
import { getNewAreaId, setMapCleanZone } from '@/utils/mapStateUtils';
import { View } from '@ray-js/ray';
import { GridItem } from '@ray-js/smart-ui';
import { IndoorMapApi, IndoorMapUtils } from '@ray-js/robot-map-component';
import React from 'react';
import { useDispatch } from 'react-redux';
import './icons/iconfont.css';
import styles from './index.module.less';

export const AddAreaButton = () => {
  const panelConfig = useSelector(state => state.laserPanelConfig); // 面板配置
  const { nativeMapStatusEnum } = dpCodes;
  const mapDataState = useSelector(state => state.mapState); // 地图数据
  const virtualState = useSelector(state => state.virtualState); // 地图数据
  const dispatch = useDispatch();
  const { origin, mapId } = mapDataState;

  /**
   * 新增划区框
   * @param params
   * @returns
   */
  const addVirtualArea = async (params: {
    mode: string;
    bgColor: string;
    borderColor: string;
    forbiddenMode: number;
    textColor: string;
    canRename: boolean;
    text: string;
    viewType: string;
    points: Array<{ x: number; y: number }>;
  }) => {
    const { curPos, mapSize, mapResolution } = mapDataState;
    const { RCTAreaList, tempAreaList, sweepRegionData } = virtualState;
    const factor = mapResolution / 100 || 0.05;
    // 划区框长宽最小值、划区框最大数量
    const {
      mode,
      bgColor,
      borderColor,
      textColor,
      canRename = false,
      text,
      points,
      viewType,
    } = params;
    const areaName = text || ''; // 划区框的名称

    const { data } = await IndoorMapApi.getLaserMapPointsInfo(
      IndoorMapUtils.getMapInstance(mapId),
      {
        mapId,
      }
    );
    if (data.length >= 5) {
      ty.showToast({
        title: Strings.formatValue('dsc_max_area_num', 5),
        icon: 'error',
      });
      return;
    }

    const areaId = getNewAreaId({
      RCTAreaList,
      tempAreaList,
    });

    const forbidConf = {
      mapId,
      areaId,
      curPos,
      origin,
      mapHeight: mapSize.height,
      mapWidth: mapSize.width,
      extendAreaNum: sweepRegionData.length,
      tempAreaList,
      mode,
      bgColor,
      borderColor,
      textColor,
      minAreaWidth: 50 / 100 / factor,
      text: areaName,
      canRename,
      oldPoints: points,
      vertexParams: {
        showVertexImages: true,
        vertexImages: [
          'https://images.tuyacn.com/smart/miniapp/static/bay1636088839012qxex/17201712485d2b3459659.png',
          'https://images.tuyacn.com/smart/miniapp/static/bay1636088839012qxex/172017124831266bb342a.png',
          'https://images.tuyacn.com/smart/miniapp/static/bay1636088839012qxex/1720171248136b8236f8e.png',
        ],
      },
      unitParams: {
        textColor: borderColor,
      },
      viewType,
    };
    setMapCleanZone(forbidConf).then(({ area }: any) => {
      if (mapId) {
        dispatch(actions.virtualState.updateAreaData({ tempAreaList: [...tempAreaList, area] }));
        // 当添加了划区框后,临时清洁偏好设置为可点击
        dispatch(actions.common.updateTemporaryPreference({ zone: true }));
      }
    });
  };

  return (
    <GridItem
      text={Strings.getLang('dsc_zone_add')}
      onClick={() => {
        const {
          selectAreaConfig: { selectAreaBgColor, selectAreaLineColor },
        } = panelConfig;
        const params = {
          mode: 'sweep',
          bgColor: selectAreaBgColor,
          borderColor: selectAreaLineColor,
          forbiddenMode: nativeMapStatusEnum.areaSet,
          textColor: '#000',
          canRename: false,
          viewType: 'dashEdit',
        };
        addVirtualArea(params);
      }}
      className={styles.cleanModeItem}
      slot={{
        icon: (
          <View
            className="iconfont icon-zone-add"
            style={{ color: '#000000', fontSize: '48rpx' }}
          />
        ),
      }}
    />
  );
};
