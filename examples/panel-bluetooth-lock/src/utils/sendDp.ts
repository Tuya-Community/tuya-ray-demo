import { sendDps } from '@ray-js/ray';

export const putDpData = (dpCode: string, dpValue: string | number | boolean) => {
  sendDps({ [dpCode]: dpValue });
};
