import pencilFlow from '@ray-js/pencil-flow';

const { Group, RoundedRect, Text } = pencilFlow;

class Button extends Group {
  constructor(stage, option) {
    super();
    const fontSize = option.fontSize || 20;
    const font = option.font || `${fontSize}px Arial`;
    const padding = 8;
    const textWidth = Math.floor(stage.getTextWidth(option.text, font)) + padding * 2;
    this.width = option.width || textWidth;
    this.height = option.height || 40;
    this.r = option.r || 8;
    this.roundedRect = new RoundedRect(this.width, this.height, this.r, {
      strokeStyle: option.color,
    });
    this.text = new Text(option.text, {
      strokeStyle: option.color,
      font: font,
      size: fontSize,
      id: 'text',
    });
    this.text.x = padding;
    this.text.y = 10;
    this.add(this.roundedRect, this.text);
  }
}

export default Button;
