import React, { useState, useEffect } from 'react'
import { bool, func, object } from 'prop-types'

import useToast from '../../hooks/useToast'
import { Modal, TextArea } from '../../style-guide'

import { Container, Content, StyledButton, Actions } from './styles'

const ModalEditTask = ({
  isOpen,
  onClose,
  editTask,
  data: { taskId, description: oldDescription },
}) => {
  const [description, setDescription] = useState('')
  const showToast = useToast()

  useEffect(() => {
    setDescription(oldDescription)
  }, [oldDescription])

  const handleChange = (text) => {
    setDescription(text)
  }

  const handleSubmit = () => {
    if (description === '') {
      return showToast('error', 'Não é possível deixar a tarefa vazia.')
    }

    editTask({ taskId, description })
    return onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Editar Tarefa"
      styleContainer={{ padding: 0 }}
    >
      <Container>
        <Content>
          <TextArea
            name="description"
            placeholder="Descreva sua tarefa"
            onChange={handleChange}
            value={description}
          />
          <Actions>
            <StyledButton label="Cancelar" onClick={onClose} />
            <StyledButton
              type="primary"
              label="Editar tarefa"
              onClick={handleSubmit}
            />
          </Actions>
        </Content>
      </Container>
    </Modal>
  )
}

ModalEditTask.propTypes = {
  isOpen: bool,
  onClose: func,
  editTask: func,
  data: object,
}

export default ModalEditTask
