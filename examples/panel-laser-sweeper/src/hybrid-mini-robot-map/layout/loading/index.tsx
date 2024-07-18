/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { CoverView, View } from '@ray-js/ray';
import EmptyMap from '../emptyMap';
import DrawMap from '../drawMap';
import styles from './index.module.less';

interface IProps {
  showLoading?: boolean | undefined;
  isLoading?: boolean;
  mapLoadEnd?: boolean;
  isEmpty?: boolean;
  isLite?: boolean; // 小菊花模式
  isHomeMap?: boolean; // 首页实时地图
}
const Loading: React.FC<IProps> = props => {
  const { isLite, isLoading, isHomeMap, mapLoadEnd, isEmpty } = props;
  const Wrapper = isHomeMap ? CoverView : View;
  const renderLite = () => {
    if (!isEmpty && mapLoadEnd) return null;
    return <Wrapper className={styles.loading} />;
  };

  const renderLoading = () => {
    if (isLoading) {
      return (
        <Wrapper className={styles.loading}>
          <DrawMap isHomeMap={isHomeMap} />
        </Wrapper>
      );
    }
    if (isEmpty) {
      return (
        <Wrapper className={styles.loading}>
          <EmptyMap isHomeMap={isHomeMap} />
        </Wrapper>
      );
    }
    if (!mapLoadEnd) {
      return (
        <Wrapper className={styles.loading}>
          <DrawMap isHomeMap={isHomeMap} />
        </Wrapper>
      );
    }
    return null;
  };

  return isLite ? renderLite() : renderLoading();
};

export default Loading;
