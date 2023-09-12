import Res from './res';
const { bright1, bright2, bright3 } = Res;
// eslint-disable-next-line no-undef
Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    className: {
      type: String,
      value: '',
    },
    disable: {
      type: Boolean,
      value: false,
    },
    textVal: String,
    // 左滑块初始值
    start: {
      type: Number,
      value: 0,
    },
    // 左滑块最小值限制
    startMin: {
      type: Number,
    },
    // 左滑块最大值限制
    startMax: {
      type: Number,
    },
    // 右滑块初始值/单向滑条初始值
    end: {
      type: Number,
      value: 30,
    },
    watchStart: {
      type: Number,
    },
    watchEnd: {
      type: Number,
    },
    // 右滑块最小值/单向滑条最小值
    endMin: {
      type: Number,
    },
    // 右滑块最大值/单向滑条最大值
    endMax: {
      type: Number,
    },
    // 最小值
    min: {
      type: Number,
      value: 0,
    },
    // 最大值
    max: {
      type: Number,
      value: 100,
    },
    // 阶段值
    step: {
      type: Number,
      value: 1,
    },
    // 滑块样式
    thumbStartStyle: {
      type: String,
    },
    // 滑块样式
    thumbEndStyle: {
      type: String,
    },
    // 轨道样式
    trackStyle: {
      type: String,
    },
    // 滑条样式
    barStyle: {
      type: String,
    },
    // step样式
    stepStyle: {
      type: String,
    },
    // 单向还是双向 range: 双向，normal: 单向
    mode: {
      type: String,
    },
    // 方向 "horizontal" | "vertical"
    direction: {
      type: String,
    },
    // 控制滑动bar的偏移量，用于样式微调
    barPad: {
      type: Number,
    },
    // 隐藏滑块
    hideThumb: {
      type: Boolean,
      value: false,
    },
    // 显示阶段提示
    showSteps: {
      type: Boolean,
      value: false,
    },
    // 反转
    reverse: {
      type: Boolean,
      value: false,
    },
    // 使用触摸跳跃
    enableTouch: {
      type: Boolean,
      value: false,
    },
    // 使用触摸跳跃
    maxRangeOffset: {
      type: Number,
      value: 0,
    },
    // 唯一ID
    instanceId: {
      type: String,
    },
    // 在bar上显示文本
    showText: {
      type: Boolean,
    },
    // bar文本样式
    textStyle: {
      type: String,
    },
    // 文本格式化，例如 textTemplate="比率 {{text}} %"
    textTemplate: {
      type: String,
    },
    // 动态计算thumb样式，如 { background: "rgba(0,0,0, {{text}}/100)" }
    thumbStyleCalc: {
      type: Object,
    },
  },
  data: {
    steps: [],
    text: '1',
    iconRes: bright1,
  },
  lifetimes: {
    /**
     * 组件的方法列表
     */
    ready() {
      const isNumber = n => /\d+/.test(n);
      const getNumber = (n, def) => (isNumber(n) ? n : def);

      if (!this.data.showSteps) return;
      const max = getNumber(this.data.max, 1000);
      const min = getNumber(this.data.min, 10);
      const steps = new Array(parseInt(String((max - min) / this.data.step), 10))
        .fill(0)
        .map((_, i) => i)
        .concat(-1);
      this.setData({
        steps,
      });
    },
  },
  methods: {
    setText({ instanceId, content }) {
      if (!this.data.showText) return;
      if (instanceId !== this.data.instanceId) return;
      if (this.properties.textVal) return;
      const val = content;
      let iconRes = bright1;
      if (val > 20 && val <= 60) {
        iconRes = bright2;
      } else if (val > 60) {
        iconRes = bright3;
      }
      this.setData({
        text: content,
        iconRes,
      });
    },
  },
});
