import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: ${({ iconsize }) => `${iconsize}px`} !important;
  height: ${({ iconsize }) => `${iconsize}px`};
  display: flex;
`
