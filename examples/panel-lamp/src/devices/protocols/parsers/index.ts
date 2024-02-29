import { protocols } from '@ray-js/panel-sdk';

import ControlFormatter from './ControlFormatter';
import SwitchGradientFormatter from './SwitchGradientFormatter';
import PowerMemoryFormatter from './PowerMemoryFormatter';

export const ColourTransformer = new protocols.ColourTransformer();
export const MusicTransformer = new protocols.MusicTransformer();
export const ControlTransformer = new ControlFormatter();
export const SwitchGradientTransformer = new SwitchGradientFormatter();
export const PowerMemoryTransformer = new PowerMemoryFormatter();

export default {
  ColourTransformer,
  MusicTransformer,
  ControlTransformer,
  SwitchGradientTransformer,
  PowerMemoryTransformer,
};
