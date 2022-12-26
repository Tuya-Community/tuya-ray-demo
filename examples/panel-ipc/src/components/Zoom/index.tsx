import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@ray-js/ray';
import Classnames from 'classnames';
import IconFont from '@/components/Iconfont';
import { useSelector } from '@/redux';
import { openShowFullButton, closeShowFullButtonAfter5s } from '@/utils/index';
import { hooks } from '@ray-js/panel-sdk';
import Styles from './index.module.less';

const { useDpState } = hooks;

const config = [
  {
    key: 'minus',
    icon: 'icon-jian',
    type: '1',
  },
  {
    key: 'plus',
    icon: 'icon-jia',
    type: '0',
  },
];

const Zoom = () => {
  const { isPreview, isFull } = useSelector(state => state.ipcCommon);
  const timeId = useRef(null);
  const [isPut, setIsPut] = useState(null);
  const putType = useRef(null);

  const [, putDpData] = useDpState();

  const handleClick = ({ type }) => {
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
      openShowFullButton();

      const type = putType.current;
      putDpData({ zoom_control: type });
      timeId.current = setInterval(() => {
        putDpData({ zoom_control: type });
      }, 1000);
    } else if (!isPut && putType.current) {
      closeShowFullButtonAfter5s();
      putDpData({ zoom_stop: true });
      putType.current = null;
      setIsPut(null);
    }
  }, [isPut]);

  return (
    <>
      {config.map(item => (
        <Button
          disabled={!isPreview}
          className={Classnames(
            Styles.zoom,
            isFull ? Styles.fullZoom : {},
            isPut && putType.current === item.type ? Styles.hover : {}
          )}
          key={item.key}
          onTouchStart={() => handleClick(item)}
          onTouchEnd={handleTouchEnd}
        >
          <IconFont type={item.icon} />
        </Button>
      ))}
    </>
  );
};

export default Zoom;
