import ColorFormatter from './ColourFormatter';
import ControlFormatter from './ControlFormatter';
import SwitchGradientFormatter from './SwitchGradientFormatter';

export const ColorTransformer = new ColorFormatter();
export const controlTransformer = new ControlFormatter();
export const SwitchGradientTransformer = new SwitchGradientFormatter();
export default {
  ColorTransformer,
  controlTransformer,
  SwitchGradientTransformer,
};
