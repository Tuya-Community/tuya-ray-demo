/**
 * 抽象首页页面配置, 适用于 NavPanel 导航面板
 */

export const COMPONENTS = [
  {
    title: '通知组件',
    list: [{ name: 'Notification', path: '/plus/Notification' }],
  },
];

export const PLUS_ROUTES = COMPONENTS.reduce((acc, comps) => {
  return acc.concat(comps.list);
}, []).map((r) => {
  return { route: r.path, path: r.path + '/index' };
});
