import React from 'react'
import Loader from './loader.gif'

import { Container, LoaderContainer } from './styles'

const PageLoader = () => (
  <Container>
    <LoaderContainer src={Loader} alt="Manvantara" />
  </Container>
)

export default PageLoader
