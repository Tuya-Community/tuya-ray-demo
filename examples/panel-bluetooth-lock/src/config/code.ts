export const openDoorDpCodes = [
  'bluetooth_unlock',
  'unlock_ble',
  'unlock_password', // 普通密码解锁
  'unlock_card',
  'unlock_fingerprint',
  'unlock_face',
  'unlock_eye',
  'unlock_hand',
  'unlock_finger_vein',
  'unlock_temporary',
  'unlock_double',
  'unlock_offline_pd',
  'unlock_dynamic',
  'bluetooth_unlock',
  'unlock_double_kit', // 组合开锁
  'unlock_record_check',
  'unlock_key', //
  'unlock_phone_remote', //
  'unlock_voice_remote', //
  'open_inside', //
  'unlock_ble_ibeacon', //
];

export const openModeDpCodes = [
  'unlock_fingerprint',
  'unlock_password',
  'unlock_card',
  'unlock_face',
  'unlock_finger_vein',
  'unlock_hand',
];

export const closeDoorDpCodes = [
  'lock_record',
  'manual_lock',
  // 'product_manual',
];

export const clearLogTypeCodes = ['offline_pwd_clear_achieve', 'offline_pwd_clear_single_achieve'];

export const tempPWDLogTypeCodes = [
  'temp_pwd_create',
  'temp_pwd_meta_update',
  'offline_pwd_achieve',
];

export const logTypeAlarmCodes = ['alarm_lock', 'hijack', 'doorbell'];

export const logTypeFormDpCodes = [
  'language',
  'beep_volume',
  'special_function',
  'doorbell_song',
  'arming_switch',
  'auto_lock_time',
  'verify_lock_switch',
  'do_not_disturb',
  'special_control',
  'automatic_lock',
  'remote_unlock_setting',
  'unlock_switch',
  'remote_voice_pwd_setting',
];

export const noAdminLogTypeFormDpCodes = [
  'language',
  'beep_volume',
  'special_function',
  'doorbell_song',
];

export const unLockLogTypeCodes = ['unlock_add', 'unlock_del'];

export default {
  openDoorDpCodes,
  openModeDpCodes,
  closeDoorDpCodes,
  clearLogTypeCodes,
  tempPWDLogTypeCodes,
  logTypeAlarmCodes,
  logTypeFormDpCodes,
  noAdminLogTypeFormDpCodes,
  unLockLogTypeCodes,
};
