import {
  MAIN_DEVICE_CAMERA_CONFIG,
  UPDATE_RECORD_STATUS,
  RECORD_SUCCESS,
  IS_PREVIEW,
  IS_FULL,
  SYSTEM_INFO,
  SUB_DEV_STATUS,
  PLAYER_CTX,
  STREAM_STATUS,
  RECORD_TYPE,
  IS_TWO_TALKING,
  TALK_TIME,
  RECORD_TIME,
  IS_MUTE,
  LOAD_TEXT,
  IS_ONE_TALK,
  CLARITY,
  RECORD_PIC,
  SHOW_FULL_BUTTON,
} from '@/constant';
import { actions } from '../actions/common';

export type Actions = {
  [K in keyof typeof actions]: ReturnType<typeof actions[K]>;
};

/**
 * reducers
 */

const ipcCommonDefaultState = {
  // 摄像头配置
  mainDeviceCameraConfig: {
    isSupportedTalk: true, // 支持对讲
    isSupportedSound: true, // 支持声音
    supportedAudioMode: 1, // 对讲方式 0 未知；1：单向对讲；2：双向对讲
    supportedTalkType: [1, 2],
    videoClarityList: [2, 4], // 清晰度列表
    videoClarity: 4, // 默认清晰度
  },
  isRecording: false, // 是否录制中
  recordSuccess: false, // 录制、截图成功
  recordType: 1, // 当前是截图还是录像 1：截图 2：录像
  isPreview: false, // 是否预览中
  isFull: false,
  streamStatus: 1, // 视频流状态 1：正常 2：失败
  loadText: 'ipc_get_stream',
  devStreamStatus: 0, // 设备流状态
  playerCtx: {},
  talkTime: 0,
  isTwoTalking: false,
  recordTime: 0,
  isMute: true,
  isOneTalking: false,
  clarity: 'hd',
  recordPic: [],
  showFullButton: false,
};

const ipcCommon = (state = ipcCommonDefaultState, action) => {
  switch (action.type) {
    case SUB_DEV_STATUS:
      return {
        ...state,
        devStreamStatus: action.payload,
      };
    case MAIN_DEVICE_CAMERA_CONFIG:
      return {
        ...state,
        mainDeviceCameraConfig: {
          ...state.mainDeviceCameraConfig,
          ...action.payload,
        },
      };
    case SHOW_FULL_BUTTON:
      return {
        ...state,
        showFullButton: action.payload,
      };
    case UPDATE_RECORD_STATUS:
      return {
        ...state,
        isRecording: action.payload,
      };
    case RECORD_SUCCESS:
      return {
        ...state,
        recordSuccess: action.payload,
      };
    case IS_PREVIEW:
      return {
        ...state,
        isPreview: action.payload,
      };
    case IS_FULL:
      return {
        ...state,
        isFull: action.payload,
      };
    case STREAM_STATUS:
      return {
        ...state,
        streamStatus: action.payload,
      };
    case PLAYER_CTX:
      return {
        ...state,
        playerCtx: action.payload,
      };
    case RECORD_TYPE:
      return {
        ...state,
        recordType: action.payload,
      };
    case TALK_TIME:
      return {
        ...state,
        talkTime: action.payload,
      };
    case RECORD_TIME:
      return {
        ...state,
        recordTime: action.payload,
      };
    case IS_TWO_TALKING:
      return {
        ...state,
        isTwoTalking: action.payload,
      };
    case IS_MUTE:
      return {
        ...state,
        isMute: action.payload,
      };
    case LOAD_TEXT:
      return {
        ...state,
        loadText: action.payload,
      };
    case IS_ONE_TALK:
      return {
        ...state,
        isOneTalking: action.payload,
      };
    case CLARITY:
      return {
        ...state,
        clarity: action.payload,
      };
    case RECORD_PIC:
      return {
        ...state,
        recordPic: action.payload,
      };
    default:
      return state;
  }
};

const appInfoDefaultState = {
  statusBarHeight: 0,
  screenHeight: 0,
};

const appInfo = (state = appInfoDefaultState, action) => {
  switch (action.type) {
    case SYSTEM_INFO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const reducers = {
  ipcCommon,
  appInfo,
};
