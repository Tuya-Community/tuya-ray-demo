import ControlFormatter from './ControlFormatter';
import SwitchGradientFormatter from './SwitchGradientFormatter';
import PowerMemoryFormatter from './PowerMemoryFormatter';

export const ControlTransformer = new ControlFormatter();
export const SwitchGradientTransformer = new SwitchGradientFormatter();
export const PowerMemoryTransformer = new PowerMemoryFormatter();
export default {
  ControlTransformer,
  SwitchGradientTransformer,
  PowerMemoryTransformer,
};
