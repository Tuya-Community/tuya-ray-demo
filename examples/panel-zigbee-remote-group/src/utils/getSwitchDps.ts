import { SmartDeviceSchema } from 'typings/sdm';

export const getSwitchDps = (schema: SmartDeviceSchema) => {
  if (!Array.isArray(schema)) return [];
  const sceneSwitchSchema = schema.find(s => s.code === 'scene_switch');
  // @ts-ignore
  const sceneSwitchRange = sceneSwitchSchema?.property?.range as string[];
  if (!sceneSwitchRange) return [];
  return sceneSwitchRange
    .filter(range => {
      const btnIdx = +range.match(/switch_(\d+)/)?.[1];
      return btnIdx >= 1 && btnIdx <= 8;
    })
    .map(range => {
      const btnIdx = +range.match(/switch_(\d+)/)?.[1];
      return btnIdx;
    });
};
