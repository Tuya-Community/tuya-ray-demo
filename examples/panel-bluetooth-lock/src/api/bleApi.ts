/* eslint-disable max-classes-per-file */
import { utils } from '@ray-js/panel-sdk';
import {
  showToast,
  onDpDataChange,
  offDpDataChange,
  deleteTemporaryPassword,
  createTemporaryPassword,
  updateTempPassword,
} from '@ray-js/ray';
import { padStart } from 'lodash';

import Strings from '@/i18n';
import { store } from '@/redux';
import { putDpData } from '@/utils/sendDp';
import { connectBLEDevice } from '@/utils/ble';

import { ApiCreatorBase } from './base';
import { getCachedLaunchOptions } from './getCachedLaunchOptions';
import {
  ICreatePasswordParams,
  IDeleteParams,
  IUpdateParams,
  IScheduleType,
  ICreatePasswordResult,
} from './interface';

const { numToHexString } = utils;

/** 蓝牙公版接口 */

// 蓝牙临时密码相关dp组成文档：https://developer.tuya.com/cn/docs/iot/ble?id=K9ow3vcpn71ua#title-8-%E4%B8%B4%E6%97%B6%E5%AF%86%E7%A0%81%E7%AE%A1%E7%90%86
export default class BlueToothAPi extends ApiCreatorBase {
  createPwd<T = ICreatePasswordParams, R = ICreatePasswordResult>(params: T): Promise<R> {
    return Promise.resolve(
      this.listenCreateDp(params).then((res: R) => {
        offDpDataChange(data => {});
        return res;
      })
    );
  }

  updatePwd(params: IUpdateParams): Promise<boolean> {
    return Promise.resolve(
      this.listenUpdateDp(params).then(res => {
        offDpDataChange(data => {});
        return true;
      })
    );
  }

  deletePwdApi(params: Omit<IDeleteParams, 'deviceOnline'>): Promise<boolean> {
    const devId = getCachedLaunchOptions()?.query?.deviceId;
    return deleteTemporaryPassword({
      devId,
      unlockBindingId: params.id,
    });
  }

  /**
   * 删除密码，先判断设备是否在线
   * @param params
   * @returns
   */
  deletePwd({ deviceOnline, ...restParams }: IDeleteParams): Promise<boolean> {
    if (!deviceOnline) {
      connectBLEDevice();
      return Promise.reject({ message: Strings.getLang('off') });
    }

    if (restParams.pwdType === 0) {
      putDpData('temporary_password_delete', numToHexString(restParams.sn as number, 2));
      return this.listenDeleteDp(restParams.id as number).then(() => true);
    }

    return this.checkAndDeletePwd(restParams);
  }

  listenDeleteDp = (deleteId: number) => {
    return new Promise((resolve, reject) => {
      onDpDataChange(data => {
        const { devInfo } = store.getState();
        const { schema } = devInfo;
        const dpId = schema['temporary_password_delete'].id;
        const temPwdDelete = data.dps[dpId] as string;
        if (temPwdDelete) {
          const status = temPwdDelete.slice(2, 4); // 返回阶段

          if (status === '00') {
            this.deletePwdApi({ id: deleteId })
              .then(resolve)
              .catch(reject);
            showToast({ title: Strings.getLang('Password_delete_success'), icon: 'success' });
          } else {
            reject();
            showToast({ title: Strings.getLang('Password_delete_failure'), icon: 'error' });
          }
        }
      });
    });
  };

  //  监听创建临时密码dp
  listenCreateDp = async <R = any, T = ICreatePasswordResult>(params: any) => {
    const scheduleInfo = {
      beginTime: params.effectiveTime,
      endTime: params.invalidTime,
      allDay: true,
      effectiveTime: 0,
      invalidTime: 0,
      workingDay: '',
    };
    Object.assign(scheduleInfo, params.schedule && JSON.parse(params.schedule)[0]);
    const dpData = this.getCreatePwdDpData(scheduleInfo, params.originalPassword);
    putDpData('temporary_password_creat', dpData);
    return new Promise((resolve, reject) => {
      onDpDataChange(data => {
        const { devInfo } = store.getState();
        const { schema } = devInfo;
        const dpId = schema['temporary_password_creat'].id;
        const temPwdCreate = data.dps[dpId] as string;
        if (temPwdCreate) {
          const devId = getCachedLaunchOptions()?.query?.deviceId;
          const unLockId = parseInt(temPwdCreate.slice(0, 2), 16);
          const status = temPwdCreate.slice(2, 4); // 返回阶段
          if (status === '00') {
            resolve(
              createTemporaryPassword({
                devId,
                symbolic: true, // 是否仅保存静态数据 单点蓝牙：true，双模或者带网关的蓝牙，需要云端下发或app正在下发时，填false, 否则填true
                dpTunnel: 2, // symbolic 为false 时，必填1. app 2. 云端 双模蓝牙+nb等设备公版需求时，填2
                availTime: 0,
                sn: unLockId,
                ...params,
              })
            );
          } else {
            reject({ message: Strings.getLang(`Password_add_error_${status}` as any) });
          }
        }
      });
    });
  };

  //  监听修改临时密码dp
  listenUpdateDp = async params => {
    const scheduleInfo = {
      beginTime: params.effectiveTime,
      endTime: params.invalidTime,
      allDay: true,
      effectiveTime: 0,
      invalidTime: 0,
      workingDay: '',
      sn: params.sn,
    };
    Object.assign(scheduleInfo, params.schedule && JSON.parse(params.schedule)[0]);

    const dpData = this.getUpdatePwdDpData(scheduleInfo);
    putDpData('temporary_password_modify', dpData);

    return new Promise((resolve, reject) => {
      onDpDataChange(data => {
        const { devInfo } = store.getState();
        const { schema } = devInfo;
        const dpId = schema['temporary_password_modify'].id;
        const temPwdUpdate = data.dps[dpId] as string;
        if (temPwdUpdate) {
          const status = temPwdUpdate.slice(2, 4); // 返回阶段

          if (status === '00') {
            const updateData = {
              unlockBindingId: params.id,
              ...params,
            };
            delete updateData.id;
            resolve(updateTempPassword(updateData));
          }
          reject({ message: Strings.getLang('Password_form_modifyError') });
        }
      });
    });
  };

  getUpdatePwdDpData = (params: IScheduleType): string => {
    const type = '01';

    const count = '00';
    // 修改临时密码 密码长度直接设置为0 不用下发临时密码数据
    const pswLen = '00';
    const { allDay = true, beginTime, endTime, effectiveTime, invalidTime, workingDay } = params;

    let time = '';
    const unLockId = padStart(params.sn?.toString(16), 2, '0');

    const beginTime2Hex = parseInt(String(beginTime)).toString(16);
    const endTime2Hex = parseInt(String(endTime)).toString(16);
    time += `${beginTime2Hex}${endTime2Hex}`;

    if (allDay) time += '000000000000000000';
    else {
      time += `02000000${padStart(parseInt(workingDay).toString(16), 2, '0')}`;
      time += `${padStart(parseInt(`${effectiveTime / 60}`, 10).toString(16), 2, '0')}${padStart(
        parseInt(`${+effectiveTime % 60}`, 10).toString(16),
        2,
        '0'
      )}`;
      time += `${padStart(parseInt(`${+invalidTime / 60}`, 10).toString(16), 2, '0')}${padStart(
        parseInt(`${+invalidTime % 60}`, 10).toString(16),
        2,
        '0'
      )}`;
    }
    return `${unLockId}${type}${time}${count}${pswLen}`;
  };

  getCreatePwdDpData = (params: IScheduleType, originalPassword: string): string => {
    const type = '01';

    const count = '00';
    const pswLen = padStart(originalPassword.length.toString(16), 2, '0');

    const resPassword = [...originalPassword]
      .map(i => padStart(Number(i).toString(16), 2, '0'))
      .join('');
    const { allDay = true, beginTime, endTime, effectiveTime, invalidTime, workingDay } = params;
    let time = '';
    const beginTime2Hex = parseInt(String(beginTime)).toString(16);
    const endTime2Hex = parseInt(String(endTime)).toString(16);
    time += `${beginTime2Hex}${endTime2Hex}`;

    if (allDay) {
      time += '000000000000000000';
    } else {
      time += `02000000${padStart(parseInt(workingDay).toString(16), 2, '0')}`; // 先补齐8位。转字符串.join()，2进制转10进制 parseInt(value, 2)。在转16进制 toString(16)。不足两位前面补充0
      time += `${padStart(parseInt(`${effectiveTime / 60}`, 10).toString(16), 2, '0')}${padStart(
        parseInt(`${+effectiveTime % 60}`, 10).toString(16),
        2,
        '0'
      )}`;
      time += `${padStart(parseInt(`${+invalidTime / 60}`, 10).toString(16), 2, '0')}${padStart(
        parseInt(`${+invalidTime % 60}`, 10).toString(16),
        2,
        '0'
      )}`;
    }
    return `${type}${time}${count}${pswLen}${resPassword}`;
  };
}
