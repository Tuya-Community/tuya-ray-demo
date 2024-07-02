import { useMemo } from 'react';

import { dpCodes } from '@/config';
import { useSelector } from '@/redux';

const useDpPermission = () => {
  const devInfo = useSelector(state => state.devInfo);

  const { schema } = devInfo;
  const dpExist: Record<string, boolean> = useMemo(() => {
    if (!schema) return {};
    const dpConfig = Object.keys(dpCodes).reduce((pre, curr) => {
      const dpCode = curr[0].toUpperCase() + curr.substring(1);
      return { ...pre, [`dp${dpCode}`]: !!schema[dpCodes[curr]] };
    }, {});
    return dpConfig || {};
  }, [schema]);

  return { ...dpExist };
};

export default useDpPermission;
