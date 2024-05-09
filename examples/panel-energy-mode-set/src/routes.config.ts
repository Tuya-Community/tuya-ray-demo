import { Routes } from '@ray-js/types';

export const routes: Routes = [
  {
    route: '/',
    path: '/pages/home/index',
    name: 'Home',
  },
  {
    route: '/settings',
    path: '/pages/settings/index',
    name: 'Settings',
  },
];

export const tabBar = {
  backgroundColor: '@navBgColor',
  borderStyle: '@navBgColor',
  textColor: '@navTxtStyle',
  selectedColor: '#3678E3',
  list: [
    {
      pagePath: '/pages/home/index',
      text: `@I18n.t('tab_home')`,
      icon: '@homeIcon',
      activeIcon: '/images/home-active.png',
    },
    {
      pagePath: '/pages/settings/index',
      text: `@I18n.t('tab_schedule')`,
      icon: '@settingsIcon',
      activeIcon: '/images/setting-active.png',
    },
  ],
};
