import React from 'react'
import styled from 'styled-components'

const LogoContainer = styled.div`
  align-items: center;
  color: ${props => props.theme.colors.highlight};
  display: flex;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 48px;
  justify-content: center;
`

const PageContainer = styled.div`
  align-content: center;
  display: flex;
  flex-direction: column;
  height: 100vh !important;
  justify-content: center;
  width: 100%;

  ${LogoContainer} {
    margin-bottom: 30%;
    height: 30%;
  }
`

const TestContainer = styled.div`
  @import 'compass/css3';

  $height-mask: 250px;

  // To regulate alpha is recommended to use gray scale.
  // Recomiendo utilizar escala de grises

  $darken: 60%;

  $color: rgb(255, 255, 255);
  $color-alpha: darken($color, $darken);

  // Apply color here!
  // Todo el color que quieras!
  $color-base: rgb(0, 0, 0);

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility;
  }

  html,
  body {
    height: 100%;
  }

  body {
    font-family: 'Open Sans', sans-serif;
  }

  .text {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: $height-mask;
    z-index: 10;
  }
  svg {
    width: 100%;
    height: inherit;
    text {
      // svg center text.
      // centar text svg.
      text-anchor: middle;
    }
    #alpha {
      fill: $color-alpha;
      //animation: alpha 10s ease infinite;
    }
    #title {
      letter-spacing: -2px;
      font-size: 6em;
      font-weight: 800;
    }
    #subtitle {
      letter-spacing: 8px;
      font-size: 1.2em;
      font-weight: 300;
      text-transform: uppercase;
    }
    #base {
      fill: $color-base;
      // add the mask.
      // aplicar máscara.
      mask: url(#mask);
    }
  }

  section.intro {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/953/mision.jpg)
      no-repeat top center;
    background-size: cover;
    position: relative;
    width: 100%;
    min-height: 100%;
  }

  /*@keyframes alpha {
  50%{fill: #000;}
}*/
`

const EndPage = () => {
  return (
    <TestContainer>
      <defs>
        <mask id="mask" x="0" y="0" width="100%" height="100%">
          <rect id="alpha" x="0" y="0" width="100%" height="100%" />
          <text id="title" x="50%" y="0" dy="1.58em">
            SVG + CSS
          </text>
          <text id="subtitle" x="50%" y="0" dy="9.8em">
            Use it please!
          </text>
        </mask>
      </defs>
    </TestContainer>
    // <PageContainer>
    //   <LogoContainer>goldwar</LogoContainer>
    // </PageContainer>
  )
}

export default EndPage
