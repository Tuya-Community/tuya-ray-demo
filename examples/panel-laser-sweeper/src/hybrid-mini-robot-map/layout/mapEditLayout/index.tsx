/* eslint-disable react-hooks/rules-of-hooks */
import { dpCodes as DPCodes, brand, fontColor } from '@/config';
import { useGetMapPointsInfo, useSetLaserMapStateAndEdit } from '@/hooks/openApiHooks';
import { nativeMapStatus } from '@/hybrid-mini-robot-map/protocol/constant';
import { convertColorToArgbHex } from '@/hybrid-mini-robot-map/protocol/utils/pressCoordinateUtil';
import {
  oDeleteBase64Img,
  oResizeBase64Img,
  oRotateBase64Img,
  rDeleteBase64Img,
  rResizeBase64Img,
  rRotateBase64Img,
} from '@/hybrid-mini-robot-map/res/base64Imgs';
import { actions, useSelector } from '@/redux';
import { decodeCommTextData, formatDps, getVirtualInfoCommonData, putDeviceData } from '@/utils';
import {
  getNewAreaId,
  isForbiddenZonePointsInCurPos,
  isForbiddenZonePointsInPile,
  setMapForbiddenZone,
  setMapVirtualWall,
} from '@/utils/mapStateUtils';
import Res from '@/res';
import { CoverView, Text, View, offDpDataChange, onDpDataChange, Image } from '@ray-js/ray';
import { Grid, GridItem } from '@ray-js/smart-ui';
import { IndoorMapApi, IndoorMapUtils } from '@ray/robot-map-component';
import { useThrottleFn } from 'ahooks';
import _, { isEmpty } from 'lodash';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Strings from '../../i18n';
import MapView from '../mapView';
import './icons/iconfont.css';
import './icons/tab/iconfont.css';
import styles from './index.module.less';

const MapEditLayout = () => {
  const dispatch = useDispatch();
  const panelConfig = useSelector(state => state.laserPanelConfig);
  const iconColor = brand;
  const mapDataState = useSelector(state => state.mapState);
  const virtualState = useSelector(state => state.virtualState);
  const [mapLoadEnd, setMapLoadEnd] = useState(false);
  const [status, setStatus] = useState(nativeMapStatus.normal);
  const [showVirtualBar, setShowVirtualBar] = useState(false);
  const [showMenuBar, setShowMenuBar] = useState(true);
  const timer: any = useRef('');
  const mapId: any = useRef('');
  const { mapSize, origin, pilePosition, curPos } = mapDataState;
  const { tempAreaList, RCTAreaList, sweepRegionData } = virtualState;
  const isWallRef = useRef(false);

  const deviceDataChangeFn = (data: ty.device.DpsChanged) => {
    const dpData = formatDps(data);
    const v = dpData[DPCodes.commText];
    if (v && !isEmpty(decodeCommTextData(v))) {
      setTimeout(() => {
        onVirtualMenuBarCancel();
        ty.hideLoading();
        timer.current && clearTimeout(timer.current);
      }, 500);
    }
  };

  useEffect(() => {
    onDpDataChange(deviceDataChangeFn);

    return () => {
      timer.current && clearTimeout(timer.current);
      offDpDataChange(deviceDataChangeFn);
    };
  }, []);

  /**
   * 地图加载完成回调
   * @param data
   */
  const onMapId = (data: any) => {
    console.info('onMapId', data);
    mapId.current = data.mapId;
  };

  // const onLoggerInfo = (data: { info: string; theme: string; args: any }) => {
  //   console.log(data.info || '', data.theme || '', ...Object.values(data.args || {}));
  // };

  const { run: onLaserMapPoints } = useThrottleFn(
    ({ data }) => {
      const { mapResolution } = mapDataState;
      try {
        isForbiddenZonePointsInCurPos(data, {
          resolution: mapResolution / 100 || 0.05,
          curPos,
          origin,
          mapId: mapId.current,
        }).then(res => {
          if (res) {
            ty.showToast({
              title: Strings.getLang('dsc_curPosInForbiddenSimple'),
              icon: 'error',
            });
          }
        });

        isForbiddenZonePointsInPile(data, {
          resolution: mapResolution / 100 || 0.05,
          pilePosition,
          origin,
          mapId: mapId.current,
        }).then(res => {
          if (res) {
            ty.showToast({
              title: Strings.getLang('dsc_pileInForbiddenSimple'),
              icon: 'error',
            });
          }
        });
      } catch (e) {
        console.log(e);
      }
    },
    { wait: 300, leading: true, trailing: false }
  );
  /**
   * 地图渲染完成回调
   * @param success
   */
  const onMapLoadEnd = (success: boolean) => {
    setMapLoadEnd(success);
  };

  /**
   * 设置地图状态
   * @param mapStatus
   * @param edit
   */
  const setMapStatus = async (mapStatus: number, edit: boolean) => {
    useSetLaserMapStateAndEdit(mapId.current, { state: mapStatus, edit });
    setStatus(mapStatus);
  };

  const startLoading = () => {
    ty.showLoading({
      title: '',
    });
    timer.current = setTimeout(() => {
      setMapStatus(status, true);
      ty.hideLoading();
      ty.showToast({
        title: Strings.getLang('saveFailed'),
        icon: 'error',
      });
    }, 20000);
  };
  /**
   * 取消按钮
   */
  const onVirtualMenuBarCancel = () => {
    setMapStatus(nativeMapStatus.normal, false);
    setShowVirtualBar(false);
    setShowMenuBar(true);
    dispatch(actions.virtualState.updateAreaData({ tempAreaList: [] }));
  };

  /**
   * 新增确定按钮
   */
  const onVirtualMenuBarConfirm = async () => {
    const { data } = await IndoorMapApi.getLaserMapPointsInfo(
      IndoorMapUtils.getMapInstance(mapId.current),
      { mapId: mapId.current }
    );
    // console.info('【MapEditLayout】getLaserMapPointsInfo ==>', data);
    let dataArr: any = [];
    if (status === nativeMapStatus.virtualArea) {
      dataArr = data;
    } else {
      data.forEach(i => dataArr.push(i.points));
    }
    const putFn = _.once(() => {
      startLoading();
      const params = {
        mapStatus: status,
        data: dataArr,
        origin,
        mapScale: 1,
      };
      const commText = getVirtualInfoCommonData(params);
      putDeviceData({ [DPCodes.commText]: commText });
    });
    putFn();
  };
  /**
   * 渲染底部的控制按钮
   */
  const renderMenuBar = () => {
    const menuList: { text: string; image: any; onClick: () => void }[] = [
      {
        text: Strings.getLang('virtualEdit'),
        image: Res.virtual,
        onClick: () => {
          setShowMenuBar(false);
          setShowVirtualBar(true);
          isWallRef.current = false;
          setMapStatus(nativeMapStatus.virtualArea, true);
        },
      },
      {
        text: Strings.getLang('virtualLine'),
        image: Res.virtualWall,
        onClick: () => {
          setShowMenuBar(false);
          setShowVirtualBar(true);
          isWallRef.current = true;

          setMapStatus(nativeMapStatus.virtualWall, true);
        },
      },

      {
        text: Strings.getLang('roomEdit'),
        image: Res.mapEdit,
        onClick: () => {
          ty.navigateTo({ url: '/pages/roomEdit/index' });
        },
      },
    ];
    return (
      <Grid border={false} columnNum={3}>
        {menuList.map(item => {
          return (
            <GridItem
              text={item.text}
              key={item.text}
              onClick={item.onClick}
              iconClass={styles.cleanModeContent}
              slot={{
                icon: <Image src={item.image} className={styles.myImg} />,
              }}
            />
          );
        })}
      </Grid>
    );
    //  <BottomMenuBar menuList={menuList} />;
  };

  /**
   * 新增虚拟信息
   * @param params
   */
  const addVirtualArea = async (opts: any) => {
    const { data = [] } = useGetMapPointsInfo(mapId.current);

    let countLimit = false;
    let mopLimit = false;
    let sweepLimit = false;
    // 根据当前的地图状态来决定是添加哪一类型数据
    switch (status) {
      case DPCodes.nativeMapStatus.virtualArea:
        // No Mop
        if (opts.mode === 'mop') {
          const mopData = data.filter(i => i.extend.forbidType === 'mop');
          mopLimit = createLimitByNum(mopData, 5, 'dsc_maxForbiddenMopZoneNumber');
        } else {
          // No Go
          const sweepData = data.filter(i => i.extend.forbidType === 'sweep');
          sweepLimit = createLimitByNum(sweepData, 5, 'dsc_maxForbiddenSweepZoneNumber');
        }
        countLimit = mopLimit || sweepLimit;
        break;
      // Virtual Wall
      case DPCodes.nativeMapStatus.virtualWall:
        countLimit = createLimitByNum(data, 5, 'dsc_maxVirtualWallNumber');
        break;
      default:
    }

    if (countLimit) return null;

    const {
      mode,
      bgColor,
      borderColor,
      textColor,
      forbiddenMode = nativeMapStatus.virtualArea,
      lineWidth,
      text = '',
      canRename,
      canRotate,
      showUnitText,
      viewType,
      minAreaWidth,
      factor,
    } = opts;

    const areaId = getNewAreaId({
      RCTAreaList,
      tempAreaList,
    });

    let setForbid = null;
    const forbidConf = {
      mapId: mapId.current,
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
      lineWidth,
      text,
      canRename,
      viewType,
    };

    // 根据不同的模式调用Native方法
    switch (forbiddenMode) {
      case nativeMapStatus.virtualArea:
        setForbid = setMapForbiddenZone({
          ...forbidConf,
          canRotate,
          factor,
          minAreaWidth,
          vertexParams: {
            showVertexImages: true,
            vertexImages:
              mode === 'sweep'
                ? [rDeleteBase64Img(), rRotateBase64Img(), rResizeBase64Img()]
                : [oDeleteBase64Img(), oRotateBase64Img(), oResizeBase64Img()],
          },
          unitParams: {
            // 如果不支持单位显示，就设置为透明色字号
            textColor: showUnitText ? borderColor : '#00FFFFFF',
          },
          viewType,
        });
        break;
      case nativeMapStatus.virtualWall:
        setForbid = setMapVirtualWall({
          ...forbidConf,
          vertexParams: {
            showVertexImage: false,
            vertexType: 'square',
            vertexColor: convertColorToArgbHex(bgColor),
            radius: 3,
            vertexExtendTimes: 3,
          },
          sideVertexParams: {
            showSideVertex: true,
            showSideVertexImage: true,
            sideVertexImage: rDeleteBase64Img(),
            // sideVertexColor: convertColorToArgbHex(bgColor),
            radius: 4,
          },
          unitParams: {
            textColor: showUnitText ? borderColor : '#00FFFFFF',
          },
          viewType,
        });
        break;
      default:
        null;
    }
    // Native操作完成后，将数据写入到React的状态管理
    if (setForbid) {
      setForbid.then(({ area }) => {
        if (mapId.current) {
          console.info('setForbid success ==>', area);
          dispatch(actions.virtualState.updateAreaData({ tempAreaList: [...tempAreaList, area] }));
        }
      });
    }
  };

  /**
   * 虚拟信息可创建最大数量
   * @param data
   * @param num
   * @param tip
   * @returns
   */
  const createLimitByNum = (data: Array<any>, num = 5, tip: string) => {
    if (data.length === num) {
      ty.showToast({
        title: Strings.formatValue(tip, String(num)),
        icon: 'error',
      });
      return true;
    }
    return false;
  };

  /**
   * 扫拖禁区
   */
  const { run: handleNoGo } = useThrottleFn(
    () => {
      const { mapResolution } = mapDataState;
      const factor = mapResolution / 100 || 0.05;
      const {
        forbiddenAreaConfig: {
          sweepForbiddenArea: { sweepForbiddenBgColor, sweepForbiddenLineColor },
        },
      } = panelConfig;

      const params = {
        mode: 'sweep',
        bgColor: sweepForbiddenBgColor,
        borderColor: sweepForbiddenLineColor,
        forbiddenMode: nativeMapStatus.virtualArea,
        textColor: fontColor,
        canRename: false,
        canRotate: true,
        viewType: 'dashEdit',
        factor,
        minAreaWidth: 50 / 100 / factor,
        showUnitText: true,
      };
      addVirtualArea(params);
    },
    { wait: 300, leading: true, trailing: false }
  );

  /**
   * 拖地禁区
   */
  const { run: handleNoMop } = useThrottleFn(
    () => {
      const { mapResolution } = mapDataState;
      const factor = mapResolution / 100 || 0.05;
      const {
        forbiddenAreaConfig: {
          mopForbiddenArea: { mopForbiddenBgColor, mopForbiddenLineColor },
        },
      } = panelConfig;

      const params = {
        mode: 'mop',
        bgColor: mopForbiddenBgColor,
        borderColor: mopForbiddenLineColor,
        textColor: fontColor,
        canRename: false,
        canRotate: true,
        viewType: 'dashEdit',
        minAreaWidth: 50 / 100 / factor,
        factor,
        showUnitText: true,
      };
      addVirtualArea(params);
    },
    { wait: 300, leading: true, trailing: false }
  );

  const { run: handleVirtualWall } = useThrottleFn(
    () => {
      const {
        forbiddenAreaConfig: {
          virtualWall: { virtualWallLineColor },
        },
      } = panelConfig;
      const params = {
        mode: 'sweep',
        bgColor: virtualWallLineColor,
        borderColor: virtualWallLineColor,
        forbiddenMode: nativeMapStatus.virtualWall,
        lineWidth: 2,
        textColor: fontColor,
        canRename: false,
      };
      addVirtualArea(params);
    },
    { wait: 300, leading: true, trailing: false }
  );

  /**
   * 渲染底部禁区编辑状态时的工具栏
   */
  const renderVirtualMenuBar = () => {
    return (
      <View className={styles.virtualMenuBar}>
        <View
          style={{
            marginTop: 110,
          }}
        >
          {isWallRef.current ? (
            <Grid border={false} columnNum={2}>
              <GridItem
                text={Strings.getLang('noGo')}
                onClick={handleVirtualWall}
                iconClass={styles.cleanModeContent}
                slot={{
                  icon: <Image src={Res.virtualWall} className={styles.myImg} />,
                }}
              />
            </Grid>
          ) : (
            <Grid border={false} columnNum={2}>
              <GridItem
                text={Strings.getLang('noGo')}
                onClick={handleNoGo}
                iconClass={styles.cleanModeContent}
                slot={{
                  icon: <Image src={Res.noGo} className={styles.myImg} />,
                }}
              />
              <GridItem
                text={Strings.getLang('noMop')}
                onClick={handleNoMop}
                iconClass={styles.cleanModeContent}
                slot={{
                  icon: <Image src={Res.noMop} className={styles.myImg} />,
                }}
              />
            </Grid>
          )}
        </View>

        <View
          style={{ position: 'absolute', top: '26px', left: '24px' }}
          onClick={onVirtualMenuBarCancel}
        >
          <Text className={styles.barBtn} style={{ color: 'rgba(0,0,0,0.7)' }}>
            {Strings.getLang('cancel')}
          </Text>
        </View>
        <View
          style={{ position: 'absolute', top: '26px', right: '24px' }}
          onClick={onVirtualMenuBarConfirm}
        >
          <Text className={styles.barBtn} style={{ color: iconColor }}>
            {Strings.getLang('confirm')}
          </Text>
        </View>
      </View>
    );
  };

  const uiInterFace = useMemo(() => {
    return { isFoldable: true, isCustomizeMode: false, isShowPileRing: true };
  }, []);

  return (
    <View className={styles.container}>
      <MapView
        isFullScreen
        mapDisplayMode="splitMap"
        uiInterFace={uiInterFace}
        onMapId={onMapId}
        onLaserMapPoints={onLaserMapPoints}
        isLite
        onMapLoadEnd={onMapLoadEnd}
        mapLoadEnd={mapLoadEnd}
        pathVisible={false}
        selectRoomData={[]}
      />
      <CoverView className={styles.bottomMenuBar}>
        {showMenuBar && renderMenuBar()}
        {!showMenuBar && showVirtualBar && renderVirtualMenuBar()}
      </CoverView>
    </View>
  );
};

export default MapEditLayout;
