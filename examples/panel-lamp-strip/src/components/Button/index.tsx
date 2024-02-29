/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { View, Text, Image } from '@ray-js/ray';

interface IProps {
  id?: string;
  img?: string;
  style?: any;
  text?: string;
  disabled?: boolean;
  className?: any;
  opacity?: number;
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
    opacity = 0.7,
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
  const [click, setClick] = useState(false);
  const handleClick = () => {
    if (disabled) {
      return;
    }
    onClick?.();
  };
  return (
    <View
      id={id}
      className={className}
      style={{ ...style, opacity: click ? opacity : 1 ?? 1 }}
      // @ts-ignore
      onTouchStart={() => {
        setClick(true);
        onClickStart?.();
      }}
      onTouchEnd={() => {
        setClick(false);
        onClickEnd?.();
      }}
      onClick={e => {
        e.origin.stopPropagation();
        handleClick();
      }}
    >
      {img && <Image src={img} className={imgClassName} />}
      {text && <Text className={textClassName}>{text}</Text>}
      {children}
    </View>
  );
};
