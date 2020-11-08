import React from 'react'

import { white } from '../colors'

import TextArea from './index'

export default {
  title: 'TodoApp/TextArea',
  component: TextArea,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <TextArea {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Search...',
  backgroundColor: white,
}
