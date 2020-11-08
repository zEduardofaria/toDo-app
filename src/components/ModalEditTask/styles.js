import styled from 'styled-components'

import { Button } from '@/style-guide'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
`

export const StyledButton = styled(Button)`
  margin-top: 30px;
  max-height: 35px;
  max-width: 160px;
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
`
