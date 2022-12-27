import React, { useState, useRef, useEffect } from 'react';
import { View, Button } from '@ray-js/ray';
import Classnames from 'classnames';
import IconFont from '@/components/Iconfont';
import { useSelector } from '@/redux';
import { openShowFullButton, closeShowFullButtonAfter5s } from '@/utils/index';
import { useActions } from '@ray-js/panel-sdk';
import Styles from './index.module.less';

const ptzConfig = [
  { key: 'arrowTop', type: '0' },
  { key: 'arrowRight', type: '2' },
  { key: 'arrowLeft', type: '6' },
  { key: 'arrowBottom', type: '4' },
];

const Ptz = () => {
  const timeId = useRef(null);
  const { isPreview, isFull } = useSelector(state => state.ipcCommon);
  const [isPut, setIsPut] = useState(null);
  const putType = useRef(null);

  const actions = useActions();

  const handleTouchStart = ({ type }) => {
    setIsPut(true);
    putType.current = type;
  };

  const handleTouchEnd = () => {
    setIsPut(false);
  };

  useEffect(() => {
    if (timeId.current) {
      clearInterval(timeId.current);
      timeId.current = null;
    }

    if (isPut && putType.current) {
      // 显示全屏按钮
      openShowFullButton();

      const type = putType.current;
      actions.ptz_control.set(type);
      timeId.current = setInterval(() => {
        actions.ptz_control.set(type);
      }, 1000);
    } else if (!isPut && putType.current) {
      // 5s后隐藏全屏按钮
      closeShowFullButtonAfter5s();

      actions.ptz_stop.set(true);

      putType.current = null;
      setIsPut(null);
    }
  }, [isPut]);

  return (
    <View>
      <Button
        className={Classnames(Styles.circleWrap, isFull ? 'fullPtz' : '')}
        hoverClassName={Styles.circleWrapHover}
        disabled={!isPreview}
      >
        <View className={Classnames(Styles.arrowWrap)}>
          {ptzConfig.map(item => {
            return (
              <Button
                key={item.key}
                className={Classnames(
                  Styles.arrow,
                  Styles[`${item.key}Button`],
                  isFull ? Styles.fullArrow : {},
                  isPut && putType.current === item.type ? Styles[`${item.key}Wrap`] : {}
                )}
                onTouchStart={() => handleTouchStart(item)}
                onTouchEnd={handleTouchEnd}
                disabled={!isPreview}
              >
                <View className={Styles[`${item.key}Content`]}>
                  <IconFont type="icon-fangxiang" />
                </View>
              </Button>
            );
          })}
        </View>
        <View className={Classnames(Styles.circleInner, isFull ? Styles.fullCircleInner : {})} />
      </Button>
    </View>
  );
};

export default Ptz;
