import { usePageEvent } from 'ray';

const useHideMenuButton = () => {
  usePageEvent('onLoad', () => {
    ty.hideMenuButton();
  });

  usePageEvent('onShow', () => {
    ty.hideMenuButton();
    setTimeout(() => {
      ty.hideMenuButton();
    }, 100);
  });
};

export default useHideMenuButton;
