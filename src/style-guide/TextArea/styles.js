import styled from 'styled-components'
import { shade } from 'polished'

import { grey } from '../colors'

export const Container = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid ${grey};
  border-radius: 2px;
  height: fit-content;

  &:focus {
    border: 1px solid ${shade(0.6, grey)};
  }
`

export const StyledInput = styled.textarea`
  border: none;
  margin: 0;
  width: 100%;
  height: 100%;
  min-height: 108px;
  max-height: 268px;
  outline: none;
  resize: vertical;
`
