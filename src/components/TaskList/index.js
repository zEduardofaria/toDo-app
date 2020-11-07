import React from 'react'
import { string } from 'prop-types'

import { Task } from '@/components'

import { Container, Title, Content } from './styles'

const TaskList = ({ title }) => (
  <Container>
    <Title>{title}</Title>
    <Content>
      <Task />
      <Task />
      <Task />
    </Content>
  </Container>
)

TaskList.propTypes = {
  title: string,
}

export default TaskList
