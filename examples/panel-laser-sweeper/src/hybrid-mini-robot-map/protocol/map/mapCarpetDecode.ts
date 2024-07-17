/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import _ from 'lodash';
import { bitmapTypeMapV2 } from '../constant';

/**
 * 1.把包含地图数据的mapDataStr 拆分成每个Byte的字节数组，1个Byte对应了一个像素点，一个像素点对应了一个（x,y）的坐标
 * 2.根据每个Byte做高低位的数据拆分， 高5bit是房间信息，低3bit是点信息，遍历得到低3bit是地板材质的数据
 * 3.判断地板材质数据的类型，并生成对应的包含
 * {
 *   “url”:”xxx”,
 *   “pointList”:[{“x”:1,”y”:”1”}],
 *   “width”:1,
 *   “height”:1
 * }
 * 的对象数组
 */
/**
 * 解析地板材质的数据
 * @param mapDataStr
 * @param bgWidth
 * @param bgHeight
 */
const decodeMapCarpet = (mapDataStr: string, bgWidth: number, bgHeight: number) => {
  const mapArrVec2 = [];
  const carpetInfoArr = [];
  // 拆分成16进制的数组
  const mapDataArr = mapDataStr.match(/(\w{2})/g) || [];
  // 转化为2进制数据
  const hexMapDataArr = mapDataArr.map((d: string) => {
    return _.padStart(parseInt(d, 16).toString(2), 8, '0');
  });
  // 形成排列顺序的二维数组
  for (let i = 0; i < bgHeight; i++) {
    const rowArr = [];
    for (let j = 0; j < bgWidth; j++) {
      // 取低3位数据获得点信息
      const n = i * bgWidth + j;
      const pointInfo = hexMapDataArr[n].slice(5);
      // 高5位数据获得房间信息
      const roomIdInfo = hexMapDataArr[n].slice(0, 5);
      const points = { x: j, y: i };
      const rowItem = {
        roomIdInfo,
        pointInfo,
        points,
      };
      // 得到是地板材质的数据
      if (pointInfo === bitmapTypeMapV2.carpet) {
        carpetInfoArr.push(points);
      }
      rowArr.push(rowItem);
    }
    mapArrVec2.push(rowArr);
  }
  return carpetInfoArr;
};

export default decodeMapCarpet;
