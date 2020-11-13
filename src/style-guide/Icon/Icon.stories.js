import React from 'react'
import styled from 'styled-components'

import Icon from './index'

export default {
  title: 'TodoApp/Icon',
  component: Icon,
  argTypes: {
    color: { control: 'color' },
  },
}

const IconWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 12px;
  }
`

const Template = (args) => (
  <IconWrapper>
    <Icon {...args} />
    <p>{args.name}</p>
  </IconWrapper>
)

export const Default = Template.bind({})
Default.args = {
  name: 'user',
  iconSize: 32,
}
