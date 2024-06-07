/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-shadow */
import { NotificationCenter } from '../notification';

export const propsEventCallee = '_props_callee';

export interface IEventData {
  componentId: number | string;
  results: {
    componentId: number | string;
    method: string;
    status: boolean;
    communicationTime: number;
    timestamp: number;
    props: any;
    values: any;
  };
}

/**
 * @description 监听onIndoorMapApiCallee数据返回
 * @param method
 * @param cb
 */
const onLaserApiCallback = (method: string, cb?: (data: IEventData) => void) => {
  NotificationCenter.addEventListener(method, eventData => {
    cb(eventData);
    NotificationCenter.removeEventListener(method);
  });
};

/**
 * @description 定义标准返回式
 * @param eventData
 * @param resolve
 * @param reject
 */
const normalResolve = (eventData: IEventData, resolve, reject) => {
  const { values, status, communicationTime, method, props } = eventData.results;
  if (status) {
    resolve(values);
  } else {
    reject();
  }
};

/**
 * 控制风扇是否转动和设置它的转速
 * @param componentId
 * @param opts fanSpeed: FAN_LEVEL
 * @param cb
 * @returns
 */
const setFanAnimation = (
  componentId: string,
  opts: { fanSpeed: number },
  cb?: (data: IEventData) => void
) => {
  NotificationCenter.pushNotification(`${componentId}${propsEventCallee}`, {
    method: 'setFanAnimation',
    componentId,
    calleeProps: {
      timestamp: new Date().getTime(),
      ...opts,
    },
  });
  if (typeof cb !== 'function') {
    return new Promise((resolve, reject) => {
      onLaserApiCallback(`${componentId}_setFanAnimation`, (eventData: IEventData) =>
        normalResolve(eventData, resolve, reject)
      );
    });
  }

  onLaserApiCallback(`${componentId}_setFanAnimation`, cb);
  return null;
};

/**
 * 当模型加载完成之后开启渲染
 * @param componentId
 * @param opts
 * @param cb
 * @returns
 */
const startAnimationFrame = (
  componentId: string,
  opts: { start: boolean },
  cb?: (data: IEventData) => void
) => {
  NotificationCenter.pushNotification(`${componentId}${propsEventCallee}`, {
    method: 'startAnimationFrame',
    componentId,
    calleeProps: {
      timestamp: new Date().getTime(),
      ...opts,
    },
  });
  if (typeof cb !== 'function') {
    return new Promise((resolve, reject) => {
      onLaserApiCallback(`${componentId}_startAnimationFrame`, (eventData: IEventData) =>
        normalResolve(eventData, resolve, reject)
      );
    });
  }

  onLaserApiCallback(`${componentId}_startAnimationFrame`, cb);
  return null;
};

/**
 * 卸载整个场景组件
 * @param componentId
 * @param opts
 * @param cb
 * @returns
 */
const disposeComponent = (componentId: string, cb?: (data: IEventData) => void) => {
  NotificationCenter.pushNotification(`${componentId}${propsEventCallee}`, {
    method: 'disposeComponent',
    componentId,
    calleeProps: {
      timestamp: new Date().getTime(),
    },
  });
  if (typeof cb !== 'function') {
    return new Promise((resolve, reject) => {
      onLaserApiCallback(`${componentId}_disposeComponent`, (eventData: IEventData) =>
        normalResolve(eventData, resolve, reject)
      );
    });
  }

  onLaserApiCallback(`${componentId}_disposeComponent`, cb);
  return null;
};

export default {
  setFanAnimation,
  startAnimationFrame,
  disposeComponent,
};
