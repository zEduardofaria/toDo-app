import React from 'react'

import Card from './index'

export default {
  title: 'TodoApp/Card',
  component: Card,
}

const Template = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  content: <div>Content</div>,
}

export const DefaultWithTitle = Template.bind({})
DefaultWithTitle.args = {
  header: 'The Title',
  content: <div>Content</div>,
}

export const Squared = Template.bind({})
Squared.args = {
  content: <div>Content</div>,
  squared: true,
}

export const SquaredWithTitle = Template.bind({})
SquaredWithTitle.args = {
  header: 'The Title',
  content: <div>Content</div>,
  squared: true,
}
