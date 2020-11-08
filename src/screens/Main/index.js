import React, { useEffect, useState } from 'react'

import { useAuth } from '@/hooks/authContext'
import { useTask } from '@/hooks/taskContext'
import { Logout, TaskList } from '@/components'

import ModalNewTasks from '@/components/ModalNewTask'
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
  const { tasks, addTask } = useTask()
  const [todoTasks, setTodoTasks] = useState([])
  const [doneTasks, setDoneTasks] = useState([])
  const [modalNewTask, setModalNewTask] = useState(false)

  useEffect(() => {
    if (USER && tasks) {
      const todo = tasks.filter(
        (task) => task.status === 'todo' && task.createdBy === USER.id
      )
      const done = tasks.filter(
        (task) => task.status === 'done' && task.createdBy === USER.id
      )

      setTodoTasks(todo)
      setDoneTasks(done)
    }
  }, [USER, tasks])

  if (!USER) {
    return <div>Loading</div>
  }

  const handleModalNewTask = () => {
    setModalNewTask(!modalNewTask)
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
            onClick={handleModalNewTask}
            label="Nova tarefa"
          />
        </Header>
        <SubTitle>Você tem {todoTasks.length} tarefas para fazer.</SubTitle>
        <Section>
          <TaskList title="Para fazer" tasks={todoTasks} />
          <TaskList title="Concluídas" tasks={doneTasks} />
        </Section>
        <Footer>
          <Logout />
        </Footer>
        <ModalNewTasks
          isOpen={modalNewTask}
          onClose={handleModalNewTask}
          addTask={addTask}
          userId={USER.id}
        />
      </Content>
    </Container>
  )
}

export default Main
