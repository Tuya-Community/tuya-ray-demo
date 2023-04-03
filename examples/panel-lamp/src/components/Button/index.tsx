import React, { useState, useEffect } from 'react';
import { View, Text, Image } from '@ray-js/components';

interface IProps {
  id?: string;
  img?: string;
  text?: string;
  disabled?: boolean;
  className?: any;
  imgClassName?: any;
  textClassName?: any;
  onClick: () => void;
}
export const Button = (props: IProps) => {
  const {
    img,
    id,
    text,
    disabled = false,
    className,
    imgClassName,
    textClassName,
    onClick,
  } = props;
  const [click, setClick] = useState(false);
  useEffect(() => {
    if (click) {
      setClick(false);
    }
  }, [click]);
  const handleClick = () => {
    if (disabled) {
      return;
    }
    onClick();
  };
  return (
    <View
      id={id}
      className={className}
      style={{ opacity: click ? 0.5 : 1 }}
      onTouchStart={() => setClick(true)}
      onTouchEnd={() => setClick(false)}
      onClick={e => {
        e.origin.stopPropagation();
        handleClick();
      }}
    >
      {img && <Image src={img} className={imgClassName} />}
      {text && <Text className={textClassName}>{text}</Text>}
    </View>
  );
};
Button.defaultProps = {
  id: 'button',
  img: null,
  text: '',
  disabled: false,
  className: 'button',
  imgClassName: 'buttonImg',
  textClassName: 'buttonText',
};
