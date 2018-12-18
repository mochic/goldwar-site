import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import ReactPlayer from 'react-player'
import { IconContext } from 'react-icons'
import { HowlProvider } from './Howl.context'

import Footer, { FooterContainer } from './Footer'
import Header, { HeaderContainer } from './Header'
import BlackoutBackgroundImage from './BlackoutBackgroundImage'
import ImageThing from './ImageThing'
// import Menu from './Menu'
// import TheEndBackgroundImage from './TheEndBackgroundImage'
// import StickyPlayer from './StickyPlayer'
// import AudioPlayer from './AudioPlayer'
// import ExpandableAudioPlayer from './ExpandableAudioPlayer'
// import FloatingAudioPlayer from './FloatingAudioPlayer'
// import SocialMediaMenu from './SocialMediaMenu'
// import MobilePlayer from './MobilePlayer'

import BlackoutWAV from '../audio/Blackout.wav'
import DrunkAgainWAV from '../audio/Drunk Again.wav'
import TheEndWAV from '../audio/Goldwar_SONG_MASTER.wav'

import AudioActionButton from './AudioActionButton'

/* react-ive band website with dynamic theming */

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

const AudioPlayerWrapper = styled.div`
  background: yellow;
`

const ChildrenContainer = styled.div`
  z-index: 1;
  background: none;
`

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
`

// const LayoutWrapper = styled.div`
//   background: blue;
//   display: grid;
//   grid-template-rows: repeat(3, auto);
//   grid-template-columns: 1fr;
//   justify-items: stretch;

//   ${FooterContainer} {
//     position: fixed;
//     bottom: 0 !important;
//     left: 0 !important;
//     width: 100% !important;
//     grid-area: footer;
//   }
// `

// const LayoutWrapper = styled.div``

// export const LayoutContainer = styled.div`
//   align-items: stretch;
//   background: blue;
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: repeat(3, auto);
//   justify-items: stretch;
// `

const ActionButton = styled.button`
  color: yellow;
`

const ActionButtonContainer = styled.div`
  position: fixed
  bottom: 0;
  left: 0;
  z-index: 1000;
`

const PanningKeyFrames = keyframes`
0% {
  -webkit-transform: translate(0px, 0px);
  opacity: 0;
}
25% {
  -webkit-transform: translate(-50px, -85px);
  opacity: 0;
  -webkit-animation-timing-function: ease-out;
}
40%{
  -webkit-transform: translate(-25px, -65px);
  opacity: 1;
  -webkit-animation-timing-function: linear;
}
91% {
  -webkit-transform: translate(-100px, -200px);
  opacity: 1;
  -webkit-animation-timing-function: ease-in;
}
100% {
  -webkit-transform: translate(-125px, -250px);
  opacity: 0;
}
`

const BackgroundImageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  animation: ${PanningKeyFrames} 10s ease-in-out 0s infinite;
`

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;

  ${HeaderContainer} {
    flex: 1;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10000;
    width: 100%;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: flex-end;
    background: rgba(50, 50, 50, 0.5);
  }

  ${ChildrenContainer} {
    flex: 1;
  }

  ${FooterContainer} {
    bottom: 0;
    flex: 1;
    left: 0;
    position: fixed;
    width: 100%;
    z-index: 1;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
            socialMediaLinks {
              name
              uri
            }
          }
        }
      }
    `}
    render={data => (
      <HowlProvider
        playList={[
          { name: 'blackout', sources: [BlackoutWAV] },
          { name: 'drunk again', sources: [DrunkAgainWAV] },
          { name: 'the end', sources: [TheEndWAV] },
        ]}
      >
        <ThemeProvider theme={BlackoutTheme}>
          <IconContext.Provider
            value={{
              className: 'global-class-name',
              size: BlackoutTheme.socialMediaIconSize,
            }}
          >
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <LayoutContainer>
              <BackgroundImageContainer>
                <ImageThing />
              </BackgroundImageContainer>
              <Header siteTitle={data.site.siteMetadata.title} />
              {/* <TheEndBackgroundImage /> */}
              <ChildrenContainer>{children}</ChildrenContainer>
              <AudioActionButton />
              {/* <ActionButtonContainer>
                <ActionButton />
              </ActionButtonContainer> */}
              {/* <Footer /> */}
            </LayoutContainer>
          </IconContext.Provider>
        </ThemeProvider>
      </HowlProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
