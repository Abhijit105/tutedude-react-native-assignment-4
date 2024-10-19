import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home.js'
import SecondScreen from '../screens/SecondScreen.js'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import About from '../screens/About.js'
import Profile from '../screens/Profile.js'
import { useTheme, themeColor } from 'react-native-rapi-ui'
import TabBarIcon from '../components/TabBarIcon.js'
import TabBarText from '../components/TabBarText.js'
import { getApp, getApps, initializeApp } from 'firebase/app'
import ForgotPassword from '../screens/authscreens/ForgotPassword.js'
import Login from '../screens/authscreens/Login.js'
import Register from '../screens/authscreens/Register.js'
import { AuthContext } from '../AuthContext/AuthProvider.js'
import Loading from '../screens/utils/Loading.js'

const StackNavigator = createNativeStackNavigator()
const TabsNavigator = createBottomTabNavigator()
const AuthNavigator = createNativeStackNavigator()

const firebaseConfig = {
  apiKey: 'AIzaSyDyry5ANRkz_ElZOGSbdF7hO2omZ-s1fSo',
  authDomain: 'react-native-auth-f24dd.firebaseapp.com',
  projectId: 'react-native-auth-f24dd',
  storageBucket: 'react-native-auth-f24dd.appspot.com',
  messagingSenderId: '1052589796132',
  appId: '1:1052589796132:web:ac0b3f67ce14a214b8e1b1',
  measurementId: 'G-JLT4LVF4JT',
}

if (getApps().length === 0) {
  initializeApp(firebaseConfig)
}

const Tabs = () => {
  const { isDarkmode, setTheme } = useTheme()

  return (
    <TabsNavigator.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDarkmode
            ? themeColor.dark100
            : themeColor.white100,
          borderTopColor: isDarkmode ? themeColor.dark100 : themeColor.white100,
        },
      }}
    >
      <TabsNavigator.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText title='Home' focused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon='home' focused={focused} />
          ),
          headerShown: true,
        }}
      />
      <TabsNavigator.Screen
        name='About'
        component={About}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText title='About' focused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon='information-circle' focused={focused} />
          ),
          headerShown: true,
        }}
      />
      <TabsNavigator.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText title='Profile' focused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon='person' focused={focused} />
          ),
          headerShown: true,
        }}
      />
    </TabsNavigator.Navigator>
  )
}

function Main() {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen name='Tabs' component={Tabs} />
      <StackNavigator.Screen name='SecondScreen' component={SecondScreen} />
    </StackNavigator.Navigator>
  )
}

function Auth() {
  return (
    <AuthNavigator.Navigator screenOptions={{ headerShown: false }}>
      <AuthNavigator.Screen name='Login' component={Login} />
      <AuthNavigator.Screen name='Register' component={Register} />
      <AuthNavigator.Screen name='ForgotPassword' component={ForgotPassword} />
    </AuthNavigator.Navigator>
  )
}

function MainNavigator() {
  const auth = useContext(AuthContext)
  const { user } = auth

  return (
    <NavigationContainer>
      {user === null && <Loading />}
      {user === false && <Auth />}
      {user === true && <Main />}
    </NavigationContainer>
  )
}

export default MainNavigator
