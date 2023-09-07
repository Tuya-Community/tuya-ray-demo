import dpParser from './parsers';

export const protocols = {
  colour_data: [
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
  control_data: dpParser.controlTransformer,
};
