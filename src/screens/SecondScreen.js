import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
  Layout,
  Section,
  SectionContent,
  themeColor,
  useTheme,
  Text,
  TopNav,
} from 'react-native-rapi-ui'
import { Ionicons } from '@expo/vector-icons'

const SecondScreen = ({ navigation }) => {
  const { isDarkmode, setTheme } = useTheme()

  return (
    <Layout>
      <TopNav
        leftContent={
          <Ionicons
            name='chevron-back'
            size={24}
            color={isDarkmode ? themeColor.white : themeColor.black}
          />
        }
        leftAction={() => navigation.goBack()}
        middleContent='Second Screen'
        rightContent={
          <Ionicons
            name={isDarkmode ? 'sunny' : 'moon'}
            size={20}
            color={isDarkmode ? themeColor.white : themeColor.black}
          />
        }
        rightAction={() => {
          isDarkmode ? setTheme('light') : setTheme('dark')
        }}
      />
      <View style={styles.root}>
        <Section>
          <SectionContent>
            <Text style={styles.text}>This is the second screen</Text>
          </SectionContent>
        </Section>
      </View>
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

export default SecondScreen
