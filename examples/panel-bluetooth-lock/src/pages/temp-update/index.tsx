import { FC, useRef } from 'react';
import { Button, useQuery, showToast, router } from '@ray-js/ray';
import { Api } from '@/api';
import Strings from '@/i18n';
import CustomForm from '../temp/component/CustomForm';

const Index: FC = () => {
  const query = useQuery();
  const customFormRef = useRef() as any;

  const handleSave = () => {
    const values = customFormRef.current?.getValues();
    if (query && query.id && values) {
      Api.apis
        .updatePwd({
          id: query.id,
          name: values.name,
          effectiveTime: values.effectiveTime,
          invalidTime: values.invalidTime,
          schedule: values.schedule,
          operate: '126',
          sn: query.sn,
        })
        .then(() => {
          showToast({ title: Strings.getLang('Password_form_updateSuccess'), icon: 'success' });
          router.back();
        }).catch(err => {
          if (err.message || err.errorMsg) {
            showToast({ title: err.message || err.errorMsg, icon: 'error' });
          }
        });
      }
  };

  return (
    <>
      <CustomForm ref={customFormRef} detailData={{...query}} type="update" />
      <Button style={{ marginLeft: '8rpx', marginRight: '8rpx' }} onClick={handleSave}>{Strings.getLang('Password_save')}</Button>
     </>
  );
};

export default Index;
