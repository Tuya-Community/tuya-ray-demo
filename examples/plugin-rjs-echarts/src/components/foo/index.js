import Render from './index.rjs'

Component({
  lifetimes: {
    ready() {
      const render = new Render(this)
      const systemInfo = ty.getSystemInfoSync();
      render.init('f2', systemInfo.pixelRatio)
    },
  },
})
