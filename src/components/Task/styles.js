import styled, { css } from 'styled-components'

import { Button } from '@/style-guide'
import { greyShadow, greyBorder } from '@/style-guide/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 130px;
  margin-top: 15px;
  border-radius: 5px;
  box-shadow: 2px 3px 5px ${greyShadow};
  border: 1px solid ${greyBorder};
`

export const Description = styled.div`
  padding: 15px;
  height: 100%;
`

export const Actions = styled.div`
  display: flex;
`

export const DeleteButton = styled(Button)`
  border-radius: 0px 0px 0px 5px;

  ${({ isDone }) =>
    isDone &&
    css`
      border-radius: 0px 0px 5px 5px;
    `}
`

export const EditButton = styled(Button)`
  border-radius: 0px;
`

export const FinishButton = styled(Button)`
  border-radius: 0px 0px 5px 0px;
`
