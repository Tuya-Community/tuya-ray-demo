import React from 'react';
import { View, Text } from '@ray-js/components';
import { withPageLifecycle, router } from 'ray';

const CustomContext = React.createContext({
  foo: 'bar',
});

class Foo extends React.Component {
  componentName = 'Hoc Component keep ref!!!';

  componentDidMount() {
    console.info('component: Foo did mount');
  }

  onShow() {
    console.info('component: Foo onShow');
  }

  render() {
    return (
      <React.Fragment>
        <View>
          <Text>Foo Children </Text>
        </View>
        <View onClick={() => router.push(`/?v=${Date.now()}`)}>
          <Text>总是回到首页</Text>
        </View>
      </React.Fragment>
    );
  }
}

Foo.contextType = CustomContext;

export default withPageLifecycle(Foo);
