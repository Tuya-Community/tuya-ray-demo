import { useEffect } from 'react';
import { useSelector } from '@/redux';

type TTheme = {
  light?: {
    background: string;
    frontColor: string;
  };
  dark?: {
    background: string;
    frontColor: string;
  };
};
export const useTopBarTheme = (theme?: TTheme) => {
  const isDarkTheme = useSelector(state => state.theme.type === 'dark');
  const { light, dark } = theme || {};
  const themeRes = isDarkTheme ? dark : light;
  const { background = '#212121', frontColor = '#ffffff' } = themeRes || {};

  useEffect(() => {
    ty.setNavigationBarColor({
      frontColor,
      backgroundColor: background,
      animation: {
        duration: 300,
        timingFunc: 'linear',
      },
    });
  }, []);
};

export const useTopBarTitle = (title?: string) => {
  const devInfo = useSelector(state => state.devInfo);
  const titleText = title ?? devInfo.name;
  useEffect(() => {
    const titleRes = titleText.length > 14 ? `${titleText.slice(0, 14)}...` : titleText;
    ty.setNavigationBarTitle({
      title: titleRes,
    });
  }, [title]);
};
