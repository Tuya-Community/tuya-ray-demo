import { api } from './atop';

export const getOssUrl = () => {
  return api<string>('tuya.m.app.panel.url.get', {}, '1.0');
};
