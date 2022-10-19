import { Routes } from '@ray-js/types';

export const routes: Routes = [
  {
    route: '/',
    path: '/pages/home/index',
    // path: '/pages/setting/index',
    name: 'Home',
  },
  {
    route: '/setting',
    path: '/pages/setting/index',
    name: 'Setting',
  },
];
