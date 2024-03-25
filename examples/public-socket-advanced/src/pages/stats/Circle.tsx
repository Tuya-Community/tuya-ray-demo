import Svg from '@ray-js/svg';
import React, { CSSProperties, FC } from 'react';

interface Props {
  className?: string;
  style?: CSSProperties;
}

export const Circle: FC<Props> = ({ style, className }) => {
  return (
    <Svg style={style} className={className} viewBox="0 0 296 296" width="296px" height="296px">
      <path
        d="M 147.98650674662667 147.98650674662667 m -109.53401893424763 91.90995488909239 a 142.98650674662667 142.98650674662667 0 1 1 219.06803786849525 0"
        fill="none"
        stroke="#437D48"
      />
      <path
        d="M 147.98650674662667 147.98650674662667 m -105.70379671865274 88.6960168406597 a 137.98650674662667 137.98650674662667 0 1 1 211.40759343730548 0"
        fill="none"
        stroke="#437D48"
        strokeDasharray={[5, 5]}
        strokeOpacity={0.4}
      />
    </Svg>
  );
};

Circle.defaultProps = {
  style: undefined,
  className: undefined,
};
