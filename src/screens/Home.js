import React from 'react'
import { View, StyleSheet, Linking } from 'react-native'
import {
  Layout,
  Button,
  Section,
  SectionContent,
  Text,
  TopNav,
  themeColor,
  useTheme,
} from 'react-native-rapi-ui'
import { Ionicons } from '@expo/vector-icons'
import { getAuth, signOut } from 'firebase/auth'

const Home = ({ navigation }) => {
  const { isDarkmode, setTheme } = useTheme()

  const auth = getAuth()

  return (
    <Layout>
      <View style={styles.root}>
        <Section>
          <SectionContent>
            <Text style={styles.text}>Components made with Rapi UI</Text>
            <Button
              text='Rapi Docs'
              style={styles.button}
              status='info'
              onPress={() => Linking.openURL('https://rapi-ui.kikiding.space/')}
            />
            <Button
              text='Go to second screen'
              style={styles.button}
              onPress={() => navigation.navigate('SecondScreen')}
              status='success'
            />
            <Button
              text={isDarkmode ? 'Light Mode' : 'Dark Mode'}
              style={styles.button}
              status={isDarkmode ? 'success' : 'info'}
              onPress={() =>
                isDarkmode ? setTheme('light') : setTheme('dark')
              }
            />
            <Button
              text={'Sign Out'}
              style={styles.button}
              status={'danger'}
              onPress={() => signOut(auth)}
            />
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
    marginHorizontal: 20,
  },
  text: { fontWeight: 'bold', textAlign: 'center' },
  button: {
    marginTop: 20,
  },
})

export default Home
