import React from 'react'
import { View, router, Button, navigateTo } from 'ray'

export default () => {
  return (
    <View>
      current main page: index
      <Button onClick={() => navigateTo({
        url: '/ray/wechat/pages/home/index'
      })}>to page home of sub package</Button>
      <Button onClick={() => router.push('/')}>to page home of main package</Button>
    </View>
  )
}
