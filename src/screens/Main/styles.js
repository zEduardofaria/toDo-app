import styled from 'styled-components'
import media from 'styled-media-query'

import { Button } from '@/style-guide'

import { blackLight, blueBackground } from '@/style-guide/colors'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: ${blueBackground};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 85px;
  padding: 20px;

  ${media.greaterThan('medium')`
    width: 700px;
  `}
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${media.greaterThan('medium')`
    align-items: center;
  `}
`

export const Title = styled.span`
  font-size: 20px;
  color: ${blackLight};
  margin-right: 20px;
`

export const SubTitle = styled.span`
  font-size: 14px;
  color: ${blackLight};
  margin: 10px 0px 10px;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${media.greaterThan('medium')`
    flex-direction: row;
    justify-content: space-between;
  `}
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px 0px;
`

export const StyledButton = styled(Button)`
  min-width: 120px;
  max-height: 35px;

  ${media.greaterThan('medium')`
    min-width: 175px;
  `}
`
