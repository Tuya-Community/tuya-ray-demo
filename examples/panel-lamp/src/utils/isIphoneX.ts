export const isIphoneX = info => {
  // 判断当前机型是否有顶部栏
  if (info.platform === 'ios' && info?.screenHeight >= 812) {
    return true;
  }
  return false;
};
