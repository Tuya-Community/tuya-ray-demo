import { SmartDeviceSchema } from 'typings/sdm';

export const getSceneDps = (schema: SmartDeviceSchema) => {
  if (!Array.isArray(schema)) return [];
  return schema.map(s => s.code.match(/switch_type_(\d+)/)?.[1]);
};
