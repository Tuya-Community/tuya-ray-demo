export default {
  powerCode: 'switch_led',
  colourCode: 'colour_data',
  workModeCode: 'work_mode',
  temperatureCode: 'temp_value',
  brightCode: 'bright_value',
  sceneCode: 'scene_data',
  musicCode: 'music_data',
  controlCode: 'control_data',
  rhythmCode: 'rhythm_mode',

  switchGradientCode: 'switch_gradient', // 开关渐变时间
  dimmingGradCode: 'white_gradi_time', // 白光渐变时间
  toningGradCode: 'colour_gradi_time', // 彩光渐变时间

  segmentDimmingCode: 'segment_dimming',
  powerMemoryCode: 'power_memory',
  doNotDisturbCode: 'do_not_disturb',
  wakeupModeCode: 'wakeup_mode',
  sleepModeCode: 'sleep_mode',
  curveCode: 'dim_curve', // 调光曲线
} as const;
