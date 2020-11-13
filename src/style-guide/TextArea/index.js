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
  value,
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
      value={value}
    />
  </Container>
)

Input.propTypes = {
  onChange: func,
  backgroundColor: string,
  placeholder: string,
  value: string,
  style: object,
  className: string,
}

export default Input
