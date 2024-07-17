import { utils } from '@ray-js/panel-sdk';
import { decode } from 'js-base64';
import { useDevice } from '@ray-js/panel-sdk';

/**
 * 获取3d场景数据中的设备列表信息
 * @param dataMapId 是地板协议中的MapId 而非面板与App定义的MapId
 */
export const getD3DeviceList = (dataMapId: string): Promise<any[]> => {
  const { devId } = useDevice(device => device.devInfo);

  return new Promise((resolve, reject) => {
    ty.apiRequestByAtop({
      api: `${decode('dHV5YQ==')}.m.map.devices.list`,
      postData: {
        deviceId: devId,
        // 0: app私有 1: 面板私有 2: app，面板共享
        itemCategory: 1,
        mapId: dataMapId,
      },
      version: '1.0',
      success: d => {
        resolve(utils.parseJSON(d));
      },
      fail: e => {
        reject(e);
      },
    });
  });
};

/**
 * 增加编辑3d场景数据中的设备列表信息
 * @param dataMapId 是地板协议中的MapId 而非面板与App定义的MapId
 */
export const editD3DeviceList = (dataMapId: string, dataJson: string) => {
  const { devId } = useDevice(device => device.devInfo);

  return new Promise((resolve, reject) => {
    ty.apiRequestByAtop({
      api: `${decode('dHV5YQ==')}.m.map.devices.add`,
      postData: {
        deviceId: devId,
        mapId: dataMapId,
        paramsJson: dataJson,
      },
      version: '1.0',
      success: d => {
        resolve(utils.parseJSON(d));
      },
      fail: e => {
        console.log(e);
        reject(e);
      },
    });
  });
};

/**
 * 删除3d场景数据中的设备列表信息
 */
export const delD3DeviceList = (mapDevIds: string) => {
  const { devId } = useDevice(device => device.devInfo);

  return new Promise((resolve, reject) => {
    ty.apiRequestByAtop({
      api: `${decode('dHV5YQ==')}.m.map.devices.del`,
      postData: {
        deviceId: devId,
        mapDevIds: mapDevIds,
      },
      version: '1.0',
      success: d => {
        resolve(utils.parseJSON(d));
      },
      fail: e => {
        reject(e);
      },
    });
  });
};
/*
 * 请求地图信息
 */
export const getMultipleMapFiles = () => {
  const { devId } = useDevice(device => device.devInfo);

  return new Promise<{
    datas: Array<{
      extend: string;
      bucket: string;
      file: string;
      id: number;
      time: number;
      fileName: string;
    }>;
    totalCount: number;
  }>((resolve, reject) => {
    ty.apiRequestByAtop({
      api: `${decode('dHV5YQ==')}.m.dev.common.file.list`,
      postData: {
        devId: devId,
        fileType: 'collect_recode',
        offset: 0,
        limit: 5,
      },
      version: '1.0',
      success: d => {
        resolve(utils.parseJSON(d));
      },
      fail: e => {
        console.log(`${decode('dHV5YQ==')}.m.dev.common.file.list`, e);
        reject(e);
      },
    });
  });
};

/**
 * 多地图命名接口
 * @returns
 */
export const updateFileName = (id: string, fileName: string) => {
  const { devId } = useDevice(device => device.devInfo);

  return new Promise<{
    result: boolean;
    success: boolean;
    status: string;
  }>((resolve, reject) => {
    ty.apiRequestByAtop({
      api: `${decode('dHV5YQ==')}.m.sweeper.file.name.update`,
      postData: {
        id,
        fileName,
        devId: devId,
      },
      version: '1.0',
      success: d => {
        resolve(utils.parseJSON(d));
      },
      fail: e => {
        reject(e);
      },
    });
  });
};
