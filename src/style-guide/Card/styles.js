import styled from 'styled-components'

import { white, grey, greyShadow } from '../colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${white};
  box-shadow: 0px 5px 14px ${greyShadow};
  border-radius: ${({ squared }) => !squared && '4px'};
`

export const Content = styled.div`
  border: 1px solid ${grey};
  border-radius: ${({ header, squared }) =>
    !squared && (header ? '0px 0px 4px 4px' : '4px')};
  padding: 16px 12px;
  background-color: ${white};
`
