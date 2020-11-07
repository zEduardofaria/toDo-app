import React from 'react'
import { string, bool, func, node, object } from 'prop-types'
import ReactModal from 'react-modal'
import Icon from '../Icon'
import { Title, Container, Close, Header } from './styles'

const defaultContent = {
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  minWidth: 'unset',
  width: '100%',
  maxWidth: '900px',
  padding: 0,
  transform: 'translate(-50%, -50%)',
}

const defaultOverlay = {
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
}

const Modal = ({
  title,
  isOpen,
  onClose,
  children,
  styleContainer,
  styleContent,
  styleOverlay,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      style={{
        content: {
          ...defaultContent,
          ...styleContent,
        },
        overlay: {
          ...defaultOverlay,
          ...styleOverlay,
        },
      }}
    >
      {title && (
        <Header>
          <Close
            onClick={onClose}
            icon={<Icon iconSize={24} name="close" />}
            type="text"
            width={40}
            height={40}
          />
          <Title>{title}</Title>
        </Header>
      )}
      <Container style={styleContainer}>{children}</Container>
    </ReactModal>
  )
}

Modal.propTypes = {
  title: string,
  isOpen: bool,
  onClose: func.isRequired,
  children: node.isRequired,
  styleContainer: object,
  styleContent: object,
  styleOverlay: object,
}

Modal.setAppElement = ReactModal.setAppElement
export default Modal
