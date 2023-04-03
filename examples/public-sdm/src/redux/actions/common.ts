import { SYSTEM_INFO } from '@/constant';

const systemInfo = (data: Record<string, any>) => {
  return { type: SYSTEM_INFO, payload: data };
};

export const actions = {
  systemInfo,
};
