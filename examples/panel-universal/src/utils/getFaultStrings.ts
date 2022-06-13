import Strings from '@/i18n';
import { NumberUtils } from '@ray-js/ray-panel-utils';

export const getFaultStrings = (
  label: any,
  faultCode: string,
  faultValue: number,
  onlyPrior = true
) => {
  if (faultValue === null || faultValue === undefined) return '';
  const labels: string[] = [];
  for (let i = 0; i < label!.length; i++) {
    const value = label![i];
    const isExist = NumberUtils.getBitValue(faultValue, i);
    if (isExist) {
      labels.push(Strings.getDpLang(faultCode, value));
      if (onlyPrior) break;
    }
  }
  return onlyPrior ? labels[0] : labels.join(', ');
};
