import React from 'react';
import { View, Image, Text, router } from '@ray-js/ray';
import { Cell, CellGroup, Dialog, DialogInstance } from '@ray-js/smart-ui';
import Strings from '@/i18n';
import { useActions, useDevice } from '@ray-js/panel-sdk';
import { mapResetCode } from '@/config/dpCodes';

const Setting = () => {
  const actions = useActions();
  const resetMap = () => {
    DialogInstance.confirm({
      context: this,
      title: Strings.getLang('dsc_reset_map_content'),
      icon: true,
      message: '',
      confirmButtonText: Strings.getLang('dsc_yes'),
      cancelButtonText: Strings.getLang('dsc_no'),
    })
      .then(() => {
        actions[mapResetCode].set(true);
        ty.showToast({ title: Strings.getLang('dsc_put_dp_success') });
      })
      .catch(() => {
        DialogInstance.close();
      });
  };

  return (
    <>
      <CellGroup>
        <Cell
          title={Strings.getLang('mapEdit')}
          isLink
          onClick={() => {
            router.push('/mapEdit');
          }}
        />
        <Cell title={Strings.getLang('dsc_reset_map')} border={false} isLink onClick={resetMap} />
      </CellGroup>
      <Dialog id="smart-dialog" customClass="my-custom-class" />
    </>
  );
};

export default Setting;
