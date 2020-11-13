import React, { useState } from 'react'
import ReactModal from 'react-modal'

import Modal from './index'
import Button from '../Button'

ReactModal.setAppElement('#modal-root')

export default {
  title: 'TodoApp/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => setOpenModal(true)

  const handleCloseModal = () => setOpenModal(false)

  return (
    <>
      <Button label="Open modal" onClick={handleOpenModal} />
      <Modal {...args} isOpen={openModal} onClose={handleCloseModal}>
        <p>content modal</p>
      </Modal>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  title: 'Risk Checks',
}

export const NoTitle = Template.bind({})
NoTitle.args = {}
