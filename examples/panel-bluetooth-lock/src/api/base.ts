import {
  router,
  showModal,
  getLockAuthList,
  getInvalidAuthList,
  clearInvalidAuthList,
  addMemberUnlockMethod,
  updateMemberUnlockMode,
  removeMemberUnlockMethod,
  getUnlockMethodDetail,
  getOfflinePassword,
  getDynamicPassword,
  revokeOfflinePassword,
  updateTempPasswordName,
  updateOfflinePasswordName,
  getFamilyMemberListWithUnlockCount,
} from '@ray-js/ray';

import Strings from '@/i18n';
import { globalConfig } from '@/config';
import { getPwdTypeBle } from '@/utils/temp';
import { getCachedLaunchOptions } from './getCachedLaunchOptions';
import {
  IDeleteParams,
  IUpdateParams,
  FetchInvalidListParams,
  IGetOfflinePwdParams,
  IGetEmptyCodeParams,
  IBleRecordItem,
} from './interface';

/** 基类: 临时密码 & 成员管理 相关接口 (蓝牙、wifi、zigbee)汇总 */
export abstract class ApiCreatorBase {
  private _devId = getCachedLaunchOptions()?.query?.deviceId;

  /** 创建密码 */
  public abstract createPwd<P, R>(params: P): Promise<R>;

  /** 列表删除密码 调用删除接口前置操作 */
  public abstract deletePwd(params: IDeleteParams): Promise<boolean>;

  /** 列表删除密码 具体接口 各公版不一致 */
  public abstract deletePwdApi(
    params: IUpdateParams | Omit<IDeleteParams, 'deviceOnline'>
  ): Promise<boolean>;

  /** 更新密码 */
  public abstract updatePwd(params: IUpdateParams): Promise<boolean>;

  /** 列表删除密码 */
  checkAndDeletePwd(params: Omit<IDeleteParams, 'deviceOnline'>): Promise<boolean> {
    const isOnlinePwd = params.pwdType === 0;
    const themeColor = globalConfig.getConfig('themeColor');
    return new Promise((resolve, reject) => {
      if (isOnlinePwd) {
        /** 非离线密码 */
        showModal({
          title: Strings.getLang('Password_ask_delete'),
          cancelText: Strings.getLang('Password_cancel'),
          confirmText: Strings.getLang('Password_confirm'),
          confirmColor: themeColor,
          success: res => {
            if (res.confirm) {
              this.deletePwdApi({
                name: params.name as string,
                effectiveTime: params.effectiveTime as number,
                invalidTime: params.invalidTime as number,
                operate: '125',
                id: params.id,
              })
                .then(res => {
                  resolve(res);
                })
                .catch(err => reject(err));
            }            
          },
        });
      } else {
        /** 离线密码删除获取清空码 */
        showModal({
          title: Strings.getLang('Password_DeletePassword'),
          content: Strings.getLang('Password_DeletePassword_Tip'),
          cancelText: Strings.getLang('Password_cancel'),
          confirmText: Strings.getLang('Password_confirm'),
          confirmColor: themeColor,
          success: res => {
            if (res.confirm) {
              resolve(true);
              const param = {
                name: params.name,
                id: params.id,
                authId: params.authId,
                effectiveTime: params.effectiveTime,
                invalidTime: params.invalidTime,
                scheduleList: params.scheduleList,
                pwdType: params.pwdType,
              };
              const queryString = Object.keys(param)
                .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
                .join('&');
  
              router.push(`/temp-emptyCode?${queryString}`);
            }
          },
        });
      }
    });
  }

  /** 临时密码列表数据 */
  fetchPwdList = async () => {
    const tempList = await getLockAuthList({
      devId: this._devId,
      authTypes: ['LOCK_OFFLINE_TEMP_PWD', 'LOCK_TEMP_PWD'],
    }) as unknown as IBleRecordItem[];
    
    const result = tempList?.map(item => ({
      ...item,
      id: item.unlockBindingId,
      scheduleList: item.scheduleDetails,
      pwdType: getPwdTypeBle(item.opModeType, item.opModeSubType),
    }));
    return Promise.resolve(result);
  };

  /** 失效密码列表 */
  fetchInvalidPwdList = async (params: FetchInvalidListParams) => {
    const tempInvalidList = await getInvalidAuthList({
      devId: this._devId,
      ...params,
    }) as unknown as { hasNext: boolean; totalCount: number; datas: IBleRecordItem[] }

    const result = {
      hasNext: tempInvalidList?.hasNext,
      totalCount: tempInvalidList?.totalCount,
      datas: tempInvalidList?.datas.map(item => ({
        ...item,
        id: item.unlockBindingId,
        scheduleList: item.scheduleDetails,
        pwdType: getPwdTypeBle(item.opModeType, item.opModeSubType),
      })),
    };

    return Promise.resolve(result);
  };

  /** 清空无效临时密码 */
  clearInvalidPwdList = () => {
    return clearInvalidAuthList({
      devId: this._devId,
    });
  };

  /** 获取离线临时密码 */
  getOfflinePwd = (params: IGetOfflinePwdParams) => {
    return getOfflinePassword({
      devId: this._devId,
      ...params,
    });
  };

  /** 获取短效动态密码 */
  getDynamicPwd = (adminPwd?: string) => {
    return getDynamicPassword({
      devId: this._devId,
      adminPwd,
    });
  };

  /** 获取清空码 */
  getPwdEmptyCode = (params: IGetEmptyCodeParams) => {
    const offlineRevokeInfo = {
      unlockBindingId: params.pwdId,
      name: params.pwdName,
    };
    console.log('params', params);
    if (params.clearAll) {
      return getOfflinePassword({
        devId: this._devId,
        pwdType: '9',
        gmtStart: 0,
        gmtExpired: 0,
        pwdName: params.pwdName,
      });
    } else {
      return revokeOfflinePassword({
        devId: this._devId,
        ...offlineRevokeInfo,
      });
    }
  };

  /** 重命名接口 */
  rePwdName = ({
    pwdType,
    ...restParams
  }: {
    pwdId: number | string;
    pwdType: number;
    name: string;
  }) => {
    if (pwdType === 0) {
      return updateTempPasswordName({
        devId: this._devId,
        name: restParams.name,
        unlockBindingId: restParams.pwdId as number,
      });
    }

    return updateOfflinePasswordName({
      devId: this._devId,
      pwdName: restParams.name,
      unlockBindingId: restParams.pwdId as string,
    });
  };

  // 相关接口文档：https://developer.tuya.com/cn/miniapp/develop/ray/api/lock/member-opmode#%E6%9F%A5%E8%AF%A2%E6%9F%90%E4%B8%AA%E8%A7%A3%E9%94%81%E6%96%B9%E5%BC%8F%E7%9A%84%E8%AF%A6%E6%83%85

  /** 成员列表数据 */
  fetchUserList = async (dpIds: number[]) => {
    return getFamilyMemberListWithUnlockCount({
      devId: this._devId,
      dpIds,
    });

  };
  /** 查询某个解锁方式的详情 */
  fetchUnlockDetail = (opModeId: number) => {
    return getUnlockMethodDetail({
      devId: this._devId,
      opModeId,
    });
  };

  /** 添加解锁方式 */
  addUnlock = (params) => {
    return addMemberUnlockMethod({
      devId: this._devId,
      ...params,
    });
  };

   /** 更新解锁方式 */
   updateUnlock = (params) => {
    return updateMemberUnlockMode({
      devId: this._devId,
      ...params,
    });
  };

   /** 删除解锁方式 */
   deleteUnlock = (opmodeId: number) => {
    return removeMemberUnlockMethod({
      devId: this._devId,
      opmodeId,
    });
  };
}
