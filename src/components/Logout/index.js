import React from 'react'

import { useAuth } from '@/hooks/authContext'

import { Container } from './styles'

const Logout = () => {
  const { signOut } = useAuth()

  return <Container onClick={signOut}>Sair</Container>
}

export default Logout
