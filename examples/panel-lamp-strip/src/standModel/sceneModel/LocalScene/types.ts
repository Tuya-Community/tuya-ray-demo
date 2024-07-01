/* eslint-disable no-shadow */
export type TSceneData = {
  sceneName: string;
  sceneId: number;
  checked: boolean;
  dpCode: string;
  dpId: number;
  icon: string;
  sceneData: string;
  sceneIconDisplaySize: string;
  sceneIconDisplayType: number;
  sceneNameRosettaKey: string;
  sort: number;
};

export enum ESceneDpCode {
  dreamlight_scene_mode = 'dreamlight_scene_mode',
  scene_data = 'scene_data',
  mix_light_scene = 'mix_light_scene',
  // 如果设备中定义的情景 dp code 不存在，在这里添加 设备的情景dp code
  // TODO: xxx = xxx
}
