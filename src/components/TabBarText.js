import React from 'react'
import { StyleSheet } from 'react-native'
import { useTheme, Text } from 'react-native-rapi-ui'

const TabBarText = ({ title }) => {
  const { isDarkmode } = useTheme()
  return <Text style={styles.text}>{title}</Text>
}

const styles = StyleSheet.create({
  text: { marginBottom: 2, textAlign: 'center', fontSize: 12 },
})

export default TabBarText
