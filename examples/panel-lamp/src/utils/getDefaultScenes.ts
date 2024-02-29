import defaultConfig from '@/config/default';
import { devices } from '@/devices';
import { lampSchemaMap } from '@/devices/schema';

const { defaultScenesRGBCW, defaultScenesRGB, defaultScenesCW } = defaultConfig;

const temperatureCode = lampSchemaMap.temp_value.code;
const brightCode = lampSchemaMap.bright_value.code;

export const getDefaultScenes = () => {
  const { support } = devices.lamp.model.abilities;
  const supportColorAndWhite = support.isSupportColour() && support.isSupportDp(temperatureCode); // 是五路灯
  const SupportColorAndBright = support.isSupportColour() && support.isSupportDp(brightCode); // 是四路灯
  const onlySupportColor = support.isSupportColour() && !support.isSupportDp(temperatureCode); // 是三路灯
  // const onlySupportBright =
  //   !support.isSupportColour() &&
  //   (support.isSupportDp(temperatureCode) || support.isSupportDp(brightCode)); // 是一、二路灯
  if (supportColorAndWhite || SupportColorAndBright) {
    return defaultScenesRGBCW;
  }
  if (onlySupportColor) {
    return defaultScenesRGB;
  }
  return defaultScenesCW;
};
