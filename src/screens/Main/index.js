import React from 'react'

import { useAuth } from '@/hooks/authContext'
import { Logout, TaskList } from '@/components'

import {
  Container,
  Content,
  Header,
  Title,
  SubTitle,
  Section,
  Footer,
  StyledButton,
} from './styles'

const Main = () => {
  const { USER } = useAuth()

  if (!USER) {
    return <div>Loading</div>
  }

  return (
    <Container>
      <Content>
        <Header>
          <Title>Bem vindo, {USER.name}</Title>
          <StyledButton
            type="primary"
            height={35}
            width={175}
            onClick={() => {}}
            label="Nova tarefa"
          />
        </Header>
        <SubTitle>Você tem 5 tarefas para fazer.</SubTitle>
        <Section>
          <TaskList title="Para fazer" />
          <TaskList title="Concluídas" />
        </Section>
        <Footer>
          <Logout />
        </Footer>
      </Content>
    </Container>
  )
}

export default Main
