import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'

import useToast from '@/hooks/useToast'
import { useAuth } from '@/hooks/authContext'

import {
  Container,
  Content,
  Header,
  StyledInput,
  Row,
  Action,
  StyledButton,
} from './styles'

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Informe um e-mail válido')
    .required('Por favor digite seu e-mail'),
  password: yup.string().required('Por favor digite a sua senha'),
})

const Login = () => {
  const history = useHistory()

  const { signIn } = useAuth()
  const showToast = useToast()

  const auth = async ({ email, password }) => {
    const logged = await signIn({ email, password })

    if (logged) {
      return history.push('/')
    }

    showToast('error', 'Usuário ou senha inválidos.')

    return this
  }

  return (
    <Container>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={auth}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <Content>
            <Header>Sign In</Header>
            <Row>
              <StyledInput
                name="email"
                type="email"
                placeholder="E-mail"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={touched.email && errors.email}
              />
            </Row>
            <Row>
              <StyledInput
                name="password"
                type="password"
                placeholder="Senha"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={touched.password && errors.password}
              />
            </Row>
            <Action>
              <StyledButton
                type="primary"
                height={35}
                width={120}
                onClick={handleSubmit}
                label="Entrar"
              />
            </Action>
          </Content>
        )}
      </Formik>
    </Container>
  )
}

export default Login
