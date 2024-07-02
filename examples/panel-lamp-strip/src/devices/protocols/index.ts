import dpParser from './parsers';
import { lampSchemaMap } from '@/devices/schema';
const {
  colour_data,
  dreamlightmic_music_data,
  paint_colour_data,
  dreamlight_scene_mode,
} = lampSchemaMap;

export const protocols = {
  [colour_data.code]: [
    {
      name: 'hue' as const,
      bytes: 2,
      default: 0,
      defaultValue: 0,
    },
    {
      name: 'saturation' as const,
      bytes: 2,
      defaultValue: 1,
    },
    {
      name: 'value' as const,
      bytes: 2,
      defaultValue: 1,
    },
  ],
  [dreamlightmic_music_data.code]: dpParser.micMusicTransformer,
  [dreamlight_scene_mode.code]: dpParser.sceneFormatter,
  [paint_colour_data.code]: dpParser.smearFormatter,
};
