/**
 * @language zh-CN
 * @description 获取元素的左侧偏移量
 * @param element
 * @returns
 */
export const getElementLeft = (element: HTMLElement): number => {
  let actualLeft = element.offsetLeft;
  let current = element.offsetParent as any;
  while (current !== null) {
    actualLeft += current.offsetLeft;
    current = current.offsetParent;
  }
  return actualLeft;
};

/**
 * @language zh-CN
 * @description 获取元素的最上放的偏移量
 * @param element
 * @returns
 */
export const getElementTop = (element: HTMLElement): number => {
  let actualTop = element.offsetTop;
  let current = element.offsetParent as any;
  while (current !== null) {
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }
  return actualTop;
};
