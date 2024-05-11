import pencilFlow from '@ray-js/pencil-flow';

const { Shape } = pencilFlow;

export default class CircleLine extends Shape {
  constructor(width, height, option) {
    super();
    this.width = width;
    this.height = height;
    this.option = option;
  }

  draw() {
    const ctx = this;
    ctx.beginPath();
    ctx.strokeStyle('red');
    ctx.lineWidth(10);
    ctx.arc(this.width / 2, this.width / 2, 100, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(0, 0, 100, 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineTo(100, 40);
    ctx.lineTo(133, 233);
    ctx.stroke();
  }
}
