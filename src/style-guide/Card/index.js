import React from 'react'
import { node, string, object, oneOfType, bool } from 'prop-types'

import { Container, Content } from './styles'

const Card = ({
  content,
  header,
  className,
  style,
  styleContent,
  squared = false,
}) => (
  <Container className={className} style={style}>
    {content && (
      <Content header={!!header} squared={squared} style={styleContent}>
        {content}
      </Content>
    )}
  </Container>
)

Card.propTypes = {
  header: string,
  content: oneOfType([node, string]),
  className: string,
  squared: bool,
  style: object,
  styleContent: object,
}

export default Card
