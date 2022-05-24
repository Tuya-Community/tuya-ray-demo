import React from 'react';
import { View, Button, Text } from '@ray-js/components';
import { location, router } from 'ray';

export default function Home() {
  return (
    <View>
      {Object.keys(location).map((key) => {
        return (
          <View key={key}>
            <Text>
              {key}: {JSON.stringify(location[key])}
            </Text>
          </View>
        );
      })}

      <Button
        onClick={() => {
          router.push(`/detail/${Date.now()}`);
        }}
      >
        <Text>详情页</Text>
      </Button>
    </View>
  );
}
