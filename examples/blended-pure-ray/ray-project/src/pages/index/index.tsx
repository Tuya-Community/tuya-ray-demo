import React from 'react'
import { View, Input, router, Button, navigateTo } from 'ray'

export default () => {
  return (
    <View>
      current page: index
      <Button onClick={() => router.push('/index')}>to page home of sub package</Button>
      <Button onClick={() => navigateTo({
        url: '/pages/index/index'
      })}>to page index of main package</Button>
      <Input placeholder='请输入...' style={{ backgroundColor: '#eee' }} onInput={(e) => console.log(e.value)} />
    </View>
  )
}
