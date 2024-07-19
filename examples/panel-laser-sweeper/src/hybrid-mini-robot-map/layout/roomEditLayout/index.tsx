/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable one-var */
/* eslint-disable prefer-destructuring */
import * as DpCodes from '@/config/dpCodes';
import DecisionBar from '@/hybrid-mini-robot-map/components/decisionBar';
import MapView from '@/hybrid-mini-robot-map/layout/mapView';
import { nativeMapStatus } from '@/hybrid-mini-robot-map/protocol/constant';
import {
  encodeRoomMerge,
  encodeRoomName,
  encodeRoomSplit,
  isAdjacent,
  parseRoomId,
  renameSuccess,
  roomToastInfo,
} from '@/hybrid-mini-robot-map/protocol/robotCmd';
import { stringToByte } from '@/hybrid-mini-robot-map/protocol/utils/stringsUtil';
import store, { useSelector } from '@/redux';

import {
  clearCustomConfig,
  selectCustomConfig,
  setCustomConfig,
} from '@/redux/modules/customConfigSlice';
import { useActions } from '@ray-js/panel-sdk';
import {
  CoverView,
  hideLoading,
  Image,
  offDpDataChange,
  onDpDataChange,
  showLoading,
  showToast,
  View,
} from '@ray-js/ray';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  useChangeAllMapAreaColor,
  useGetLaserMapMergeInfo,
  useGetLaserMapSplitPoint,
  useGetMapAreaInfo,
  useSetLaserMapStateAndEdit,
  useUpdateMapAreaColor,
} from '@/hooks/openApiHooks';
import {
  useSetMapStatusMerge,
  useSetMapStatusNormal,
  useSetMapStatusRename,
  useSetMapStatusSplit,
} from '@/hooks/openApiHooks/mapStatus';
import Strings from '@/i18n';
import { formatDps } from '@/utils';
import { Grid, GridItem } from '@ray-js/smart-ui';
import { mapSplitStateEnum } from '@ray-js/robot-map-component/lib/enums';
import { assignIn } from 'lodash';
import Res from '../../res';
import RoomNamePopLayout from '../roomNamePopLayout';
import styles from './index.module.less';

const RoomEditLayout = () => {
  const actions = useActions();
  const dispatch = useDispatch();
  const timer: any = useRef('');
  const panelConfig = useSelector(state => state.laserPanelConfig);
  const customConfig = useSelector(selectCustomConfig);
  const [mapLoadEnd, setMapLoadEnd] = useState(false);
  const [showMenuBar, setShowMenuBar] = useState(true);
  const [showDecisionBar, setShowDecisionBar] = useState(false);
  const [previewCustom, setPreviewCustom] = useState({});
  const [tip, setTip] = useState('');
  const [roomIdHexState, setRoomIdHexState] = useState('');
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [activeConfirm, setActiveConfirm] = useState(false);
  const mapId: any = useRef('');
  const stateType: any = useRef('normal');

  const subscribeRoomEdit = (data: any) => {
    const dpData: any = formatDps(data);
    const { roomNum } = store.getState().mapState;
    const v = dpData[DpCodes.commandTransCode];
    if (v) {
      if (v) {
        if (renameSuccess(v)) {
          timer.current && clearTimeout(timer.current);
          offDpDataChange(subscribeRoomEdit);
          setTimeout(() => {
            // const curData = Object.assign(customConfig, previewCustom);
            const curData = assignIn({}, customConfig, previewCustom);
            dispatch(setCustomConfig(curData));
            setPreviewCustom({});
            showToast({
              title: Strings.getLang('renameSuccess'),
              icon: 'success',
            });
            handleNormal();
            hideLoading();
          }, 1500);
        }
        const toastRes = roomToastInfo(v);
        if (toastRes) {
          timer.current && clearTimeout(timer.current);
          offDpDataChange(subscribeRoomEdit);
          setTimeout(() => {
            hideLoading();
            dispatch(clearCustomConfig());
            setActiveConfirm(false); // 将确定按钮置为disabled
            // 借助改变状态来重新刷新一下地图
            // 设置延时,让新地图数据先上报后再刷新地图
            setTimeout(async () => {
              useSetLaserMapStateAndEdit(mapId.current, {
                state: nativeMapStatus.mapSplit,
                edit: true,
              });
              if (stateType.current === 'merge') {
                useChangeAllMapAreaColor(mapId.current, true);
              }
            }, 500);
            const resText = Strings.getLang(toastRes);
            let iconFont = 'error';
            if (toastRes.includes('Success')) {
              iconFont = 'success';
            }
            if (toastRes.includes('Failed')) {
              iconFont = 'error';
            }
            showToast({
              title: resText,
              icon: iconFont,
            });
          }, 2000);
        }
      }
    }
  };

  /**
   * 地图加载完成回调
   * @param data
   */
  const onMapId = (data: any) => {
    mapId.current = data.mapId;
  };

  const onClickSplitArea = async (data: any) => {
    if (stateType.current === 'split') setActiveConfirm(true);
    if (stateType.current === 'merge') {
      const res: any = await useGetLaserMapSplitPoint(mapId.current);
      // console.info('getLaserMapSplitPoint', res);
      const { data: rooms } = res;
      const roomIds = rooms
        .filter(({ pixel }: any) => pixel !== undefined)
        .map(({ pixel }: any) => {
          return pixel;
        });

      useChangeAllMapAreaColor(mapId.current, true).then(() => {
        useUpdateMapAreaColor(mapId.current, roomIds, true, false);
      });

      if (roomIds.length > 1) {
        const dataList = (await useGetMapAreaInfo(mapId.current, roomIds, true)) as any[];
        console.log('dataList ==>', dataList);
        if (!isAdjacent(dataList[0].points, dataList[1].points, 3)) {
          setTimeout(() => {
            showToast({
              title: Strings.getLang('room_merge_board_error'),
              icon: 'error',
            });
            setActiveConfirm(false);
          }, 500);
        } else {
          setActiveConfirm(true);
        }
      }
    }
    if (stateType.current === 'reName') {
      const { version } = store.getState().mapState;
      const maxUnknownId = version === 1 ? 31 : 26;
      if (!data || !data.length || !Array.isArray(data)) return;
      const [firstRoom] = data;
      const { pixel } = firstRoom;
      const roomId = parseRoomId(pixel, version);
      if (roomId > maxUnknownId) {
        showToast({
          title: Strings.getLang('dsc_home_selectRoom_unknown'),
          icon: 'error',
        });
        return;
      }
      reName(pixel);
    }
  };

  /**
   * 点击创建了分割线之后的回调
   * @param param
   */
  const onSplitLine = ({ type }: any) => {
    if (type === 'add') {
      setActiveConfirm(true);
    } else if (type === 'remove') {
      setActiveConfirm(false);
    }
  };
  /**
   * 地图渲染完成回调
   * @param success
   */
  const onMapLoadEnd = (success: boolean) => {
    setMapLoadEnd(success);
  };

  const startLoading = () => {
    showLoading({ title: '' });
    timer.current = setTimeout(() => {
      hideLoading();
      offDpDataChange(subscribeRoomEdit);
      dispatch(clearCustomConfig());
      setPreviewCustom({});
      showToast({
        title: Strings.getLang('dsc_robot_time_out'),
        icon: 'error',
      });
    }, 20000);
  };

  const reName = (pixel: string) => {
    setRoomIdHexState(pixel);
    setShowRenameModal(true);
  };
  /**
   * 进入区域分割状态
   */
  const handleSplit = () => {
    try {
      useSetMapStatusSplit(mapId.current);
      setActiveConfirm(false);
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * 进入区域合并状态
   */
  const handleMerge = async () => {
    useSetMapStatusMerge(mapId.current);
    await useChangeAllMapAreaColor(mapId.current, true);
    setActiveConfirm(false);
  };

  /**
   * 进入区域命名状态
   */
  const handleRename = () => {
    useSetMapStatusRename(mapId.current);
  };

  /**
   * 重命名弹窗确定
   * @param tag
   */
  const handleRenameConfirm = (tag: string) => {
    const room = previewCustom[roomIdHexState] || {};
    const curRoom = {
      [roomIdHexState]: {
        ...room,
        name: tag,
      },
    };
    const curData = { ...previewCustom, ...curRoom };
    setShowRenameModal(false);
    setPreviewCustom(curData);
    setActiveConfirm(true);
  };

  /**
   * 重命名取消按钮
   */
  const handleRenameCancel = () => {
    // 取消，弹框关闭，停留在rename
    setShowRenameModal(false);
    if (Object.keys(previewCustom).length === 0) setActiveConfirm(false);
  };

  /**
   * 回复地图到正常状态
   */
  const handleNormal = async () => {
    useSetMapStatusNormal(mapId.current);
    stateType.current = 'normal';
    setShowMenuBar(true);
    setShowDecisionBar(false);
  };

  /**
   * 改变当前的逻辑状态
   */
  const handleStateChange = (type: string) => {
    switch (type) {
      case 'merge':
        handleMerge();
        break;
      case 'split':
        handleSplit();
        break;
      case 'reName':
        handleRename();
        break;
      default:
        break;
    }
    stateType.current = type;
    _onTip();
    setShowMenuBar(false);
    setShowDecisionBar(true);
  };

  /**
   * 渲染底部的控制按钮
   */
  const renderMenuBar = () => {
    const { roomNum, version } = store.getState().mapState;
    const menuList: { text: string; image: any; onClick: () => void }[] = [
      {
        text: Strings.getLang('roomMerge'),
        image: Res.roomMerge,
        onClick: () => {
          handleStateChange('merge');
        },
      },
      {
        text: Strings.getLang('roomSplit'),
        image: Res.roomExcision,
        onClick: () => {
          if (roomNum >= (version === 1 ? 32 : 28)) {
            showToast({
              title: Strings.getLang('dsc_room_num_limit'),
              icon: 'error',
            });
            return;
          }
          handleStateChange('split');
        },
      },
      {
        text: Strings.getLang('roomName'),
        image: Res.roomName,
        onClick: () => {
          handleStateChange('reName');
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
  };

  /**
   * 区域分割确定
   */
  const handleSplitOk = async () => {
    try {
      const res: any = await useGetLaserMapSplitPoint(mapId.current);
      console.log('【RoomEditLayout】handleSplitOk', res);
      const {
        type,
        data: [{ points, pixel }],
      } = res;
      if (points.length < 2) {
        showToast({
          title: Strings.getLang('room_split_out_of_range'),
          icon: 'error',
        });
        return;
      }
      const { version, origin } = store.getState().mapState;
      const roomId = parseRoomId(pixel, version);
      if (!roomId && roomId !== 0) {
        showToast({
          title: Strings.getLang('room_select_room'),
          icon: 'error',
        });
        return;
      }
      if (type === mapSplitStateEnum.split) {
        const data = encodeRoomSplit(roomId, points.reverse(), origin);
        onDpDataChange(subscribeRoomEdit);
        startLoading();
        actions[DpCodes.commandTransCode].set(data);
      }
    } catch (error) {
      console.error(error);
    }
    // 无需恢复状态
    // handleNormal();
  };

  /**
   * 重命名确定
   * @returns
   */
  const handleRoomNameOk = async () => {
    try {
      const { version } = store.getState().mapState;
      const maxUnknownId = version === 1 ? 31 : 26;
      const customKeys = Object.keys(previewCustom);

      if (customKeys.some(key => parseRoomId(key, version) > maxUnknownId)) {
        showToast({
          title: Strings.getLang('dsc_home_selectRoom_unknown'),
          icon: 'error',
        });
        return;
      }
      if (customKeys.some(key => stringToByte(previewCustom[key]).length > 19)) {
        showToast({
          title: Strings.getLang('room_name_too_long'),
          icon: 'error',
        });
        return;
      }
      const data = encodeRoomName(previewCustom, version);
      onDpDataChange(subscribeRoomEdit);
      startLoading();
      actions[DpCodes.commandTransCode].set(data);
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * 合并区域确定
   * @returns
   */
  const handleMergeOk = async () => {
    const { version } = store.getState().mapState;

    const maxUnknownId = version === 1 ? 31 : 26;
    try {
      const res: any = await useGetLaserMapMergeInfo(mapId.current);
      console.log('handleMergeOk ==>', res);
      const { type, data } = res;
      const roomIds = data.map((room: { pixel: string }) => parseRoomId(room.pixel, version));
      if (roomIds.length !== 2) {
        showToast({
          title: Strings.getLang('room_merge_count_error'),
          icon: 'error',
        });
        return;
      }
      if (roomIds.some((roomId: number) => roomId > maxUnknownId)) {
        showToast({
          title: Strings.getLang('room_selected_unknown'),
          icon: 'error',
        });
        return;
      }
      console.log('===roomIds', roomIds);

      const dataList = (await useGetMapAreaInfo(mapId.current, roomIds, false)) as any[];
      console.log('dataList ==>', dataList);
      if (!isAdjacent(dataList[0].points, dataList[1].points, 3)) {
        showToast({
          title: Strings.getLang('room_merge_board_error'),
          icon: 'error',
        });
        return;
      }
      if (type === mapSplitStateEnum.merge) {
        const encodedData = encodeRoomMerge(roomIds);
        onDpDataChange(subscribeRoomEdit);
        startLoading();
        actions[DpCodes.commandTransCode].set(encodedData);
      }
    } catch (error) {
      console.error(error);
    }
    // 编辑结束后，不需要恢复状态
    // handleNormal();
  };

  /**
   * 取消按钮恢复初始状态
   */
  const _onCancel = () => {
    handleNormal();
    setPreviewCustom({});
  };

  /**
   * 确定按钮对应的逻辑
   */
  const _onConfirm = () => {
    switch (stateType.current) {
      case 'merge':
        handleMergeOk();
        break;
      case 'split':
        handleSplitOk();
        break;
      case 'reName':
        handleRoomNameOk();
        break;
      default:
        break;
    }
  };

  /**
   * 切换到对应的操作之后，改变提示的内容
   * @returns
   */
  const _onTip = () => {
    let tipTxt = '';
    switch (stateType.current) {
      case 'merge':
        tipTxt = Strings.getLang('mergeTip');
        break;
      case 'split':
        tipTxt = Strings.getLang('splitTip');
        break;
      case 'reName':
        tipTxt = Strings.getLang('reNameTip');
        break;
      default:
        break;
    }
    setTip(tipTxt);
  };

  const tags = [
    { text: Strings.getLang('room_tags_kitchen') },
    { text: Strings.getLang('room_tags_bathroom') },
    { text: Strings.getLang('room_tags_living_room') },
    { text: Strings.getLang('room_tags_bedroom') },
    { text: Strings.getLang('room_tags_balcony') },
  ];
  return (
    <View>
      <MapView
        isFullScreen
        mapDisplayMode="splitMap"
        config={panelConfig}
        // 修改后存储的临时数据
        preCustomConfig={previewCustom}
        onMapId={onMapId}
        onClickSplitArea={onClickSplitArea}
        onSplitLine={onSplitLine}
        isLite
        onMapLoadEnd={onMapLoadEnd}
        mapLoadEnd={mapLoadEnd}
        selectRoomData={[]}
        areaInfoList={[]}
        pathVisible={false}
      />
      <CoverView className={styles.bottomMenuBar}>
        {showMenuBar && mapLoadEnd && renderMenuBar()}
        {!showMenuBar && showDecisionBar && mapLoadEnd && (
          <DecisionBar
            onCancel={_onCancel}
            activeConfirm={activeConfirm}
            onConfirm={_onConfirm}
            tipText={tip}
          />
        )}
      </CoverView>

      <RoomNamePopLayout
        title={Strings.getLang('roomNameTitle')}
        show={showRenameModal}
        tags={tags}
        onCancel={handleRenameCancel}
        onConfirm={handleRenameConfirm}
      />
    </View>
  );
};

export default RoomEditLayout;
