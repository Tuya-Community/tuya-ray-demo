/* eslint-disable react-hooks/rules-of-hooks */
import { dpCodes } from '@/config';
import { useGetMapPointsInfo } from '@/hooks/openApiHooks';
import Strings from '@/i18n';
import Store, { actions, useSelector } from '@/redux';
import { selectMapStateByKey } from '@/redux/modules/mapStateSlice';
import { encodeRoomClean, formatDps, getCommonData, getRoomSuccess, putDeviceData } from '@/utils';
import {
  isRobotSilence,
  robotIsAreaPause,
  robotIsAreaing,
  robotIsAutoRunPause,
  robotIsAutoRunning,
  robotIsMapping,
  robotIsPointPause,
  robotIsPointing,
  robotIsSelectRoom,
  robotIsSelectRoomPaused,
  robotIsToCharing,
} from '@/utils/robotStatus';
import { addCorrectRoomInfo, filterCorrectRoomInfo } from '@/utils/roomInfo';
import { useProps } from '@ray-js/panel-sdk';
import { offDpDataChange, onDpDataChange } from '@ray-js/ray';
import { Utils } from '@ray-js/ray-error-catch';
import { GridItem } from '@ray-js/smart-ui';
import { IndoorMapApi, IndoorMapUtils } from '@ray/robot-map-component';
import PauseIcon from '@tuya-miniapp/icons/dist/svg/Pause';
import PlayIcon from '@tuya-miniapp/icons/dist/svg/Play';
import _ from 'lodash';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import './icons/iconfont.css';
import styles from './index.module.less';

const { Logger } = Utils;

interface Props {
  mapStatus: number;
}

// 工作模式dp枚举值
const { smart, pose, zone, selectRoom } = dpCodes.workModeEnum;
const modeStateEnum = [smart, pose, zone, selectRoom];
// 地图状态
const { nativeMapStatusEnum, cleanWorkModeEnum } = dpCodes;

function SwitchButton(props: Props) {
  const dispatch = useDispatch();
  const customizeModeSwitchState = useProps(props => props[dpCodes.customizeModeSwitch]);
  const robotStatusState = useProps(props => props[dpCodes.robotStatus]);
  const workModeState = useProps(props => props[dpCodes.workMode]);
  const workTimesState = useProps(props => props[dpCodes.workTimes]);
  const panelConfig = useSelector(state => state.laserPanelConfig); // 面板配置
  const mapDataState = useSelector(state => state.mapState); // 地图数据
  const selectRoomData = useSelector(selectMapStateByKey('selectRoomData'));

  const selectRoomCleanTimer = useRef<NodeJS.Timeout>();

  const { origin, mapId } = mapDataState;

  // 标准功能协议数据长度
  const protocolLengthVersion = '0';

  const mapScale = 1;

  const deviceDataChangeFn = (data: ty.device.DpsChanged) => {
    const { [dpCodes.commText]: v } = formatDps(data) as any;
    if (v) {
      // 上报值为选区清扫
      if (getRoomSuccess(v)) {
        selectRoomCleanTimer.current && clearTimeout(selectRoomCleanTimer.current);
        offDpDataChange(deviceDataChangeFn);
        const { count, roomIds } = getRoomSuccess(v) || { count: 1, roomIds: [] };
        dispatch(
          actions.virtualState.updateAreaData({ selectRoomData: roomIds, sweepCount: count })
        );
        // 扫地机不处于待机/寻找充电座中/充电中/休眠/充电完成状态
        if (!isRobotSilence(robotStatusState) || !robotIsToCharing(robotStatusState)) {
          IndoorMapApi.updateSelectRoom(IndoorMapUtils.getMapInstance(mapId), roomIds, true);
        }
      }
    }
  };

  const startLoading = () => {
    selectRoomCleanTimer.current = setTimeout(() => {
      offDpDataChange(deviceDataChangeFn);
    }, 10000);
  };

  /**
   * 根据扫地机的当前状态,判断清扫按钮的状态
   * @returns
   */
  const judgeRobotStatus: () => 'continue' | 'paused' | 'start' = () => {
    if (
      [robotIsAutoRunPause, robotIsPointPause, robotIsAreaPause, robotIsSelectRoomPaused].some(fn =>
        fn(workModeState, robotStatusState)
      )
    ) {
      // 当前处于清扫暂停中,按钮显示为继续清扫
      return 'continue';
    }
    if (
      [
        robotIsAutoRunning,
        robotIsPointing,
        robotIsAreaing,
        robotIsSelectRoom,
        robotIsMapping,
      ].some(fn => fn(workModeState, robotStatusState))
    ) {
      // 表示当前处于清扫状态中,按钮显示为暂停
      return 'paused';
    }
    // 表示当前处于非清扫状态中,按钮显示为开始
    return 'start';
  };

  /**
   * 下发划区清扫/指哪扫哪指令
   * @param minCount
   * @returns
   */
  const putPointData = async (minCount: number, cb?: () => Promise<void>) => {
    const { mapStatus } = props;
    const { data } = await useGetMapPointsInfo(mapId);

    let dataArr = [];
    if (mapStatus === nativeMapStatusEnum.areaSet) {
      dataArr = data;
    } else {
      data.forEach(i => dataArr.push(i.points));
    }

    const putFn = _.once(async () => {
      const params = {
        mapStatus,
        data: dataArr,
        origin,
        mapScale,
        cleanWorkMode: 1,
        workTimes: 1,
        suction: 1,
        cistern: 1,
      };
      const data = getCommonData(params);

      if (mapStatus === nativeMapStatusEnum.areaSet) {
        // 计算出划区框的总像素点数量
        let zones = 0;
        dataArr.forEach(item => {
          const width = Math.abs(item.points[1].x - item.points[0].x);
          const height = Math.abs(item.points[2].y - item.points[1].y);
          zones += width * height;
        });

        // 将划区清扫框数据保存到设备端,以便下次直接使用
        // 将下发指令改为上报指令,方便后续解析
        let areaSetData = [data.slice(0, 12), '3b', data.slice(14)].join(''); // 数据长度4
        if (protocolLengthVersion === '0') {
          areaSetData = [data.slice(0, 6), '3b', data.slice(8)].join(''); // 数据长度1
        }
      }

      await putDeviceData({ [dpCodes.commText]: data });
    });

    if (minCount && dataArr.length < minCount) {
      ty.showToast({
        title: Strings.getLang('dsc_not_selected'),
        icon: 'error',
      });
      return false;
    }
    await putFn();
    typeof cb === 'function' && (await cb());
    return true;
  };

  /**
   * 下发选区清扫指令
   * @returns
   */
  const handleSelectRoomStart = async (cb?: () => any) => {
    const selectedCorrectRoom = [];
    const { formatRoomInfo, version } = Store.getState().mapState;
    let temp = [];
    // 需要兼容地毯协议的版本
    if (version === 2) {
      temp = addCorrectRoomInfo(formatRoomInfo, selectRoomData);
      temp = filterCorrectRoomInfo(temp);
    } else {
      temp.push(...selectRoomData);
    }

    Logger.info({ message: `下发选区清扫,选择房间:${selectRoomData}` });
    const maxUnknownId = version === 1 ? 31 : 26;
    selectedCorrectRoom.push(...temp);

    try {
      // 不能超过指定的房间个数
      if (selectRoomData.length > maxUnknownId) {
        ty.showToast({
          title: Strings.getLang('dsc_out_limited'),
          icon: 'error',
        });
        return;
      }
      // 不能不选择房间
      if (selectRoomData.length === 0) {
        ty.showToast({
          title: Strings.getLang('dsc_not_room_selected'),
          icon: 'error',
        });
        return;
      }

      const rooms = selectedCorrectRoom.map((roomHexId, index) => {
        return {
          roomHexId,
          suction: 1,
          cistern: 1,
          cleanTimes: 1,
          yMop: 'ff' as const,
        };
      });

      const data = encodeRoomClean(
        selectedCorrectRoom,
        customizeModeSwitchState ? 1 : workTimesState,
        version
      );
      onDpDataChange(deviceDataChangeFn);
      startLoading();
      putDeviceData({ [dpCodes.commText]: data });
      typeof cb === 'function' && cb();
    } catch (error) {
      console.warn('put select room dp data failed\n', error);
    }
  };
  /**
   * 扫地机开始/暂停/继续清扫
   * 下发DP不可合并,设备端指定了下发顺序: commands -> mode -> switch/pause
   */
  const handleSwitchStart = async () => {
    const { mapStatus } = props;
    const btnStatus = judgeRobotStatus();
    if (btnStatus !== 'start') {
      // 结束清扫
      return putDeviceData({ [dpCodes.cleanSwitch]: false });
    }
    // 地图处于划区状态
    if (mapStatus === nativeMapStatusEnum.areaSet) {
      // 如果处于还未开始清扫状态
      const callback = async () => {
        await putDeviceData({ [dpCodes.workMode]: zone });
        await putDeviceData({ [dpCodes.cleanSwitch]: true });
      };
      putPointData(1, callback);
    }

    // 地图处于指哪扫哪状态
    if (mapStatus === nativeMapStatusEnum.pressToRun) {
      // 如果处于还未开始清扫状态
      const callback = async () => {
        await putDeviceData({ [dpCodes.workMode]: pose });
        await putDeviceData({ [dpCodes.cleanSwitch]: true });
      };
      putPointData(1, callback);
    }

    // 地图处于选区清扫状态
    if (mapStatus === nativeMapStatusEnum.mapClick) {
      // 如果处于还未开始清扫状态
      const callback = () => {
        putDeviceData({ [dpCodes.workMode]: selectRoom, [dpCodes.cleanSwitch]: true });
        putDeviceData({ [dpCodes.cleanSwitch]: true });
      };
      handleSelectRoomStart(callback);
    }

    // 地图处于正常状态
    if (mapStatus === nativeMapStatusEnum.normal) {
      // 如果处于还未开始清扫状态
      // 如果处于寻找充电座中,则弹窗提示
      // 反之则下发开始清扫指令

      await putDeviceData({ [dpCodes.workMode]: smart });
      await putDeviceData({ [dpCodes.cleanSwitch]: true });
    }
  };

  return (
    <GridItem
      text={
        judgeRobotStatus() === 'start' ? Strings.getLang('dsc_start') : Strings.getLang('desc_end')
      }
      onClick={handleSwitchStart}
      iconClass={styles.cleanModeContent}
      icon={judgeRobotStatus() === 'paused' ? PauseIcon : PlayIcon}
    />
  );
}

export default SwitchButton;
