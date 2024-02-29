import Strings from '@/i18n';
import { lampSchemaMap } from '@/devices/schema';

const defaultColors = [
  { hue: 0, saturation: 1000, value: 1000 },
  { hue: 120, saturation: 1000, value: 1000 },
  { hue: 240, saturation: 1000, value: 1000 },
];
const defaultWhite = [
  { temperature: 0, brightness: 1000 },
  { temperature: 500, brightness: 1000 },
  { temperature: 1000, brightness: 1000 },
];
const defaultWhiteC = [{ brightness: 10 }, { brightness: 500 }, { brightness: 1000 }];

const defaultMemoryMode = [
  {
    mode: '1',
    icon: '/images/power_memory_1.png',
    title: Strings.getLang('recoverMemory'),
    desc: Strings.getLang('recoverMemory_desc'),
  },
  {
    mode: '0',
    icon: '/images/power_memory_0.png',
    title: Strings.getLang('initialMemory'),
    desc: Strings.getLang('initialMemory_desc'),
  },
  {
    mode: '2',
    title: Strings.getLang('customMemory'),
    desc: Strings.getLang('customMemory_desc'),
  },
];

const defaultScenesRGBCW = [
  {
    sceneId: 2923,
    dpCode: lampSchemaMap.scene_data.code,
    sceneName: Strings.getLang('LIGHT_SCENE_NAME_GOOD_NIGHT'),
    sceneData: '000e0d0000000000000000c80000',
    icon: '/images/scene_night.png',
    sceneIconDisplaySize: '166*102',
    sceneIconDisplayType: 3,
    isDefault: true,
  },
  {
    sceneId: 2926,
    dpCode: lampSchemaMap.scene_data.code,
    sceneName: Strings.getLang('LIGHT_SCENE_NAME_READ'),
    sceneData: '010e0d0000000000000003e801f4',
    icon: '/images/scene_read.png',
    sceneIconDisplaySize: '166*102',
    sceneIconDisplayType: 3,
    isDefault: true,
  },
  {
    sceneId: 2929,
    dpCode: lampSchemaMap.scene_data.code,
    sceneName: Strings.getLang('LIGHT_SCENE_NAME_WORK'),
    sceneData: '020e0d0000000000000003e803e8',
    icon: '/images/scene_work.png',
    sceneIconDisplaySize: '166*102',
    sceneIconDisplayType: 3,
    isDefault: true,
  },
  {
    sceneId: 2931,
    dpCode: lampSchemaMap.scene_data.code,
    sceneName: Strings.getLang('LIGHT_SCENE_NAME_LEISURE'),
    sceneData: '030e0d0000000000000001f401f4',
    icon: '/images/scene_leisure.png',
    sceneIconDisplaySize: '166*102',
    sceneIconDisplayType: 3,
    isDefault: true,
  },
  {
    sceneId: 2934,
    dpCode: lampSchemaMap.scene_data.code,
    sceneName: Strings.getLang('LIGHT_SCENE_NAME_OCEAN'),
    sceneData: '1746460200f003e803e80000000046460200dc02bc03e800000000',
    icon: '/images/scene_sea.png',
    sceneIconDisplaySize: '166*102',
    sceneIconDisplayType: 3,
    isDefault: true,
  },
  {
    sceneId: 2936,
    dpCode: lampSchemaMap.scene_data.code,
    sceneName: Strings.getLang('LIGHT_SCENE_NAME_SUNFLOWER'),
    sceneData: '184646020028032003e800000000464602001e038403e8000000004646020014038403e800000000',
    icon: '/images/scene_sunflower.png',
    sceneIconDisplaySize: '166*102',
    sceneIconDisplayType: 3,
    isDefault: true,
  },
  {
    sceneId: 2938,
    dpCode: lampSchemaMap.scene_data.code,
    sceneName: Strings.getLang('LIGHT_SCENE_NAME_GRASSLAND'),
    sceneData: '04464602007803e803e800000000464602007803e8000a00000000',
    icon: '/images/scene_grassland.png',
    sceneIconDisplaySize: '166*102',
    sceneIconDisplayType: 3,
    isDefault: true,
  },
  {
    sceneId: 2939,
    dpCode: lampSchemaMap.scene_data.code,
    sceneName: Strings.getLang('LIGHT_SCENE_NAME_DAZZLING'),
    sceneData: '06464601000003e803e800000000464601007803e803e80000000046460100f003e803e800000000',
    icon: '/images/scene_colourful.png',
    sceneIconDisplaySize: '166*102',
    sceneIconDisplayType: 3,
    isDefault: true,
  },
];
const defaultScenesRGB = [
  {
    sceneId: 2934,
    dpCode: lampSchemaMap.scene_data.code,
    sceneName: Strings.getLang('LIGHT_SCENE_NAME_OCEAN'),
    sceneData: '1746460200f003e803e80000000046460200dc02bc03e800000000',
    icon: '/images/scene_sea.png',
    sceneIconDisplaySize: '166*102',
    sceneIconDisplayType: 3,
    isDefault: true,
  },
  {
    sceneId: 2936,
    dpCode: lampSchemaMap.scene_data.code,
    sceneName: Strings.getLang('LIGHT_SCENE_NAME_SUNFLOWER'),
    sceneData: '184646020028032003e800000000464602001e038403e8000000004646020014038403e800000000',
    icon: '/images/scene_sunflower.png',
    sceneIconDisplaySize: '166*102',
    sceneIconDisplayType: 3,
    isDefault: true,
  },
  {
    sceneId: 2938,
    dpCode: lampSchemaMap.scene_data.code,
    sceneName: Strings.getLang('LIGHT_SCENE_NAME_GRASSLAND'),
    sceneData: '04464602007803e803e800000000464602007803e8000a00000000',
    icon: '/images/scene_grassland.png',
    sceneIconDisplaySize: '166*102',
    sceneIconDisplayType: 3,
    isDefault: true,
  },
  {
    sceneId: 2939,
    dpCode: lampSchemaMap.scene_data.code,
    sceneName: Strings.getLang('LIGHT_SCENE_NAME_DAZZLING'),
    sceneData: '06464601000003e803e800000000464601007803e803e80000000046460100f003e803e800000000',
    icon: '/images/scene_colourful.png',
    sceneIconDisplaySize: '166*102',
    sceneIconDisplayType: 3,
    isDefault: true,
  },
];
const defaultScenesCW = [
  {
    sceneId: 2923,
    dpCode: lampSchemaMap.scene_data.code,
    sceneName: Strings.getLang('LIGHT_SCENE_NAME_GOOD_NIGHT'),
    sceneData: '000e0d0000000000000000c80000',
    icon: '/images/scene_night.png',
    sceneIconDisplaySize: '166*102',
    sceneIconDisplayType: 3,
    isDefault: true,
  },
  {
    sceneId: 2926,
    dpCode: lampSchemaMap.scene_data.code,
    sceneName: Strings.getLang('LIGHT_SCENE_NAME_READ'),
    sceneData: '010e0d0000000000000003e801f4',
    icon: '/images/scene_read.png',
    sceneIconDisplaySize: '166*102',
    sceneIconDisplayType: 3,
    isDefault: true,
  },
  {
    sceneId: 2929,
    dpCode: lampSchemaMap.scene_data.code,
    sceneName: Strings.getLang('LIGHT_SCENE_NAME_WORK'),
    sceneData: '020e0d0000000000000003e803e8',
    icon: '/images/scene_work.png',
    sceneIconDisplaySize: '166*102',
    sceneIconDisplayType: 3,
    isDefault: true,
  },
  {
    sceneId: 2931,
    dpCode: lampSchemaMap.scene_data.code,
    sceneName: Strings.getLang('LIGHT_SCENE_NAME_LEISURE'),
    sceneData: '030e0d0000000000000001f401f4',
    icon: '/images/scene_leisure.png',
    sceneIconDisplaySize: '166*102',
    sceneIconDisplayType: 3,
    isDefault: true,
  },
];

const defaultAppMusicList: MusicConfig[] = [
  {
    id: 0,
    mode: 1,
    colorArea: [
      {
        area: [0, 2],
        hue: 339,
        saturation: 28,
        value: 1000,
      },
      {
        area: [3, 5],
        hue: 340,
        saturation: 57,
        value: 1000,
      },
      {
        area: [5, 6],
        hue: 346,
        saturation: 78,
        value: 1000,
      },
      {
        area: [7, 9],
        hue: 341,
        saturation: 74,
        value: 1000,
      },
    ],
  },
  {
    id: 1,
    mode: 0,
    colorArea: [
      {
        area: [0, 2],
        hue: 350,
        saturation: 400,
        value: 1000,
      },
      {
        area: [3, 5],
        hue: 50,
        saturation: 600,
        value: 1000,
      },
      {
        area: [6, 9],
        hue: 160,
        saturation: 600,
        value: 1000,
      },
    ],
  },
  {
    id: 2,
    mode: 1,
    colorArea: [
      {
        area: [0, 2],
        hue: 20,
        saturation: 100,
        value: 1000,
      },
      {
        area: [3, 4],
        hue: 0,
        saturation: 1000,
        value: 1000,
      },
      {
        area: [5, 6],
        hue: 350,
        saturation: 400,
        value: 1000,
      },
      {
        area: [7, 9],
        hue: 300,
        saturation: 1000,
        value: 1000,
      },
    ],
  },
];

export default {
  defaultColors,
  defaultWhite,
  defaultWhiteC,
  defaultMemoryMode,
  defaultScenesRGBCW,
  defaultScenesRGB,
  defaultScenesCW,
  defaultAppMusicList,
};
