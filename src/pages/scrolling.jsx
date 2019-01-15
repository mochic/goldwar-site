import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import StaticScrollLayout from '../components/StaticScrollLayout'

const BlackoutTheme = {
  background: '#A35558',
  color: '#BA2F56',
  colorAlternate: '#FFFDDA',
  socialMediaIconSize: 18,
  colors: {
    primary: '#4f4a7d',
    secondary: '#A25457',
    highlight: '#FFFDDA',
  },
  sizes: {
    actionButton: { height: 52, width: 52 },
  },
}

const GlobalStyle = createGlobalStyle`
  html. body {
    height: 100%;
    width: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`

export default () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={BlackoutTheme}>
      <>
        <StaticScrollLayout />
      </>
    </ThemeProvider>
  </>
)
