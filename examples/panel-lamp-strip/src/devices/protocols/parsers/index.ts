import { lampSchemaMap } from '@/devices/schema';
import SceneFormatter from '@/standModel/sceneModel/LocalScene/dpParser/index';
import MicMusicFormatter from './MicMusicFormatter';
import SmearFormatter from './SmearFormatter';

export const micMusicTransformer = new MicMusicFormatter();
export const smearFormatter = new SmearFormatter();
export const sceneFormatter = new SceneFormatter(lampSchemaMap);

export default {
  micMusicTransformer,
  smearFormatter,
  sceneFormatter,
};
