import { getLangKey } from '@ray-js/ray';
import in18 from '@/i18n';

/**
 * 获取当前语言类型
 */
export const getLang = () => {
  return new Promise((resolve, reject) => {
    getLangKey({
      success: lang => {
        if (lang) resolve(lang);
        else reject();
      },
      fail: err => {
        reject(err);
      },
    });
  });
};

// 多语言
export const getString = key => {
  return key ? in18.getLang(key) : '';
};
