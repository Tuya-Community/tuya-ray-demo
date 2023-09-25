import Res from '@/res';
import Strings from '@/i18n';

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

const defaultMemoryMode = [
  {
    mode: '1',
    icon: Res.power_memory_1,
    title: Strings.getLang('recoverMemory'),
    desc: Strings.getLang('recoverMemory_desc'),
  },
  {
    mode: '0',
    icon: Res.power_memory_0,
    title: Strings.getLang('initialMemory'),
    desc: Strings.getLang('initialMemory_desc'),
  },
  {
    mode: '2',
    title: Strings.getLang('customMemory'),
    desc: Strings.getLang('customMemory_desc'),
  },
];
export default {
  defaultColors,
  defaultWhite,
  defaultMemoryMode,
};
