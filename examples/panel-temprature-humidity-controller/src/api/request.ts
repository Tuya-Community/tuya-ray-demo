/* eslint-disable no-param-reassign */
import { request } from '@ray-js/ray';

export const api = (url: string, params: any) => {
  return new Promise((resolve, reject) => {
    delete params.errorTip;
    delete params.errorTipMsg;
    request({
      url: url,
      data: params,
      success: ({ data }) => {
        resolve(data);
      },
      failure: error => {
        reject(error);
      },
    });
  });
};

export const useRequest = (url: string, params: any = {}) => {
  return api(url, params);
};
