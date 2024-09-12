import FunctionUtils from './functionUtil';
import LoggerUtils from './loggerUtil';
import Lz4 from './lz4Util';
import * as NameUtils from './nameUtil';
import PressCoordinateUtils from './pressCoordinateUtil';
import * as RobotUtils from './robotUtil';
import * as StringsUtils from './stringsUtil';
const { transformXY } = PressCoordinateUtils;
const { handleError } = FunctionUtils;

export function isNotError(value: any) {
  if (value instanceof Error) {
    handleError(value);
    return false;
  }
  return true;
}

export default {
  FunctionUtils,
  PressCoordinateUtils,
  LoggerUtils,
  StringsUtils,
  RobotUtils,
  NameUtils,
  Lz4,
  transformXY,
};

export { transformXY };
