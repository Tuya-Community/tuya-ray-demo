import React from 'react';
import './app.less';
import { initPanelEnvironment } from '@ray-js/ray';
import { SdmProvider } from '@ray-js/panel-sdk';
import { devices } from '@/devices';

interface Props {
  children: React.ReactNode;
}

initPanelEnvironment({ useDefaultOffline: true });
class App extends React.Component<Props> {
  componentDidMount() {
    //
  }

  onLaunch() {
    devices.socket.init();
  }

  render() {
    return <SdmProvider value={devices.socket}>{this.props.children}</SdmProvider>;
  }
}

export default App;
