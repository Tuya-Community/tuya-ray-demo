import { getElementById, getBoundingClientRect } from '@ray-js/ray';

export const getDomRect = (id: string) => {
  return new Promise(resolve => {
    getElementById(id).then(dom => {
      getBoundingClientRect(dom).then(rect => {
        resolve({
          dom,
          rect: rect,
        });
      });
    });
  });
};
