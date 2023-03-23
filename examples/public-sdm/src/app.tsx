import React from 'react';
import 'ray';
import '@/i18n';
import './app.less';
import { kit, SdmProvider } from '@ray-js/panel-sdk';
import { devices } from '@/devices';
import composeLayout from './composeLayout';

const { initPanelEnvironment } = kit;

interface Props {
  children: React.ReactNode;
}

initPanelEnvironment({ useDefaultOffline: true });
class App extends React.Component<Props> {
  componentDidMount() {
    console.log('=== App did mount');
  }

  onLaunch() {
    console.info('=== App onLaunch');
  }

  render() {
    return <SdmProvider value={devices.common}>{this.props.children}</SdmProvider>;
  }
}

export default composeLayout(App);
