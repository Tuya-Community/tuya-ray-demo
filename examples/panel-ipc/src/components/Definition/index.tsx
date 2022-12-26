import React, { useCallback, useMemo, useEffect } from 'react';
import { View, Text, Button } from '@ray-js/ray';
import { actions, useSelector } from '@/redux';
import { definitionConfig, videoClarityList } from '@/config/home';
import in18 from '@/i18n';
import { setClarity, showToast } from '@/utils/util';
import { useDispatch } from 'react-redux';
import { showFullButtonAnd5sHide } from '@/utils/index';
import _ from '@/utils/loadsh';

import Styles from './index.module.less';

const Definition = () => {
  const dispatch = useDispatch();
  const { playerCtx, mainDeviceCameraConfig } = useSelector(state => state.ipcCommon);
  const { videoClarity } = mainDeviceCameraConfig;

  const [current, setCurrent] = React.useState(
    videoClarityList.findIndex(item => videoClarity === item.type)
  );

  const currentDefinitionText = useMemo(() => {
    return in18.getLang(`ipc_resolution_${definitionConfig[videoClarityList[current].type]}`);
  }, [current]);

  useEffect(() => {
    setCurrent(videoClarityList.findIndex(item => videoClarity === item.type));
  }, [videoClarity]);

  const handleClick = useCallback(() => {
    const newCurrent = current === videoClarityList.length - 1 ? 0 : current + 1;
    setClarity(videoClarityList[newCurrent].text).then(() => {
      setCurrent(newCurrent);
      dispatch(
        actions.common.mainDeviceCameraConfig({
          videoClarity: videoClarityList[newCurrent].type,
        })
      );
      showToast('operatorSuccess', 'success');
    });

    showFullButtonAnd5sHide();
  }, [current, playerCtx]);

  return (
    <View className={Styles.definition}>
      <Button
        onClick={_.debounce(handleClick, 300)}
        className={Styles.definitionButton}
        hoverClassName={Styles.fontHover}
      >
        <Text>{currentDefinitionText}</Text>
      </Button>
    </View>
  );
};

export default Definition;
