/* eslint-disable no-console */
import React, { useRef, useEffect, useMemo } from 'react';
import { View, Text } from '@ray-js/ray';
import { useSelector, actions } from '@/redux';
import { useDispatch } from 'react-redux';
import Strings from '@/i18n';

import Styles from './index.module.less';

function LiveTip() {
  const dispatch = useDispatch();
  const { recordType } = useSelector(state => state.ipcCommon);
  const timeId = useRef(null);

  useEffect(() => {
    timeId.current = setTimeout(() => {
      dispatch(actions.common.recordSuccess(false));
    }, 5 * 1000);

    return () => {
      clearTimeout(timeId.current);
    };
  }, []);

  const tipText = useMemo(() => {
    const langKey = recordType === 1 ? 'ipc_screen_shot_text' : 'ipc_record_save';
    return Strings.getLang(langKey);
  }, [recordType]);

  return (
    <View className={Styles.RecordTipWrap}>
      <Text>{tipText}</Text>
    </View>
  );
}

export default LiveTip;
