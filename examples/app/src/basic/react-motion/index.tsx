import React, { Fragment } from 'react';
import { Motion, spring, presets } from 'react-motion';
import { View, Button } from '@ray-js/components';
import { isNative } from '@ray-js/env';

// noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
// gentle: { stiffness: 120, damping: 14 },
// wobbly: { stiffness: 180, damping: 12 },
// stiff: { stiffness: 210, damping: 20 }
const MOTION_MODE = ['noWobble', 'gentle', 'wobbly', 'stiff'];

const PagePreviewer: React.FC = () => {
  const [left, setLeft] = React.useState(0);

  const clickHandler = () => {
    let targetX = 0;

    if (left === 0) {
      targetX = 200;
    } else {
      targetX = 0;
    }
    setLeft(targetX);
  };
  return (
    <Fragment>
      <Button onClick={clickHandler}>clickHandler</Button>

      {MOTION_MODE.map((item, index) => {
        return (
          <Motion key={index} style={{ x: spring(left, presets[item]) }}>
            {(interpolatingStyle) => {
              return (
                <View
                  style={{
                    width: '160rpx',
                    height: '160rpx',
                    marginBottom: '20rpx',
                    backgroundColor: '#007AFF',
                    color: '#ffffff',
                    padding: '10rpx',
                    borderRadius: '8rpx',
                    transform: isNative
                      ? [{ translateX: interpolatingStyle.x }]
                      : `translateX(${interpolatingStyle.x}px)`,
                  }}
                >
                  {item}
                </View>
              );
            }}
          </Motion>
        );
      })}
    </Fragment>
  );
};

export default PagePreviewer;
