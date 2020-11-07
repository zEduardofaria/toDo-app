import styled from 'styled-components'
import { shade } from 'polished'
import { Form } from 'formik'
import { Input, Button } from '@/style-guide'
import { white, greyShadow, darkGrey } from '@/style-guide/colors'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  height: 100%;
  padding: 150px;

  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  background-image: url(${({ image }) => image});
`

export const Content = styled(Form)`
  display: flex;
  flex-direction: column;
  background-color: ${white};
  width: 400px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 14px ${greyShadow};
`

export const Header = styled.span`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 15px;
`

export const StyledInput = styled(Input)`
  border: unset;
  border-bottom: 2px solid ${darkGrey};
  height: 32px;

  &:focus {
    border-bottom: 2px solid ${shade(0.6, darkGrey)};
  }
`

export const Row = styled.div`
  margin-top: 30px;
`

export const Action = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const StyledButton = styled(Button)`
  display: flex;
  border-radius: 100px;
`
