/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
  async setItem(key: string, value: any) {
    const data = { value, type: typeof value };
    const jsonValue = JSON.stringify(data);
    return new Promise((resolve, reject) => {
      ty.setStorage({
        key,
        data: jsonValue,
        success: res => {
          resolve(res);
        },
        fail: err => {
          reject(err);
        },
      });
    });
  },
  async setDevItem(name: string, value: any) {
    return this.setItem(name, value);
  },
  async getItem(key: string) {
    return new Promise((resolve, reject) => {
      ty.getStorage({
        key,
        success: ({ data }) => {
          if (data) {
            resolve(JSON.parse(data)?.value);
          }
          resolve(null);
        },
        fail: err => {
          reject(err);
        },
      });
    });
  },
  async getDevItem(name: string) {
    return this.getItem(name);
  },
  async removeItem(key: string) {
    return new Promise((resolve, reject) => {
      ty.removeStorage({
        key,
        success: () => {
          resolve(null);
        },
        fail: err => {
          reject(err);
        },
      });
    });
  },

  async removeDevItem(name: string) {
    return this.removeItem(name);
  },
};
