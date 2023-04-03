import React from 'react'
import { View, router, Button, navigateTo } from 'ray'

export default () => {
  return (
    <View>
      current main page: home
      <Button onClick={() => navigateTo({
        url: '/ray/one/pages/home/index'
      })}>to page home of the first sub package</Button>
      <Button onClick={() => navigateTo({
        url: '/ray/two/pages/home/index'
      })}>to page home of the second sub package</Button>
    </View>
  )
}
