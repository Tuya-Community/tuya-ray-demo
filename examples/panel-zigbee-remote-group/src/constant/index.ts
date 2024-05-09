export const BIZ_DOMAIN = 'lightControl' as const;

export const DEV_PROPERTIES = {
  GROUP_ICONS: 'GROUP_ICONS',
};

/**
 * 二级品类列表，用于筛选可加入 Zigbee 遥控器群组
 */
export const CATEGORY_CODES = {
  light: [
    'syzmqd',
    'syzmkz',
    'dj',
    'zmqd',
    'dd',
    'xdd',
    'mbd',
    'txd',
    'sxd',
    'gyd',
    'fsd',
    'tgq',
    'ld',
  ],
  curtain: ['zig_clkg', 'zig_cl', 'clkg', 'cl'],
};

export const coverList = [
  '/smart/rule/glyphicons/click.png',
  '/smart/rule/glyphicons/curtain.png',
  '/smart/rule/glyphicons/holiday.png',
  '/smart/rule/glyphicons/home.png',
  '/smart/rule/glyphicons/hourglass.png',
  '/smart/rule/glyphicons/information.png',
  '/smart/rule/glyphicons/label.png',
  '/smart/rule/glyphicons/leaveHome.png',
  '/smart/rule/glyphicons/light.png',
  '/smart/rule/glyphicons/moon.png',
  '/smart/rule/glyphicons/position.png',
  '/smart/rule/glyphicons/rain.png',
  '/smart/rule/glyphicons/rest.png',
  '/smart/rule/glyphicons/shield.png',
  '/smart/rule/glyphicons/sun.png',
  '/smart/rule/glyphicons/time.png',
  '/smart/rule/glyphicons/water.png',
  '/smart/rule/glyphicons/work.png',
];

/**
 * 遥控器群组绑定类型
 */
export enum BindType {
  GroupCurtain = 'GroupCurtain',
  GroupLight = 'GroupLight',
}
