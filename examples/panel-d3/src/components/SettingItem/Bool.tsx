import React, { FC } from 'react';
import { vibrateShort } from '@ray-js/ray';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from '@ray-js/components';
import { DpStateKey, selectDpStateByCode, updateDp } from '@/redux/modules/dpStateSlice';

type Props = {
  dpCode: DpStateKey;
};

const Bool: FC<Props> = ({ dpCode }) => {
  const dispatch = useDispatch();
  const dpValue = useSelector(selectDpStateByCode(dpCode)) as boolean;

  const handleSwitchChange = () => {
    dispatch(updateDp({ [dpCode]: !dpValue }));
    vibrateShort({ type: 'light' });
  };

  return <Switch color="#6395f6" checked={dpValue} onChange={handleSwitchChange} />;
};

export default Bool;
