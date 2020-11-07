import React from 'react'
import LinesEllipsis from 'react-lines-ellipsis'

import {
  Container,
  Description,
  Actions,
  DeleteButton,
  EditButton,
  FinishButton,
} from './styles'

const Task = () => (
  <Container>
    <Description>
      <LinesEllipsis
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat."
        maxLine="4"
        ellipsis="..."
        trimRight
        basedOn="letters"
      />
    </Description>
    <Actions>
      <DeleteButton
        type="danger"
        height={35}
        onClick={() => {}}
        label="Deletar"
      />
      <EditButton
        type="primary"
        height={35}
        onClick={() => {}}
        label="Editar"
      />
      <FinishButton
        type="success"
        height={35}
        onClick={() => {}}
        label="Concluir"
      />
    </Actions>
  </Container>
)

export default Task
