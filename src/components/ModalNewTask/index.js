import React, { useState } from 'react'
import { bool, func, string } from 'prop-types'

import useToast from '@/hooks/useToast'
import { Modal, TextArea } from '@/style-guide'

import { Container, Content, StyledButton } from './styles'

const ModalNewTasks = ({ isOpen, onClose, addTask, userId }) => {
  const [description, setDescription] = useState('')
  const showToast = useToast()

  const handleChange = (text) => {
    setDescription(text)
  }

  const handleSubmit = () => {
    if (description === '') {
      return showToast('error', 'Não é possível criar uma tarefa vazia.')
    }

    addTask({ description, userId })
    setDescription('')
    return onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Nova Tarefa"
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
          <StyledButton
            type="primary"
            label="Adicionar tarefa"
            onClick={handleSubmit}
          />
        </Content>
      </Container>
    </Modal>
  )
}

ModalNewTasks.propTypes = {
  isOpen: bool,
  onClose: func,
  addTask: func,
  userId: string,
}

export default ModalNewTasks
