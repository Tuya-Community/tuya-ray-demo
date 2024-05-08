import React from 'react';
import { Image, View, ScrollView } from '@ray-js/ray';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import Strings from '@/i18n';
import { selectThemeType } from '@/redux/modules/themeSlice';

import Styles from './index.module.less';
import { defaultProps, IProps } from './props';

export const Card = ({
  icon,
  title,
  showRight,
  onRightClick,
  children,
  needPadding = true,
  theme,
}) => {
  return (
    <View className={Styles.mode_card}>
      <View className={Styles[`mode_card-header`]} onClick={onRightClick}>
        <View className={Styles[`mode_card-header-left`]}>
          {icon}
          <View>{title}</View>
        </View>
        {showRight && (
          <Image
            className={Styles[`mode_card-header__arrow`]}
            src={
              theme === 'dark'
                ? '/images/mode/right-arrow-dark.svg'
                : '/images/mode/right-arrow.svg'
            }
          />
        )}
      </View>
      <View
        className={Styles[`mode_card-body`]}
        style={{ padding: needPadding ? '0 32rpx 32rpx' : 0 }}
      >
        {children}
      </View>
    </View>
  );
};

const WorkModeCard: React.FC<IProps> = props => {
  const theme = useSelector(selectThemeType());
  const { className, style, workModes, onMore, value: selectId, onChange } = props;

  const handleChange = code => {
    onChange?.(code);
  };

  return (
    <View className={clsx(Styles.mode, className)} style={style}>
      <Card
        title={Strings.getLang('work_mode')}
        icon={<Image className={Styles.mode_icon} src="/images/mode/work-mode.svg" />}
        needPadding={false}
        showRight={!!onMore}
        onRightClick={onMore}
        theme={theme}
      >
        <ScrollView refresherTriggered={false} scrollX className={Styles.mode_container}>
          <View className={Styles[`mode_work-modes`]}>
            {workModes.map(item => (
              <View key={item.code} onClick={() => handleChange(item.code)}>
                <View
                  className={`${Styles[`mode_work-mode-item`]} ${
                    selectId === item.code ? Styles[`mode_work-mode-item--active`] : ''
                  }`}
                >
                  <Image
                    className={Styles[`mode_work-mode-item__icon`]}
                    src={
                      selectId === item.code
                        ? item.activeIcon
                        : theme === 'dark'
                        ? item.activeIcon
                        : item.icon
                    }
                    style={
                      selectId !== item.code && theme === 'dark'
                        ? {
                            opacity: 0.3,
                          }
                        : undefined
                    }
                  />
                  <View className={Styles[`mode_work-mode-item__name`]}>{item.name}</View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </Card>
    </View>
  );
};

WorkModeCard.defaultProps = defaultProps;
WorkModeCard.displayName = 'WorkModeCard';

export default WorkModeCard;
