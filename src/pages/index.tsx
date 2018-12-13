import React, { SFC } from 'react'
import { graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import Image from '../components/TheEndBackgroundImage'
import Layout from '../components/Layout'
import EventList from '../components/EventList'

// to style the body component that wraps pages https://twitter.com/gatsbyjs/status/960546383445897222
const GlobalStyle = createGlobalStyle`
  html. body {
    height: 100%;
    width: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    background: yellow;
  }
`

const EventsTitle = styled.h3`
  color: ${props => props.theme.colors.highlight};
`

const Events = styled.div`
  background: yellow;
`

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(20, 1fr);

  ${Events} {
    grid-column-start: 3;
    grid-column-end: 7;
    grid-row-start: 4;
    grid-row-end: 20;
  }
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
  date: string
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
    <Layout>
      <ContentContainer>
        <Events>
          <EventsTitle>events</EventsTitle>
          <EventList events={events} />
        </Events>
      </ContentContainer>
    </Layout>
  </>
) // the fragment is important for coupling GlobalStyle with Layout but a div isnt necessary after

export default IndexPage
