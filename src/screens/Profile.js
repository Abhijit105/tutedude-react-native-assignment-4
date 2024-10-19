import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text } from 'react-native-rapi-ui'

const Profile = () => {
  return (
    <Layout style={styles.root}>
      <Text style={styles.text}>Profile Screen</Text>
    </Layout>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { fontWeight: 'bold', textAlign: 'center' },
})

export default Profile
