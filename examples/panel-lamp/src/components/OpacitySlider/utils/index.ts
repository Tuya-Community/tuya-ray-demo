import { utils } from '@ray-js/panel-sdk';

const { rgb2hsv, hsv2rgb } = utils;

type HSV = {
  h: number;
  s: number;
  v: number;
};

type RGB = {
  r: number;
  g: number;
  b: number;
};

const rgbToHsv = (r: number, g: number, b: number): HSV => {
  const [h, s, v] = rgb2hsv(r, g, b);
  return {
    h,
    s,
    v,
  };
};

const hsvToRgb = (h: number, s: number, v: number): RGB => {
  const [r, g, b] = hsv2rgb(h, s, v);
  return {
    r,
    g,
    b,
  };
};

export { rgbToHsv, hsvToRgb };
