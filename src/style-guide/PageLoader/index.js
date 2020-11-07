import React from 'react'
import Loader from './loader.gif'

import { Container, LoaderContainer } from './styles'

const PageLoader = () => (
  <Container>
    <LoaderContainer src={Loader} alt="TodoApp" />
  </Container>
)

export default PageLoader
