import React, { SFC } from 'react'
import { graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import Image from '../components/TheEndBackgroundImage'
// import Layout from '../components/Layout'
import EventList from '../components/EventList'

// import Layout from '../components/PanningBackgroundLayout'
import Layout from '../components/ParallaxLayout'

// to style the body component that wraps pages https://twitter.com/gatsbyjs/status/960546383445897222
const GlobalStyle = createGlobalStyle`
  html. body {
    height: 100%;
    width: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    background: #4f4a7d;
  }
`

const EventsTitle = styled.h3`
  padding: 0;
  margin: 0;
  color: ${props => props.theme.colors.highlight};
`

const Events = styled.div`
  background: none;
  margin-left: 24%;
  font-family: 'sue ellen francisco';
`

// const ContentContainer = styled.div`
//   margin-bottom: 15%;
//   margin-left: 0%;
//   margin-right: 30%;
//   margin-top: 70%;
//   background: rgba(50, 50, 50, 0.5);
//   height: 100%;
//   width: 100%;
//   overflow: scrollable;
// `

const ContentContainer = styled.div`
  overflow: scrollable;
`

const Body0 = styled.div`
  background: green;
  height: 100vh;
`

const Body1 = styled.div`
  background: yellow;
  height: 100vh;
`

export const query = graphql`
  query EventsQuery {
    site {
      siteMetadata {
        events {
          date
          link {
            name
            link
          }
        }
      }
    }
  }
`

interface EventInterface {
  date: Date
  link: {
    name: string
    link: string
  }
}

export interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        events: EventInterface[]
      }
    }
  }
}

const IndexPage: SFC<IndexPageProps> = ({
  data: {
    site: {
      siteMetadata: { events },
    },
  },
}) => (
  <>
    <GlobalStyle />
    <ContentContainer>
      {/* <Events>
        <EventsTitle>events</EventsTitle>
        <EventList events={events.slice(0, 4)} />
      </Events> */}
      <Body0 />
      <Body1 />
    </ContentContainer>
  </>
) // the fragment is important for coupling GlobalStyle with Layout but a div isnt necessary after

export default IndexPage
