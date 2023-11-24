import Render from './index.rjs';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: { type: Array },
    style: { type: null },
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading: true,
  },
  observers: {
    data: function (data) {
      console.log('haha');
      if (this.render) {
        const systemInfo = ty.getSystemInfoSync();
        this.render.drawChart(systemInfo, data);
      }
    },
  },
  pageLifetimes: {
    resize() {
      this.setData({ loading: true });
      // 获取画布的大小
      ty.createSelectorQuery()
        .select('#chartCanvas')
        .boundingClientRect()
        .exec((res) => {
          this.initChart(res[0]);
        });
      setTimeout(() => {}, 50);
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    async initChart(rect) {
      const systemInfo = ty.getSystemInfoSync();
      await this.render.initChart(systemInfo, rect, 'auto');
      this.render.drawChart(systemInfo, this.data.data);
      this.setData({ loading: false });
    },
  },

  lifetimes: {
    ready() {
      this.render = new Render(this);
      if (this.data.data) {
        const systemInfo = ty.getSystemInfoSync();
        this.render.drawChart(systemInfo, this.data.data);
        this.setData({ loading: false });
      }
    },
  },
});
