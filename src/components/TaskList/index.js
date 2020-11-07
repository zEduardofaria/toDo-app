import React from 'react'
import { string } from 'prop-types'

import { Container, Title } from './styles'

const TaskList = ({ title }) => (
  <Container>
    <Title>{title}</Title>
  </Container>
)

TaskList.propTypes = {
  title: string,
}

export default TaskList
