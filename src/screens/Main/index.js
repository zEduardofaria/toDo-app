import React, { useEffect, useState } from 'react'

import { useAuth } from '@/hooks/authContext'
import { useTask } from '@/hooks/taskContext'
import { Logout, TaskList, ModalEditTask, ModalNewTask } from '@/components'

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
  const { tasks, addTask, editTask } = useTask()
  const [todoTasks, setTodoTasks] = useState([])
  const [doneTasks, setDoneTasks] = useState([])
  const [modalNewTask, setModalNewTask] = useState(false)
  const [modalEditTask, setModalEditTask] = useState(false)
  const [editData, setEditData] = useState({})

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

  const handleModalEditTask = ({ taskId, description }) => {
    setModalEditTask(!modalEditTask)
    setEditData({ taskId, description })
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
          <TaskList
            title="Para fazer"
            tasks={todoTasks}
            onEdit={handleModalEditTask}
          />
          <TaskList
            title="Concluídas"
            tasks={doneTasks}
            onEdit={handleModalEditTask}
          />
        </Section>
        <Footer>
          <Logout />
        </Footer>
        <ModalNewTask
          isOpen={modalNewTask}
          onClose={handleModalNewTask}
          addTask={addTask}
          userId={USER.id}
        />
        <ModalEditTask
          isOpen={modalEditTask}
          onClose={() => setModalEditTask(!modalEditTask)}
          editTask={editTask}
          userId={USER.id}
          data={editData}
        />
      </Content>
    </Container>
  )
}

export default Main
