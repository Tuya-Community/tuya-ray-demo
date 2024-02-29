import { requestCloud } from '@ray-js/ray';

const errStyle = 'background: red; color: #fff;';

export function api(url: string, postData: any, version = '1.0') {
  return new Promise((resolve, reject) => {
    requestCloud({
      api: url,
      data: postData,
      version,
      success(data) {
        try {
          const res = typeof data === 'string' ? JSON.parse(data) : data;
          resolve(res);
        } catch (e) {
          console.log(`API 请求失败: %c${url}%o`, errStyle, data);
          resolve(data);
        }
      },
      fail({ errorMsg }) {
        try {
          const e = typeof errorMsg === 'string' ? JSON.parse(errorMsg) : errorMsg;
          reject(e);
        } catch (err) {
          console.log(`API 请求失败: 参数：`, postData);
          console.log(`API 请求失败: %c${url}%o`, errStyle, errorMsg);
          reject(errorMsg);
        }
      },
    });
  });
}
