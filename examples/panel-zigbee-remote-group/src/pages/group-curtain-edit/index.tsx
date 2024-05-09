import React from 'react';
import Strings from '@/i18n';
import { PageGroup } from '@/components/page-group';
import { CATEGORY_CODES } from '@/constant';

export function GroupCurtainEdit() {
  return (
    <PageGroup
      codes={CATEGORY_CODES.curtain.join(',')}
      title={Strings.getLang('groupCurtain')}
      theme="dark"
      background="linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #F1F1F1 17.01%)"
      backgroundImage="url(/images/bg_curtain.png)"
    />
  );
}

export default GroupCurtainEdit;
