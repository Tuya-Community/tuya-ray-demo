import { createTemporaryPassword } from '@ray-js/ray'

import { getCachedLaunchOptions } from './getCachedLaunchOptions';
import { ApiCreatorBase } from './base';
import { ICreatePasswordParams, IDeleteParams, IUpdateParams, IRecordItem } from './interface';

/** WIFI公版接口 */
export default class WiFiApi extends ApiCreatorBase {
  createPwd<P = ICreatePasswordParams, R = IRecordItem & { pwdName: string }>(params: P): Promise<R & any> {
    // const devId = getCachedLaunchOptions()?.query?.deviceId;
    // return createTemporaryPassword({
    //   devId,
    //   availTime: 0,
    //   sn: 0,
    //   effectiveTime: 0,
    //   invalidTime: 0,
    //   symbolic: false,
    //   ...params,
    // });
    return Promise.reject('wifi协议功能实现中');
  }

  updatePwd(params: IUpdateParams): Promise<boolean> {
    return Promise.resolve(true);
  }

  deletePwdApi(params: IUpdateParams): Promise<boolean> {
    const devId = getCachedLaunchOptions()?.query?.deviceId;
    return Promise.reject('wifi协议功能实现中');
  }

  deletePwd(params: IDeleteParams): Promise<boolean> {
    // return this.checkAndDelete(params);
    return Promise.reject('wifi协议功能实现中');
  }
}
