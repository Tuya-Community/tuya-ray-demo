import Render from './index.rjs';

// eslint-disable-next-line no-undef
Component({
  properties: {
    prop: {
      type: Object,
      canvasId: String,
      lottieSource: JSON,
      containerStyle: String,
      canvasStyle: String,
    },
  },
  lifetimes: {
    attached() {
      this.render = new Render(this);
    },
    ready() {
      if (!this.render) {
        this.render = new Render(this);
      }
      this.render.renderLottie(this.data.prop);
    },
  },
});
