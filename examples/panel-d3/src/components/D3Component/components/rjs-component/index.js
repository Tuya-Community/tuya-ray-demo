/**
 * @language zh-CN
 * @description 小程序组件
 */
import { actions, store } from '../../redux';
import Render from './index.rjs';
import { NotificationCenter } from '../../notification';
import { propsEventCallee } from '../../api';

const componentOptions = {
  options: {
    pureDataPattern: /^isInitial$/,
  },
  data: {
    isInitial: true,
  },
  properties: {
    componentId: String,
    modelUrl: String,
  },

  lifetimes: {
    created() {
      this.instanceType = 'rjs';
      this.render = new Render(this);
    },
    ready() {
      // 注册api方法调用事件
      this.registerApiCallee();
      if (this.render) {
        const systemInfo = ty.getSystemInfoSync();
        this.render.initComponent(this.data.componentId, systemInfo.pixelRatio, this.data.modelUrl);
        this.storeComponent();
        this.setData({ isInitial: false });
      }
    },
    detached() {
      this.clearComponent();
      this.removeComponentApiCallee();
      this.render = null;
    },
  },
  pageLifetimes: {},
  methods: {
    storeComponent() {
      store.dispatch(
        actions.component.initComponent({
          componentId: this.data.componentId,
          instanceType: this.instanceType,
        })
      );
    },
    clearComponent() {
      this.render.disposeComponent();
      store.dispatch(actions.component.willUnmount({ componentId: this.data.componentId }));
    },
    registerApiCallee() {
      if (!this.data.componentId) {
        return;
      }
      NotificationCenter.addEventListener(`${this.data.componentId}${propsEventCallee}`, data => {
        if (data && data.method) {
          if (this.render) {
            this.render.deconstructApiProps(data);
          }
        }
      });
    },
    removeComponentApiCallee() {
      NotificationCenter.removeEventListener(`${this.data.componentId}${propsEventCallee}`);
    },
    onComponentApiCallee(data) {
      if (data && data.componentId && data.method) {
        const results = {
          componentId: data.componentId,
          results: data,
        };
        NotificationCenter.pushNotification(`${data.componentId}_${data.method}`, results);
      }
    },
    /**
     * @language zh-CN
     * @description 以下方法都是绑定小程序原生组件和ray组件之间的通信
     * @param {*} data
     */
    onComponentLoadEnd(data) {
      this.triggerEvent('oncomponentloadend', data);
    },
    onGestureChange(data) {
      this.triggerEvent('ongesturechange', data);
    },
    onResetControl(data) {
      this.triggerEvent('onresetcontrol', data);
    },
  },
};

Component(componentOptions);
