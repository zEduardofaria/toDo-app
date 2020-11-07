import styled from 'styled-components'
import { shade } from 'polished'

import { grey, red } from '../colors'

export const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid ${grey};
  border-radius: 2px;
  height: 32px;

  &:focus {
    border: 1px solid ${shade(0.6, grey)};
  }
`

export const StyledInput = styled.input`
  border: none;
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin: 0;
  padding: 0 5px;
  width: 100%;
  height: 100%;
  padding-left: ${({ icon }) => !!icon && '24px'};
  outline: none;
`

export const IconContainer = styled.div`
  position: absolute;
  bottom: 0px;
  width: 24px;
  height: 100%;
  padding-left: 6px;
  display: flex;
  align-items: center;
`

export const ErrorText = styled.span`
  font-size: 12px;
  color: ${red};
`

export const Error = styled.div`
  margin-top: 5px;
`
