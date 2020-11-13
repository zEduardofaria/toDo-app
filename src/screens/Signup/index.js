import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'

import useToast from '../../hooks/useToast'
import { useAuth } from '../../hooks/authContext'

import {
  Container,
  Content,
  Header,
  StyledInput,
  Row,
  Action,
  StyledButton,
  StyledLink,
} from './styles'

const validationSchema = yup.object().shape({
  name: yup.string().required('Por favor, digite seu nome'),
  email: yup
    .string()
    .email('Informe um email válido')
    .required('Por favor, digite seu email'),
  password: yup.string().required('Por favor, digite a sua senha'),
})

const Signup = () => {
  const history = useHistory()
  const { signUp } = useAuth()
  const showToast = useToast()

  const register = async ({ name, email, password }) => {
    const logged = await signUp({ name, email, password })

    if (logged) {
      return history.push('/')
    }

    showToast('error', 'Email indisponível para cadastro.')

    return this
  }

  return (
    <Container>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={register}
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
            <Header>Cadastrar</Header>
            <Row>
              <StyledInput
                name="name"
                type="name"
                placeholder="Nome"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                error={touched.name && errors.name}
              />
            </Row>
            <Row>
              <StyledInput
                name="email"
                type="email"
                placeholder="Email"
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
                onClick={handleSubmit}
                label="Cadastrar"
              />

              <StyledLink to="/login">
                <StyledButton height={35} label="Voltar" />
              </StyledLink>
            </Action>
          </Content>
        )}
      </Formik>
    </Container>
  )
}

export default Signup
