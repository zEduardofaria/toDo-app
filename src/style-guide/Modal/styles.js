import styled from 'styled-components'
import Button from '../Button'
import { grey } from '../colors'

export const Title = styled.div`
  font-size: 28px;
  border-bottom: 1px solid ${grey};
  width: 100%;
  padding: 6px 20px;
`

export const Close = styled(Button)`
  position: absolute;
  right: 0;
  top: 2px;
  z-index: 10;
`

export const Container = styled.div`
  padding: 15px 20px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
