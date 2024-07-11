// @ts-nocheck
import { useSelector } from '@/redux';

const usePanelStore = () => {
  const allState = useSelector(state => state);
  const panelInfo = useSelector(state => state.panelInfo);

  const themeColor = panelInfo?.uiContent?.themeColor?.value?.initialize['0'] || '#5EAAFF';
  const powerCode = panelInfo?.powerCode || {};
  return {
    ...allState,
    themeColor,
    powerCode,
  };
};

export default usePanelStore;
