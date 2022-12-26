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

const mainDeviceCameraConfig = (data: Record<string, any>) => {
  return { type: MAIN_DEVICE_CAMERA_CONFIG, payload: data };
};

const updateRecordStatus = (status: boolean) => {
  return { type: UPDATE_RECORD_STATUS, payload: status };
};

const recordSuccess = (status: boolean) => {
  return { type: RECORD_SUCCESS, payload: status };
};

const isPreview = (status: boolean) => {
  return { type: IS_PREVIEW, payload: status };
};

const isFull = (status: boolean) => {
  return { type: IS_FULL, payload: status };
};

const systemInfo = (data: Record<string, any>) => {
  return { type: SYSTEM_INFO, payload: data };
};

const devStreamStatus = (data: number) => {
  return { type: SUB_DEV_STATUS, payload: data };
};

const playerCtx = (data: Record<string, any>) => {
  return { type: PLAYER_CTX, payload: data };
};

const streamStatus = (data: number) => {
  return { type: STREAM_STATUS, payload: data };
};

const recordType = (data: number) => {
  return { type: RECORD_TYPE, payload: data };
};

const updateRecordStatusSuccess = () => dispatch => {
  dispatch(recordSuccess(true));

  setTimeout(() => {
    dispatch(recordSuccess(false));
  }, 5000);
};

const recordTime = (data: number) => {
  return { type: RECORD_TIME, payload: data };
};

const talkTime = (data: number) => {
  return { type: TALK_TIME, payload: data };
};

const isTwoTalking = (data: boolean) => {
  return { type: IS_TWO_TALKING, payload: data };
};

const isMute = (data: boolean) => {
  return { type: IS_MUTE, payload: data };
};

const loadText = (data: string) => {
  return { type: LOAD_TEXT, payload: data };
};

const isOneTalking = (data: boolean) => {
  return { type: IS_ONE_TALK, payload: data };
};

const clarity = (data: string) => {
  return { type: CLARITY, payload: data };
};

const recordPic = (data: string[]) => {
  return { type: RECORD_PIC, payload: data };
};

const showFullButton = (data: boolean) => {
  return { type: SHOW_FULL_BUTTON, payload: data };
};

export const actions = {
  mainDeviceCameraConfig,
  updateRecordStatus,
  recordSuccess,
  isPreview,
  isFull,
  systemInfo,
  devStreamStatus,
  playerCtx,
  streamStatus,
  recordType,
  updateRecordStatusSuccess,
  talkTime,
  isTwoTalking,
  recordTime,
  isMute,
  loadText,
  isOneTalking,
  clarity,
  recordPic,
  showFullButton,
};
