import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { HowlProvider } from './Howl.context'
import { Parallax, ParallaxLayer } from 'react-spring/addons'

import ImageThing from './ImageThing'
import { MdPlayArrow, MdHeadset } from 'react-icons/md'
import Logo from './Logo'
import MobilePlayer from './MobilePlayer'
import AudioPlayer from './Audio'

import BlackoutWAV from '../audio/Blackout.wav'
import DrunkAgainWAV from '../audio/Drunk Again.wav'
import TheEndWAV from '../audio/Goldwar_SONG_MASTER.wav'

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

const DrunkKeys = keyframes`
0%{
  left: 0px;
  top: 0px;		
  opacity: 0.5;
}

20%{
  left: 1px;
  top: 1px;		
  opacity: 0.7;
}

24%{
  left: -5px;
  top: -5px;	
  opacity: 0.7;
}

26%{
  left: 2px;
  top: 2px;		
  opacity: 0.3;
}

28%{
  left: 5px;
  top: 5px;		
  opacity: 0.7;
}

30%{
  left: -8px;
  top: -8px;		
  opacity: 0.4;
}

60%{
  left: 2px;
  top: 2px;		
  opacity: 0.8;
}

62%{
  left: 6px;
  top: 6px;		
  opacity: 0.2;
}

65%{
  left: -2px;
  top: -2px;		
  opacity: 0.8;
}

67%{
  left: 1px;
  top: 1px;		
  opacity: 0.4;
}

80%{
  left: 1px;
  top: 1px;		
  opacity: 0.9;
}

85%{
  left: 2px;
  top: 2px;		
  opacity: 0.3;
}

88%{
  left: 5px;
  top: 5px;		
  opacity: 0.5;
}

90%{
  left: 0px;
  top: 0px;		
  opacity: 0.7;
}
`

const LogoSub0 = styled.div`
  top: 0px;
  left: 0px;
  position: absolute;
  width: 100% !important;
`
const LogoSub1 = styled.div`
  top: 0px;
  left: 0px;
  position: absolute;
  width: 100% !important;
  animation: ${DrunkKeys} 15s;
`

const BlinkKeys = styled.div`
  0% {
    margin-top: 0px;
    margin-bottom: 0px;
    height: 667px;
  }
  30% {
    margin-top: 0px;
    margin-bottom: 0px;
    height: 667px;
  }
  32% {
    margin-top: 333.5px;
    margin-bottom: 333.5px;
    height: 0px;
  }
  36% {
    margin-top: 333.5px;
    margin-bottom: 333.5px;
    height: 0px;
  }
  38% {
    margin-top: 0px;
    margin-bottom: 0px;
    height: 333.5px;
  }
  60% {
    margin-top: 0px;
    margin-bottom: 0px;
    height: 333.5px;
  }
  62% {
    margin-top: 333.5px;
    margin-bottom: 333.5px;
    height: 0px;
  }
  69% {
    margin-top: 333.5px;
    margin-bottom: 333.5px;
    height: 0px;
  }
  72% {
    margin-top: 0px;
    margin-bottom: 0px;
    height: 667px;
  }
`

const LogoContainer = styled.div`
  position: relative;
`

const PlayArrow = styled(MdPlayArrow)`
  position: absolute;
`

const HexButton = styled.div`
  position: relative;
  width: 54px;
  height: 31.18px;
  background-color: black;
  margin: 15.59px 0;
  border-left: solid 5px yellow;
  border-right: solid 5px yellow;

  &:before,
  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    width: 38.18px;
    height: 38.18px;
    -webkit-transform: scaleY(0.5774) rotate(-45deg);
    -ms-transform: scaleY(0.5774) rotate(-45deg);
    transform: scaleY(0.5774) rotate(-45deg);
    background-color: inherit;
    left: 2.9081px;
  }

  &:before {
    top: -19.0919px;
    border-top: solid 7.0711px yellow;
    border-right: solid 7.0711px yellow;
  }

  &:after {
    bottom: -19.0919px;
    border-bottom: solid 7.0711px yellow;
    border-left: solid 7.0711px yellow;
  }

  ${PlayArrow} {
    margin: 14% 36%;
    color: yellow;
  }
`

const PlayerContainer = styled.div``

const Header = styled.div`
  color: ${props => props.theme.colors.highlight};
  background: #000000; /* fallback for old browsers */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100% !important;

  ${LogoContainer} {
    margin-bottom: 50%; /* sadly only way to do this... */
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

const SimpleButton = styled.button`
  min-width: 44px;
  min-height; 44px;
  border-radius: 100%;
  background: black;
  border: 1px solid yellow;

  ${PlayArrow} {
    color: yellow;
  }
`

const PlayHeadset = styled(MdHeadset)`
  color: yellow;
`

const PlayButton = styled.button`
  align-content: center;
  background: none;
  display: flex;
  height: 24px;
  justify-content: center;
  width: 24px;
`

const AudioPlayerContainer = styled.div`
  bottom: 8px;
  left: 8px;
  position: fixed;
  width: 150px;
`

export default ({ children }) => (
  <HowlProvider
    playList={[
      { name: 'blackout', sources: [BlackoutWAV] },
      { name: 'drunk again', sources: [DrunkAgainWAV] },
      { name: 'the end', sources: [TheEndWAV] },
    ]}
  >
    <ThemeProvider theme={BlackoutTheme}>
      <div>
        <StyledParallax pages={3}>
          <ParallaxLayer offset={1} speed={0} factor={3}>
            <BackgroundImageContainer>
              <ImageThing />
            </BackgroundImageContainer>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.1} factor={1}>
            <Header>
              <LogoContainer>
                <LogoSub0>
                  <Logo />
                </LogoSub0>
                <LogoSub1>
                  <Logo />
                </LogoSub1>
              </LogoContainer>
              {/* <PlayButton>
              <PlayHeadset size={22} />
            </PlayButton> */}
              {/* <SimpleButton /> */}
              {/* <PlayerContainer>
              <Player>
                <HexButton>
                  <PlayArrow />
                </HexButton>
              </Player>
              <MobilePlayer />
            </PlayerContainer> */}
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
        <AudioPlayerContainer>
          <AudioPlayer />
        </AudioPlayerContainer>
      </div>
    </ThemeProvider>
  </HowlProvider>
)
