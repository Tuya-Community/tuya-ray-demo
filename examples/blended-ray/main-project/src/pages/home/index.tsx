import React from 'react'
import { View, router, Button, navigateTo } from 'ray'

export default () => {
  return (
    <View>
      current main page: home
      <Button onClick={() => navigateTo({
        url: '/ray/wechat/pages/index/index'
      })}>to page index of sub package</Button>
      <Button onClick={() => router.push('/index')}>to page index of main package</Button>
    </View>
  )
}
