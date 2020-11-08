import React from 'react'
import { array, string, func } from 'prop-types'

import { Task } from '@/components'

import { Container, Title, Content } from './styles'

const TaskList = ({ title, tasks, onEdit }) => (
  <Container>
    <Title>{title}</Title>
    <Content>
      {tasks.map((data, index) => (
        <Task key={index} data={data} onEdit={onEdit} />
      ))}
    </Content>
  </Container>
)

TaskList.propTypes = {
  title: string,
  tasks: array,
  onEdit: func,
}

export default TaskList
