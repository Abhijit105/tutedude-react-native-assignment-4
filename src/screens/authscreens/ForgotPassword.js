import React, { useState } from 'react'
import {
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
} from 'react-native'
import {
  Layout,
  Text,
  TextInput,
  Button,
  useTheme,
  themeColor,
} from 'react-native-rapi-ui'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'

const Forgot = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const { isDarkmode, setTheme } = useTheme()

  const auth = getAuth()

  const reset = async () => {
    try {
      setLoading(true)
      await sendPasswordResetEmail(auth, email)
      navigation.navigate('Login')
      alert('Your password reset link has been sent to your email')
    } catch (err) {
      const error = err.message
      alert(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <KeyboardAvoidingView behavior='height' enabled style={{ flex: 1 }}>
      <Layout>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {/* <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <Image
              resizeMode='contain'
              source={}
              style={{ height: 220, width: 220 }}
            />
          </View> */}
          <View
            style={{
              flex: 3,
              paddingHorizontal: 20,
              paddingBottom: 20,
              backgroundColor: isDarkmode
                ? themeColor.dark100
                : themeColor.white100,
            }}
          >
            <Text
              style={{
                alignSelf: 'center',
                padding: 30,
              }}
              size='h3'
            >
              Forgot
            </Text>
            <Text>Email</Text>
            <TextInput
              placeholder='Enter your email'
              containerStyle={{ marginTop: 10 }}
              autoCapitalize='none'
              autoComplete='off'
              value={email}
              keyboardType='email-address'
              onChangeText={text => setEmail(text)}
            />

            <Button
              text={loading ? 'Loading' : 'Continue'}
              style={{ marginTop: 20 }}
              onPress={reset}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 30,
                justifyContent: 'center',
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  isDarkmode ? setTheme('light') : setTheme('dark')
                }
              >
                <Text style={{ marginLeft: 5 }} size='md'>
                  {isDarkmode ? 'Light Theme' : 'Dark Mode'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Layout>
    </KeyboardAvoidingView>
  )
}

export default Forgot
