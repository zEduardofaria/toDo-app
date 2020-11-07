import React from 'react'

import { useAuth } from '@/hooks/authContext'
import { Logout } from '@/components'

import { Container } from './styles'

const Main = () => {
  const { USER } = useAuth()

  if (!USER) {
    return <div>Loading</div>
  }

  return (
    <Container>
      Bem vindo, {USER.name}
      <Logout />
    </Container>
  )
}

export default Main
