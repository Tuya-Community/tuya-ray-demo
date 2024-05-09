import React from 'react';
import { PageGroup } from '@/components/page-group';
import { CATEGORY_CODES } from '@/constant';
import Strings from '@/i18n';

export function GroupLightEdit() {
  return (
    <PageGroup
      title={Strings.getLang('groupLight')}
      theme="light"
      codes={CATEGORY_CODES.light.join(',')}
      background="linear-gradient(180deg, rgba(223, 178, 85, 0) 0%, #DFB255 22.58%)"
      backgroundImage="url(/images/bg_light.png)"
    />
  );
}

export default GroupLightEdit;
