/* eslint-disable @typescript-eslint/no-unused-vars */
type TPathData = {
  x: number;
  y: number;
  type: TLineType;
  endX?: number;
  endY?: number;
  diameter?: number; // lineCircle 和 circleLine 专用
  width?: number; // 色带的宽度
};

// canvas 绘制的初始位置
type TInitPos = {
  x?: number;
  y?: number;
  diameter?: number;
  width?: number; // 色带的宽度
  checked?: boolean; // 是否选中
};

// eslint-disable-next-line no-shadow
enum TLineType {
  line = 'line',
  lineCircle = 'lineCircle',
  topCircle = 'topCircle',
  bottomCircle = 'bottomCircle',
  downLine = 'lineDown',
  upLine = 'lineUp',
  circleLine = 'circleLine',
}

const getSharpType = (idx: number, lastNum = 20): TLineType => {
  if (idx === 1) {
    return TLineType.lineCircle;
  }
  if (idx === lastNum) {
    return TLineType.circleLine;
  }
  if (idx % 6 === 0) {
    return TLineType.topCircle;
  }
  if (idx % 3 === 0) {
    return TLineType.bottomCircle;
  }
  if ((idx - 2) % 6 === 0 || (idx - 7) % 6 === 0) {
    return TLineType.downLine;
  }
  if ((idx - 4) % 6 === 0 || (idx - 5) % 6 === 0) {
    return TLineType.upLine;
  }
  return TLineType.line;
};

/** 判断点是否在矩形内部 */
function isPointInRectangle(pos1, pos2, x, y) {
  const { x: x1, y: y1 } = pos1;
  const { x: x2, y: y2 } = pos2;
  if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
    return true;
  }
  return false;
}

export const getCollisionCheck = {
  [TLineType.lineCircle]: (item, _x, _y) => {
    const { border, x, y, width, endX, endY } = item;
    const leftTopPos = {
      x: x - border,
      y: y - width - 10,
    };
    const rightBottomPos = {
      x: endX,
      y: endY,
    };
    const isCollision = isPointInRectangle(leftTopPos, rightBottomPos, _x, _y);
    return isCollision;
  },
  [TLineType.downLine]: (item, _x, _y) => {
    const { border, x, y, endX, endY } = item;
    const leftTopPos = {
      x: x - border - 10,
      y: y,
    };
    const rightBottomPos = {
      x: endX + border + 10,
      y: endY,
    };
    const isCollision = isPointInRectangle(leftTopPos, rightBottomPos, _x, _y);
    return isCollision;
  },
  [TLineType.bottomCircle]: (item, _x, _y) => {
    const { border, x, y, endX, endY, diameter } = item;
    const leftTopPos = {
      x: x - border,
      y: y,
    };
    const rightBottomPos = {
      x: endX + diameter + border,
      y: endY + diameter / 2 + 10,
    };
    const isCollision = isPointInRectangle(leftTopPos, rightBottomPos, _x, _y);
    return isCollision;
  },
  [TLineType.upLine]: (item, _x, _y) => {
    const { border, x, y, endX, endY } = item;
    const leftTopPos = {
      x: endX - border - 14,
      y: endY,
    };
    const rightBottomPos = {
      x: x + border + 14,
      y: y,
    };
    const isCollision = isPointInRectangle(leftTopPos, rightBottomPos, _x, _y);
    return isCollision;
  },
  [TLineType.topCircle]: (item, _x, _y) => {
    const { border, x, y, endX, endY, diameter } = item;
    const leftTopPos = {
      x: x - border,
      y: y - diameter / 2,
    };
    const rightBottomPos = {
      x: endX + border,
      y: endY,
    };
    const isCollision = isPointInRectangle(leftTopPos, rightBottomPos, _x, _y);
    return isCollision;
  },
  [TLineType.circleLine]: (item, _x, _y) => {
    const { border, x, y, endX, endY, width } = item;
    const leftTopPos = {
      x: x - border,
      y,
    };
    const rightBottomPos = {
      x: endX + border,
      y: endY,
    };
    const isCollision = isPointInRectangle(leftTopPos, rightBottomPos, _x, _y);
    return isCollision;
  },
};

// 获取色带位置数据
export const getSharpPathPosData = (lightNum: number, initData: TInitData): TPathData[] => {
  const { diameter = 36, width = 8 } = initData;
  const offsetLen = 6; // 默认38
  const offsetDistance = 10; // 两个相邻图形的间隙
  let prePathData = null;
  const border = 1;
  // 思路为获取上一个的位置信息，动态计算下一个的位置信息， 根据逻辑获取图形的类型
  const pathData: TPathData[] = new Array(lightNum).fill(1).map((_, idx) => {
    const _idx = idx + 1;
    const sharpType: TLineType = getSharpType(_idx);
    // 第一个灯
    if (sharpType === TLineType.lineCircle) {
      const { x, y } = initData;
      const endX = x + initData.length;
      const endY = y + diameter / 2;
      const firstData = {
        x,
        y,
        endX,
        endY,
        length: initData.length - diameter / 2,
        type: sharpType,
        diameter: diameter,
        width: width,
        border,
      };
      prePathData = firstData;
      return firstData;
    }

    if (sharpType === TLineType.downLine) {
      const x = prePathData.endX;
      const y = prePathData.endY + offsetDistance;
      const downLineData = {
        x,
        y,
        endX: x,
        endY: y + initData.length,
        length: initData.length,
        type: sharpType,
        width: width,
        border: 1,
      };
      prePathData = downLineData;
      return downLineData;
    }
    // 底部半圆
    if (sharpType === TLineType.bottomCircle) {
      const x = prePathData.endX;
      const y = prePathData.endY + offsetDistance;
      const bottomCircleData = {
        x,
        y,
        endX: x + diameter,
        endY: y,
        length: 0,
        type: sharpType,
        diameter: diameter,
        width: width,
        border: 1,
      };
      prePathData = bottomCircleData;
      return bottomCircleData;
    }
    if (sharpType === TLineType.upLine) {
      const x = prePathData.endX;
      const y = prePathData.endY - offsetDistance;
      const upLineData = {
        x,
        y,
        length: initData.length,
        endX: x,
        endY: y - initData.length,
        type: sharpType,
        width: width,
        border: 1,
      };
      prePathData = upLineData;
      return upLineData;
    }
    // 顶部半圆
    if (sharpType === TLineType.topCircle) {
      const x = prePathData.endX;
      const y = prePathData.endY - offsetDistance;
      const topSemicircleData = {
        x,
        y,
        endX: x + diameter,
        endY: y,
        length: 0,
        type: sharpType,
        diameter: diameter,
        width: width,
        border: 1,
      };
      prePathData = topSemicircleData;
      return topSemicircleData;
    }
    // 最后一个灯
    if (sharpType === TLineType.circleLine) {
      const x = prePathData.endX;
      const y = prePathData.endY + offsetDistance;
      const length = initData.length - diameter / 2 + offsetLen;
      const lastData = {
        x,
        y,
        endX: x + diameter / 2 + length,
        endY: y + diameter / 2,
        length,
        type: sharpType,
        diameter,
        width: width,
        border: 1,
      };
      return lastData;
    }

    return {
      x: initData.x,
      y: initData.y,
      length: initData.length,
      type: sharpType,
      width: width,
      border: 1,
    };
  });
  return pathData;
};

// 获取色带的颜色数据
type TColorData = {
  color: string;
  type: 'all' | 'check' | 'erase'; // 全选 点选 清除
};

type TInitData = TInitPos & {
  screenWidth?: number;
  screenHeight?: number;
  length?: number;
  width?: number;
  power?: boolean;
  checkedMapColor: { [idx: number]: string };
  checkedSet: Set<number>;
  isGradient?: boolean; // 是否是渐变
};

const preData: {
  initData: TInitData;
  lightNum: number;
} = {} as any;
let pathPosData = null;
const checkSet = new Set<number>();
const defaultProps = {
  screenWidth: 375,
  screenHeight: 812,
  length: 54,
  x: 24,
  y: 68,
  power: true,
  checkedSet: checkSet,
};

export const getSharpPathColorData = (_pathPosData: TPathData[], initData, isGradient = false) => {
  // ！！注意如果color为空 则认为是灯珠是关闭
  const { checkedMapColor, checkedSet, power, brightness } = initData;
  if (isGradient) {
    return _pathPosData.map((i, idx) => {
      const preColor = checkedMapColor[idx - 1];
      const color = checkedMapColor[idx];
      const nextColor = checkedMapColor[idx + 1];
      return {
        ...i,
        // 允许添加string或number
        checked: checkedSet.has(`${idx}`) || checkedSet.has(+idx),
        color,
        brightness,
        onOff: color ? power : false,
        preColor: color ? preColor : '',
        nextColor: color ? nextColor : '',
      };
    });
  }
  return _pathPosData.map((i, idx) => {
    const color = checkedMapColor[idx];
    return {
      ...i,
      // 允许添加string或number
      checked: checkedSet.has(`${idx}`) || checkedSet.has(+idx),
      color,
      brightness,
      onOff: color ? power : false,
    };
  });
};

export const getSharpPathData = (lightNum: number, initData?: TInitData) => {
  // eslint-disable-next-line no-param-reassign
  initData = {
    ...defaultProps,
    ...initData,
  };
  const { x = 24, y = 68, isGradient = false } = initData;
  const isSame =
    preData.lightNum === lightNum && preData.initData.x === x && preData.initData.y === y;
  // 如果初始位置和灯珠数有变化，更新位置列表数据
  if (!pathPosData || !isSame) {
    pathPosData = getSharpPathPosData(lightNum, initData);
    preData.lightNum = lightNum;
    preData.initData = initData;
  }
  const pathColorData = getSharpPathColorData(pathPosData, initData, isGradient);
  return pathColorData;
};
