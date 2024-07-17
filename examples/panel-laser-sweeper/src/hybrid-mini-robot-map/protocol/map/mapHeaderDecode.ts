/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * 主要用于解析地图的头部数据
 */
import { utils } from '@ray-js/panel-sdk';
import _ from 'lodash';
import { shrinkValue } from '../constant';

/**
 * 解析头部header
 * @param data
 */
const formatMapHeader = (data: string) => {
  const [version] = utils.hexStringToNumber(data.slice(0, 2));
  const [id] = _.chunk(utils.hexStringToNumber(data.slice(2, 6)), 2).map(([high, low]) =>
    utils.highLowToInt(high, low)
  );
  const [type] = utils.hexStringToNumber(data.slice(6, 8));
  const totalCount = parseInt(data.slice(36, 44), 16);
  const compressBeforeLength = totalCount;
  let [
    ,
    ,
    bgWidth,
    bgHeight,
    originX,
    originY,
    mapResolution,
    pileX,
    pileY,
    ,
    ,
    compressAfterLength,
  ] = _.chunk(utils.hexStringToNumber(data), 2).map(([high, low]) => utils.highLowToInt(high, low));
  [originX, originY, pileX, pileY] = [originX, originY, pileX, pileY].map(d => shrinkValue(d));

  return {
    id,
    version,
    roomEditable: !!type,
    type,
    bgWidth,
    bgHeight,
    originX,
    originY,
    pileX,
    pileY,
    mapResolution, // 地图分辨率
    totalCount,
    compressBeforeLength,
    compressAfterLength,
  };
};

export default formatMapHeader;
