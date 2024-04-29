import React, { useState, useCallback, useMemo, useLayoutEffect } from 'react';
import { Text, View, Icon, Button, CoverView } from '@ray-js/ray';
import ClassNames from 'classnames';
import { useDispatch } from 'react-redux';
import { IpcPlayer as Player } from '@ray-js/components-ty-ipc';
import { useProps, useDevice } from '@ray-js/panel-sdk';
import IconFont from '@/components/Iconfont';
import { useSelector, actions } from '@/redux';
import Definition from '@/components/Definition';
import Timer from '@/components/Timer';
import RecordTip from '@/components/RecordTip';
import Tab from '@/components/Tab';
import Ptz from '@/components/Ptz';
import { hasPtz, hasZoom, videoClarityObj } from '@/config/home';
import Zoom from '@/components/Zoom';
import { setOrientation, subStatusToMain } from '@/utils/util';
import { getString } from '@/utils/in18Util';
import OneTalk from '@/components/OneTalk';
import { showFullButtonAnd5sHide, closeShowFullButton } from '@/utils/index';
import _ from '@/utils/loadsh';
import Styles from './index.module.less';

interface CameraPlayerProps {
  showMore: boolean;
}

const CameraPlayer = (props: CameraPlayerProps) => {
  const { showMore } = props;
  const dispatch = useDispatch();
  const {
    isRecording,
    recordSuccess,
    isFull,
    isTwoTalking,
    isOneTalking,
    isMute,
    isPreview,
    mainDeviceCameraConfig,
    showFullButton,
  } = useSelector(state => state.ipcCommon);
  const { screenWidth } = useSelector(state => state.appInfo);
  const dpState = useProps(d => d);
  const devInfo = useDevice(device => device.devInfo);

  const [playerLayout, setPlayerLayout] = useState(0); // 播放器更新尺寸

  const handlePlayerClick = useCallback(() => {
    if (isFull) {
      if (!showFullButton) {
        showFullButtonAnd5sHide();
      } else {
        closeShowFullButton();
      }
    }
  }, [isFull, showFullButton]);

  const showPtz = useMemo(() => {
    if (isFull) {
      return hasPtz(devInfo.dpCodes);
    }

    return false;
  }, [isFull]);

  const showZoom = useMemo(() => {
    if (isFull) {
      return hasZoom(devInfo.dpCodes);
    }

    return false;
  }, [isFull]);

  useLayoutEffect(() => {
    setTimeout(() => {
      setPlayerLayout(Date.now());
    }, 300);
  }, [showMore]);

  useLayoutEffect(() => {
    setTimeout(() => {
      setPlayerLayout(Date.now());
    }, 0);
  }, [isFull]);

  const onChangeStreamStatus = (data: number) => {
    subStatusToMain(data);
  };

  // 播放器实例
  const getIpcPlayer = ctx => {
    dispatch(actions.common.playerCtx(ctx));
  };

  // 全屏ptz组件显示样式
  const ptzStyle = useMemo(() => {
    const { hide } = Styles;
    if (!isFull || !isPreview || !isPreview || !showPtz) return hide;

    if (showFullButton) return Styles.ptzShow;

    return Styles.ptzHide;
  }, [isFull, isPreview, showFullButton, showPtz]);

  // 全屏zoom组件显示样式
  const zoomStyle = useMemo(() => {
    const { hide } = Styles;
    if (!isFull || !isPreview || !isPreview || !showZoom) return hide;

    if (showFullButton) return Styles.zoomShow;

    return Styles.zoomHide;
  }, [isFull, isPreview, showFullButton, showZoom]);

  // 全屏header组件显示样式
  const fullHeaderStyle = useMemo(() => {
    const { hide } = Styles;
    if (!isFull) return hide;

    // 头部组件在预览失败时需要展示
    if (showFullButton) return Styles.headerShow;

    if (!isPreview) return Styles.headerShow;

    return Styles.headerHide;
  }, [isFull, isPreview, showFullButton]);

  return (
    <View
      className={ClassNames(Styles.playWrap, isFull ? 'fullPlayWrap' : '')}
      id="playWrap"
      style={{ height: isFull ? `${screenWidth}px` : '' }}
    >
      {/* 竖屏头部组件 */}
      <CoverView
        className={Styles.playerTop}
        id="playerTop"
        style={{
          display: !isFull && isPreview ? '' : 'none',
        }}
      >
        <Definition />

        <Button
          className={Styles.full}
          hoverClassName={Styles.fontHover}
          onClick={_.debounce(() => setOrientation(2), 300)}
        >
          <IconFont type="icon-fangda" />
        </Button>
      </CoverView>

      {/* 全屏头部组件 */}
      <CoverView className={ClassNames(Styles.fullTopHeaderWrap)}>
        <View className={ClassNames(Styles.fullTopHeader, fullHeaderStyle)}>
          <Button onClick={() => setOrientation(1)} className={ClassNames(Styles.back)}>
            <Icon style={{ margin: 0 }} type="icon-left" size={30} color="#fff" />
            <Text>{devInfo.name || ''}</Text>
          </Button>
          <View className={Styles.fullTabWrap}>
            <Tab />
          </View>
        </View>
      </CoverView>

      {/* 播放器 */}
      <View className={Styles.playerWrap}>
        {devInfo?.devId && (
          <Player
            objectFit=""
            defaultMute={isMute}
            devId={devInfo?.devId}
            onlineStatus={devInfo.isOnline}
            updateLayout={`${playerLayout}`}
            onChangeStreamStatus={onChangeStreamStatus}
            onCtx={getIpcPlayer}
            onPlayerTap={handlePlayerClick}
            clarity={videoClarityObj[mainDeviceCameraConfig.videoClarity]}
            privateState={dpState.basic_private || false}
          />
        )}
      </View>
      {/* 录制成功提示 */}
      <CoverView
        className={Styles.RecordTipContent}
        style={{ display: recordSuccess ? '' : 'none' }}
      >
        <RecordTip />
      </CoverView>
      {/* 全屏云台组件 */}
      <CoverView className={ClassNames(Styles.fullPtz, ptzStyle)}>
        <Ptz />
      </CoverView>

      {/* 全屏焦距组件 */}
      <CoverView className={ClassNames(zoomStyle, Styles.fullZoom)}>
        <View className={ClassNames(Styles.fullZoomCenter)}>
          <Zoom />
        </View>
      </CoverView>

      {/* 录制计时组件 */}
      <View className={Styles.TimerContent} style={{ display: isRecording ? '' : 'none' }}>
        <Timer />
      </View>

      {/* 双向对讲提示组件 */}
      <View style={{ display: isTwoTalking ? '' : 'none' }} className={Styles.twoTalking}>
        <Text>{getString('ipc_bottom_two_talking')}</Text>
      </View>

      {/* 单向对讲提示组件 */}
      <View style={{ display: isOneTalking ? '' : 'none' }} className={Styles.oneTalking}>
        <OneTalk />
      </View>
    </View>
  );
};

export default CameraPlayer;
