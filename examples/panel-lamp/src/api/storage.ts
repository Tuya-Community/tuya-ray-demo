import { devices } from '@/devices';

const getDevKey = (name: string) => {
  const { devId } = devices.lamp.getDevInfo();
  return `${devId}_${name}`;
};

const getPidKey = (name: string) => {
  const { productId } = devices.lamp.getDevInfo();
  return `${productId}_${name}`;
};

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
    const key = await getDevKey(name);
    return this.setItem(key, value);
  },
  async setPidItem(name: string, value: any) {
    const key = getPidKey(name);
    return this.setItem(key, value);
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
    const key = await getDevKey(name);
    return this.getItem(key);
  },
  async getPidItem(name: string) {
    const key = getPidKey(name);
    return this.getItem(key);
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
    const key = await getDevKey(name);
    return this.removeItem(key);
  },

  async removePidItem(name: string) {
    const key = await getDevKey(name);
    return this.removeItem(key);
  },
};
