import React from 'react'
import { string, func, object } from 'prop-types'

import { white } from '../colors'

import { Container, StyledInput } from './styles'

const Input = ({
  onChange,
  backgroundColor = white,
  placeholder,
  style,
  className,
}) => (
  <Container
    backgroundColor={backgroundColor}
    style={style}
    className={className}
  >
    <StyledInput
      backgroundColor={backgroundColor}
      onChange={({ target: { value } }) => onChange(value)}
      placeholder={placeholder}
    />
  </Container>
)

Input.propTypes = {
  onChange: func,
  backgroundColor: string,
  placeholder: string,
  style: object,
  className: string,
}

export default Input
