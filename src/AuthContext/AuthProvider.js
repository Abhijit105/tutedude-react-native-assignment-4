import React, { createContext, useState, useEffect, useContext } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const auth = getAuth()

  const checkLogin = () => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(true)
      } else {
        setUser(false)
      }
    })
  }

  useEffect(() => {
    checkLogin()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
