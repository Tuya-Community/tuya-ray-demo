import dpParser from './parsers';
import dpCodes from '@/config/dpCodes';
const { colourCode, switchGradientCode, controlCode, powerMemoryCode } = dpCodes;

export const protocols = {
  [colourCode]: [
    {
      name: 'hue' as const,
      bytes: 2,
      default: 0,
      defaultValue: 0,
    },
    {
      name: 'saturation' as const,
      bytes: 2,
      defaultValue: 1,
    },
    {
      name: 'value' as const,
      bytes: 2,
      defaultValue: 1,
    },
  ],
  [controlCode]: dpParser.ControlTransformer,
  [switchGradientCode]: dpParser.SwitchGradientTransformer,
  [powerMemoryCode]: dpParser.PowerMemoryTransformer,
};
