/* eslint-disable no-prototype-builtins */
/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */
/* eslint-disable no-void */
/**
 * @language zh-CN
 * @description 3D场景构建基础类
 */
import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';
import { OrbitControls } from './extends/OrbitsControls';
import { getElementLeft, getElementTop } from './utils/DomUtils';
import { RoomEnvironment } from './extends/RoomEnvironment.js';

const CML = 10;
export interface KTComponentProps {
  canvas: HTMLCanvasElement;
  pixelRatio?: number;
  antialias?: boolean;
  logarithmicDepthBuffer?: boolean;
  preserveDrawingBuffer?: boolean;
  onGestureChange?: (start: boolean) => void;
  onResetControl?: (success: boolean) => void;
}
export class KTComponent {
  THREE: THREE;
  canvas: HTMLCanvasElement;
  pixelRatio: number;
  antialias: boolean;
  logarithmicDepthBuffer: boolean;
  preserveDrawingBuffer: boolean;

  isMobile: boolean;
  offsetLeft: number;
  offsetTop: number;
  canvasWidth: number;
  canvasHeight: number;
  canvasWidthHalf: number;
  canvasHeightHalf: number;
  moving: boolean;
  movingTimer: any;
  eventTap: 'touchstart' | 'mousedown';
  eventTapUp: 'touchend' | 'mouseup';
  eventTapMove: 'touchmove' | 'mousemove';
  globalEvents: any;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  controls: THREE.OrbitControls;
  light: THREE.DirectionalLight;
  lightFront: THREE.DirectionalLight;
  lightBack: THREE.DirectionalLight;
  lightFollow: THREE.DirectionalLight;
  hemisphereLight: THREE.HemisphereLight;
  rayCaster: THREE.Raycaster;
  animationMixer: THREE.AnimationMixer;

  animateStatus: boolean;
  onGestureChange: (start: boolean) => void;
  onResetControl: (success: boolean) => void;
  frameId: number;
  clickFn: (event: Event) => void;
  clickFnUp: (event: Event) => void;
  clickFnMove: (event: Event) => void;
  mousePoint: { x: number; y: number };
  dragPlane: THREE.Plane;
  worldPoint: THREE.Vector3;
  offset: THREE.Vector3;
  worldPosition: THREE.Vector3;
  inverseMatrix: THREE.Matrix4;

  controlStartFn: () => void;
  controlEndFn: () => void;

  animateFn: { fnId: number; fn: () => void }[];
  animateGroupFn: { fnId: number; instance: THREE.Object3D; fn: () => void }[];

  timeStart: number;
  clock: THREE.Clock;

  initializedStore: any;

  constructor(props: KTComponentProps) {
    this.THREE = THREE;
    this.onGestureChange = props.onGestureChange || (() => {});
    this.onResetControl = props.onResetControl || (() => {});
    this.antialias = props.antialias !== void 0 ? props.antialias : true;
    this.preserveDrawingBuffer =
      props.preserveDrawingBuffer !== void 0 ? props.preserveDrawingBuffer : true;
    this.logarithmicDepthBuffer =
      props.logarithmicDepthBuffer !== void 0 ? props.logarithmicDepthBuffer : true;
    this.pixelRatio = props.pixelRatio || 2;
    this.canvas = props.canvas;
    this.animateStatus = true;

    this.isMobile = true;
    this.offsetLeft = getElementLeft(this.canvas);
    this.offsetTop = getElementTop(this.canvas);
    this.canvasWidth = this.canvas.clientWidth;
    this.canvasHeight = this.canvas.clientHeight;
    this.canvasWidthHalf = this.canvas.clientWidth / 2;
    this.canvasHeightHalf = this.canvas.clientHeight / 2;

    console.log(
      'BoundingWidth, BoudingHeight, pixelRatio',
      this.canvasWidth,
      this.canvasHeight,
      this.pixelRatio
    );


    this.clock = new THREE.Clock();
    this.timeStart = 0;

    this.animateFn = [];
    this.animateGroupFn = [];
    this.moving = false;
    this.eventTap = this.isMobile ? 'touchstart' : 'mousedown';
    this.eventTapUp = this.isMobile ? 'touchend' : 'mouseup';
    this.eventTapMove = this.isMobile ? 'touchmove' : 'mousemove';
    this.globalEvents = {
      mousedown: {},
      mousemove: {},
      mouseup: {},
      touchstart: {},
      touchmove: {},
      touchend: {},
    };
    this.mousePoint = { x: 0, y: 0 };
    this.dragPlane = new THREE.Plane();
    this.worldPosition = new THREE.Vector3();
    this.inverseMatrix = new THREE.Matrix4();
    this.worldPoint = new THREE.Vector3();
    this.offset = new THREE.Vector3();

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, this.canvasWidth / this.canvasHeight, 1, 2000);
    this.camera.position.set(0, 150, 150);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: this.antialias,
      logarithmicDepthBuffer: this.logarithmicDepthBuffer,
      alpha: true,
      preserveDrawingBuffer: this.preserveDrawingBuffer,
    });
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setClearColor(0xffffff, 0.0);
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.physicallyCorrectLights = true;
    this.renderer.outputEncoding = THREE.sRGBEncoding;

    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.renderer.setPixelRatio(this.pixelRatio);
    const environment = new RoomEnvironment();
    const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmremGenerator.fromScene(environment).texture;

    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.target.set(0, 5, -5);
    this.controls.update();
    this.controls.enable = true;
    this.controls.enablePan = false;
    // 不允许缩放
    this.controls.enableZoom = false;
    this.controls.minDistance = 100;
    this.controls.maxDistance = 500;
    this.controls.minPolarAngle = Math.PI / 3;
    this.controls.maxPolarAngle = Math.PI / 2.1;
    this.controls.enableDamping = true;
    // 调整弹性系数
    this.controls.dampingFactor = 0.1;
    this.initializedStore = this.camera.position.clone();

    this.movingTimer = -1;

    this.controlStartFn = () => {
      this.moving = true;
      if (this.movingTimer !== -1) {
        clearTimeout(this.movingTimer);
      }
      setTimeout(() => {
        this.onGestureChange(true);
      }, 200);
    };

    this.controlEndFn = () => {
      this.moving = false;
      this.onGestureChange(false);
      this.movingTimer && clearTimeout(this.movingTimer);
      this.movingTimer = setTimeout(() => {
        this.controls.enableDamping = false;
        const tween = new TWEEN.Tween(this.camera.position)
          .to(this.initializedStore, 1500)
          .easing(TWEEN.Easing.Linear.None);
        tween
          .start()
          .onUpdate(() => {})
          .onComplete(() => {
            this.controls.enableDamping = true;
            TWEEN.remove(tween);
            // 5s钟之后没有操作, 则恢复原来的状态
            this.onResetControl(true);
          });
      }, 5 * 1000);
    };

    this.controls.addEventListener('start', this.controlStartFn);
    this.controls.addEventListener('end', this.controlEndFn);

    this.hemisphereLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
    this.hemisphereLight.position.set(0, 20, 0);
    this.light = new THREE.DirectionalLight(0xffffff, 1);
    this.light.position.set(0, 10, 0);

    this.lightFollow = new THREE.DirectionalLight(0xffffff);
    const cmp = this.camera.position;
    this.lightFollow.position.copy(new THREE.Vector3(cmp.x * CML, cmp.y * CML, cmp.z * CML));
    this.scene.add(this.lightFollow);

    this.lightFollow.castShadow = true;
    this.lightFollow.shadow.camera.top = 2;
    this.lightFollow.shadow.camera.bottom = -2;
    this.lightFollow.shadow.camera.left = -2;
    this.lightFollow.shadow.camera.right = 2;
    this.lightFollow.shadow.camera.near = 0.1;
    this.lightFollow.shadow.camera.far = 40;
    this.lightFollow.shadow.mapSize.width = 4068;
    this.lightFollow.shadow.mapSize.height = 4068;

    // 暂时不需要阴影
    this.light.castShadow = true;
    this.light.shadow.camera.top = 2;
    this.light.shadow.camera.bottom = -2;
    this.light.shadow.camera.left = -2;
    this.light.shadow.camera.right = 2;
    this.light.shadow.camera.near = 0.1;
    this.light.shadow.camera.far = 40;
    this.light.shadow.mapSize.width = 4068;
    this.light.shadow.mapSize.height = 4068;
    this.rayCaster = new THREE.Raycaster();

    this.clickFn = event => {
      this.onClickObject(event);
    };

    // 注册手势抬起
    this.clickFnUp = event => {
      this.updateEvent(event);
    };

    // 注册手势移动
    this.clickFnMove = event => {
      this.updateEvent(event);
    };

    this.canvas.addEventListener(this.eventTap, this.clickFn, false);
    this.canvas.addEventListener(this.eventTapUp, this.clickFnUp, false);
    this.canvas.addEventListener(this.eventTapMove, this.clickFnMove, false);

    window &&
      typeof window.addEventListener === 'function' &&
      window.addEventListener('resize', this.resize, false);
    this.renderer.domElement.style.position = 'absolute';
    this.renderer.domElement.style.display = 'block';
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';

    this.animate();
  }

  /**
   * @language zh-CN
   * @description 世界坐标转屏幕坐标
   * @param pos
   * @returns
   */
  worldToScreen = (pos: THREE.Vector3): THREE.Vector2 => {
    const standardVector = new THREE.Vector3().copy(pos).project(this.camera);
    const position = new THREE.Vector2(
      Math.round(standardVector.x * this.canvasWidthHalf + this.canvasWidthHalf),
      Math.round(-standardVector.y * this.canvasHeightHalf + this.canvasHeightHalf)
    );
    return position;
  };

  /**
   * @description 根据名称从模型里面获取
   * @param instance
   * @param name
   * @returns
   */
  getChildByNameFromObject = (instance: THREE.Object3D, name: string): THREE.Object3D[] => {
    const list = [];
    if (instance !== null) {
      if (instance.children && instance.children.length) {
        for (let i = 0; i < instance.children.length; i++) {
          const ins = instance.children[i];
          if (ins.name === name) {
            list.push(ins);
          }
          if (ins && ins.children && ins.children.length) {
            list.push(...this.getChildByNameFromObject(ins, name));
          }
        }
      }
    }
    return list;
  };

  /**
   * @description 创建一个关键帧动画器
   * @param model
   * @returns
   */
  createAnimationMixer = (model: THREE.Object3D): THREE.AnimationMixer => {
    this.animationMixer = new THREE.AnimationMixer(model);
    return this.animationMixer;
  };

  /**
   * @language zh-CN
   * @description 更新事件
   * @param event
   */
  private updateEvent = (event: any): void => {
    // 兼容移动端事件
    let mouseClient = { x: 0, y: 0 };
    if (event.type === 'touchstart' || event.type === 'touchmove' || event.type === 'touchend') {
      this.mousePoint.x =
        ((event.changedTouches[0].clientX - this.offsetLeft) / this.canvasWidth) * 2 - 1;
      this.mousePoint.y =
        -((event.changedTouches[0].clientY - this.offsetTop) / this.canvasHeight) * 2 + 1;
      mouseClient = {
        x: event.changedTouches[0].clientX,
        y: event.changedTouches[0].clientY,
      };
    } else {
      this.mousePoint.x = ((event.clientX - this.offsetLeft) / this.canvasWidth) * 2 - 1;
      this.mousePoint.y = -((event.clientY - this.offsetTop) / this.canvasHeight) * 2 + 1;
      mouseClient = { x: event.clientX, y: event.clientY };
    }
    // 挂载mousePoint到Event上
    event.mousePoint = this.mousePoint;
    event.mouseClient = mouseClient;
  };

  /**
   * @language zh-CN
   * @description 注册地图的点击事件
   * @param event
   * @param callback
   */
  private onClickObject = (event: any): void => {
    event = event || window.event;
    // event.preventDefault();
    // event.stopPropagation();

    this.updateEvent(event);

    const vector = new THREE.Vector3(this.mousePoint.x, this.mousePoint.y, 1);

    vector.unproject(this.camera);

    this.rayCaster.setFromCamera(this.mousePoint, this.camera);

    // 控制选中射线的大小
    this.rayCaster.params.Points.threshold = 2;

    this.rayCaster.set(this.camera.position, vector.sub(this.camera.position).normalize());

    const target = [
      this.globalEvents[this.eventTap],
      this.globalEvents[this.eventTapMove],
      this.globalEvents[this.eventTapUp],
    ];

    const visibleList = this.getVisibleList(target);

    const intersects = this.rayCaster.intersectObjects(visibleList, true);

    if (intersects.length > 0) {
      const selected = intersects[0].object;
      if (selected && selected.parent && selected.parent[this.eventTap]) {
        const { callback } = selected.parent[this.eventTap];
        if (typeof callback === 'function') {
          setTimeout(() => {
            if (!this.moving) {
              callback(selected.parent, event, this.eventTap);
            }
          }, 200);
        }
        this.emitClickEvent(selected);
      }
    }
  };

  /**
   * @language zh-CN
   * @description 获取可见列表
   * @param targetObj
   * @returns
   */
  private getVisibleList = (targetObj: any[]) => {
    const list: any[] = [];

    for (let i = 0; i < targetObj.length; i++) {
      const item = targetObj[i];
      for (const key in item) {
        const target = item[key].object3d;
        const { eventType } = item[key];
        target[eventType] || (target[eventType] = {});
        if (target && item[key].callback) {
          target[eventType].callback = item[key].callback;
        }
        // bug fixed: 需要额外判断是否存在geometry
        // 必须是可见的才可选入
        if (target.visible) {
          // 是否需要过滤
          if (!target.userData?.enableFilter) {
            if (list.length === 0) {
              list.push(target);
            } else {
              let flag = false;
              list.forEach(child => {
                if (child.uuid === target.uuid) {
                  flag = true;
                }
              });
              if (!flag) {
                list.push(target);
              }
            }
          }
        }
      }
    }
    return list;
  };

  /**
   * @language zh-CN
   * @description 提交点击事件
   * @param realIntersection
   */
  private emitClickEvent = (realIntersection: any): void => {
    this.dragPlane.setFromNormalAndCoplanarPoint(
      this.camera.getWorldDirection(this.dragPlane.normal),
      this.worldPosition.setFromMatrixPosition(realIntersection.matrixWorld)
    );

    if (this.rayCaster.ray.intersectPlane(this.dragPlane, this.worldPoint)) {
      if (realIntersection.parent && realIntersection.parent.matrixWorld) {
        this.inverseMatrix.copy(realIntersection.parent.matrixWorld).invert();
        this.offset
          .copy(this.worldPoint)
          .sub(this.worldPosition.setFromMatrixPosition(realIntersection.matrixWorld));
      }
    }
  };

  /**
   * @language zh-CN
   * @description 添加开发辅助坐标轴
   * @param len
   * @returns
   */
  setAxes = (len: number): void => {
    if (typeof len !== 'undefined' && typeof len !== 'number') {
      return;
    }
    const _len = len || 250;
    const axes = new THREE.AxesHelper(_len);
    this.scene.add(axes);
    this.redraw();
  };

  /**
   * @language zh-CN
   * @description 挂载对象事件
   * @param object
   */
  dispatchEvent = (object: any): void => {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const vm = this;
    Object.assign(object, {
      $on(eventType, callback) {
        if (vm.globalEvents.hasOwnProperty(eventType)) {
          // @ts-ignore
          vm.globalEvents[eventType][this.id] = {
            object3d: this,
            eventType: eventType,
            callback: callback,
          };
        }
      },
      $off(eventType) {
        if (!eventType) throw new Error('');
        if (vm.globalEvents.hasOwnProperty(eventType)) {
          // @ts-ignore
          delete vm.globalEvents[eventType][this.id];
        } else {
          // throw new Error("");
        }
      },
    });
  };

  /**
   * @language zh-CN
   * @description 开启loop渲染
   */
  private animate = () => {
    this.frameId = requestAnimationFrame(this.animate);
    if (this.animateStatus) {
      const t = this.clock.getDelta();
      // 如果存在关键帧播放, 则更新
      if (this.animationMixer) {
        this.animationMixer.update(t);
      }
      this.timeStart += t;
      if (this.timeStart > 1 / 25) {
        this.animateFn.forEach((fn: { fnId: number; fn: () => void }) => {
          typeof fn.fn === 'function' && fn.fn();
        });
        const endGroupAnimate = [];
        this.animateGroupFn.forEach(
          (fn: { fnId: number; instance: THREE.Object3D; fn: () => void }) => {
            if (endGroupAnimate.length !== this.animateGroupFn.length) {
              // 如果单体动画没有设置停止，则一直继续执行
              if (!fn.instance.endGroupAnimate) {
                typeof fn.fn === 'function' && fn.fn();
              } else {
                endGroupAnimate.push(fn.fnId);
              }
            }
          }
        );
        // 所有动画都结束了
        if (endGroupAnimate.length === this.animateGroupFn.length) {
          this.animateGroupFn.map(
            (fn: { fnId: number; instance: THREE.Object3D; fn: () => void }) => {
              if (typeof fn.instance.callback === 'function') {
                fn.instance.callback();
                fn.instance.callback = undefined;
              }
              fn.instance.endGroupAnimate = false;
              return -1;
            }
          );
        }
        TWEEN.update();
        this.controls.update();
        const cmp = this.camera.position;
        this.lightFollow.position.copy(new THREE.Vector3(cmp.x * CML, cmp.y * CML, cmp.z * CML));
        this.renderer.clear();
        this.renderer.clearDepth();
        this.renderer.render(this.scene, this.camera);
        this.timeStart = 0;
      }
    }
  };

  /**
   * @language zh-CN
   * @language 根据对象递归销毁所有内容
   */
  private dealloc = (instance: any) => {
    try {
      if (instance !== null) {
        // 必须将子元素的内容也进行递归移除
        typeof instance.removeFromParent === 'function' && instance.removeFromParent();
        if (instance.children && instance.children.length) {
          for (let i = 0; i < instance.children.length; i++) {
            this.dealloc(instance.children[i]);
          }
        }

        if (instance.geometry) {
          instance.geometry.dispose();
          instance.geometry = undefined;
        }
        if (instance.material) {
          if (instance.material.bumpMap) {
            instance.material.bumpMap.dispose();
            instance.material.bumpMap = undefined;
          }
          if (instance.material.envMap) {
            instance.material.envMap.dispose();
            instance.material.envMap = undefined;
          }
          if (instance.material.lightMap) {
            instance.material.lightMap.dispose();
            instance.material.lightMap = undefined;
          }
          if (instance.material.map) {
            instance.material.map.dispose();
            instance.material.map = undefined;
          }
          if (instance.material.normalMap) {
            instance.material.normalMap.dispose();
            instance.material.normalMap = undefined;
          }
          if (instance.material.specularMap) {
            instance.material.specularMap.dispose();
            instance.material.specularMap = undefined;
          }
          instance.material.dispose();
          instance.material = undefined;
        }
        if (instance.texture) {
          instance.texture.dispose();
          instance.texture = undefined;
        }
      }
      instance && typeof instance.dispose === 'function' && instance.dispose();
      instance && typeof instance.clear === 'function' && instance.clear();
    } catch (e) {
      console.error('dealloc function occur error ==>', e);
    }
  };

  /**
   * @language zh-CN
   * @description 组件卸载时取消loop渲染
   */
  disposeComponent = (): void => {
    try {
      console.info('kTComponent disposeComponent');
      window.cancelAnimationFrame(this.frameId);
      if (this.scene && this.scene.children) {
        this.scene.children.forEach(child => {
          this.dealloc(child);
        });
      }
      this.animateFn.length = 0;
      this.animateGroupFn.length = 0;
      this.renderer.clear();
      this.renderer.clearDepth();
      this.renderer.renderLists.dispose();
      this.renderer.dispose();
      this.controls.dispose();
      this.scene.clear();
      this.resetGlobalEvents();
      this.renderer.forceContextLoss();
      this.renderer.domElement = null;
      this.renderer.content = null;
      this.renderer = null;
      this.scene = null;
      this.camera = null;
      this.dragPlane = null;
      this.rayCaster = null;
      THREE.Cache.clear();
    } catch (e) {
      console.warn('disposeComponent occur an error', e);
    }
  };

  /**
   * @language zh-CN
   * @description 重置所有的点击事件
   */
  private resetGlobalEvents = () => {
    this.globalEvents = {
      mousedown: {},
      mousemove: {},
      mouseup: {},
      touchstart: {},
      touchmove: {},
      touchend: {},
    };
  };

  /**
   * @language zh-CN
   * @description 对视图进行重新绘制
   */
  redraw = (): void => {
    this.renderer.clear();
    this.renderer.clearDepth();
    this.renderer.render(this.scene, this.camera);
  };

  /**
   * @language zh-CN
   * @description 根据浏览器的自适应调整对应的窗口大小比例和视野
   */
  resize = (): void => {
    this.renderer.domElement.style.position = 'absolute';
    this.renderer.domElement.style.display = 'block';
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.canvasWidth = this.canvas.clientWidth;
    this.canvasWidthHalf = this.canvasWidth / 2;
    this.canvasHeight = this.canvas.clientHeight;
    this.canvasHeightHalf = this.canvasHeight / 2;
    this.offsetLeft = getElementLeft(this.canvas);
    this.offsetTop = getElementTop(this.canvas);
    this.renderer.setSize(this.canvasWidth, this.canvasHeight);
    this.renderer.setPixelRatio(this.pixelRatio);
    this.updateCameraAspect();
    this.redraw();
  };

  /**
   * @language zh-CN
   * @description 更新camera的aspect
   */
  private updateCameraAspect = () => {
    this.camera.aspect = this.canvasWidth / this.canvasHeight;
    this.camera.updateProjectionMatrix();
  };

  /**
   * @language zh-CN
   * @description 注册渲染事件添加到loop中
   * @param fn
   */
  registerAnimateFn = (fn: () => void, id: number): number => {
    this.animateFn.push({ fnId: id, fn });
    return id;
  };

  registerGroupAnimateFn = (fn: () => void, instance: THREE.Object3D): number => {
    this.animateGroupFn.push({ fnId: instance.id, instance: instance, fn });
    return instance.id;
  };

  /**
   * @language zh-CN
   * @description 从渲染loop中移除渲染事件
   */
  removeAnimateFn = (fnId: number): { fnId: number; fn: () => void } => {
    const index = this.animateFn.findIndex(fn => fn.fnId === fnId);
    if (index !== -1) {
      return this.animateFn.splice(index, 1)[0];
    }
    return null;
  };

  removeGroupAnimateFn = (fnId: number): { fnId: number; fn: () => void } => {
    const index = this.animateGroupFn.findIndex(fn => fn.fnId === fnId);
    if (index !== -1) {
      return this.animateGroupFn.splice(index, 1)[0];
    }
    return null;
  };
}
