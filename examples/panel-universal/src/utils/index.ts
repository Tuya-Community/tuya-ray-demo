/* eslint-disable no-bitwise */
/**
 * 可以考虑 JS API 暴露
 */
import _ from 'lodash';

export const getDpIdMapByDevInfo = (
  devInfo: DevInfo
): Record<string, DevInfo['schema'][number]> => {
  const dpIdMap = _.mapKeys(devInfo.schema, schemaInfo => schemaInfo.id);
  return dpIdMap;
};

export const mapDpsMapToDpStateMap = (dpsMap: Record<string, any>, devInfo: DevInfo) => {
  const dpIdMap = getDpIdMapByDevInfo(devInfo);
  const dpStateMap = _.mapKeys(dpsMap, (__, dpId) => dpIdMap[dpId].code);
  return dpStateMap;
};

/**
 *
 * @param devInfo
 * @returns dpState 对象
 * ```
 * {
 *   switch: true,
 *   ...
 * }
 * ```
 */
export const getDpStateMapByDevInfo = (devInfo: DevInfo): Record<string, any> => {
  const { dps, schema } = devInfo;
  const dpStateMap = {};
  _.forEach(schema, schemaInfo => {
    dpStateMap[schemaInfo.code] = dps[schemaInfo.id];
  });
  return dpStateMap;
};

export function parseNumToArr(label: string[], num: number) {
  const arr = [];
  label.forEach((item, index) => {
    const c = 1 << index;
    if ((c & num) !== 0) {
      arr.push(`${index + 1}`);
    }
  });
  return arr;
}
