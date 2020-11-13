import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react'
import { node } from 'prop-types'
import uuid from 'react-uuid'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userLogged, setUserLogged] = useState(
    localStorage.getItem('@TodoApp:USER_LOGGED')
  )
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('@TodoApp:USER'))
  )
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem('@TodoApp:USERS')) || []
  )

  const signIn = useCallback(
    ({ email, password }) => {
      const userIndex = users.findIndex((user) => user.email === email)

      if (userIndex >= 0 && users[userIndex].password === password) {
        setUserLogged(true)
        setUser(users[userIndex])

        localStorage.setItem('@TodoApp:USER_LOGGED', email)
        localStorage.setItem('@TodoApp:USER', JSON.stringify(users[userIndex]))

        setUserLogged(true)
        return true
      }

      return false
    },
    [users]
  )

  const signOut = useCallback(() => {
    localStorage.removeItem('@TodoApp:USER_LOGGED')
    localStorage.removeItem('@TodoApp:USER')

    setUserLogged(false)
  }, [])

  const checkEmail = useCallback(
    (email) => users.findIndex((user) => user.email === email) >= 0,
    [users]
  )

  const signUp = useCallback(
    ({ name, email, password }) => {
      const hasAvailableEmail = !checkEmail(email)

      if (hasAvailableEmail) {
        const newUser = { id: uuid(), name, email, password }
        const newUsers = [...users, newUser]

        setUserLogged(true)
        setUser(newUser)
        setUsers(newUsers)

        localStorage.setItem('@TodoApp:USER_LOGGED', email)
        localStorage.setItem('@TodoApp:USER', JSON.stringify(newUser))
        localStorage.setItem('@TodoApp:USERS', JSON.stringify(newUsers))

        return true
      }

      return null
    },
    [checkEmail, users]
  )

  useEffect(() => {
    if (!user) {
      signOut()
    }
  }, [signOut, user])

  return (
    <AuthContext.Provider
      value={{
        USER_LOGGED: userLogged,
        USER: user,
        USERS: users,
        signIn,
        signOut,
        signUp,
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
