import React from 'react';
import Svg from '@ray-js/svg';

export interface Props extends React.SVGProps<SVGPathElement> {
  d: string;
  viewBox?: string;
  size?: string;
  width?: string;
  height?: string;
}

export const Icon: React.FC<Props> = props => {
  const { style, className, d, viewBox, size, width, height, ...pathProps } = props;
  return (
    <Svg
      style={style}
      className={className}
      viewBox={viewBox}
      width={width || size}
      height={height || size}
    >
      <path d={d} fill="#ef550d" {...pathProps} />
    </Svg>
  );
};

Icon.defaultProps = {
  viewBox: '0 0 1024 1024',
  size: '20px',
  width: null,
  height: null,
};
