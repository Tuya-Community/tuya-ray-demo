import Render from './indexRjs.rjs';
import { formatColorText, rgbToHsl } from '@/utils';
import { getSystemInfo } from '@ray-js/api';

const ETipRectPosition = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
};

// eslint-disable-next-line no-undef
Component({
  properties: {
    canvasId: String,
    containerStyle: String,
    radius: {
      type: Number,
      value: 100,
    },
    innerRingRadius: {
      type: Number,
      value: 50,
    },
    value: {
      type: Number,
      value: 0,
    },
    isShowColorTip: {
      type: Boolean,
      value: true,
    },
    onTouchStart: Function,
    onTouchMove: Function,
    onTouchEnd: Function,
  },
  data: {
    render: null,
    isTouch: false,
    touchType: '',
    colorText: '',
    tipRectPosition: ETipRectPosition.LEFT,
  },
  observers: {
    'value.**': function (v) {
      if (
        Math.abs(this.lastValue / 10 - v / 10) > 1 ||
        (this.lastValue === 0 && v === 0)
      ) {
        this._updatePosByRgb(v);
        this.lastValue = v;
      }
    },
  },
  lifetimes: {
    attached() {
      this.render = new Render(this);
      const { radius, innerRingRadius } = this.data;
      this.render._setCircles(radius, innerRingRadius);
    },
    ready() {
      const { canvasId } = this.data;
      this.initCanvas();
      setTimeout(() => {
        this.render.checkIsRender(canvasId);
      }, 300);
    },
  },
  methods: {
    getCanvas() {
      this.initCanvas();
    },
    initCanvas() {
      const { canvasId, radius, innerRingRadius, value = 0 } = this.data;
      const ratio = 2;
      canvasId &&
        this.render.renderAnnulusColor(
          canvasId,
          radius,
          innerRingRadius,
          ratio,
        );
      this._updatePosByRgb(value);
      this.lastValue = value;
    },
    _updatePosByRgb(value) {
      if (value === undefined) {
        return;
      }
      this.render?._getAnglePositionByValue(value);
      // const { x, y } = this._getAnglePositionByValue(value);
      // this._getRgb(x, y);
    },
    _getRgb(x, y) {
      this.render?.getAnnulusImageData(x, y);
    },
    _getAnnulusImageData(dataRes) {
      const { position, touchType } = dataRes;
      this.touchType = touchType;
      const result = this._getLengthByAnglePosition(position.x, position.y);
      this.lastValue = result;
      if (touchType === 'start') {
        this.triggerEvent('onTouchStart', result);
      } else if (touchType === 'move') {
        this.triggerEvent('onTouchMove', result);
      } else if (touchType === 'end') {
        this.triggerEvent('onTouchEnd', result);
      }
    },
    _getLengthByAnglePosition(x, y) {
      const { radius } = this.data;
      var radian = Math.atan2(y - radius, x - radius); // 弧度
      var angle = radian * (180 / Math.PI); // 角度
      let angleData = 0;
      if (+angle > 135 && +angle <= 180) {
        angleData = angle - 135;
      } else if (angle > -180 && angle <= 0) {
        angleData = 45 + angle + 180;
      } else if (angle > 0 && angle <= 45) {
        angleData = 225 + angle;
      }
      const result = Math.round((angleData / 270) * 1000);
      return result;
    },
  },
});
