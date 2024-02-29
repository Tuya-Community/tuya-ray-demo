import dpParser from './parsers';
import { lampSchemaMap } from '../schema';

const { colour_data, music_data, control_data, switch_gradient, power_memory } = lampSchemaMap;

export const protocols = {
  [colour_data.code]: dpParser.ColourTransformer,
  [music_data.code]: dpParser.MusicTransformer,
  [control_data.code]: dpParser.ControlTransformer,
  [switch_gradient.code]: dpParser.SwitchGradientTransformer,
  [power_memory.code]: dpParser.PowerMemoryTransformer,
};
