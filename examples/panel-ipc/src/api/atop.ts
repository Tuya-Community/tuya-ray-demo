import { JsonUtil, getAnonymityNameStr } from '@/utils/index';
import { store, actions as ReduxActions } from '@/redux';
import Storage from '@/api/storage';
import { talkType, cameraConfig } from '@/config/storage';

const errStyle = 'background: red; color: #fff;';

const api = (a, postData, v = '1.0') => {
  return new Promise((resolve, reject) => {
    const params = {
      api: a,
      postData: postData,
      version: v,
    };
    ty.apiRequestByAtop({
      ...params,
      success: d => {
        const data = typeof d === 'string' ? JsonUtil.parseJSON(d) : d;
        resolve(data);
      },
      fail: err => {
        const e = typeof err === 'string' ? JsonUtil.parseJSON(err) : err;
        console.log(`API Failed: %c${a}%o`, errStyle, e.message || e.errorMsg || e);
        reject();
      },
    });
  });
};

// 摄像头配置信息
// 存到缓存
// （目前只有经过配网的设备可获取到，虚拟设备后续云端增加默认数据）
const getConfigFromAtop = (devId: string): Promise<{ success: boolean; [name: string]: any }> => {
  return new Promise(resolve => {
    Storage.getDevItem(cameraConfig)
      .then(res1 => {
        if (res1) {
          resolve({
            success: true,
            ...res1,
          });
        } else {
          ty.device.getCameraConfigInfo({
            devId,
            success: res => {
              console.log(res, 'Config Success');
              resolve({
                success: true,
                ...res,
              });
            },
            fail: err => {
              console.log(err, 'Config Fail');
              resolve({
                success: false,
              });
            },
          });
        }
      })
      .catch(() => {
        resolve({
          success: false,
        });
      });
  });
};

/**
 * 主设备摄像头配置
 */
export const getCameraConfig = (devId: string) => {
  const { dispatch } = store;

  Promise.all([getConfigFromAtop(devId), Storage.getDevItem(talkType)])
    .then(([config1, config2]) => {
      const obj = config1.success
        ? {
            isSupportedTalk: config1.audioAttributes.hardwareCapability.includes(2),
            isSupportedSound: config1.audioAttributes.hardwareCapability.includes(1),
            supportedAudioMode: config2 || 1,
            videoClarityList: config1.vedioClaritys,
            videoClarity: config1.vedioClarity,
            supportedTalkType: config1.audioAttributes?.callMode,
          }
        : {
            supportedAudioMode: config2 || 1,
          };
      dispatch(ReduxActions.common.mainDeviceCameraConfig(obj));
    })
    .catch(err => {
      console.log(err);
    });
};
