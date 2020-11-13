import React from 'react'

import { white, blueBackground } from '../colors'

import Input from './index'

export default {
  title: 'TodoApp/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Search...',
  backgroundColor: white,
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  placeholder: 'Search...',
  icon: 'search',
  backgroundColor: blueBackground,
}
