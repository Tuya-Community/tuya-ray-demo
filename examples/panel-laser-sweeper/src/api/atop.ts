import { JsonUtil } from '@/utils';
import { apiRequestByAtop } from '@ray-js/ray';

const api = <T>(url, postData, v = '1.0') => {
  return new Promise<T>((resolve, reject) => {
    const params = {
      api: url,
      postData: postData,
      version: v,
    };

    apiRequestByAtop({
      ...params,
      success: d => {
        const data = typeof d === 'string' ? JsonUtil.parseJSON(d) : d;

        console.log(
          `%c API调用成功: ${url}`,
          'color: white; background-color: green; padding: 2px;',
          params,
          data
        );

        resolve(data);
      },
      fail: err => {
        const e = typeof err === 'string' ? JsonUtil.parseJSON(err) : err;

        console.log(
          `%c API调用失败: ${url}`,
          'color: white; background-color: red; padding: 2px;',
          params,
          e
        );
        reject(e?.innerError?.errorMsg);
      },
    });
  });
};

export const getOssUrl = () => {
  return api<string>('tuya.m.app.panel.url.get', {}, '1.0');
};
