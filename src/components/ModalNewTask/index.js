import React from 'react'
import { bool, func } from 'prop-types'

import { Modal } from '@/style-guide'

import { Container, Content } from './styles'

const ModalNewTasks = ({ isOpen, onClose }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    title="Nova Tarefa"
    styleContainer={{ padding: 0 }}
  >
    <Container>
      <Content>teste</Content>
    </Container>
  </Modal>
)

ModalNewTasks.propTypes = {
  isOpen: bool,
  onClose: func,
}

export default ModalNewTasks
