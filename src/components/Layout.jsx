import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import ReactPlayer from 'react-player'
import { IconContext } from 'react-icons'

import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'
import TheEndBackgroundImage from './TheEndBackgroundImage'
import StickyPlayer from './StickyPlayer'
import AudioPlayer from './AudioPlayer'
import ExpandableAudioPlayer from './ExpandableAudioPlayer'
import FloatingAudioPlayer from './FloatingAudioPlayer'
import SocialMediaMenu from './SocialMediaMenu'
import MobilePlayer from './MobilePlayer'

/* react-ive band website with dynamic theming */

const BlackoutTheme = {
  background: '#2F30A4',
  color: '#BA2F56',
  colorAlternate: '#FFFDDA',
  socialMediaIconSize: 18,
  colors: {
    primary: '#2F30A4',
    secondary: '#BA2F56',
    highlight: '#FFFDDA',
  },
}

const AudioPlayerWrapper = styled.div`
  background: yellow;
`

const ChildrenWrapper = styled.div`
  z-index: 1;
  background: teal;
`

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100% !important;
`

const LayoutWrapper = styled.div`
  background: blue;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: stretch;
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
      <LayoutWrapper>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <ThemeProvider theme={BlackoutTheme}>
          <IconContext.Provider
            value={{
              className: 'global-class-name',
              size: BlackoutTheme.socialMediaIconSize,
            }}
          >
            <div>
              <Header siteTitle={data.site.siteMetadata.title} />
              {/* <TheEndBackgroundImage /> */}
              <ChildrenWrapper>{children}</ChildrenWrapper>
              {/* <AudioPlayerWrapper>
              <FloatingAudioPlayer />
            </AudioPlayerWrapper> */}
              <Footer />
              {/* <FooterWrapper>
              <Footer />
            </FooterWrapper> */}
            </div>
          </IconContext.Provider>
        </ThemeProvider>
      </LayoutWrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
