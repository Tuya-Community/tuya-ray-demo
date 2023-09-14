import ColorFormatter from './ColourFormatter';
import ControlFormatter from './ControlFormatter';
import SwitchGradientFormatter from './SwitchGradientFormatter';
import PowerMemoryFormatter from './PowerMemoryFormatter';

export const ColorTransformer = new ColorFormatter();
export const controlTransformer = new ControlFormatter();
export const SwitchGradientTransformer = new SwitchGradientFormatter();
export const PowerMemoryTransformer = new PowerMemoryFormatter();
export default {
  ColorTransformer,
  controlTransformer,
  SwitchGradientTransformer,
  PowerMemoryTransformer,
};
