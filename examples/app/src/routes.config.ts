import { Routes, TabBar } from '@ray-js/types';

import { BASIC_ROUTES } from './basic/index.config';
import { PLUS_ROUTES } from './plus/index.config';
import { API_ROUTES } from './api/index.config';

export const routes: Routes = [
  {
    id: 'home',
    route: '/',
    path: '/pages/home/index',
  },
  {
    id: 'plus',
    route: '/plus',
    path: '/pages/plus/index',
  },
  {
    route: '/api',
    path: '/pages/api/index',
  },
  {
    id: 'detail',
    route: '/detail/:uid',
    path: '/pages/detail/index',
  },
  // 基础组件路由
  ...BASIC_ROUTES,
  // API 页面路由
  ...API_ROUTES,
  // 扩展组件路由
  ...PLUS_ROUTES,
];

export const tabBar: TabBar = {
  borderStyle: 'white',
  textColor: '#000',
  selectedColor: '#fa5500',
  list: [
    {
      id: 'home',
      text: '组件',
      icon: '/tabBar/home.png',
      activeIcon: '/tabBar/home-active.png',
      pagePath: '/pages/home/index',
    },
    {
      id: 'plus',
      text: '扩展组件',
      icon: '/tabBar/home.png',
      activeIcon: '/tabBar/home-active.png',
      pagePath: '/pages/plus/index',
    },
    {
      route: '/api',
      text: 'API',
      icon: '/tabBar/api.png',
      activeIcon: '/tabBar/api-active.png',
      pagePath: '/pages/api/index',
    },
  ],
};
