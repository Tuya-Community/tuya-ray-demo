/* eslint-disable prefer-promise-reject-errors */
import logger from '@/hybrid-mini-robot-map/protocol/loggerUtil';
import { p2p } from '@ray-js/ray';
import moment from 'moment';

interface ErrorCbParams {
  errorMsg: string;
  errorCode: string | number;
  innerError: {
    errorCode: string | number;
    errorMsg: string;
  };
}

/**
 * P2P 工具类
 */
export default class P2pApi {
  // P2p连接状态
  isConnected: boolean;
  offSessionStatusChange: () => void;
  devId: string;
  constructor() {
    this.isConnected = false;
  }

  /**
   * 设备断开之后的重连
   */
  reconnectP2p = (successCb?: () => void) => {
    /**
     * 监听到断开事件后
     * 连接成功后设置flag为true
     * 并清除定时器
     */
    this.isConnected = false;
    if (!this.isConnected) {
      console.log('reconnecting ==>');
      console.info('开始P2P重连 ==>', moment().format('YYYY-MM-DD HH:mm:ss'));
      this.connectDevice(
        () => {
          console.info('P2P重连成功 ==>', moment().format('YYYY-MM-DD HH:mm:ss'));
          this.isConnected = true;
          console.log('reconnected ==>');
          if (this.isConnected) {
            typeof successCb === 'function' && successCb();
          }
        },
        () => {},
        () => {
          console.log('reconnect complete ==>', this.isConnected);
          if (!this.isConnected) {
            console.info('P2P重连失败 ==>', moment().format('YYYY-MM-DD HH:mm:ss'));
            this.reconnectP2p(successCb);
          }
        }
      );
    }
  };

  /**
   * 初始化P2P SDK
   * @param id 用户Id
   * @returns
   */
  initP2pSdk = async (devId: string) => {
    return new Promise<boolean>((resolve, reject) => {
      try {
        this.devId = devId;
        p2p.P2PSDKInit({
          success: () => {
            console.log('P2PSDKInit success');
            resolve(true);
          },
          fail: (params: ErrorCbParams) => {
            console.log('P2PSDKInit fail', params);
            resolve(false);
          },
        });
      } catch (e) {
        reject(false);
      }
    });
  };

  /**
   * 连接设备
   * @returns
   */
  connectDevice = (successCb?: () => void, failCb?: () => void, completeCb?: () => void) => {
    return new Promise<boolean>((resolve, reject) => {
      try {
        p2p.connectDevice({
          deviceId: this.devId,
          timeout: 5000,
          mode: 0,
          success: () => {
            console.log('connectDevice success');
            this.isConnected = true;
            typeof successCb === 'function' && successCb();
            resolve(true);
          },
          fail: (params: ErrorCbParams) => {
            console.log('connectDevice failed', params);
            console.log(failCb);
            typeof failCb === 'function' && failCb();
            resolve(false);
          },
          complete: () => {
            typeof completeCb === 'function' && completeCb();
          },
        });
      } catch (e) {
        console.log(e);
        reject(false);
      }
    });
  };

  /**
   * 断开P2P设备连接
   * @returns
   */
  disconnectDevice = () => {
    return new Promise<boolean>((resolve, reject) => {
      try {
        p2p.disconnectDevice({
          deviceId: this.devId,
          success: () => {
            this.isConnected = false;
            console.log('disconnectDevice, success');
            resolve(true);
          },
          fail: () => {
            resolve(false);
          },
        });
      } catch (e) {
        reject(false);
      }
    });
  };

  /**
   * 开始P2p流传输
   * @param files
   * @param albumName
   * @param filePath
   * @param successCb
   * @param failedCb
   * @returns
   */
  downloadStream = (
    files: { files: Array<string> },
    albumName: string,
    successCb?: () => void,
    failedCb?: () => void
  ) => {
    try {
      if (this.isConnected) {
        return new Promise((resolve, reject) => {
          p2p.downloadStream({
            deviceId: this.devId,
            albumName: albumName,
            jsonfiles: JSON.stringify(files),
            success: () => {
              console.log('downloadStream success');
              typeof successCb === 'function' && successCb();
              resolve(true);
            },
            fail: (params: ErrorCbParams) => {
              console.log('downloadStream fail', params);
              setTimeout(() => {
                typeof failedCb === 'function' && failedCb();
              }, 500);
              resolve(false);
            },
            complete: () => {},
          });
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * 监听p2p传输数据流
   * @param callback
   * @returns
   */
  onP2pStreamPacketReceive = (callback: { (...args: any[]): void }) => {
    p2p.onStreamPacketReceive(callback);
    return () => {
      // 反注册监听
      p2p.offStreamPacketReceive(callback);
    };
  };

  /**
   * 开始下载文件
   * files : {"files":["filesname1", "filesname2", "filesname3" ]}
   */
  downloadFile = (
    files: { files: Array<string> },
    albumName: string,
    filePath: string,
    successCb?: () => void,
    failedCb?: () => void
  ) => {
    try {
      if (this.isConnected) {
        return new Promise((resolve, reject) => {
          p2p.downloadFile({
            deviceId: this.devId,
            albumName: albumName,
            filePath: filePath,
            jsonfiles: JSON.stringify(files),
            success: () => {
              console.log('downloadFile success');
              typeof successCb === 'function' && successCb();
              resolve(true);
            },
            fail: (params: ErrorCbParams) => {
              console.log('downloadFile fail', params);
              setTimeout(() => {
                typeof failedCb === 'function' && failedCb();
              }, 500);
              resolve(false);
            },
            complete: () => {},
          });
        });
      }
    } catch (e) {
      console.log(e);
    }
    return null;
  };

  /**
   * 注册下载监听事件
   * @param callback
   * @returns
   */
  onDownloadProgressUpdate = (callback: { (...args: any[]): void }) => {
    p2p.onDownloadProgressUpdate(callback);
    return () => {
      // 反注册监听
      p2p.offDownloadProgressUpdate(callback);
    };
  };

  /**
   * 注册多文件下载进度监听
   * @param callback
   * @returns
   */
  onDownloadTotalProgressUpdate = (callback: { (...args: any[]): void }) => {
    p2p.onDownloadTotalProgressUpdate(callback);
    return () => {
      // 反注册监听
      p2p.offDownloadTotalProgressUpdate(callback);
    };
  };

  /**
   * 注册单文件下载进度完成监听
   * @param callback
   * @returns
   */
  onFileDownloadComplete = (callback: { (...args: any[]): void }) => {
    p2p.onFileDownloadComplete(callback);
    return () => {
      // 反注册监听
      p2p.offFileDownloadComplete(callback);
    };
  };

  /**
   * 注册设备因为其他异常断开连接的事件
   * @returns
   */
  onSessionStatusChange = (callback: { (...args: any[]): void }) => {
    p2p.onSessionStatusChange(callback);
    this.offSessionStatusChange = () => {
      // 反注册监听
      p2p.offSessionStatusChange(callback);
    };
    return this.offSessionStatusChange;
  };

  /**
   * 取消进行下载
   * @returns
   */
  cancelDownloadTask = () => {
    return new Promise((resolve, reject) => {
      try {
        p2p.cancelDownloadTask({
          deviceId: this.devId,
          success: () => {
            resolve(true);
          },
          fail: () => {
            reject(false);
          },
        });
      } catch (e) {
        logger.info('【P2pApi】==> cancelDownloadTask occur error', e);
        reject(false);
      }
    });
  };

  /**
   * 查询设备相册文件列表
   * @param albumName
   * @returns
   */
  queryAlbumFileIndexs = (albumName: string) => {
    return new Promise((resolve, reject) => {
      p2p.queryAlbumFileIndexs({
        deviceId: this.devId,
        albumName,
        success: (params: { count: number; items: any[] }) => {
          console.log('queryAlbumFileIndexs', params);
          resolve(params);
        },
        fail: (params: ErrorCbParams) => {
          console.log('queryAlbumFileIndexs', params);
          resolve(null);
        },
      });
    });
  };

  /**
   * P2p SDK 销毁
   * @returns
   */
  deInitP2PSDK = async () => {
    // 先销毁断开监听
    typeof this.offSessionStatusChange === 'function' && this.offSessionStatusChange();
    // 销毁初始化时,先进行断连操作
    if (this.isConnected) {
      await this.disconnectDevice();
    }
    return new Promise<boolean>((resolve, reject) => {
      try {
        p2p.deInitSDK({
          success: () => {
            logger.info('【P2pApi】==> deInitP2pSDK success');
            resolve(true);
          },
          fail: () => {
            resolve(false);
          },
          complete: () => {
            resolve(true);
          },
        });
      } catch (e) {
        reject(false);
      }
    });
  };
}
