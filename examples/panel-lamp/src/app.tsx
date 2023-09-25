/* eslint-disable no-console */
import React from 'react';
import 'ray';
import '@/i18n';
import { SdmProvider } from '@ray-js/panel-sdk';
import { initPanelEnvironment } from '@ray-js/ray';
import RayErrorCatch from '@ray-js/ray-error-catch';
import { devices } from '@/devices';

import composeLayout from './composeLayout';

interface Props {
  children: React.ReactNode;
}

initPanelEnvironment({ useDefaultOffline: true });

class App extends React.Component<Props> {
  render() {
    return (
      <RayErrorCatch>
        <SdmProvider value={devices.lamp}>{this.props.children}</SdmProvider>
      </RayErrorCatch>
    );
  }
}

export default composeLayout(App);
