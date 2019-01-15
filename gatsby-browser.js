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

import AudioPlayer from './src/components/Audio'
import { HowlProvider } from './src/components/Howl.context'

// import ScrollingLayoutThing from './src/components/ScrollingLayoutThing'

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
    primary: 'sue ellen francisco',
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
`

const FloatingAudioContainer = styled.div`
  bottom: 8px;
  left: 8px;
  position: fixed;
  width: 165px;
`

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
            {React.createElement(props.pageResources.component, props)}
          </Transition>
        </PoseGroup>
        <FloatingAudioContainer>
          <AudioPlayer />
        </FloatingAudioContainer>
      </HowlProvider>
    </ThemeProvider>
  </div>
)
