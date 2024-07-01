import { DevInfo } from '@ray-js/panel-sdk/lib/types';
import { getIconPrefix } from './utils';

const originSceneData = [
  [
    {
      dpCode: 'dreamlight_scene_mode',
      dpId: 51,
      gmtCreate: 1716447150348,
      gmtModified: 1716447256814,
      icon: '{0}/smart/linkage/light/scene/icon17164313221f9eeb70890.gif',
      lightNums: [3, 4, 5],
      plateId: 56700112,
      sceneData: '01250a484860000064003d64010c5b00ba49001761',
      sceneDesc: '',
      sceneIconDisplaySize: '343*100',
      sceneIconDisplayType: 1,
      sceneId: 54900212,
      sceneName: '感恩节',
      sceneNameRosettaKey: 'light_scene_1',
      selectCellBackground:
        'https://images.tuyacn.com/smart/linkage/light/scene/icon170623600965ed6246d49.png',
      sort: 1,
      checked: true,
    },
    {
      dpCode: 'dreamlight_scene_mode',
      dpId: 51,
      gmtCreate: 1716447150348,
      gmtModified: 1716447256822,
      icon: '{0}/smart/linkage/light/scene/icon1716431336994f49c2174.gif',
      lightNums: [3, 4, 5],
      plateId: 56700112,
      sceneData: '012b035d5d6000006400f73601352b00c634009129',
      sceneDesc: '',
      sceneIconDisplaySize: '343*100',
      sceneIconDisplayType: 1,
      sceneId: 54900312,
      sceneName: '海之梦',
      sceneNameRosettaKey: 'light_scene_2',
      selectCellBackground:
        'https://images.tuyacn.com/smart/linkage/light/scene/icon170623600965ed6246d49.png',
      sort: 2,
      checked: true,
    },
    {
      dpCode: 'dreamlight_scene_mode',
      dpId: 51,
      gmtCreate: 1716447150348,
      gmtModified: 1716447256829,
      icon: '{0}/smart/linkage/light/scene/icon17162710669456ece9d0d.gif',
      lightNums: [3, 4, 5],
      plateId: 56700112,
      sceneData:
        '012c006464c000006400c85700c85700c85700c857009f2e009f2e009f2e009f2e00be6400be6400be6400b92c00b92c00b92c00b92c',
      sceneDesc: '',
      sceneIconDisplaySize: '343*100',
      sceneIconDisplayType: 1,
      sceneId: 54900412,
      sceneName: '凉夏',
      sceneNameRosettaKey: 'light_scene_3',
      selectCellBackground:
        'https://images.tuyacn.com/smart/linkage/light/scene/icon170623600965ed6246d49.png',
      sort: 3,
      checked: true,
    },
    {
      dpCode: 'dreamlight_scene_mode',
      dpId: 51,
      gmtCreate: 1716447150348,
      gmtModified: 1716447256836,
      icon: '{0}/smart/linkage/light/scene/icon17162710798e8a4291ade.gif',
      lightNums: [3, 4, 5],
      plateId: 56700112,
      sceneData: '012602595960000064009c6300bc62007b60',
      sceneDesc: '',
      sceneIconDisplaySize: '343*100',
      sceneIconDisplayType: 1,
      sceneId: 54900512,
      sceneName: '森林日',
      sceneNameRosettaKey: 'light_scene_4',
      selectCellBackground:
        'https://images.tuyacn.com/smart/linkage/light/scene/icon170623600965ed6246d49.png',
      sort: 4,
      checked: true,
    },
    {
      dpCode: 'dreamlight_scene_mode',
      dpId: 51,
      gmtCreate: 1716447150348,
      gmtModified: 1716447256843,
      icon: '{0}/smart/linkage/light/scene/icon1716431351a005051cd30.gif',
      lightNums: [3, 4, 5],
      plateId: 56700112,
      sceneData: '012a0352526000006400885000d23900fb27',
      sceneDesc: '',
      sceneIconDisplaySize: '343*100',
      sceneIconDisplayType: 1,
      sceneId: 54900612,
      sceneName: '夏日牧歌',
      sceneNameRosettaKey: 'light_scene_5',
      selectCellBackground:
        'https://images.tuyacn.com/smart/linkage/light/scene/icon170623600965ed6246d49.png',
      sort: 5,
      checked: true,
    },
    {
      dpCode: 'dreamlight_scene_mode',
      dpId: 51,
      gmtCreate: 1716447150348,
      gmtModified: 1716447256849,
      icon: '{0}/smart/linkage/light/scene/icon1716269577f47b836a328.gif',
      lightNums: [3, 4, 5, 6, 7],
      plateId: 56700112,
      sceneData: '0129025e5e6000006400006400786400bb64',
      sceneDesc: '',
      sceneIconDisplaySize: '343*100',
      sceneIconDisplayType: 1,
      sceneId: 54900112,
      sceneName: '足球日',
      sceneNameRosettaKey: 'light_scene_6',
      selectCellBackground: 'https://images.tuyacn.com/light/library/icon/img_scene.png',
      sort: 6,
      checked: true,
    },
  ],
];
export const getSceneData = (devInfo: DevInfo) => {
  if (!devInfo) {
    return [];
  }
  return originSceneData.reduce((acc, cur) => {
    const prefix = getIconPrefix(devInfo);
    const _cur = cur.map(v => {
      // eslint-disable-next-line no-param-reassign
      v.icon = v.icon?.replace('{0}', prefix);
      return v;
    });
    return acc.concat(..._cur);
  }, []);
};

export default getSceneData;
