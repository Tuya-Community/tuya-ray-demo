import { EffectCallback, useEffect } from 'react';

/**
 * https://github.com/streamich/react-use/blob/master/docs/useEffectOnce.md
 */
const useEffectOnce = (effect: EffectCallback) => {
  useEffect(effect, []);
};

export default useEffectOnce;
