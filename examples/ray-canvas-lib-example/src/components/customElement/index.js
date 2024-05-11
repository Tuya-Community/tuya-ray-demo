/* eslint-disable no-undef */
/* eslint-disable func-names */

// index.js
import Render from './index.rjs';

const randomId = () => Math.random().toString(36).slice(2);

// eslint-disable-next-line no-undef
Component({
  properties: {
    width: {
      type: Number,
      value: 300,
    },
    height: {
      type: Number,
      value: 300,
    },
  },

  data: {
    canvasId: `canvas_${randomId()}`,
    hitCanvasId: `hitCanvas_${randomId()}`,
  },

  lifetimes: {
    attached() {
      this.render = new Render(this);
    },
    ready() {
      const { canvasId, hitCanvasId } = this.data;
      // eslint-disable-next-line no-undef
      const { pixelRatio = 1 } = ty.getSystemInfoSync();
      this.render.renderCanvas(canvasId, hitCanvasId, pixelRatio);
    },
  },
});
