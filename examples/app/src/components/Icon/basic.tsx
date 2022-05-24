import React from 'react';
import { Icon, View } from '@ray-js/components';

export default function () {
  return (
    <React.Fragment>
      <View style={{ flexDirection: 'row' }}>
        <Icon type='icon-right' size={30} color='#007aff'></Icon>
        <Icon type='icon-warning' size={30} color='#007aff'></Icon>
        <Icon type='icon-a-cloudrainfill' size={30} color='#007aff'></Icon>
        <Icon type='icon-a-cloudsleetfill' size={30} color='#007aff'></Icon>
      </View>
    </React.Fragment>
  );
}
