import Strings from '@/i18n';

export interface IProps {
  /**
   * @description.zh 类名
   * @description.en class name
   */
  className?: string;
  /**
   * @description.zh 样式
   * @description.en Style
   */
  style?: React.CSSProperties;
  workModes?: { code: '1' | '2' | '3' | '4'; name: string; icon; activeIcon }[];
  /**
   * @description.zh 点击更多图标的回调
   * @description.en click title more icon callback
   */
  onMore?: () => void;
  /**
   * @description.zh 当前的模式值
   * @description.en work mode value
   */
  value?: '1' | '2' | '3' | '4';
  /**
   * @description.zh 更新回调
   * @description.en change callback
   */
  onChange?: (value: '1' | '2' | '3' | '4') => void | Promise<void>;
}

export const defaultProps: IProps = {
  workModes: [
    {
      code: '1',
      name: Strings.getLang('mode_load_priority'),
      icon: '/images/mode/cathode.png',
      activeIcon: '/images/mode/cathode-active.png',
    },
    {
      code: '2',
      name: Strings.getLang('mode_timer_mode'),
      icon: '/images/mode/reserve.png',
      activeIcon: '/images/mode/reserve-active.png',
    },
    {
      code: '3',
      name: Strings.getLang('mode_battery_priority'),
      icon: '/images/mode/battery-first.png',
      activeIcon: '/images/mode/battery-first-active.png',
    },
    {
      code: '4',
      name: Strings.getLang('mode_self_use'),
      icon: '/images/mode/auto.png',
      activeIcon: '/images/mode/auto-active.png',
    },
  ],
};
