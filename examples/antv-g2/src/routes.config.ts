import { Routes, TabBar } from '@ray-js/types';

export const routes: Routes = [
  {
    id: 'home',
    route: '/',
    path: '/pages/home/index',
  },
];

export const tabBar: TabBar = {
  textColor: '#000',
  selectedColor: '#ff592a',
  list: [
    {
      id: 'home',
      text: '首页',
      icon: '/tabBar/home.png',
      activeIcon: '/tabBar/home-active.png',
    },
  ],
};
