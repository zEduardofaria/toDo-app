import React from 'react'

import { useAuth } from '@/hooks/authContext'
import { Logout } from '@/components'

import { Container } from './styles'

const Main = () => {
  const { user } = useAuth()

  if (!user) {
    return <div>Loading</div>
  }

  return (
    <Container>
      Bem vindo, {user.name}
      <Logout />
    </Container>
  )
}

export default Main
