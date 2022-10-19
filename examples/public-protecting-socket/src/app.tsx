import React from 'react';
import 'ray';
import '@/i18n';
import './app.less';
import { kit } from '@ray-js/panel-sdk';
import { SdmProvider } from '@ray-js/sdm-react';
import { devices } from '@/devices';

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
    return <SdmProvider value={devices.socket}>{this.props.children}</SdmProvider>;
  }
}

export default App;
