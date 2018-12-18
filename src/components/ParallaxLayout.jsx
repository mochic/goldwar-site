import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'

import { Parallax, ParallaxLayer } from 'react-spring/addons'

import ImageThing from './ImageThing'
import { MdPlayArrow } from 'react-icons/md'
import Logo from './Logo'

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

const Title = styled.h1`
  font-family: 'sriracha';
  text-transform: uppercase;
  margin-left: 8%;
`
// const Player = styled.div`
//   button {
//     width: 44px;
//     height: 44px;
//     border-radius: 100%;
//     background: ${props => props.theme.colors.highlight};
//     color: ${props => props.theme.color.secondary};
//     display: flex;
//     justify-content: center;
//     align-content: center;
//   }
// `

const Player = styled.div``

const LandingPage = styled.div``

const LogoContainer = styled.div``

const PlayArrow = styled(MdPlayArrow)`
  position: absolute;
`

const HexButton = styled.div`
  position: relative;
  width: 56px;
  height: 32.33px;
  background-color: #f4ed3a;
  margin: 16.17px 0;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0;
    border-left: 28px solid transparent;
    border-right: 28px solid transparent;
  }

  &:before {
    bottom: 100%;
    border-bottom: 16.17px solid #f4ed3a;
  }

  &:after {
    top: 100%;
    width: 0;
    border-top: 16.17px solid #f4ed3a;
  }
  ${PlayArrow} {
    margin: 14% 36%;
    color: black;
  }
`

const PlayerContainer = styled.div``

const Header = styled.div`
  color: ${props => props.theme.colors.highlight};
  background: black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100% !important;

  ${LogoContainer} {
    margin-bottom: 20%; /* sadly only way to do this... */
  }

  ${PlayerContainer} {
    display: flex;
    align-content: center;
    justify-content: center;
  }
`

const StyledParallax = styled(Parallax)`
  background: ${props => props.theme.color.primary};
`

const PanKeys = keyframes`
0% {
  -webkit-transform: translate(0px, 0px);
  opacity: 1;
}
25% {
  -webkit-transform: translate(-50px, -85px);
  opacity: 1;
  -webkit-animation-timing-function: ease-out;
}
40%{
  -webkit-transform: translate(-25px, -65px);
  opacity: 1;
  -webkit-animation-timing-function: linear;
}
91% {
  -webkit-transform: translate(-10px, -20px);
  opacity: 1;
  -webkit-animation-timing-function: ease-in;
}
100% {
  -webkit-transform: translate(-125px, 50px);
  opacity: 1;
}
`

const BackgroundImageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  animation: ${PanKeys} 10s ease-in-out 0s infinite;
`

export default ({ children }) => (
  <ThemeProvider theme={BlackoutTheme}>
    <StyledParallax pages={3}>
      <ParallaxLayer offset={1} speed={0} factor={3}>
        <BackgroundImageContainer>
          <ImageThing />
        </BackgroundImageContainer>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.1} factor={1}>
        <Header>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <PlayerContainer>
            <Player>
              <HexButton>
                <PlayArrow />
              </HexButton>
            </Player>
          </PlayerContainer>
        </Header>
        {/* <Header>
          
          <Title>Goldwar</Title>
          <Player>
            
          </Player>
        </Header> */}
      </ParallaxLayer>
      <ParallaxLayer offset={1.1} speed={0.4}>
        {children}
      </ParallaxLayer>
    </StyledParallax>
  </ThemeProvider>
)
