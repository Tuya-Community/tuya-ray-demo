import { Routes } from '@ray-js/types';

export const routes: Routes = [
  {
    route: '/',
    path: '/pages/home/index',
    name: 'Home',
  },
  {
    route: '/group-setting',
    path: '/pages/group-setting/index',
    name: 'Scene Setting',
  },
  {
    route: '/group-curtain-edit',
    path: '/pages/group-curtain-edit/index',
    name: 'Group Curtain Edit',
  },
  {
    route: '/group-light-edit',
    path: '/pages/group-light-edit/index',
    name: 'Group Light Edit',
  },
];
