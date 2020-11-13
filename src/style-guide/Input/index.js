import React from 'react'
import { string, node, func, object } from 'prop-types'

import Icon from '../Icon'

import { white } from '../colors'

import {
  Container,
  StyledInput,
  IconContainer,
  ErrorText,
  Error,
} from './styles'

const Input = ({
  onChange,
  onBlur,
  icon,
  backgroundColor = white,
  placeholder,
  style,
  className,
  name,
  type,
  error,
  value,
}) => (
  <Container
    backgroundColor={backgroundColor}
    style={style}
    className={className}
  >
    <StyledInput
      icon={icon}
      name={name}
      type={type}
      backgroundColor={backgroundColor}
      onChange={onChange}
      onBlur={(evt) => onBlur && onBlur(evt)}
      value={value}
      placeholder={placeholder}
    />
    {icon && (
      <IconContainer>
        <Icon name={icon} iconSize={14} />
      </IconContainer>
    )}
    {error && (
      <Error>
        <ErrorText>{error}</ErrorText>
      </Error>
    )}
  </Container>
)

Input.propTypes = {
  onChange: func,
  onBlur: func,
  icon: node,
  backgroundColor: string,
  placeholder: string,
  style: object,
  className: string,
  name: string,
  type: string,
  error: string,
  value: string,
}

export default Input
