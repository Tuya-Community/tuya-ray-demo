import React from 'react';
import { View, Text } from '@ray-js/ray';
import { useSelector } from 'react-redux';
import { DialogContainer } from '@ray-js/components-ty-dialog';
import { ColorImage } from '@/components/color-image';
import { selectCoverList } from '@/redux/modules/uiStateSlice';
import styles from './index.module.less';

interface Props {
  title: string;
  currentSelectIcon: string;
  show: boolean;
  onSelect?: (e: string) => void;
  onClose?: () => void;
}

function isSameIcon(icon1: string, icon2: string): boolean {
  return new RegExp(icon2).test(icon1);
}

export const DialogSelectIcon: React.FC<Props> = props => {
  const { show, onSelect, onClose, currentSelectIcon, title } = props;
  const iconList = useSelector(selectCoverList);
  console.log('iconList', iconList);
  return (
    <DialogContainer
      show={show}
      position="bottom"
      overlayClosable
      dialogClassName="dialog-select-icon"
      onClickOverlay={onClose}
      customStyle={{
        width: '702rpx',
        marginLeft: '-351rpx',
        paddingBottom: '34px',
      }}
    >
      <View className={styles.selectIconContent}>
        <View className={styles.titleContent}>
          <Text className={styles.sectionTitle}>{title}</Text>
        </View>
        <View className={styles.iconListContent}>
          {iconList?.map(item => (
            <View
              key={item}
              className={styles.iconBox}
              onClick={() => onSelect(item)}
              style={{
                backgroundColor: isSameIcon(currentSelectIcon, item) ? '#F5F5F5' : 'transparent',
              }}
            >
              <ColorImage
                width="80rpx"
                height="80rpx"
                src={item}
                color={isSameIcon(currentSelectIcon, item) ? '#1961CE' : 'rgba(152, 162, 173, 1)'}
              />
            </View>
          ))}
        </View>
      </View>
    </DialogContainer>
  );
};

const NULL = () => null;

DialogSelectIcon.defaultProps = {
  onSelect: NULL,
  onClose: NULL,
};
