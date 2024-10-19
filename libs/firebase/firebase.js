// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDyry5ANRkz_ElZOGSbdF7hO2omZ-s1fSo',
  authDomain: 'react-native-auth-f24dd.firebaseapp.com',
  projectId: 'react-native-auth-f24dd',
  storageBucket: 'react-native-auth-f24dd.appspot.com',
  messagingSenderId: '1052589796132',
  appId: '1:1052589796132:web:ac0b3f67ce14a214b8e1b1',
  measurementId: 'G-JLT4LVF4JT',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
