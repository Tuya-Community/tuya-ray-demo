/* eslint-disable react/require-default-props */
import clsx from 'clsx';
import React from 'react';
import { View, Text, Image } from '@ray-js/ray';
import styles from './index.module.less';

interface IProps {
  id?: string;
  img?: string;
  style?: any;
  text?: string;
  disabled?: boolean;
  className?: any;
  imgClassName?: any;
  textClassName?: any;
  onClickStart?: () => void;
  onClickEnd?: () => void;
  onClick?: () => void;
  children?: any;
}
export const Button = (props: IProps) => {
  const {
    img,
    id,
    text,
    disabled = false,
    className,
    style,
    children,
    imgClassName,
    textClassName,
    onClick,
    onClickStart,
    onClickEnd,
  } = props;
  const [click, setClick] = React.useState(false);

  const handleTouchStart = React.useCallback(() => {
    setClick(true);
    onClickStart?.();
  }, [onClickStart]);

  const handleTouchEnd = React.useCallback(() => {
    setClick(false);
    onClickEnd?.();
  }, [onClickEnd]);

  const handleClick = React.useCallback(
    e => {
      if (disabled) return;
      e?.origin?.stopPropagation();
      onClick?.();
    },
    [disabled, onClick]
  );

  return (
    <View
      id={id}
      className={clsx(className, {
        [styles.touching]: click,
        [styles.disabled]: disabled,
      })}
      style={style}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
    >
      {img && <Image src={img} className={imgClassName} />}
      {text && <Text className={textClassName}>{text}</Text>}
      {children}
    </View>
  );
};
