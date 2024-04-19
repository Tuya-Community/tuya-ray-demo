import React from 'react';

export default class App extends React.Component {
  globalData = { say: 'hello ray!' };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.info('app did mount');
  }
  onLaunch(object: any) {
    console.log('app onLaunch', object);
  }
  onShow(object: any) {
    console.log('app onShow', object);
  }
  onHide(object: any) {
    console.log('app onHide', object);
  }
  onError(object: any) {
    console.log('app onError', object);
  }
  onPageNotFound(object: any) {
    console.log('app onPageNotFound', object);
  }
  onUnhandledRejection(object: any) {
    console.log('app onUnhandledRejection', object);
  }
  onThemeChange(object: any) {
    console.log('app onThemeChange', object);
  }

  render() {
    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}
