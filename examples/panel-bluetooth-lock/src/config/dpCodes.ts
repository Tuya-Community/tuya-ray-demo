export default {
  // 开锁方式操作dp
  unlockMethodCreate: 'unlock_method_create',
  unlockMethodDelete: 'unlock_method_delete',
  unlockMethodModify: 'unlock_method_modify',

  // 临时密码操作dp
  temporaryPasswordCreat: 'temporary_password_creat',
  temporaryPasswordDelete: 'temporary_password_delete',
  temporaryPasswordModify: 'temporary_password_modify',

  lockMotorState: 'lock_motor_state', // 锁开合状态
  residualElectricity: 'residual_electricity',
  antiLockOutside: 'anti_lock_outside', // 上提反锁
  reverseLock: 'reverse_lock',
  remoteNoDpKey: 'remote_no_dp_key', // 免密远程开锁及反馈

  // 解锁方式dp
  unlockFingerprint: 'unlock_fingerprint',
  unlockDynamic: 'unlock_dynamic',
  unlockPassword: 'unlock_password',
  unlockKey: 'unlock_key',
  unlockCard: 'unlock_card', // 卡片解锁
  unlockTemporary: 'unlock_temporary', // 临时密码解锁记录上报
  unlockOfflinePd: 'unlock_offline_pd', // 离线密码解锁上报
  unlockDouble: 'unlock_double_userid', // 组合开锁记录上报
  unlockRemote: 'unlock_phone_remote', // 远程手机解锁
  unlockVoice: 'unlock_voice_remote', // 远程语音解锁
  lockRecord: 'lock_record', // 关锁记录

  // 设置页dp点集合（全）
  doorUnclosed: 'door_unclosed', // 门未关提醒设置
  doorUnclosedTrigger: 'door_unclosed_trigger', // 门未关提醒触发时长
  unlockKeyWarn: 'unlock_key_warn', // 钥匙开门提醒
  doorbellVolume: 'doorbell_volume', // 门铃音量
  muteMode: 'mute_mode', // 勿扰模式开关
  muteModePeriod: 'mute_mode_period', // 勿扰模式时间段设置
  armingSwitch: 'arming_switch', // 离家布防开关 新
  unlockSwitch: 'unlock_switch', // 单一解锁与组合解锁切换
  language: 'language', // 门锁语言切换
  automaticLock: 'automatic_lock', // 自动落锁开关设置
  autoLockTime: 'auto_lock_time', // 自动落锁延时设置
  lockMotorDirection: 'lock_motor_direction', // 电机转动方向设置
  lowPowerThreshold: 'low_power_threshold', // 低电
  remoteNoPdSetkey: 'remote_no_pd_setkey', // 设置免密远程开门密钥
  unlockVoiceRemote: 'unlock_voice_remote', // 远程语音解锁
  
  // 其他
  synchMethod: 'synch_method', // 同步开门方式
  alarmLock: 'alarm_lock', // 告警
  familyReturnWarn: 'family_return_warn', // 家人到家提醒
  closedOpened: 'closed_opened', // 门开合状态
  linkMode: 'link_mode',
  remoteUnlockCheck: 'ble_unlock_check',
  checkCodeSet: 'check_code_set',
  record: 'record',

  manualLock: 'manual_lock',

  dormantSwitch: 'dormant_switch', // 休眠状态
  dormantTimeSet: 'dormant_time_set', // 休眠时间设置

  message: 'message', // 短信服务
  holiday: 'holiday', // 休假模式
  passwordOfflineTime: 'password_offline_time',
  videoRequestRealtime: 'video_request_realtime',
  doNotDisturb: 'do_not_disturb',
  initiativeMessage: 'initiative_message',
};
