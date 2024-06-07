import { Routes } from '@ray-js/types';

export const routes: Routes = [
  {
    route: '/',
    path: '/pages/Home/index',
    name: 'Home',
  },
  {
    route: '/settings',
    path: '/pages/Settings/index',
    name: 'Settings',
  },
  {
    route: '/timing',
    path: '/pages/Timing/index',
    name: 'Timing',
  },
];

export const tabBar = {};
