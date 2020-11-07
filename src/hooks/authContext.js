import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react'
import { node } from 'prop-types'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userLogged, setUserLogged] = useState(
    localStorage.getItem('@TodoApp:USER_LOGGED')
  )
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])

  const signIn = useCallback(({ email, password }) => {
    if (email === 'teste@teste.com' && password === '123') {
      localStorage.setItem('@TodoApp:USER_LOGGED', email)
      setUserLogged(true)
      return true
    }

    return false
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@TodoApp:USER_LOGGED')
    setUserLogged(false)
  }, [])

  const checkEmail = useCallback(
    (email) => users.findIndex((user) => user.email === email) >= 0,
    [users]
  )

  const checkCredentials = useCallback(({ email, password }) => {
    console.log('password', password)
    console.log('email', email)
  }, [])

  useEffect(() => {
    if (!user) {
      signOut()
    }

    console.log('AuthProvider -> user', user)
    console.log('AuthProvider -> users', users)
  }, [users, user])

  const signUp = useCallback(
    ({ name, email, password }) => {
      const hasAvailableEmail = !checkEmail(email)

      if (hasAvailableEmail) {
        localStorage.setItem('@TodoApp:USER_LOGGED', email)
        setUserLogged(true)
        setUser({ name, email, password })
        setUsers([...users, { name, email, password }])

        return true
      }

      return null
    },
    [checkEmail, users]
  )

  return (
    <AuthContext.Provider
      value={{
        USER_LOGGED: userLogged,
        user,
        users,
        signIn,
        signOut,
        signUp,
        setUserLogged,
        checkCredentials,
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
