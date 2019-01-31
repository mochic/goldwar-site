/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// based on: https://github.com/VilhelmNielsen/gatsby-with-react-pose/blob/master/gatsby-browser.js
import React, { Component } from 'react'

import { MdMenu } from 'react-icons/md'
import navigate from 'gatsby'
import posed, { PoseGroup } from 'react-pose'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

// import AudioPlayer, { PlayerContainer } from './src/components/Audio'
import { HowlProvider } from './src/components/Howl.context'
import ImageThing from './src/components/ImageThing'
import SocialThings, { SocialContainer } from './src/components/SocialThings'
// import ScrollingLayoutThing from './src/components/ScrollingLayoutThing'
import AudioPlayer from './src/components/AudioPlayerThing'

const AudioPlayerContainer = styled.div`
  bottom: 0;
  left: 0;
  max-height: 50%;
  position: fixed;
  width: 100%;
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
`

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
  fonts: {
    primary: `frijole`,
  },
  sizes: {
    actionButton: { height: 52, width: 52 },
  },
}

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
  }
  body {
    margin: 0;
    padding: 0;
  }
  svg {
    filter: none !important;
  }
`

// const FloatingAudioContainer = styled.div`
//   bottom: 0px;
//   left: 0px;
//   padding: 1%;
//   position: fixed;
//   display: flex;
//   width: 100%;
//   align-items: center;
//   justify-content: space-between;
//   box-sizing: border-box;

//   ${PlayerContainer} {
//     width: 45%;
//   }
//   ${SocialContainer} {
//     width: 25%;
//   }
// `

const BackgroundImageContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: ${props => props.theme.colors.primary};
`

const HeaderMenu = styled.button`
  border: none;
  background: none;
  color: ${props => props.theme.colors.highlight};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 18px;
  justify-content: center;
  padding: 2%;
`

const HeaderTitle = styled.div`
  color: ${props => props.theme.colors.highlight};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 36px;
  text-transform: capitalize;
  padding: 2%;
`

const HomeLink = styled.div`
  color: ${props => props.theme.colors.highlight};
  font-family: ${props => props.theme.fonts.primary};
`

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  left: 0px;
  position: fixed;
  top: 0px;
  width: 100%;
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = ({ location: { pathName } }) => {
  console.log('current pathName', pathName)
  return (
    <HeaderContainer>
      {pathName ? (
        <>
          <HomeLink>goldwar</HomeLink>
          <HeaderTitle>events</HeaderTitle>
        </>
      ) : (
        <></>
      )}
      <HeaderMenu>menu</HeaderMenu>
    </HeaderContainer>
  )
}
const Transition = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 },
})

export const replaceComponentRenderer = ({ props, ...other }) => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={BlackoutTheme}>
      <HowlProvider
        playList={[
          {
            name: 'blackout',
            sources: [
              `https://s3-us-west-2.amazonaws.com/goldwar/Blackout.wav`,
            ],
          },
          {
            name: 'drunk again',
            sources: [
              `https://s3-us-west-2.amazonaws.com/goldwar/Drunk+Again.wav`,
            ],
          },
          {
            name: 'the end',
            sources: [
              `https://s3-us-west-2.amazonaws.com/goldwar/Goldwar_SONG_MASTER.wav`,
            ],
          },
        ]}
      >
        <PoseGroup>
          <Transition key={props.location.key}>
            <PageContainer>
              {/* <Header location={props.location} /> */}
              {React.createElement(props.pageResources.component, props)}
              {/* <FloatingAudioContainer>
                <AudioPlayer />
                <SocialThings />
              </FloatingAudioContainer> */}
              <AudioPlayerContainer>
                <AudioPlayer />
              </AudioPlayerContainer>
              <BackgroundImageContainer>
                <ImageThing />
              </BackgroundImageContainer>
            </PageContainer>
          </Transition>
        </PoseGroup>
      </HowlProvider>
    </ThemeProvider>
  </div>
)
