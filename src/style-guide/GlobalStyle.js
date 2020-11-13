import { createGlobalStyle } from 'styled-components'

import { blackLight } from './colors'

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    height: 100%;
  }

  body {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #F5F7F9;
    font-size: 14px;
    color: ${blackLight};
  }

  img {
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  ul {
    list-style-type: none;
  }

  #root {
    height: 100%;
  }
`

export default GlobalStyle
