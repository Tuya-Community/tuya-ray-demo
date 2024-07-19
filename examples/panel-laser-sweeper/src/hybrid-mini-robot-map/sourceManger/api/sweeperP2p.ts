/* eslint-disable no-shadow */
import P2pApi from './p2pApi';
import Base64 from 'base64-js';
import _ from 'lodash';
import logger from '../../protocol/utils/loggerUtil';
/**
 * 基于P2p工具类的扫地机扩展实现
 */
interface FileInfo {
  channel: number; // 通道号
  createTime: number; // 创建时间戳
  dir: number; // 文件目录
  duration: number; // 视频文件时长
  filename: string; // 文件名，带有文件后缀
  idx: number; // 文件索引 唯一标识，设备提供
  type: number; // 文件类型 文件类型，0: 图片，2: mp4, 3: 全景拼接文件
}

type PacketData = {
  deviceId: string;
  totalFiles: number;
  fileIndex: number;
  fileName: 'map.bin' | 'cleanPath.bin' | 'map.bin.stream' | 'cleanPath.bin.stream';
  fileLength: number;
  packetData: string;
  // 组索引
  fileSerialNumber: number;
  // 包索引
  packetIndex: number;
  packetLength: string;
  /**
   * 0 中间包
   * 1 第一包
   * 2 末尾包
   * 3 既是第一包也是末尾包
   */
  packetType: number;
};

const FILE_NAME_MAP = {
  'map.bin': {
    type: 0,
  },
  'cleanPath.bin': {
    type: 1,
  },
  'map.bin.stream': {
    type: 0,
  },
  'cleanPath.bin.stream': {
    type: 1,
  },
} as const;

// 走p2p流传输(新) or 读取bin文件(旧)
const shouldDownloadStream = Boolean(ty.p2p.downloadStream && ty.p2p.onStreamPacketReceive);
// const shouldDownloadStream = false;

interface Props {
  devId: string;
}

export class SweeperP2p extends P2pApi {
  file: { items: Array<FileInfo>; count: number } | undefined;
  albumName: string;
  streamFilePath: string;
  dataFilePath: string;
  mapBinData: string;
  navPathBinData: string;
  cleanPathBinData: string;
  mapBinStream: string;
  navPathBinStream: string;
  cleanPathBinStream: string;
  downloadType: number;
  readingMap: boolean;
  readingClean: boolean;
  readingNav: boolean;
  cacheDir: string;
  fileIndex: number;
  cacheData: any;
  packetDataCacheMap: Map<keyof typeof FILE_NAME_MAP, Map<number, string>>;
  packetSerialNumberCacheMap: Map<keyof typeof FILE_NAME_MAP, number>;
  packetTotalMap: Map<keyof typeof FILE_NAME_MAP, number>;
  onReceiveMapData: (data: string) => void;
  onReceivePathData: (data: string) => void;
  offFileDownloadComplete: () => void;
  offP2pStreamPacketReceive: () => void;
  offDownLoadProgressUpdate: () => void;
  offTotalDownLoadProgressUpdate: () => void;

  constructor() {
    super();
    this.file = undefined;
    this.downloadType = 1;
    this.fileIndex = -1; // -1 表示所有文件下载完成
    this.albumName = 'ipc_sweeper_robot';
    this.mapBinData = 'map.bin';
    this.navPathBinData = 'navPath.bin';
    this.cleanPathBinData = 'cleanPath.bin';
    this.mapBinStream = 'map.bin.stream';
    this.navPathBinStream = 'navPath.bin.stream';
    this.cleanPathBinStream = 'cleanPath.bin.stream';
    this.cacheDir = ty.env.USER_DATA_PATH;
    this.readingMap = false;
    this.readingClean = false;
    this.readingNav = false;
    this.cacheData = {};
    this.packetTotalMap = new Map([
      ['map.bin', -1],
      ['cleanPath.bin', -1],
      ['map.bin.stream', -1],
      ['cleanPath.bin.stream', -1],
    ]);
    this.packetSerialNumberCacheMap = new Map([
      ['map.bin', -1],
      ['cleanPath.bin', -1],
      ['map.bin.stream', -1],
      ['cleanPath.bin.stream', -1],
    ]);
    this.packetDataCacheMap = new Map([
      ['map.bin', new Map()],
      ['cleanPath.bin', new Map()],
      ['map.bin.stream', new Map()],
      ['cleanPath.bin.stream', new Map()],
    ]);
  }

  private setStreamFilePath = (devId: string) => {
    // this.streamFilePath = this.cacheDir + `/${this.albumName}/${devId}/stream`;
    if (/usr/.test(this.cacheDir)) {
      this.streamFilePath = this.cacheDir;
    } else {
      this.streamFilePath = this.cacheDir + 'usr';
    }
    // 检查存储文件目录是否存在
    // this.initFilePath(this.streamFilePath);
  };

  private setDataFilePath = (devId: string) => {
    // this.dataFilePath = this.cacheDir + `/${this.albumName}/${devId}/data`;
    if (/usr/.test(this.cacheDir)) {
      this.dataFilePath = this.cacheDir;
    } else {
      this.streamFilePath = this.cacheDir + 'usr';
    }
    // 检查存储文件目录是否存在
    // this.initFilePath(this.dataFilePath);
  };

  /**
   * 获取流文件存储地址
   * @param fileName
   * @returns
   */
  private getStreamFilePath = (fileName: string) => {
    return this.streamFilePath + '/' + fileName;
  };

  /**
   * 获取完整文件存储地址
   * @param fileName
   * @returns
   */
  private getDataFilePath = (fileName: string) => {
    return this.dataFilePath + '/' + fileName;
  };

  /**
   * 创建文件路径文件夹
   * @param filePath
   * @returns
   */
  private createFilePath = (filePath: string) => {
    try {
      ty.getFileSystemManager().mkdirSync({ dirPath: filePath, recursive: true });
      console.log('mkdirSync success: filePath ==>', filePath);
      return true;
    } catch (e) {
      console.log('mkdirSync error ==>', e);
      return false;
    }
  };

  /**
   * 检查当前文件目录是否存在
   * @param filePath
   * @returns
   */
  private checkIfDirIsExist = (filePath: string) => {
    return new Promise<boolean>((resolve, reject) => {
      ty.getFileSystemManager().access({
        path: filePath,
        success(params) {
          console.info('file access success ==>', params);
          resolve(true);
        },
        fail(params) {
          console.info('file access fail ==>', params);
          resolve(false);
        },
      });
    });
  };

  /**
   * 初始化文件目录
   * @param filePath
   * @returns
   */
  private initFilePath = async (filePath: string) => {
    const isDir = await this.checkIfDirIsExist(filePath);
    if (!isDir) {
      const result = this.createFilePath(filePath);
      return result;
    }

    return isDir;
  };

  /**
   * 根据文件名返回对应的fileType
   * @param filename
   */
  private getFileType = (filename: string) => {
    if (filename.indexOf('map') !== -1) {
      return 0;
    }
    if (filename.indexOf('cleanPath') !== -1) {
      return 1;
    }
    if (filename.indexOf('navPath') !== -1) {
      return 3;
    }
    return 2;
  };

  /**
   * 设备连接状态发生改变
   * @param data
   */
  sessionStatusCallback = (data: { deviceId: string; status: number }) => {
    logger.info('【SweeperP2p】==> sessionStatusCallback', data);
    if (data) {
      const { status } = data;
      if (status < 0) {
        console.info('收到P2P连接断开通知 ==>', status);
        this.reconnectP2p(() => {
          // 重连之后重新开启文件下载, 这里的成功不需要注册断开事件
          this.startObserverSweeperDataByP2P(
            this.downloadType,
            this.devId,
            this.onReceiveMapData,
            this.onReceivePathData
          );
        });
      }
    }
  };

  /**
   * 开始进行文件下载
   * @param downloadType
   * 0: 下载断开 1: 持续下载
   */
  startObserverSweeperDataByP2P = async (
    downloadType: number,
    devId: string,
    onReceiveMapData: (data: string) => void,
    onReceivePathData: (data: string) => void
  ) => {
    if (![0, 1].some(item => item === downloadType)) {
      logger.info('【SweeperP2p】==> 下载类型必须是0或1');
      return;
    }
    this.onReceiveMapData = onReceiveMapData;
    this.onReceivePathData = onReceivePathData;
    logger.info('【SweeperP2p】 ==> startObserverSweeperDataByP2P ==>');
    this.downloadType = downloadType;
    this.setDataFilePath(devId);
    this.setStreamFilePath(devId);
    // 先移除监听,再重新注册
    this.removeP2pDownloadEvent();
    this.registerP2pDownloadEvent();
    if (!this.file) {
      this.file = await this.queryAlbumFileIndexs(this.albumName);
    }
    if (this.file && this.file.items?.length > 0) {
      if (this.downloadType === 0) {
        const exitFiles = this.queryNeedFiles(this.file.items);
        if (exitFiles.length > 0) {
          if (shouldDownloadStream) {
            // 开启p2p流传输
            this.downloadStream({ files: exitFiles }, this.albumName);
          } else if (await this.initFilePath(this.dataFilePath)) {
            this.downloadFile({ files: exitFiles }, this.albumName, this.dataFilePath);
          }
        }
      } else if (this.downloadType === 1) {
        const exitFiles = this.queryNeedFiles(this.file.items);
        if (exitFiles.length > 0) {
          if (shouldDownloadStream) {
            // 开启p2p流传输
            this.downloadStream({ files: exitFiles }, this.albumName);
          } else if (await this.initFilePath(this.streamFilePath)) {
            // 每次要下载前都需要先检查文件目录是否存在 防止中间过程被删除掉文件目录
            this.downloadFile({ files: exitFiles }, this.albumName, this.streamFilePath);
          }
        }
      }
    }
  };

  /**
   * 注册下载有关的监听
   */
  private registerP2pDownloadEvent = () => {
    if (shouldDownloadStream) {
      // p2p数据流监听
      this.offP2pStreamPacketReceive = this.onP2pStreamPacketReceive(
        this.p2pStreamPacketReceiveCallback
      );
    } else {
      // 注册下载完成的监听
      this.offFileDownloadComplete = this.onFileDownloadComplete(this.fileDownloadCompleteCallback);
    }

    // this.offDownLoadProgressUpdate = this.onDownloadProgressUpdate(
    //   this.fileDownloadProgressCallback
    // );
    // this.offTotalDownLoadProgressUpdate = this.onDownloadTotalProgressUpdate(
    //   this.fileTotalDownloadProgressCallback
    // );
  };

  /**
   * 移除下载有关的监听
   */
  private removeP2pDownloadEvent = () => {
    this.offFileDownloadComplete && this.offFileDownloadComplete();
    this.offP2pStreamPacketReceive && this.offP2pStreamPacketReceive();

    if (shouldDownloadStream) {
      [...this.packetSerialNumberCacheMap.keys()].forEach(key => {
        this.packetSerialNumberCacheMap.set(key, -1);
      });

      [...this.packetTotalMap.keys()].forEach(key => {
        this.packetTotalMap.set(key, -1);
      });

      [...this.packetDataCacheMap.keys()].forEach(key => {
        this.packetDataCacheMap.set(key, new Map());
      });
    } else {
      this.cacheData = {};
    }

    // this.offDownLoadProgressUpdate && this.offDownLoadProgressUpdate();
    // this.offTotalDownLoadProgressUpdate && this.offTotalDownLoadProgressUpdate();
  };

  /**
   * 单文件下载完成回调
   * @param downloadComplete
   */
  private fileDownloadCompleteCallback = (data: {
    progress: number;
    index: number;
    fileName: string;
  }) => {
    // logger.info('【SweeperP2p】==> fileDownloadCompleteCallback', data);
    if (data) {
      const { fileName, index } = data;
      if (fileName) {
        this.fileIndex = index;
        const path =
          this.downloadType === 0
            ? this.getDataFilePath(fileName)
            : this.getStreamFilePath(fileName);
        this.readFileFromPath(fileName, path);
      }
    }
  };

  /**
   * p2p数据流回调
   * @param downloadComplete
   */
  private p2pStreamPacketReceiveCallback = (data: PacketData) => {
    const { fileName, packetData, fileSerialNumber, packetIndex, packetType } = data;
    const cachePacketMap = this.packetDataCacheMap.get(fileName);
    const cacheSerialNumber = this.packetSerialNumberCacheMap.get(fileName);

    // 说明收到了过时包的数据
    if (fileSerialNumber < cacheSerialNumber) return;

    // 说明收到了新的整包数据
    if (fileSerialNumber > cacheSerialNumber) {
      this.packetSerialNumberCacheMap.set(fileName, fileSerialNumber);
      this.packetTotalMap.set(fileName, -1);
      cachePacketMap.clear();
    }

    if (packetType === 2 || packetType === 3) {
      // 收到了末尾包, packetIndex + 1代表这组包的总数
      this.packetTotalMap.set(fileName, packetIndex + 1);
    }

    const packetTotal = this.packetTotalMap.get(fileName);

    cachePacketMap.set(packetIndex, packetData);

    if (packetTotal > -1) {
      // 说明收到过末尾包了，只需要验证总包数是否吻合
      const packetDatas = [...cachePacketMap.entries()];
      if (packetDatas.length === packetTotal) {
        packetDatas.sort((a, b) => a[0] - b[0]);

        // 排序 - 组装 - 发出
        const hexValue = packetDatas.map(([index, data]) => data).join('');

        const { type } = FILE_NAME_MAP[fileName];
        if (this.cacheData[type] !== hexValue) {
          if (type === 0) {
            this.onReceiveMapData(hexValue);
          }
          if (type === 1) {
            this.onReceivePathData(hexValue);
          }

          this.cacheData[type] = hexValue;
        }
      }
    }
  };

  /**
   * 单文件下载完成回调
   * @param data
   */
  private fileDownloadProgressCallback = (data: {
    progress: number;
    deviceId: string;
    fileName: string;
  }) => {
    // console.log('fileDownloadProgressCallback', data);
  };

  /**
   * 多文件下载进度监听
   * @param data
   */
  private fileTotalDownloadProgressCallback = (data: { progress: number; deviceId: string }) => {
    // console.log('fileTotalDownloadProgressCallback', data );
  };

  /**
   * 从指定的文件路径获取文件
   * @param fileName
   * @param filePath
   */
  private readFileFromPath = (fileName: string, filePath: string) => {
    if (!this.setReading(fileName)) return;
    try {
      ty.getFileSystemManager().readFile({
        filePath,
        encoding: 'base64',
        position: 0,
        success: (params: { data: string }) => {
          this.resetReading(fileName);
          const bytes = Base64.toByteArray(params.data);
          const hexValue = _(bytes)
            .map(d => _.padStart(d.toString(16), 2, '0'))
            .value()
            .join('');
          const type = this.getFileType(fileName);
          if (this.cacheData[type] !== hexValue) {
            if (hexValue.length === 0) {
              logger.info('【SweeperP2p】 ==> receive empty data');
              return;
            }

            if (type === 0) {
              this.onReceiveMapData(hexValue);
            }
            if (type === 1) {
              this.onReceivePathData(hexValue);
            }
            this.cacheData[type] = hexValue;
          }
        },
        fail: e => {
          logger.info('【SweeperP2p】 readFileFromPath failed\n', e);
          this.resetReading(fileName);
        },
      });
    } catch (e) {
      this.resetReading(fileName);
      logger.info('【SweeperP2p】readFileFromPath ==>', e);
    }
  };

  private setReading = (fileName: string) => {
    if (fileName.indexOf('map') !== -1) {
      if (this.readingMap === true) return false;
      this.readingMap = true;
      return true;
    }
    if (fileName.indexOf('cleanPath') !== -1) {
      if (this.readingClean === true) return false;
      this.readingClean = true;
      return true;
    }
    if (fileName.indexOf('navPath') !== -1) {
      if (this.readingNav === true) return false;
      this.readingNav = true;
      return true;
    }
    return true;
  };

  private resetReading = (fileName: string) => {
    if (fileName.indexOf('map') !== -1) {
      this.readingMap = false;
    } else if (fileName.indexOf('cleanPath') !== -1) {
      this.readingClean = false;
    } else if (fileName.indexOf('navPath') !== -1) {
      this.readingNav = false;
    }
  };

  /**
   * 查询返回的文件中是否包含了所需文件
   * @param fileList
   */
  private queryNeedFiles = (fileList: Array<FileInfo>) => {
    const exitFiles: string[] = [];
    const streamPattern = /bin.stream$/;
    const dataPattern = /bin$/;
    fileList &&
      fileList.forEach((item: FileInfo) => {
        if (this.downloadType === 0) {
          if (dataPattern.test(item.filename)) {
            exitFiles.push(item.filename);
          }
        } else if (this.downloadType === 1) {
          if (streamPattern.test(item.filename)) {
            exitFiles.push(item.filename);
          }
        }
      });
    return exitFiles;
  };

  /**
   * 停止文件下载
   */
  stopObserverSweeperDataByP2P = async () => {
    try {
      this.removeP2pDownloadEvent();
      const isCancel = await this.cancelDownloadTask();
      logger.info('【SweeperP2p】cancelDownloadTask ==>', isCancel);
      return isCancel;
    } catch (e) {
      logger.info('【SweeperP2p】stopObserverSweeperDataByP2P occur error ==>', e);
      return false;
    }
  };
}

const sweeperP2pInstance = new SweeperP2p();

export default sweeperP2pInstance;
