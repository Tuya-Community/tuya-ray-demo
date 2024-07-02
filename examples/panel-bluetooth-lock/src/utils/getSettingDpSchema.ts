import { DpSchema } from '@ray-js/panel-sdk';

export const getSettingDpSchema = (schema: DpSchema[], code: any) => {
  return schema.filter(d => {
    return (
      ['value', 'enum', 'bool'].includes(d?.property?.type) &&
      code.includes(d.code)
    );
  });
};
