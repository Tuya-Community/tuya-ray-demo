import { useEffect } from 'react';
import { hideMenuButton, showMenuButton } from '@ray-js/ray';

export function useHideMenuButton() {
  useEffect(() => {
    hideMenuButton();
    return () => showMenuButton();
  }, []);
}
