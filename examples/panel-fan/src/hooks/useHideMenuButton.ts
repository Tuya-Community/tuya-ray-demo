import { usePageEvent } from 'ray';
import { hideMenuButton } from '@ray-js/ray';

const useHideMenuButton = () => {
  usePageEvent('onLoad', () => {
    hideMenuButton();
  });

  usePageEvent('onShow', () => {
    hideMenuButton();
    setTimeout(() => {
      hideMenuButton();
    }, 100);
  });
};

export default useHideMenuButton;
