import { Routes } from '@ray-js/types';

export const routes: Routes = [
  {
    route: '/',
    path: '/pages/home/index',
    name: 'Home',
  },
  {
    route: '/temp',
    path: '/pages/temp/index',
    name: 'Temp',
  },
  {
    route: '/logs',
    path: '/pages/log/index',
    name: 'Log',
  },
  {
    route: '/setting',
    path: '/pages/setting/index',
    name: 'Setting',
  },
  {
    route: '/family',
    path: '/pages/family/index',
    name: 'User',
  },
  {
    route: '/temp-emptyCode',
    path: '/pages/temp-emptyCode/index',
    name: 'EmptyCode',
  },
  {
    route: '/temp-record',
    path: '/pages/temp-record/index',
    name: 'Temp Record',
  },
  {
    route: '/temp-invalid-record',
    path: '/pages/temp-invalid-record/index',
    name: 'Temp Invalid Record',
  },
  {
    route: '/temp-update',
    path: '/pages/temp-update/index',
    name: 'Temp Update',
  },
  {
    route: '/family-add-unlock',
    path: '/pages/family-add-unlock/index',
    name: 'Family Add Unlock',
  },
  {
    route: '/family-edit-unlock',
    path: '/pages/family-edit-unlock/index',
    name: 'Family Edit Unlock',
  },
  {
    route: '/family-user-detail',
    path: '/pages/family-user-detail/index',
    name: 'Family User Detail',
  },
];
