import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Layout, themeColor } from 'react-native-rapi-ui'

const Loading = () => {
  return (
    <Layout>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size={'large'} color={themeColor.primary100} />
      </View>
    </Layout>
  )
}

export default Loading
