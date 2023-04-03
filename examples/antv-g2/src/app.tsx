import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.info('app onLaunch');
  }

  componentDidMount() {
    console.info('app did mount');
  }

  render() {
    return this.props.children;
  }
}
