import Strings from '@/i18n';
import dpUtils from './dp';

export { dpUtils };

export const formatColorText = (hue: number): string => {
  const degree = hue || 0;
  let text = Strings.getLang('color_red');
  if (degree >= 15 && degree < 45) {
    text = Strings.getLang('color_orange');
  } else if (degree >= 45 && degree < 75) {
    text = Strings.getLang('color_yellow');
  } else if (degree >= 75 && degree < 105) {
    text = Strings.getLang('color_yellow_green');
  } else if (degree >= 105 && degree < 135) {
    text = Strings.getLang('color_green');
  } else if (degree >= 135 && degree < 165) {
    text = Strings.getLang('color_cyan_green');
  } else if (degree >= 165 && degree < 195) {
    text = Strings.getLang('color_cyan');
  } else if (degree >= 195 && degree < 225) {
    text = Strings.getLang('color_indigo');
  } else if (degree >= 225 && degree < 255) {
    text = Strings.getLang('color_blue');
  } else if (degree >= 255 && degree < 285) {
    text = Strings.getLang('color_purple');
  } else if (degree >= 285 && degree < 315) {
    text = Strings.getLang('color_magenta');
  } else if (degree >= 315 && degree < 345) {
    text = Strings.getLang('color_purple_red');
  } else {
    text = Strings.getLang('color_red');
  }
  return text;
};

export const formatDevSchema = devInfo => {
  const { dps, schema } = devInfo;
  const result_schema = {};
  const result_state = {};
  console.log('dps', dps, schema);
  for (let i = 0; i < schema.length; i++) {
    const { code, id, property, type } = schema[i];
    const define = {
      dptype: type,
      id: `${id}`,
      ...property,
    };

    result_state[code] = dps[id];
    result_schema[code] = define;
    delete define.property;
  }
  return { state: result_state, schema: result_schema };
};
