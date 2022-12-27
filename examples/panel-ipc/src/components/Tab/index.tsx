import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Button } from '@ray-js/ray';
import { useSelector, actions } from '@/redux';
import IconFont from '@/components/Iconfont';
import { getTabTopConfig } from '@/config/home';
import ClassNames from 'classnames';
import {
  showToast,
  setOrientation,
  setMute,
  snapshot,
  setRecord,
  setTalk,
  setOneTalk,
  isRecordingFun,
} from '@/utils/util';
import { useDispatch } from 'react-redux';
import _ from '@/utils/loadsh';
import {
  openShowFullButton,
  closeShowFullButtonAfter5s,
  showFullButtonAnd5sHide,
} from '@/utils/index';
import Definition from '../Definition';

import Styles from './index.module.less';

interface TabProps {
  showMore?: boolean;
  onMoreClick?: (show: boolean) => void;
}
const Tab = (props: TabProps) => {
  const dispatch = useDispatch();
  const { showMore, onMoreClick } = props;
  const [tabTopList, setTabTopList] = useState(getTabTopConfig({ showMore }));
  const {
    mainDeviceCameraConfig,
    isRecording,
    isPreview,
    isFull,
    playerCtx,
    isTwoTalking,
    isMute,
    isOneTalking,
  } = useSelector(state => state.ipcCommon);
  // 部分操作三秒之内不可进行操作
  const [buttonCloudClick, setButtonCloudClick] = useState(true);
  const oneTalkRef = useRef(null);
  const [touchOneTalkStart, setTouchOneTalkStart] = useState(null);
  const [isTalking, setIsTalking] = useState(false);

  // 双向对讲、录屏开启后三秒之内，其按钮不可点击
  useEffect(() => {
    const newTab = getTabTopConfig({ showMore });
    if (!_.isEqual(newTab, tabTopList)) {
      setTabTopList(newTab);
    }
  }, [mainDeviceCameraConfig, showMore, isFull, isMute, isRecording]);

  // 按钮点击事件
  const handleTabTopClick = useCallback(
    ({ key, routerFun }) => {
      const updateList = () => {
        const newTab = getTabTopConfig({ showMore, switchType: key });
        setTabTopList(newTab);
      };

      if (key !== 'more' && key !== 'oneTalk') {
        showFullButtonAnd5sHide();
      }

      switch (key) {
        case 'more':
          onMoreClick(!showMore);
          break;
        case 'mute':
          setMute(!isMute).then(() => {
            updateList();
          });
          break;
        case 'record':
          setRecord(isRecording).then(() => {
            updateList();
            setButtonCloudClick(isRecording);
          });
          break;
        case 'twoTalk':
          setTalk(!isTwoTalking).then(() => {
            setButtonCloudClick(isTwoTalking);
            dispatch(actions.common.isTwoTalking(!isTwoTalking));

            if (isTwoTalking) {
              showToast('ipc_inter_end_call', 'none');
            }
          });
          break;
        case 'shrink':
          setOrientation(1);
          break;
        case 'screenshot':
          snapshot();
          break;
        case 'playback':
        case 'album':
          routerFun();
          break;
        default:
      }
    },
    [showMore, isRecording, isTwoTalking, playerCtx, isMute, isOneTalking]
  );

  // 双向对讲与录像进行中图标颜色
  const isWark = useCallback(
    ({ key }) => {
      if (key === 'twoTalk') {
        return isTwoTalking && buttonCloudClick;
      }

      if (key === 'record') {
        return isRecording && buttonCloudClick;
      }

      return false;
    },
    [isTwoTalking, isRecording, buttonCloudClick]
  );

  // 判断按钮是否可点击
  const buttonIsDisable = useCallback(
    ({ key, disable }) => {
      if (!isPreview && disable) return true;

      if (key === 'twoTalk' && !buttonCloudClick && isTwoTalking) {
        return true;
      }

      if (key === 'record' && !buttonCloudClick && isRecording) {
        return true;
      }

      return false;
    },
    [buttonCloudClick, isPreview, isTwoTalking, isRecording]
  );

  useEffect(() => {
    if (!buttonCloudClick) {
      setTimeout(() => {
        setButtonCloudClick(true);
      }, 3 * 1000);
    }
  }, [buttonCloudClick]);

  // 长按事件由定时器模拟而来
  // 但因touchStart与touchEnd同时使用会导致定时器失效，所以采用useEffect绕道而行
  const handleTouchStart = ({ key }) => {
    if (key === 'oneTalk') {
      // 判断是否在录制中
      if (!isRecordingFun()) {
        setTouchOneTalkStart(true);
      }
    }
  };

  const handleTouchEnd = useCallback(
    ({ key }) => {
      if (key === 'oneTalk') {
        setTouchOneTalkStart(isOneTalking ? false : null);
      }
    },
    [isOneTalking]
  );

  useEffect(() => {
    if (oneTalkRef.current) {
      clearTimeout(oneTalkRef.current);
      oneTalkRef.current = null;
    }

    if (touchOneTalkStart) {
      openShowFullButton();
      showToast('ipc_hold_to_talk', 'none');
      oneTalkRef.current = setTimeout(() => {
        setIsTalking(true);

        setOneTalk()
          .then((res: boolean) => {
            dispatch(actions.common.isOneTalking(res));
          })
          .catch(() => {
            setIsTalking(false);
          });
      }, 1000);
    } else if (touchOneTalkStart === false) {
      setOneTalk()
        .then((res: boolean) => {
          dispatch(actions.common.isOneTalking(res));
          showToast('ipc_inter_end_talk', 'none');
        })
        .catch(() => {
          showToast('ipc_inter_end_talk', 'none');
          dispatch(actions.common.isOneTalking(false));
        });

      setIsTalking(false);
      closeShowFullButtonAfter5s();
    }
  }, [touchOneTalkStart]);

  useEffect(() => {
    if (isOneTalking && isTalking && touchOneTalkStart === null) {
      setOneTalk()
        .then((res: boolean) => {
          dispatch(actions.common.isOneTalking(res));
          showToast('ipc_inter_end_talk', 'none');
        })
        .catch(() => {
          dispatch(actions.common.isOneTalking(false));
        });
      setIsTalking(false);
    }
  }, [isOneTalking, isTalking, touchOneTalkStart]);

  return (
    <>
      <View style={{ display: isFull ? '' : 'none' }}>
        <Definition />
      </View>
      {tabTopList.map(item => {
        return (
          <Button
            disabled={buttonIsDisable(item)}
            className={ClassNames(isFull ? Styles.fullTabTopButton : Styles.tabTopButton)}
            style={{
              color: isWark(item)
                ? '#5583F5 '
                : buttonIsDisable(item) && isFull
                ? 'rgba(255, 255, 255, 0.2)' // 全屏下disable样式单独在此处处理，less中无法处理
                : '',
            }}
            key={item.key}
            onClick={_.debounce(() => handleTabTopClick(item), 300)}
            hoverClassName={Styles.fontHover}
            onTouchStart={_.debounce(() => handleTouchStart(item), 300)}
            onTouchEnd={_.debounce(() => handleTouchEnd(item), 300)}
          >
            <IconFont type={item.icon} size={isFull ? 0.44 : 0.46} />
          </Button>
        );
      })}
    </>
  );
};

Tab.defaultProps = {
  showMore: false,
  onMoreClick: () => null,
};

export default Tab;
