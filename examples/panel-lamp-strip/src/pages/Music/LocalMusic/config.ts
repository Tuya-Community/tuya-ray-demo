import Strings from '@/i18n';
import getCdnImgUrl from '@/utils/getCdnImgUrl';

export type TMusic = {
  v: number; // 版本
  power: boolean;
  id: number;
  isLight: number;
  mode: number;
  speed: number;
  sensitivity: number; // 灵敏度
  a: number;
  b: number;
  c: number;
  brightness: number;
  colors: { hue: number; saturation: number }[];
};

const localMusicList: TMusic[] = [
  // 摇滚
  {
    v: 1, // 版本
    power: false,
    id: 0,
    isLight: 0,
    mode: 3,
    speed: 100,
    sensitivity: 50, // 灵敏度
    a: 0,
    b: 0,
    c: 0,
    brightness: 100,
    colors: [
      { hue: 0, saturation: 100 },
      { hue: 120, saturation: 100 },
      { hue: 240, saturation: 100 },
      { hue: 60, saturation: 100 },
      { hue: 180, saturation: 100 },
      { hue: 300, saturation: 100 },
      { hue: 0, saturation: 0 },
    ],
  },
  // 爵士
  {
    v: 1, // 版本
    power: false,
    id: 1,
    isLight: 0,
    mode: 2,
    speed: 100,
    sensitivity: 50, // 灵敏度
    a: 0,
    b: 0,
    c: 0,
    brightness: 100,
    colors: [
      { hue: 0, saturation: 80 },
      { hue: 120, saturation: 80 },
      { hue: 240, saturation: 80 },
      { hue: 60, saturation: 80 },
      { hue: 180, saturation: 80 },
      { hue: 300, saturation: 80 },
      { hue: 0, saturation: 0 },
    ],
  },
  // 经典
  {
    v: 1, // 版本
    power: false,
    id: 2,
    isLight: 1,
    mode: 2,
    speed: 100,
    sensitivity: 50, // 灵敏度
    a: 0,
    b: 0,
    c: 0,
    brightness: 100,
    colors: [
      { hue: 0, saturation: 100 },
      { hue: 120, saturation: 100 },
      { hue: 240, saturation: 100 },
      { hue: 60, saturation: 100 },
      { hue: 180, saturation: 100 },
      { hue: 300, saturation: 100 },
      { hue: 0, saturation: 0 },
    ],
  },
  // 滚动
  {
    v: 1,
    power: false,
    id: 3,
    isLight: 0,
    mode: 2,
    speed: 100,
    sensitivity: 50,
    a: 1,
    b: 0,
    c: 0,
    brightness: 100,
    colors: [
      { hue: 0, saturation: 100 },
      { hue: 120, saturation: 100 },
      { hue: 240, saturation: 100 },
      { hue: 60, saturation: 100 },
      { hue: 180, saturation: 100 },
      { hue: 300, saturation: 100 },
      { hue: 0, saturation: 0 },
    ],
  },
  // 能量
  {
    v: 1,
    power: false,
    id: 4,
    isLight: 0,
    mode: 0,
    speed: 100,
    sensitivity: 50,
    a: 1,
    b: 0,
    c: 0,
    brightness: 100,
    colors: [
      { hue: 0, saturation: 100 },
      { hue: 120, saturation: 100 },
      { hue: 240, saturation: 100 },
      { hue: 60, saturation: 100 },
      { hue: 180, saturation: 100 },
      { hue: 300, saturation: 100 },
    ],
  },
  // 频谱
  {
    v: 1,
    power: false,
    id: 5,
    isLight: 1,
    mode: 0,
    speed: 100,
    sensitivity: 50,
    a: 1,
    b: 0,
    c: 0,
    brightness: 100,
    colors: [
      { hue: 0, saturation: 100 },
      { hue: 120, saturation: 100 },
      { hue: 240, saturation: 100 },
      { hue: 60, saturation: 100 },
      { hue: 180, saturation: 100 },
      { hue: 300, saturation: 100 },
      { hue: 0, saturation: 0 },
    ],
  },
];

export type TMusicItem = TMusic & { title: string; icon: string };

export const getLocalMusicList = (): TMusicItem[] => {
  return localMusicList.map(i => {
    return {
      ...i,
      icon: getCdnImgUrl(`local_music_${i.id}.png`),
      title: Strings.getLang(`local_music_${i.id}` as 'local_music_0'),
    };
  });
};

export default getLocalMusicList;
