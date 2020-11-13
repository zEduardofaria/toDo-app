import styled from 'styled-components'
import { shade } from 'polished'
import { Form } from 'formik'
import { Link } from 'react-router-dom'

import { Input, Button } from '../../style-guide'
import { white, greyShadow, darkGrey } from '../../style-guide/colors'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const Header = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 15px;

  width: 100%;
  display: flex;
  justify-content: center;
`

export const StyledInput = styled(Input)`
  height: 32px;

  &:focus {
    border-bottom: 2px solid ${shade(0.6, darkGrey)};
  }
`

export const Row = styled.div`
  margin-top: 25px;
`

export const Action = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const StyledButton = styled(Button)`
  display: flex;
  width: 100%;
  margin-top: 25px;
`

export const StyledLink = styled(Link)`
  width: 100%;
`
