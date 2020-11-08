import styled, { css } from 'styled-components'
import { shade } from 'polished'

import { green, white, blue, blackLight, darkGrey, orange } from '../colors'

const getButtonType = (type) => {
  switch (type) {
    case 'primary':
      return css`
        color: ${white};
        background-color: ${blue};

        :hover:not(:disabled) {
          background-color: ${shade(0.2, blue)};
        }

        :active:not(:disabled) {
          background-color: ${shade(0.3, blue)};
        }
      `
    case 'danger':
      return css`
        color: ${white};
        background-color: ${orange};

        :hover:not(:disabled) {
          background-color: ${shade(0.2, orange)};
        }

        :active:not(:disabled) {
          background-color: ${shade(0.3, orange)};
        }
      `
    case 'success':
      return css`
        color: ${white};
        background-color: ${green};

        :hover:not(:disabled) {
          background-color: ${shade(0.2, green)};
        }

        :active:not(:disabled) {
          background-color: ${shade(0.3, green)};
        }
      `
    case 'text':
      return css`
        color: ${darkGrey};
        background-color: transparent;

        :hover:not(:disabled) {
          color: ${shade(0.6, darkGrey)};
        }

        :active:not(:disabled) {
          color: ${shade(1, darkGrey)};
        }
      `
    default:
      return css`
        color: ${blackLight};
        background-color: ${white};
        border: 1px solid ${darkGrey};

        :hover:not(:disabled) {
          color: ${shade(0.6, blackLight)};
          border: 1px solid ${shade(0.6, darkGrey)};
        }

        :active:not(:disabled) {
          color: ${shade(1, blackLight)};
          border: 1px solid ${shade(1, darkGrey)};
        }
      `
  }
}

export const StyledButton = styled.button`
  width: 100%;
  max-width: ${({ width }) => `${width}px`};
  min-height: ${({ height }) => `${height}px`};
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: ${white};
  font-size: 14px;
  border: 0;
  outline: 0;
  cursor: pointer;
  font-weight: 600;

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ type }) => getButtonType(type)}
`

export const Label = styled.div`
  margin: 0px 7px;
`
