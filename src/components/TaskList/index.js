import React from 'react'
import { array, string } from 'prop-types'

import { Task } from '@/components'

import { Container, Title, Content } from './styles'

const TaskList = ({ title, tasks }) => (
  <Container>
    <Title>{title}</Title>
    <Content>
      {tasks.map((data, index) => (
        <Task key={index} data={data} />
      ))}
    </Content>
  </Container>
)

TaskList.propTypes = {
  title: string,
  tasks: array,
}

export default TaskList
