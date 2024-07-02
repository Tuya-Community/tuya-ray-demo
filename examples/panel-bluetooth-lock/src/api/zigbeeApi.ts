/* eslint-disable max-classes-per-file */
import { getCachedLaunchOptions } from './getCachedLaunchOptions';
import { showNotification } from '@ray-js/ray';
import Strings from '@/i18n';
import { ApiCreatorBase } from './base';
import { ICreatePasswordParams, IUpdateParams, IDeleteParams, IRecordItem } from './interface';

export default class ZigBeeApi extends ApiCreatorBase {
  createPwd<P = ICreatePasswordParams, R = string>(params: P): Promise<R> {
    const devId = getCachedLaunchOptions()?.query?.deviceId;
    return Promise.reject('zigbee协议实现中');
  }

  updatePwd(params: IUpdateParams): Promise<boolean> {
    const devId = getCachedLaunchOptions()?.query?.deviceId;
    return Promise.reject('zigbee协议实现中');
  }

  deletePwdApi(params: IUpdateParams & { operate: '125' }): Promise<boolean> {
    return Promise.reject('zigbee协议实现中');
  }

  /** 删除列表密码 */
  deletePwd(params: IDeleteParams): Promise<boolean> {
    // if (!params.deviceOnline) {
    //   showNotification({
    //     message: Strings.getLang('off'),
    //     autoCloseTime: 3000,
    //   });
    //   return Promise.resolve(false);
    // }
    return Promise.reject('zigbee协议实现中');
  }
}
