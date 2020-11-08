import React from 'react'
import { object, func } from 'prop-types'
import LinesEllipsis from 'react-lines-ellipsis'

import { useTask } from '../../hooks/taskContext'

import {
  Container,
  Description,
  Actions,
  DeleteButton,
  EditButton,
  FinishButton,
} from './styles'

const Task = ({ data: { id, description, status }, onEdit }) => {
  const { deleteTask, editTask } = useTask()

  return (
    <Container>
      <Description>
        <LinesEllipsis
          text={description}
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
          onClick={() => deleteTask(id)}
          label="Deletar"
          isDone={status === 'done'}
        />
        {status !== 'done' && (
          <>
            <EditButton
              type="primary"
              height={35}
              onClick={() => onEdit({ taskId: id, description })}
              label="Editar"
            />
            <FinishButton
              type="success"
              height={35}
              onClick={() => editTask({ taskId: id, status: 'done' })}
              label="Concluir"
            />
          </>
        )}
      </Actions>
    </Container>
  )
}

Task.propTypes = {
  data: object,
  onEdit: func,
}

export default Task
