import { getZigbeeLocalGroupRelation } from '@ray-js/ray';
import { getCachedLaunchOptions } from './getCachedLaunchOptions';

export type ResGetZigbeeLocalIds = {
  locals: Array<{
    /**
     * 功能点 code
     */
    code: string;
    /**
     * 排序
     */
    order: number;
    /**
     * 设备端用到的群组 localId
     */
    localId: string;
    /**
     * 面板使用的 code，用来做映射，值以 300 为前缀，例如3001
     */
    categoryCode: string;
  }>;
};

// 获取图标配置
export const getZigbeeLocalIds = (): Promise<ResGetZigbeeLocalIds> => {
  const devId = getCachedLaunchOptions()?.query?.deviceId;
  // @ts-ignore
  return getZigbeeLocalGroupRelation({ devId });
  // return {
  //   locals: [
  //     {
  //       categoryCode: '3001',
  //       code: 'switch_1',
  //       localId: '10020',
  //     },
  //     {
  //       categoryCode: '3002',
  //       code: 'switch_2',
  //       localId: '10040',
  //     },
  //     {
  //       categoryCode: '3003',
  //       code: 'switch_3',
  //       localId: '10060',
  //     },
  //     {
  //       categoryCode: '3004',
  //       code: 'switch_4',
  //       localId: '10080',
  //     },
  //     {
  //       categoryCode: '3005',
  //       code: 'switch_5',
  //       localId: '10100',
  //     },
  //     {
  //       categoryCode: '3006',
  //       code: 'switch_6',
  //       localId: '10120',
  //     },
  //     {
  //       categoryCode: '3007',
  //       code: 'switch_7',
  //       localId: '10140',
  //     },
  //     {
  //       categoryCode: '3008',
  //       code: 'switch_8',
  //       localId: '10160',
  //     },
  //   ],
  // };
};
