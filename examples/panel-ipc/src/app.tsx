/* eslint-disable no-console */
import React from 'react';
import 'ray';
import '@/i18n';
import { kit, SdmProvider } from '@ray-js/panel-sdk';
import { devices } from '@/devices';

import composeLayout from './composeLayout';

const { initPanelEnvironment } = kit;

interface Props {
  children: React.ReactNode;
}

initPanelEnvironment({ useDefaultOffline: true });

class App extends React.Component<Props> {
  render() {
    return <SdmProvider value={devices.robot}>{this.props.children}</SdmProvider>;
  }
}

export default composeLayout(App);
