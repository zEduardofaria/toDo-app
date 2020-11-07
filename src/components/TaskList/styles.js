import styled from 'styled-components'
import media from 'styled-media-query'

import { blackLight, greyShadow } from '@/style-guide/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 700px;
  border-radius: 5px;
  box-shadow: 0px 5px 14px ${greyShadow};

  ${media.greaterThan('medium')`
    width: 320px;
  `}
`

export const Content = styled.div`
  overflow-y: overlay;
  padding: 0px 20px;
`

export const Title = styled.div`
  font-size: 16px;
  padding: 20px 20px 0px 20px;
  color: ${blackLight};
`
