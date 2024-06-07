/* eslint-disable no-multi-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-bitwise */
/* eslint-disable no-void */
/**
 * @language zh-CN
 * @description 3D项目 主应用实例类
 */
import * as THREE from 'three';
import { KTComponent, KTComponentProps } from './KTComponent';

interface KTInstanceProps {
  canvas: HTMLCanvasElement;
  antialias?: boolean;
  logarithmicDepthBuffer?: boolean;
  preserveDrawingBuffer?: boolean;
  GLTFLoader: any;
  onComponentLoadEnd?: (data: { infoKey: string; progress: number }) => void;
  onGestureChange?: (start: boolean) => void;
  onResetControl?: (success: boolean) => void;
  onClickInfoWindow?: (data: { name: string; index: number }) => void;
}

export class KTInstance {
  kTComponent: KTComponent;
  kTLayer: THREE.Object3D;
  kTLoader: any;
  GLTFLoader: any;
  center: THREE.Vector3;
  canvas: HTMLCanvasElement;
  antialias: boolean;
  logarithmicDepthBuffer: boolean;
  preserveDrawingBuffer: boolean;
  nameRenderingElementCache: any;
  onGestureChange: (start: boolean) => void;
  onResetControl: (success: boolean) => void;
  onComponentLoadEnd: (data: { infoKey: string; progress: number }) => void;
  cableAnimationId: number;

  constructor(props: KTInstanceProps) {
    this.canvas = props.canvas;
    this.antialias = props.antialias !== void 0 ? props.antialias : true;
    this.preserveDrawingBuffer =
      props.preserveDrawingBuffer !== void 0 ? props.preserveDrawingBuffer : true;
    this.logarithmicDepthBuffer =
      props.logarithmicDepthBuffer !== void 0 ? props.logarithmicDepthBuffer : true;
    this.GLTFLoader = props.GLTFLoader;
    this.onComponentLoadEnd =
      props.onComponentLoadEnd ||
      (() => {
        console.warn('It seems not setup onComponentLoadEnd callback');
      });
    this.onGestureChange =
      props.onGestureChange ||
      (() => {
        console.warn('It seems not setup onGestureChange callback');
      });
    this.onResetControl =
      props.onResetControl ||
      (() => {
        console.warn('It seems not setup onResetControl callback');
      });

    this.init();
  }

  /**
   * @language zh-CN
   * @description 初始化
   */
  private init = (): void => {
    const params: KTComponentProps = {
      canvas: this.canvas,
      pixelRatio: window.devicePixelRatio,
      logarithmicDepthBuffer: this.logarithmicDepthBuffer,
      antialias: this.antialias,
      preserveDrawingBuffer: this.preserveDrawingBuffer,
      onGestureChange: this.onGestureChange,
      onResetControl: this.onResetControl,
    };

    this.kTComponent = new KTComponent(params);
    this.kTLayer = new THREE.Object3D();
    this.kTLayer.matrixAutoUpdate = true;
    this.kTComponent.scene.add(this.kTLayer);
    this.kTLoader = new this.GLTFLoader();
  };

  /**
   * @language zh-CN
   * @description 注册绑定
   * @param o
   */
  dispatchEvent = (o: unknown): void => {
    this.kTComponent.dispatchEvent(o);
  };

  /**
   * @language zh-CN
   * @description 加载指定对应的模型
   * @param data
   * @returns
   */
  loadModelLayer = (data: { uri: string; infoKey: string }): Promise<THREE.Object3D> => {
    const startTime = new Date().getTime();
    return new Promise((resolve, reject) => {
      this.kTLoader.load(
        data.uri,
        (gltf: THREE.Object3D) => {
          const evtFunc = () => {
            this.onComponentLoadEnd({
              infoKey: data.infoKey,
              progress: 100,
            });
            const endTime = new Date().getTime();
            console.info('loadModelLayer cost time ==>', `${endTime - startTime} / ms`, gltf);

            resolve(gltf);
          };

          evtFunc();
        },
        xhr => {
          const progress = (xhr.loaded / xhr.total) * 100;
          if (progress === 100) {
            setTimeout(() => {
              // this.onComponentLoadEnd({
              //   infoKey: data.infoKey,
              //   progress: progress,
              // });
            }, 200);
          }
        },
        error => {
          console.error('loadModelLayer', error);
          resolve(null);
        }
      );
    });
  };

  /**
   * @language zh-CN
   * @description 将指定的图形放到场景中
   * @param layer
   */
  putLayerIntoScene = (layer: THREE.Object3D): void => {
    if (layer) {
      const box = new THREE.Box3().setFromObject(layer);
      this.center = new THREE.Vector3(
        (box.max.x + box.min.x) / 2,
        (box.max.y + box.min.y) / 2,
        (box.max.z + box.min.z) / 2
      );
      this.kTLayer.add(layer);
    }
  };

  /**
   * @language zh-CN
   * @description 从模型中获取指定的模型
   * @param instance
   * @param name
   * @returns
   */
  getChildByNameFromObject = (instance: THREE.Object3D, name: string): THREE.Object3D[] => {
    if (this.kTComponent) {
      return this.kTComponent.getChildByNameFromObject(instance, name);
    }

    return [];
  };

  /**
   * @language zh-CN
   * @description 把模型组合到一起
   * @param children
   * @param name
   * @returns
   */
  combineModel = (children: THREE.Object3D[], name: string): THREE.Object3D => {
    const group = new THREE.Object3D();
    group.name = name;
    if (Array.isArray(children)) {
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        // 克隆子模型，并保持其原始位置
        const childClone = child.clone();
        childClone.position.copy(child.position); // 保持原始位置

        group.add(childClone);
      }
    }
    return group;
  };

  /**
   * @language zh-CN
   * @description 改变物体中心点
   * @param instance
   * @param layer
   * @returns
   */
  applyCenterMatrix = (instance: THREE.Object3D, layer: THREE.Object3D): THREE.Object3D => {
    const box = new THREE.Box3().setFromObject(instance);
    const offset = new THREE.Vector3();
    instance.geometry.computeBoundingBox();
    instance.geometry.boundingBox.getCenter(offset);
    instance.geometry.applyMatrix4(
      new THREE.Matrix4().makeTranslation(-offset.x, -offset.y, -offset.z)
    );
    box.getCenter(instance.position);
    const pivot = new THREE.Object3D();
    pivot.add(instance);
    layer.add(pivot);
    return instance;
  };

  /**
   * @language zh-CN
   * @description 启动绕模型中心点的X旋转动画
   * @param instance
   * @param speed
   * @returns
   */
  startRotateAnimationOnX = (instance: THREE.Object3D, speed: number): number => {
    const animate = (): number => {
      if (instance) {
        // eslint-disable-next-line no-param-reassign
        instance.rotation.x += speed;
      }
      return -1;
    };
    this.kTComponent.registerAnimateFn(animate, instance.id);
    return instance.id;
  };

  /**
   * @language zh-CN
   * @description 启动绕模型中心点的Y旋转动画
   * @param instance
   * @param speed
   * @returns
   */
  startRotateAnimationOnY = (instance: THREE.Object3D, speed: number): number => {
    const animate = (): number => {
      if (instance) {
        // eslint-disable-next-line no-param-reassign
        instance.rotation.y += speed;
      }
      return -1;
    };
    this.kTComponent.registerAnimateFn(animate, instance.id);
    return instance.id;
  };

  /**
   * @language zh-CN
   * @description 启动绕模型中心点的Y旋转动画
   * @param instance
   * @param speed
   * @returns
   */
  startRotateAnimationOnZ = (instance: THREE.Object3D, speed: number): number => {
    const animate = (): number => {
      if (instance) {
        // eslint-disable-next-line no-param-reassign
        instance.rotation.z += speed;
      }
      return -1;
    };
    this.kTComponent.registerAnimateFn(animate, instance.id);
    return instance.id;
  };

  /**
   * @language zh-CN
   * @description 取消动画
   * @param animationId
   */
  stopAnimation = (animationId: number): void => {
    if (animationId !== -1) {
      this.kTComponent.removeAnimateFn(animationId);
    }
  };

  /**
   * @language zh-CN
   * @description 保留3位小数
   * @param num
   * @returns
   */
  toFixedNum = (num: number, fixedNum = 3): number => {
    let a = num + '';
    a = a.substring(0, a.lastIndexOf('.') + fixedNum + 1);
    return Number(a);
  };

  /**
   * @language zh-CN
   * @description 转颜色色值
   * @param color
   * @returns
   */
  stringToColor = (color: string): THREE.Color => {
    const colorFormat = new THREE.Color();
    if (color && color.length === 7 && color.indexOf('#') === 0) {
      const colorInt = parseInt(color.substring(1), 16); // 去掉 "#" 后，将颜色值的字符串表示转换为整数
      const r = (colorInt >> 16) & 0xff; // 提取 red 值
      const g = (colorInt >> 8) & 0xff; // 提取 green 值
      const b = colorInt & 0xff; // 提取 blue 值
      colorFormat.setRGB(
        Math.floor(r / 2.55) / 100,
        Math.floor(g / 2.55) / 100,
        Math.floor(b / 2.55) / 100
      );
    } else {
      colorFormat.setRGB(1, 1, 1);
    }
    return colorFormat;
  };

  /**
   * @language zh-CN
   * @description 把模型组合到一起
   * @param children
   * @param name
   * @returns
   */
  combineModel = (children: THREE.Object3D[], name: string): THREE.Object3D => {
    const group = new THREE.Object3D();
    group.name = name;
    if (Array.isArray(children)) {
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        group.add(child);
      }
    }
    return group;
  };

  /**
   * @language zh-CN
   * @description 是否隐藏模型
   * @param instance
   * @param isHide
   */
  hideModel = (instance: THREE.Object3D, isHide: boolean): void => {
    if (instance) {
      // eslint-disable-next-line no-param-reassign
      instance.visible = !isHide;
    }
  };

  /**
   * @language zh-CN
   * @description 设置模型坐标
   * @param instance
   * @param position
   */
  setModelPosition = (instance: THREE.Object3D, position: THREE.Vector3): void => {
    if (instance) {
      instance.position.set(position.x, position.y, position.z);
    }
  };
}
