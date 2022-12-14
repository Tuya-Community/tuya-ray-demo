import dpCodes from '@/config/dpCodes';
import dpParser from './dpParsers';

const { colourCode, controlCode } = dpCodes;

export default {
  [colourCode]: [
    {
      name: 'hue',
      bytes: 2,
      default: 0,
    },
    {
      name: 'saturation',
      bytes: 2,
      default: 1000,
    },
    {
      name: 'value',
      bytes: 2,
      default: 1000,
    },
  ],
  [controlCode]: dpParser.controlTransformer,
};
