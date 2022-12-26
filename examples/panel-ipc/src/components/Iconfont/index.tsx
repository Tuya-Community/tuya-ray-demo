import React from 'react';
import { View } from '@ray-js/ray';
import './index.less';

type Props = {
  size?: number;
  style?: any;
  type: string;
};

const Icon = (props: Props) => {
  const { size = 24, style = {}, type = '' } = props;
  const className = `iconfont ${type}`;
  return (
    <View
      className={className}
      style={{
        ...style,
        fontSize: `${size}rem`,
      }}
    />
  );
};

Icon.defaultProps = {
  size: 0.48,
  style: {},
};
export default Icon;
