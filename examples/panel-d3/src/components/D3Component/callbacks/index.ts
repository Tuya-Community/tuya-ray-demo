/**
 * @language zh-CN
 * @description 所有注册的方法都要在这里
 */
export const eventNames = {
  onComponentLoadEnd: 'onComponentLoadEnd',
  onGestureChange: 'onGestureChange',
  onResetControl: 'onResetControl',
};

/**
 * @language zh-CN
 * @description Ray 绑定事件需要转为小写
 */
export const eventCallbacks = Object.values(eventNames).map(name => {
  return { key: name.toLowerCase(), value: name };
});

/**
 * @language zh-CN
 * @description 获取小写的Ray绑定事件
 * @param type
 * @returns
 */
export const getRayBindCallbacksName = (type: string): string => {
  const evs = eventCallbacks.findIndex(ev => ev.key === type);
  return eventCallbacks[evs]?.key;
};

/**
 * @language
 * @description 获取真实定义的事件名
 * @param type
 * @returns
 */
export const getRayRealCallbacksName = (type: string): string => {
  const evs = eventCallbacks.findIndex(ev => ev.key === type);
  return eventCallbacks[evs]?.value;
};
