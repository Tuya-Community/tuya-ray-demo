export default {
  type: 'light', // light or dark or custom string
  global: {
    brand: '#f8f8f8', // 品牌色（主题色）
    bgColor: '#f8f8f8', // 背景色
    fontSizeBase: 1, // 字体基准比例
    dividerColor: '#e5e5e5', // 分隔线颜色
    success: '#00C800', // 成功颜色
    warning: '#FAAE17', // 警告颜色
    error: '#F4182C', // 失败
    mask: 'rgba(0, 0, 0, 0.7)', // 遮罩颜色
    text: {
      light: '#333', // 字体在 light 下的颜色
      dark: '#fff', // 字体在 dark 下的颜色
    },
  },
  brickButton: {
    bgColor: '#54800F',
  },
  slider: {
    light: {
      trackRadius: 2, // 滑块圆角
      trackHeight: 4, // 滑块高度
      minimumTrackTintColor: '#FF0000', // 最小值颜色
      maximumTrackTintColor: '#e5e5e5', // 最大值颜色
      thumbSize: 24, // 滑块圆的尺寸
      thumbRadius: 14, // 滑块圆的圆角
      thumbTintColor: '#fff', // 滑块的颜色
    },
    dark: {
      trackRadius: 2,
      trackHeight: 4,
      minimumTrackTintColor: '#FF0000',
      maximumTrackTintColor: 'rgba(255, 255, 255, 0.3)',
      thumbSize: 24,
      thumbRadius: 14,
      thumbTintColor: '#fff',
    },
  },
};
