import React from 'react';
import { View, Text, Image, CoverView } from '@ray-js/ray';
import styles from './index.module.less';

interface IProps {
  menuList: { text: string; image: any; onClick: () => void }[];
}

const BottomMenuBar: React.FC<IProps> = props => {
  /**
   * 渲染底部按钮
   */
  const renderBottomMenuBar = () => {
    const { menuList } = props;
    if (!menuList) return null;
    return (
      <CoverView className={styles.bottomMenuBar}>
        {menuList.map(item => {
          return (
            <View key={item.text} className={styles.menuWrapper} onClick={item.onClick}>
              <Image className={styles.menuBtn} src={item.image} />
              <Text className={styles.menuTxt}>{item.text}</Text>
            </View>
          );
        })}
      </CoverView>
    );
  };

  return renderBottomMenuBar();
};

export default BottomMenuBar;
