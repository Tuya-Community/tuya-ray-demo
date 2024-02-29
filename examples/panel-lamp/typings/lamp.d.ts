type COLOUR = {
  hue: number;
  saturation: number;
  value: number;
};

type WHITE = {
  temperature: number;
  brightness: number;
};

type RGB = {
  r: number;
  g: number;
  b: number;
};

type RGBA = RGB & {
  a?: number;
};

type HSL = {
  h: number;
  s: number;
  l: number;
};

type HSV = {
  h: number;
  s: number;
  v: number;
};

type MusicConfig = {
  /**
   * 音乐律动配置 ID
   */
  id: number;
  /**
   * 音乐律动模式，0：跳转，1：渐变
   */
  mode: 0 | 1;
  /**
   * 音乐律动颜色配置
   */
  colorArea: Array<{
    area: [number, number];
    hue: number;
    saturation: number;
    value: number;
  }>;
};
