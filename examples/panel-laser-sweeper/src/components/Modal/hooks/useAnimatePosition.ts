import { useState, useMemo, CSSProperties } from 'react';
import { Props } from '../type';

export const useAnimatePosition = (position: Props['position']) => {
  const [offset, setOffset] = useState(100);

  const open = () => {
    setOffset(0);
  };
  const close = () => {
    setOffset(100);
  };

  const style = useMemo<CSSProperties>(() => {
    if (position === 'top') {
      return {
        left: '50%',
        top: 0,
        transform: `translate(-50%, ${-offset}%)`,
      };
    }
    return {
      left: 0,
      bottom: 0,
      transform: `translateY(${offset}%)`,
    };
  }, [position, offset]);

  return {
    open,
    close,
    style,
  };
};
