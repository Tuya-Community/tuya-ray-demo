import { apiRequestByAtop } from '@ray-js/ray';

const errStyle = 'background: red; color: #fff;';

export const JsonUtil = {
  parseJSON(str) {
    let rst;
    if (str && {}.toString.call(str) === '[object String]') {
      try {
        rst = JSON.parse(str);
      } catch (e) {
        try {
          // eslint-disable-next-line
          rst = eval(`(${str})`);
        } catch (e2) {
          rst = str;
        }
      }
    } else {
      rst = typeof str === 'undefined' ? {} : str;
    }

    return rst;
  },
};

export const api = <T>(
  a: string,
  postData: Record<string, any>,
  v = '1.0',
  extData?: Record<string, any>
) => {
  return new Promise<T>((resolve, reject) => {
    const params = {
      api: a,
      postData: postData,
      version: v,
      extData,
    };
    apiRequestByAtop({
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
