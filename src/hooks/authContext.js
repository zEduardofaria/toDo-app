import React, { createContext, useCallback, useState, useContext } from 'react'
import { node } from 'prop-types'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userLogged, setUserLogged] = useState(
    localStorage.getItem('@Manvantara:USER_LOGGED')
  )

  const signIn = useCallback(({ email, password }) => {
    if (email === 'teste@teste.com' && password === '123') {
      localStorage.setItem('@Manvantara:USER_LOGGED', email)
      setUserLogged(true)
      return true
    }

    return false
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@Manvantara:USER_LOGGED')
    setUserLogged(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        USER_LOGGED: userLogged,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

AuthProvider.propTypes = {
  children: node,
}

export { AuthProvider, useAuth }
