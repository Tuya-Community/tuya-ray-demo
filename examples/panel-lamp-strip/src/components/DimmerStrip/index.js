/* eslint-disable no-console */
import { isEqual } from 'lodash-es';
import Render from './index.rjs';

// eslint-disable-next-line no-undef
Component({
  properties: {
    data: Object,
    border: Number,
    width: Number,
    gradient: Boolean,
    move: Function,
    end: Function,
  },
  data: {
    rjs: null,
    canvasHeight: 200,
    canvasWidth: 375,
    canvasId: `dimmer_${String(+new Date()).slice(-3)}_${String(Math.random()).slice(-3)}`,
  },
  observers: {
    data(resList) {
      // canvas元素加载完成后再渲染
      if (!this.isReady) {
        return;
      }
      const isSame = isEqual(resList, this.preResList);
      if (isSame) {
        return;
      }
      this.renderRjs(resList);
      this.preResList = resList;
    },
  },
  lifetimes: {
    attached() {
      this.rjs = new Render(this);
    },
    ready() {
      this.renderRjs();
      this.isReady = true;
      this.rjs?.renderChannel();
    },
  },
  methods: {
    renderRjs(resList) {
      if (this.rjs) {
        const { canvasId, data, border, width, gradient } = this.data;
        const _data = resList || data;
        this.rjs.render(canvasId, _data, {
          border,
          width,
          gradient,
        });
      }
    },
    touchmove(args) {
      if (args.index === undefined) {
        console.warn('args.index is undefined');
        return;
      }
      this.triggerEvent('move', {
        index: args.index,
      });
    },
    touchend(args) {
      if (args.index === undefined) {
        console.warn('args.index is undefined');
        return;
      }
      this.triggerEvent('end', {
        index: args.index,
      });
    },
  },
});
