import { Routes } from '@ray-js/types';

export const routes: Routes = [
  {
    route: '/',
    path: '/pages/home/index',
    name: 'Home',
  },
  {
    route: '/setting',
    path: '/pages/setting/index',
    name: 'Setting',
  },
  {
    route: '/logs',
    path: '/pages/logs/index',
    name: 'Logs',
  },
  {
    route: '/stats',
    path: '/pages/stats/index',
    name: 'Stats',
  },
];
