import React from 'react'
import { useTheme, themeColor } from 'react-native-rapi-ui'
import { Ionicons } from '@expo/vector-icons'

const TabBarIcon = ({ icon, focused }) => {
  const { isDarkmode } = useTheme()
  return (
    <Ionicons
      name={icon}
      size={20}
      color={
        focused
          ? themeColor.primary
          : isDarkmode
          ? themeColor.white100
          : themeColor.dark100
      }
    />
  )
}

export default TabBarIcon
