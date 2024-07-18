/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useEffect } from 'react';
import { usePageEvent } from 'ray';

/**
 * 隐藏右上角胶囊
 */
export default function useHideMenuButton() {
  useEffect(() => {
    if (ty.hideMenuButton) {
      ty.hideMenuButton();
      setTimeout(() => {
        ty.hideMenuButton();
      }, 100);
    }
  }, []);

  usePageEvent('onShow', () => {
    if (ty.hideMenuButton) {
      ty.hideMenuButton();
      setTimeout(() => {
        ty.hideMenuButton();
      }, 100);
    }
  });
}
