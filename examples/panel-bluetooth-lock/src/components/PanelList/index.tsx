import React, { useMemo } from 'react';
import { View, Image } from '@ray-js/ray';
import Battery from '@ray-js/battery';
import styles from './index.module.less';
import { defaultProps, IProps } from './props';

const batteryView = (value = 0, batteryParams) => {
  const calcColor = params => {
    const { top, highColor, middleColor, lowColor } = params;
    // 0-10%: 红色   11%-59%: 黄色    60%-100%: 绿色
    if (top <= 8.6 && top >= 3) {
      return highColor;
    }
    if (top <= 14.2 && top > 8.6) {
      return middleColor;
    }
    return lowColor;
  };

  return (
    <Battery
      value={value}
      onCalcColor={calcColor}
      highColor="#1FDC4B"
      middleColor="#F9CC16"
      lowColor="#FF001F"
      size={9}
      {...batteryParams}
    />
  );
};

const PanelList = (props: IProps) => {
  const {
    data,
    showBattery,
    containerStyle,
    contentStyle,
    imageWrapStyle,
    imageStyle,
    textStyle,
    batteryText,
    batteryValue,
    ...batteryParams
  } = props;

  const batterText = useMemo(() => {
    if (!batteryText) {
      return `${batteryValue}%`;
    }
    return batteryText;
  }, [batteryValue, batteryText]);

  const getChildren = (children = null) => {
    switch (typeof children) {
      case 'function':
        return children();
      default:
        return children;
    }
  };

  return (
    <View className={styles.container} style={containerStyle}>
      {Boolean(data.length) &&
        data.map(ele => (
          <View
            key={ele.key}
            onClick={() => {
              ele.onClick && ele.onClick(ele);
            }}
          >
            {!ele.children && (
              <View className={styles.content} style={contentStyle}>
                {ele.image && (
                  <View className={styles.imageWrap} style={imageWrapStyle}>
                    <Image src={ele.image} className={styles.image} style={imageStyle} />
                  </View>
                )}
                {ele.text && (
                  <View className={styles.text} style={textStyle}>
                    {ele.text}
                  </View>
                )}
              </View>
            )}
            {getChildren(ele.children)}
          </View>
        ))}
      {showBattery && (
        <View className={styles.content} style={contentStyle}>
          <View className={styles.imageWrap} style={imageWrapStyle}>
            {batteryView(batteryValue, batteryParams)}
          </View>
          <View className={styles.text} style={textStyle}>
            {batterText}
          </View>
        </View>
      )}
    </View>
  );
};

PanelList.defaultProps = defaultProps;

export default PanelList;
