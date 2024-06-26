import { usePageEvent } from '@ray-js/ray';
import { useRef } from 'react';

/**
 * 在页面第二次 onShow 的时候才会触发，用于一些首次不需要执行的逻辑情况，比如从 App 页面返回
 */
export function usePageReShow(fn: (...arg: any) => any) {
  const isMounted = useRef(false);
  usePageEvent('onShow', () => {
    if (isMounted.current) fn();
    isMounted.current = true;
  });
}
