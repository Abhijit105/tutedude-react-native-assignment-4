import React from 'react'
import AppNavigator from './src/navigator/AppNavigator'
import { ThemeProvider } from 'react-native-rapi-ui'
import AuthProvider from './src/AuthContext/AuthProvider'

export default function App() {
  return (
    <ThemeProvider theme='light'>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </ThemeProvider>
  )
}
