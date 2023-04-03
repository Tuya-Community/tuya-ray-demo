/* eslint-disable consistent-return */
import { getString } from './in18Util';
import {
  showToast as rayShowToast,
  showLoading as rayShowLoading,
  hideLoading as rayHideLoading,
  showModal as rayShowModal,
} from '@ray-js/ray';
import { store, actions } from '@/redux';
import { setPageOrientation, authorize, authorizeStatus } from '@ray-js/ray';
import { openShowFullButton, showFullButtonAnd5sHide, closeShowFullButtonAfter5s } from './index';
import { devices } from '@/devices';

export const JsonUtil = {
  parseJSON(str) {
    let rst;
    if (str && {}.toString.call(str) === '[object String]') {
      // 当JSON字符串解析
      try {
        rst = JSON.parse(str);
      } catch (e) {
        // 出错，用eval继续解析JSON字符串
        try {
          // eslint-disable-next-line
          rst = eval(`(${str})`);
        } catch (e2) {
          // 当成普通字符串
          rst = str;
        }
      }
    } else {
      rst = typeof str === 'undefined' ? {} : str;
    }

    return rst;
  },
};

/**
 * loading
 * @param text loading显示文字内容多语言词条 默认：ipc_load_text（加载中）
 */
export const showLoading = (text = 'ipc_load_text') => {
  rayShowLoading({
    title: getString(text),
    mask: true,
  });
};

export const hideLoading = () => {
  rayHideLoading();
};

let timer = null;
export const showLoadingTime = () => {
  showLoading();
  timer = setTimeout(() => {
    showToast('ipc_request_time_out_err');
    hideLoading();
  }, 10 * 1000);
};

export const hideLoadingTime = () => {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }

  hideLoading();
};

/**
 * toast提示
 * @param title 提示内容多语言词条 默认：operatorFailed（操作失败）
 * @param icon 显示icon 可选值：success / error / loading / 'none' 默认值：error
 * @param duration 显示时长 默认值：3000ms
 */
export const showToast = (title = 'operatorFailed', icon = 'error', duration = 3000) => {
  rayShowToast({ title: getString(title), duration, icon });
};

export const showModal = (param = {}) => {
  const { type } = store.getState().theme;
  return new Promise((resolve, reject) => {
    rayShowModal({
      title: '',
      content: '',
      showCancel: false,
      cancelColor: type === 'dark' ? '#999999' : '',
      cancelText: getString('cancel_btn'),
      confirmText: getString('confirm_btn'),
      success: ({ confirm }) => {
        if (confirm) {
          resolve(true);
        } else {
          reject();
        }
      },
      ...param,
    });
  });
};

/**
 * 进入原生页面
 * @param pageId 页面id
 */
export const goAppPage = (pageId: string) => {
  ty.canIUseRouter({
    url: pageId,
    success: res => {
      if (res?.result) {
        const { devId } = devices.ipc.getDevInfo();
        const { type } = store.getState().theme;

        const url = `thingSmart://${pageId}?extra_camera_uuid=${devId}&theme=${
          type === 'dark' ? 1 : 2
        }`;
        ty.router({
          url: url,
          success: d => {
            console.log(d);
          },
          fail: e => {
            showToast();
            console.log(e);
          },
        });
      }
    },
    fail: err => {
      console.log(err);
      showToast();
    },
  });
};

// 进入相册
export const goToAlbum = () => {
  if (holdUp()) {
    return null;
  }
  goAppPage('ipc_album_panel');
};

// 进入回放
export const goToPlayback = () => {
  if (holdUp()) {
    return null;
  }
  // 先断流
  stopPreview()
    .then(() => {
      goAppPage('camera_playback_panel');
    })
    .catch(() => {
      showToast();
    });
};

/**
 * 横竖屏幕切换
 * @param dir 2: 全屏 1：竖屏
 */
export const setOrientation = (dir = 2) => {
  let pageOrientation = 'landscape';
  const { dispatch } = store;

  if (dir === 1) {
    pageOrientation = 'portrait';
  }
  // 提前变更状态，让横屏下需隐藏的组件隐藏
  dispatch(actions.common.isFull(dir === 2));

  setPageOrientation({
    pageOrientation,
    success: () => {
      if (dir === 2) {
        ty.hideMenuButton();
        ty.hideStatusBar();

        ty.setNavigationBarBack({
          type: 'custom',
        });

        // 显示全屏按钮5s后隐藏
        showFullButtonAnd5sHide();
      } else {
        ty.setNavigationBarBack({
          type: 'system',
        });
        ty.showMenuButton();
        ty.showStatusBar();
      }
    },
  });
};

/**
 * 查询授权状态
 * @param scope 权限类型 可选值：参考官方文档
 */
export const getAuthorizeStatus = (scope: string) => {
  return new Promise(resolve => {
    authorizeStatus({
      scope: scope,
      success: () => {
        resolve(true);
      },
      fail: () => {
        resolve(false);
      },
    });
  });
};

/**
 * 设置权限
 * @param scope 权限类型 可选值：参考官方文档
 */
const setAuthorize = async (scope: string) => {
  const status = await getAuthorizeStatus(scope);

  if (status) return Promise.resolve(true);

  return new Promise((resolve, reject) => {
    authorize({
      scope: scope,
      success: () => {
        resolve(status);
      },
      fail: err => {
        console.log('设置权限失败', err);
        showToast('ipc_permission_fail', 'none');
        reject();
      },
    });
  });
};

/**
 * 相册权限
 */
export const setAlbumAuthorize = () => {
  return setAuthorize('scope.writePhotosAlbum');
};

/**
 * 麦克风权限
 */
export const setRecordAuthorize = async () => {
  const type = 'scope.record';
  return setAuthorize(type);
};

/**
 * 扬声器
 * @param isMute 静音状态
 */
export const setMute = (isMute: boolean) => {
  if (isRecordingFun()) {
    // 录制中不可操作
    return Promise.reject();
  }

  return new Promise((resolve, reject) => {
    const { playerCtx } = store.getState().ipcCommon;
    const { dispatch } = store;
    playerCtx.ctx.setMuted({
      mute: isMute,
      success: () => {
        console.log('设置声音');
        dispatch(actions.common.isMute(isMute));
        resolve(true);
      },
      fail: () => {
        showToast();
        reject();
      },
    });
  });
};

// 单个设备截图
const singleSnapshot = () => {
  return new Promise(resolve => {
    const { devStreamStatus, playerCtx } = store.getState().ipcCommon;
    if (devStreamStatus === 1002) {
      playerCtx.ctx.snapshot({
        saveToAlbum: true,
        success: res => {
          resolve(res);
        },
        fail: () => {
          resolve(false);
        },
      });
    } else {
      resolve(false);
    }
  });
};

/**
 * 截图
 * 对两个设备操作，均需判断设备状态
 */
export const snapshot = async () => {
  if (holdUp()) return null;
  await setAlbumAuthorize();

  return new Promise((resolve, reject) => {
    const { dispatch } = store;

    singleSnapshot()
      .then(res => {
        if (res) {
          if (res.thumbPath) {
            dispatch(actions.common.recordPic([res.thumbPath]));
          }

          dispatch(actions.common.recordType(1));
          dispatch(actions.common.updateRecordStatusSuccess());
          resolve(true);
        } else {
          showToast();
          reject();
        }
      })
      .catch(err => {
        showToast();
        reject(err);
      });
  });
};

/**
 * 流状态同步到
 * connect成功：1001  connect失败：-1001
 * 预览成功：1002     预览失败：-1002
 * 其他异常：-1000
 * 暂停预览：4
 * disconnect成功：1009  disconnect失败：-1009
 */
export const subStatusToMain = (data: number) => {
  const { dispatch } = store;

  if (data === 1002) {
    dispatch(actions.common.isPreview(true));
    dispatch(actions.common.streamStatus(1));
    closeShowFullButtonAfter5s();
  } else if (data < 0) {
    dispatch(actions.common.isPreview(false));
    dispatch(actions.common.streamStatus(2));
  }

  // 非预览时，全屏下头部组件显示
  if (data !== 1002) {
    openShowFullButton();
  }

  // 若在双向对讲、录制过程中，流报错断开双向对讲与录屏
  if (data < 0) {
    autoStopRecord();
    autoStopTwoTalk();
  }

  dispatch(actions.common.devStreamStatus(data));
};

// 自动断开录屏，若失败不提示
export const autoStopRecord = () => {
  const { isRecording } = store.getState().ipcCommon;

  if (isRecording) {
    showToast('ipc_disconnect_auto_stop_record', 'none');
    stopRecord(false);
  }
};

// 自动断开双向对讲，若失败不提示
export const autoStopTwoTalk = () => {
  const { isTwoTalking } = store.getState().ipcCommon;

  if (isTwoTalking) {
    showToast('ipc_disconnect_auto_stop_two_talk', 'none');
    stopTalk(false);
  }
};

/**
 * 是否静音
 */
export const isMuting = () => {
  return new Promise((resolve, reject) => {
    const { playerCtx } = store.getState().ipcCommon;
    playerCtx.ctx.isMuted({
      success: val => {
        resolve(val);
      },
      fail: () => {
        reject();
      },
    });
  });
};

/**
 * 开启对讲
 */
export const startTalk = async () => {
  const { isTwoTalking } = store.getState().ipcCommon;
  // 开启对讲
  return new Promise((resolve, reject) => {
    const { playerCtx } = store.getState().ipcCommon;

    playerCtx.ctx.startTalk({
      success: () => {
        if (isTwoTalking) showToast('ipc_3s_can_not_donging', 'none');
        resolve(true);
      },
      fail: () => {
        showToast();
        reject();
      },
    });
  });
};

/**
 * 关闭对讲
 * @param showErrorToast 是否显示错误提示
 */
export const stopTalk = (showErrorToast = true) => {
  return new Promise((resolve, reject) => {
    const { playerCtx } = store.getState().ipcCommon;

    playerCtx.ctx.stopTalk({
      success: () => {
        resolve(false);
      },
      fail: () => {
        showErrorToast && showToast();
        reject();
      },
    });
  });
};

/**
 * 双向对讲操作
 * @param enable 开启对讲：true 关闭对讲：false
 * @param show 是否需判断在录制中
 */
export const setTalk = async (enable: boolean, show = true) => {
  if (show) {
    // 判断是否在录制中
    if (isRecordingFun()) return Promise.reject();
  }

  const { devStreamStatus } = store.getState().ipcCommon;

  if (devStreamStatus === 1002) {
    if (enable) {
      // 双向对讲在获取到权限后可自动进行后续操作
      await setRecordAuthorize();

      showToast('ipc_click_to_call', 'none');
      const isMute = await isMuting();

      // 静音先打开扬声器
      if (isMute) {
        await setMute(false);
      }

      return startTalk();
    }
    return stopTalk();
  }

  return Promise.reject();
};

/**
 * 单向对讲操作
 */
export const setOneTalk = async () => {
  if (holdUp()) return Promise.reject();
  const { isOneTalking, devStreamStatus } = store.getState().ipcCommon;

  if (devStreamStatus === 1002) {
    if (!isOneTalking) {
      // 单向对讲，在获得权限后，由用户自行操作后续操作
      const status = await setRecordAuthorize();

      if (!status) {
        // 查询状态是无，不继续后续操作，此时权限已取得
        return Promise.reject();
      }

      // 有声音，先关闭扬声器
      const isMute = await isMuting();

      if (!isMute) {
        await setMute(true);
      }

      return startTalk();
    }

    // 关闭对讲后开启扬声器
    await setMute(false);
    return stopTalk();
  }

  return Promise.reject();
};

// 单个设备开始录屏
const singleStartRecord = () => {
  return new Promise(resolve => {
    const { devStreamStatus, playerCtx } = store.getState().ipcCommon;
    if (devStreamStatus === 1002) {
      playerCtx.ctx.startRecord({
        saveToAlbum: true,
        success: () => {
          resolve(true);
        },
        fail: () => {
          resolve(false);
        },
      });
    } else {
      resolve(false);
    }
  });
};

// 单个设备停止录屏
const singleStopRecord = () => {
  return new Promise(resolve => {
    const { devStreamStatus, playerCtx } = store.getState().ipcCommon;
    if (devStreamStatus === 1002) {
      playerCtx.ctx.stopRecord({
        success: res => {
          resolve(res);
        },
        fail: () => {
          resolve(false);
        },
      });
    } else {
      resolve(false);
    }
  });
};

/**
 * 开始录制
 */
export const startRecord = async () => {
  showToast('ipc_record_start', 'none');
  await setAlbumAuthorize();
  await setRecordAuthorize();

  return new Promise((resolve, reject) => {
    const { dispatch } = store;

    singleStartRecord()
      .then(res => {
        if (res) {
          showToast('ipc_3s_can_not_donging', 'none');
          dispatch(actions.common.updateRecordStatus(true));

          resolve(true);
        } else {
          showToast();
          reject();
        }
      })
      .catch(err => {
        showToast();
        reject(err);
      });
  });
};

/**
 * 停止录制
 * 对两个设备操作，均需判断设备状态
 * @param showErrorToast 是否展示错误提示
 */
export const stopRecord = async (showErrorToast = true) => {
  return new Promise((resolve, reject) => {
    const { dispatch } = store;

    singleStopRecord()
      .then(res => {
        if (res) {
          if (res.thumbPath) {
            dispatch(actions.common.recordPic([res.thumbPath]));
          }

          dispatch(actions.common.updateRecordStatus(false));
          dispatch(actions.common.recordType(2));
          dispatch(actions.common.updateRecordStatusSuccess());
          resolve(true);
        } else {
          showErrorToast && showToast();
          reject();
        }
      })
      .catch(err => {
        showToast();
        reject(err);
      });
  });
};

/**
 * 操作录制
 * @param record 是否录制 true：停止录制 false：开始录制
 * @param show 是否判断在双向对讲
 * @returns
 */
export const setRecord = (record: boolean, show = true) => {
  if (show) {
    if (isTwoTalkFun()) return Promise.reject();
  }

  if (record) {
    return stopRecord();
  }
  return startRecord();
};

/**
 * 设置清晰度
 * @param clarity 清晰度 可选值：normal（标清） hd（高清）
 */
export const setClarity = async (clarity: string) => {
  if (isRecordingFun()) {
    return Promise.reject();
  }

  return new Promise((resolve, reject) => {
    const { devStreamStatus, playerCtx } = store.getState().ipcCommon;

    if (devStreamStatus === 1002) {
      playerCtx.ctx.setClarity({
        clarity,
        success: () => {
          resolve(true);
        },
        fail: () => {
          reject();
          showToast();
        },
      });
    } else {
      reject();
    }
  });
};

/**
 * 两路设备同时重连
 */
export const retry = () => {
  const { playerCtx } = store.getState().ipcCommon;
  const { dispatch } = store;
  dispatch(actions.common.streamStatus(1));
  dispatch(actions.common.loadText('ipc_get_stream'));

  playerCtx.retry();
};

/**
 * 录制中，先关掉录制再进行下一步操作
 * @param show 是否显示录制提示
 */
export const isRecordingFun = (show = true) => {
  const { isRecording } = store.getState().ipcCommon;

  if (isRecording && show) showToast('live_page_is_recording_tip', 'none');

  return isRecording;
};

/**
 * 对讲中，先关掉对讲再进行下一步操作
 * @param show 是否显示对讲提示
 */
export const isTwoTalkFun = (show = true) => {
  const { isTwoTalking } = store.getState().ipcCommon;

  if (isTwoTalking && show) showToast('live_page_is_talking_tip', 'none');

  return isTwoTalking;
};

/**
 * 拦截操作
 */
export const holdUp = () => {
  if (isRecordingFun()) return true;
  if (isTwoTalkFun()) return true;

  return false;
};

/**
 * 预览页隐藏时，需关闭对讲、关闭录制，同时更新UI状态
 */
export const enterBackground = () => {
  if (isRecordingFun(false)) {
    setRecord(true, false);
  }

  if (isTwoTalkFun(false)) {
    setTalk(false);
  }
};

/**
 * 单个设备断流
 */
export const stopPreview = () => {
  return new Promise((resolve, reject) => {
    const { streamStatus, playerCtx } = store.getState().ipcCommon;
    if (streamStatus === 1002) {
      playerCtx.stopPreview({
        success: () => {
          resolve(true);
        },
        fail: () => {
          reject();
        },
      });
    } else {
      resolve(true);
    }
  });
};
