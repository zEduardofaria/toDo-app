import React from 'react'

import Icon from '../Icon'
import Button from './index'

import { blackLight } from '../colors'

export default {
  title: 'TodoApp/Button',
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Button',
}

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  label: 'Button',
}

export const Success = Template.bind({})
Success.args = {
  type: 'success',
  label: 'Button',
}

export const Danger = Template.bind({})
Danger.args = {
  type: 'danger',
  label: 'Button',
}

export const Text = Template.bind({})
Text.args = {
  type: 'text',
  label: 'Button',
}

export const OnlyIcon = Template.bind({})
OnlyIcon.args = {
  width: 40,
  height: 40,
  icon: <Icon name="fileDownload" iconSize={24} color={blackLight} />,
}
