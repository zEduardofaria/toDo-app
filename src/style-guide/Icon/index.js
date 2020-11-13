import React from 'react'
import { number, string, object, oneOf } from 'prop-types'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { blackLight } from '../colors'

import { StyledFontAwesomeIcon } from './styles'

const ICONS = {
  close: faTimes,
}

const Icon = ({
  name = ICONS.close,
  iconSize = 14,
  color = blackLight,
  className,
  style,
}) => (
  <StyledFontAwesomeIcon
    icon={ICONS[name]}
    iconsize={iconSize}
    color={color}
    className={className}
    style={style}
  />
)

Icon.propTypes = {
  name: oneOf(Object.keys(ICONS)),
  iconSize: number,
  color: string,
  className: string,
  style: object,
}

export default Icon
