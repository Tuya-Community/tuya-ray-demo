/* eslint-disable consistent-return */
/* eslint-disable no-console */
import { useEffect, useRef } from 'react';

const isDev = process.env.NODE_ENV === 'development';

/**
 * @param component 组件
 * @param  props 属性 可选
 * @param maxCount 超过最大渲染次数 可选 默认6次
 * @param time 时间段(ms) 可选 默认 500ms
 */
const useDebugPerf = (component, props = {}, maxCount = 6, time = 500) => {
  const count = useRef(0);
  const timer = useRef(null);
  const prevProps = useRef({});
  const componentName = component.displayName || component.name || 'Unknown Component';
  useEffect(() => {
    if (!isDev) {
      return;
    }

    count.current++;
    if (count.current >= maxCount) {
      if (prevProps.current) {
        const allKeys = Object.keys({ ...prevProps.current, ...props });
        const changedProps = {};

        allKeys.forEach(key => {
          if (!Object.is(prevProps.current[key], props[key])) {
            changedProps[key] = {
              from: prevProps.current[key],
              to: props[key],
            };
          }
        });

        if (Object.keys(changedProps).length) {
          console.log(`%c[useDebugPerf =>] ${componentName}`, 'color: #75fbfd;', changedProps);
        }
      }

      const timeStr = (time / 1000).toFixed(1);
      console.log(
        `%c[useDebugPerf =>] %c 警告: ${timeStr}s内渲染次数超过:${maxCount}次; %c 组件名称: ${componentName}`,
        'color: #75fbfd;',
        'color: #ef906e;',
        'color: #33b9ff;'
      );
    }
    prevProps.current = props;
    if (!timer.current) {
      timer.current = setTimeout(() => {
        count.current = 0;
        clearTimeout(timer.current);
        timer.current = null;
      }, time);
    }

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = null;
      }
    };
  });
};

export default useDebugPerf;
