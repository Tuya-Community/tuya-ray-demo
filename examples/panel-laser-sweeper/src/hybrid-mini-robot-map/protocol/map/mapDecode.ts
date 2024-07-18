import { utils } from '@ray-js/panel-sdk';
import _ from 'lodash';
import Store from '@/redux';
import protocolUtil from '../utils';
import {
  bitmapTypeMap,
  MAX_ID_NUM,
  dealPointsColor,
  bitmapTypeHexMap,
  unknownAreaId,
  unkonwnAreaIdV2,
  colorOriginMap,
  colorHighlightMap,
  colorGrayMap,
  createHouseColorMap,
  bitmapTypeMapV2,
  dealPointsColorV2,
  bitmapTypeMapReflection,
} from '../constant';
import formatMapHeader from './mapHeaderDecode';
import decodeMapCarpet from './mapCarpetDecode';
import Strings from '@/i18n';

const {
  PressCoordinateUtils: { dealPL },
  RobotUtils: { hex2ahex, toFixed16, hexToUTF8, isHidePath, transformPileXY, DECNumberToHex },
  FunctionUtils: { memorize, isNumber },
  Lz4,
} = protocolUtil;

/**
 * 将颜色统一为大写字符串
 * @param colorHex
 * @returns
 */
const hex2ahexUpcase = (colorHex: string) => {
  const color: string = hex2ahex(colorHex) || '#000000';
  return color.toUpperCase();
};
/**
 * 从version到pix_lz4len 共24字节
 */
const mapHeaderLen = 48;
const isLz4 = true;

const formatPathPoint = isHidePath;

/**
 * 解析地图相关的数据
 */
const decode = memorize((data: string, mapConfig: any) => {
  const headerLength = mapHeaderLen;

  // 解析地图的头部信息
  const mapHeader = formatMapHeader(data.slice(0, headerLength));

  const {
    id,
    version, // 0x00:普通版本 0x01:分区版本 0x02 材质版本
    type, // 0x00:分区不可自定义编辑状态 0x01:分区可自定义编辑状态
    bgWidth,
    bgHeight,
    originX,
    originY,
    pileX,
    pileY,
    totalCount,
    compressBeforeLength, // Lz4 压缩成功前的数据长度
    compressAfterLength, // Lz4 压缩成功时的数据长度 否则为0
  } = mapHeader;

  // 面板平台配置信息
  const {
    mapColor: {
      cleaningColor,
      obstacleColor,
      unknownColor,
      room60Color,
      room61Color,
      room62Color,
      room63Color,
    },
    originMapColor,
    highlightMapColor,
  } = mapConfig;

  // 分区颜色Map
  let originColorArr = colorOriginMap;
  if (originMapColor && Array.isArray(originMapColor) && originMapColor.length > 0) {
    originColorArr = originMapColor;
  }
  const houseColorMap = createHouseColorMap(
    version,
    MAX_ID_NUM,
    originColorArr,
    room60Color,
    room61Color,
    room62Color,
    room63Color
  );
  const grayColorArr = colorGrayMap;

  const houseGrayColorMap = createHouseColorMap(
    version,
    MAX_ID_NUM,
    grayColorArr,
    room60Color,
    room61Color,
    room62Color,
    room63Color
  );
  if (type > 255) {
    throw new Error(`mapData mapHeader typ: ${type} is not valid`);
  }
  // let bitmapBytes: number[] = [];
  // const idColorMap: any = {};
  const roomInfo: any = {};
  const mapArea = bgWidth * bgHeight;
  let mapDataStr = '';
  let decodeDataArray = [];
  // let pointList: any[] = [];
  const infoLength = headerLength + compressBeforeLength * 2; // 得到头部数据加被压缩的数据的字节长度
  let roomNum = 0; // 分区个数

  if (version === 0) {
    // 普通版本
    if (isLz4 && compressAfterLength) {
      const maxBufferLength = totalCount * 8;
      const encodeDataArray = utils.hexStringToNumber(data.slice(headerLength));
      decodeDataArray = Lz4.uncompress(encodeDataArray, maxBufferLength);
      if (decodeDataArray.length === 0) {
        // 被设置为空的数据为超过地图解压空间
        ty.showToast({ title: Strings.getLang('dsc_overflow_size'), icon: 'error' });
      }
    } else {
      const curData = data.slice(headerLength);
      decodeDataArray = curData.match(/\w{2}/g)?.map(d => parseInt(d, 16));
    }
    mapDataStr = _(decodeDataArray)
      .map(d => {
        const byte = _.padStart(d.toString(2), 8, '0');
        return byte
          .match(/\w{2}/g)
          .map(d => bitmapTypeHexMap[d])
          .join('');
      })
      .value()
      .join('')
      .slice(0, mapArea * 2);

    const hexArr = Object.values(bitmapTypeHexMap);
    // 得到匹配类型的数据颜色
    hexArr.forEach(d => {
      const point_2 = _.padStart(parseInt(d, 16).toString(2), 8, '0');
      const pointInfo = point_2.slice(6);
      const color = dealPointsColor(pointInfo, cleaningColor, obstacleColor, unknownColor);
      // idColorMap[d] = color;
      roomInfo[d] = {
        normalColor: color,
        highlightColor: color,
        pixelType: bitmapTypeMapReflection[pointInfo],
      };
    });
  } else if (version === 1) {
    // 分区版本
    let mapRoomStr: string;
    if (isLz4 && compressAfterLength) {
      const maxBufferLength = totalCount * 4; // 解压缩，申请空间
      const encodeDataArray = utils.hexStringToNumber(data.slice(headerLength, infoLength));
      decodeDataArray = Lz4.uncompress(encodeDataArray, maxBufferLength);
      if (decodeDataArray.length === 0) {
        // 被设置为空的数据为超过地图解压空间
        ty.showToast({ title: Strings.getLang('dsc_overflow_size'), icon: 'error' });
      }
      const mapDataArr = decodeDataArray.slice(0, mapArea);
      const mapRoomArr = decodeDataArray.slice(mapArea, decodeDataArray.length); // 除去地图数据，到第一次压缩结束的都认为是房间数据
      mapDataStr = _(mapDataArr)
        .map(d => _.padStart(d.toString(16), 2, '0'))
        .value()
        .join('');
      mapRoomStr = _(mapRoomArr)
        .map(d => _.padStart(d.toString(16), 2, '0'))
        .value()
        .join('');
    } else {
      mapDataStr = data.slice(headerLength, headerLength + mapArea * 2);
      mapRoomStr = data.slice(headerLength + mapArea * 2, data.length);
    }

    for (let idx = 0; idx <= MAX_ID_NUM; idx++) {
      const roomIdHex = toFixed16(`${idx}`);
      const point_2 = _.padStart(parseInt(roomIdHex, 16).toString(2), 8, '0');
      // 低两位数据
      const pointInfo = point_2.slice(6);
      const color = dealPointsColor(pointInfo, cleaningColor, obstacleColor, unknownColor);
      // 高六位数据
      const roomId = parseInt(point_2.slice(0, 6), 2);

      if (pointInfo === bitmapTypeMap.barrier || pointInfo === bitmapTypeMap.unknown) {
        // idColorMap[roomIdHex] = color;
        roomInfo[roomIdHex] = {
          normalColor: color,
          highlightColor: color,
          pixelType: bitmapTypeMapReflection[pointInfo],
        };
      }
      if (pointInfo === bitmapTypeMap.sweep && unknownAreaId.includes(roomId)) {
        // idColorMap[roomIdHex] = hex2ahexUpcase(houseColorMap.get(roomId));
        roomInfo[roomIdHex] = {
          normalColor: hex2ahexUpcase(houseGrayColorMap.get(roomId)),
          highlightColor: hex2ahexUpcase(houseColorMap.get(roomId)),
          pixelType: bitmapTypeMapReflection[pointInfo],
        };
      }
    }

    /** ------------房间等信息解析 start------------ * */
    // 智能分区信息
    // region_num两个bytes
    let name: string | null;
    let bytePos = 2 * 2; // region_num
    const [roomCount] = utils.hexStringToNumber(mapRoomStr.slice(2, 4));
    roomNum = roomCount;
    const infoByteLen = 26; // Room properties
    const nameByteLen = 20; // Vertices_name
    // room_msg_len 就只存储这两个字节 所以是2
    for (let i = 0; i < roomCount; i++) {
      // vertices_num房间信息，28bytes
      const roomInfoStr = mapRoomStr.slice(bytePos, bytePos + (infoByteLen + nameByteLen + 1) * 2);
      const [roomId, order, sweep_count, mop_count] = _.chunk(
        utils.hexStringToNumber(roomInfoStr.slice(0, 16)),
        2
      ).map(([high, low]) => utils.highLowToInt(high, low));

      const [
        colorOrder,
        sweep_forbiden,
        mop_forbidden,
        fan,
        water_level,
        y_mode,
      ] = utils.hexStringToNumber(roomInfoStr.slice(16, 28));
      // Vertices_name房间名称信息，20bytes
      const [nameLen] = utils.hexStringToNumber(roomInfoStr.slice(52, 54));
      const verticesNameStr = roomInfoStr.slice(
        infoByteLen * 2 + 1 * 2,
        infoByteLen * 2 + 1 * 2 + nameLen * 2
      );
      name = nameLen ? hexToUTF8(verticesNameStr) : '';
      const [vertexNum] = utils.hexStringToNumber(roomInfoStr.slice(92, 94));
      const vertexStr = mapRoomStr.slice(
        bytePos + (infoByteLen + nameByteLen + 1) * 2,
        bytePos + (infoByteLen + nameByteLen + 1) * 2 + vertexNum * 2 * 2 * 2
      );
      bytePos = bytePos + (infoByteLen + nameByteLen + 1) * 2 + vertexNum * 2 * 2 * 2;

      let vertexData: Array<{ x: number; y: number }> = [];
      if (vertexStr) {
        const dataArr = utils.hexStringToNumber(vertexStr);
        vertexData = _.chunk(dataArr, 4).reduce((pre, cur) => {
          const [x, y] = _.chunk(cur, 2).map(([high, low]) =>
            dealPL(utils.highLowToInt(high, low))
          );
          if (isNumber(x) && isNumber(y)) {
            const realPoint = formatPathPoint({ x, y });
            if (isNumber(realPoint.x) && isNumber(realPoint.y)) {
              pre.push({
                x: realPoint.x,
                y: realPoint.y,
              });
            }
          }
          return _.uniqWith(pre, _.isEqual);
        }, []);
      }

      if (roomId || roomId === 0) {
        const roomIdHex = DECNumberToHex(roomId, bitmapTypeMap.sweep) || '00';
        // idColorMap[roomIdHex] = hex2ahexUpcase(houseColorMap.get(roomId));
        roomInfo[roomIdHex] = {
          roomId,
          normalColor: hex2ahexUpcase(houseGrayColorMap.get(roomId)),
          highlightColor: hex2ahexUpcase(houseColorMap.get(roomId)),
          pixelType: bitmapTypeMapReflection[bitmapTypeMap.sweep],
          name,
          fan: String(fan),
          order: String(order),
          water_level: String(water_level),
          sweep_count: String(sweep_count),
          mop_count: String(mop_count),
          sweep_forbiden: String(sweep_forbiden),
          mop_forbidden: String(mop_forbidden),
          y_mode: String(y_mode),
          vertexData,
        };
      }
    }
    /** ------------房间等信息解析 end------------ * */
  } else if (version === 2) {
    // 地板材质版本
    let mapRoomStr: string;
    if (isLz4 && compressAfterLength) {
      const maxBufferLength = totalCount * 4; // 解压缩，申请空间
      const encodeDataArray = utils.hexStringToNumber(data.slice(headerLength, infoLength));
      decodeDataArray = Lz4.uncompress(encodeDataArray, maxBufferLength);
      if (decodeDataArray.length === 0) {
        // 被设置为空的数据为超过地图解压空间
        ty.showToast({ title: Strings.getLang('dsc_overflow_size'), icon: 'error' });
      }
      const mapDataArr = decodeDataArray.slice(0, mapArea);
      const mapRoomArr = decodeDataArray.slice(mapArea, decodeDataArray.length); // 除去地图数据，到第一次压缩结束的都认为是房间数据
      // 地图数据转换为16进制字符串
      mapDataStr = _(mapDataArr)
        .map(d => _.padStart(d.toString(16), 2, '0'))
        .value()
        .join('');
      // 房间数据转换为16进制字符串
      mapRoomStr = _(mapRoomArr)
        .map(d => _.padStart(d.toString(16), 2, '0'))
        .value()
        .join('');
    } else {
      mapDataStr = data.slice(headerLength, headerLength + mapArea * 2);
      mapRoomStr = data.slice(headerLength + mapArea * 2, data.length);
    }
    /**
     *  对房间信息数据进行处理,最多255个房间 1个Byte
     *  这里得到的是房间对应数据的房间标识ID和房间标识ID的颜色，给到App进行处理
     *  有效房间标识：0——27
     *    特殊房间标识：
     *       28：没有分房间数据
     *       29：房间间隙，在可清扫区内，但是不在任何一个房间内
     *       30：代表障碍物
     *       31：未知的房间标识
     */
    for (let idx = 0; idx <= MAX_ID_NUM; idx++) {
      const roomIdHex = toFixed16(`${idx}`);
      const point_2 = _.padStart(parseInt(roomIdHex, 16).toString(2), 8, '0');
      // 低3位数据
      const pointInfo = point_2.slice(5);
      const color = dealPointsColorV2(pointInfo, cleaningColor, obstacleColor, unknownColor);
      // 高5位数据
      const roomId = parseInt(point_2.slice(0, 5), 2);
      if (pointInfo === bitmapTypeMapV2.barrier || pointInfo === bitmapTypeMapV2.unknown) {
        // idColorMap[roomIdHex] = color;
        roomInfo[roomIdHex] = {
          normalColor: color,
          highlightColor: color,
          pixelType: bitmapTypeMapReflection[pointInfo],
        };
      }
      // 需要对地毯的数据呈现做兼容
      if (pointInfo === bitmapTypeMapV2.carpet) {
        const carpetHex = DECNumberToHex(roomId, bitmapTypeMapV2.carpet);
        // idColorMap[carpetHex] = hex2ahexUpcase(houseColorMap.get(roomId));
        roomInfo[carpetHex] = {
          normalColor: hex2ahexUpcase(houseGrayColorMap.get(roomId)),
          highlightColor: hex2ahexUpcase(houseColorMap.get(roomId)),
          pixelType: bitmapTypeMapReflection[pointInfo],
        };
      }
      if (pointInfo === bitmapTypeMapV2.sweep && unkonwnAreaIdV2.includes(roomId)) {
        // idColorMap[roomIdHex] = hex2ahexUpcase(houseColorMap.get(roomId));
        roomInfo[roomIdHex] = {
          normalColor: hex2ahexUpcase(houseGrayColorMap.get(roomId)),
          highlightColor: hex2ahexUpcase(houseColorMap.get(roomId)),
          pixelType: bitmapTypeMapReflection[pointInfo],
        };
      }
    }

    /** ------------房间等信息解析 start------------ * */
    // 智能分区信息
    // region_num两个bytes
    let name: string | null;
    let bytePos = 2 * 2; // region_num
    // 地图分区ID（固定0x01，1bytes）+ 分区个数(1bytes)
    const [roomCount] = utils.hexStringToNumber(mapRoomStr.slice(2, 4));
    roomNum = roomCount;
    const infoByteLen = 26; // Room properties
    const nameByteLen = 20; // Vertices_name
    // room_msg_len 就只存储这两个字节 所以是2
    for (let i = 0; i < roomCount; i++) {
      // vertices_num房间信息，28bytes
      const roomInfoStr = mapRoomStr.slice(bytePos, bytePos + (infoByteLen + nameByteLen + 1) * 2);
      // 解析每个房间的相关数据 //房间ID, 清扫顺序, 清扫次数, 拖地次数
      const [roomId, order, sweep_count, mop_count] = _.chunk(
        utils.hexStringToNumber(roomInfoStr.slice(0, 16)),
        2
      ).map(([high, low]) => utils.highLowToInt(high, low));
      // 颜色序号，禁止清扫，禁止拖地, 风机档位，水箱档位，Y字形拖地
      const [
        colorOrder,
        sweep_forbiden,
        mop_forbidden,
        fan,
        water_level,
        y_mode,
      ] = utils.hexStringToNumber(roomInfoStr.slice(16, 28));
      // Vertices_name房间名称信息，20bytes
      const [nameLen] = utils.hexStringToNumber(roomInfoStr.slice(52, 54));
      const verticesNameStr = roomInfoStr.slice(
        infoByteLen * 2 + 1 * 2,
        infoByteLen * 2 + 1 * 2 + nameLen * 2
      );
      name = nameLen ? hexToUTF8(verticesNameStr) : '';
      const [vertexNum] = utils.hexStringToNumber(roomInfoStr.slice(92, 94));
      const vertexStr = mapRoomStr.slice(
        bytePos + (infoByteLen + nameByteLen + 1) * 2,
        bytePos + (infoByteLen + nameByteLen + 1) * 2 + vertexNum * 2 * 2 * 2
      );
      bytePos = bytePos + (infoByteLen + nameByteLen + 1) * 2 + vertexNum * 2 * 2 * 2;

      let vertexData: Array<{ x: number; y: number }> = [];
      // 按照高低位代表xy数据进行解析
      if (vertexStr) {
        const dataArr = utils.hexStringToNumber(vertexStr);
        vertexData = _.chunk(dataArr, 4).reduce((pre, cur) => {
          const [x, y] = _.chunk(cur, 2).map(([high, low]) =>
            dealPL(utils.highLowToInt(high, low))
          );
          if (isNumber(x) && isNumber(y)) {
            const realPoint = formatPathPoint({ x, y });
            if (isNumber(realPoint.x) && isNumber(realPoint.y)) {
              pre.push({
                x: realPoint.x,
                y: realPoint.y,
              });
            }
          }
          return _.uniqWith(pre, _.isEqual);
        }, []);
      }

      if (roomId || roomId === 0) {
        const realRoomIdHex = toFixed16(`${roomId}`);
        const hexBit = _.padStart(parseInt(realRoomIdHex, 16).toString(2), 8, '0');
        // 低3位数据
        const pointInfo = hexBit.slice(5);
        const roomIdHex = DECNumberToHex(roomId, bitmapTypeMapV2.sweep);
        roomInfo[roomIdHex] = {
          roomId,
          normalColor: hex2ahexUpcase(houseGrayColorMap.get(roomId)),
          highlightColor: hex2ahexUpcase(houseColorMap.get(roomId)),
          pixelType: bitmapTypeMapReflection[bitmapTypeMapV2.sweep],
          name,
          fan: String(fan),
          order: String(order),
          water_level: String(water_level),
          sweep_count: String(sweep_count),
          mop_count: String(mop_count),
          sweep_forbiden: String(sweep_forbiden),
          mop_forbidden: String(mop_forbidden),
          y_mode: String(y_mode),
          vertexData,
        };
      }
    }
  }

  const { staticPrefix } = Store.getState();

  const mapData = {
    width: bgWidth,
    height: bgHeight,
    originMap: data,
    origin: {
      x: originX,
      y: originY,
    },
    ...(roomInfo ? { roomInfo: JSON.stringify(roomInfo) } : {}),
    roomNum,
  };

  const nextState = {
    staticPrefix: staticPrefix,
    dataMapId: id,
    version,
    mapData,
    pilePosition: transformPileXY({ pileX, pileY }, { originX, originY }),
    mapHeader: {
      ...mapHeader,
      originData: data.slice(0, headerLength),
    },
  };
  return nextState;
});

export default decode;
