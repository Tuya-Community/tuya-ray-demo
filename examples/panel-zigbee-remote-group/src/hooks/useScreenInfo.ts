import { getCachedSystemInfo } from '@/api/getCachedSystemInfo';

type HookUseScreenInfo = {
  pixelRatio: number;
  screenWidth: number;
  screenHeight: number;
  windowWidth: number;
  windowHeight: number;
  statusBarHeight: number;
  bottomSafeHeight: number;
};

export function useScreenInfo(): HookUseScreenInfo {
  const info = getCachedSystemInfo();
  const {
    pixelRatio,
    screenWidth,
    screenHeight,
    windowWidth,
    windowHeight,
    statusBarHeight,
    safeArea,
  } = info;
  const { bottom } = safeArea;
  const bottomSafeHeight = screenHeight - bottom;
  // 用 screenHeight - bottom 计算底部底部安全距离有点问题，先不管什么设备写死 20
  // const bottomSafeHeight = 20;
  return {
    pixelRatio,
    screenWidth,
    screenHeight,
    windowWidth,
    windowHeight,
    statusBarHeight,
    bottomSafeHeight,
  };
}
