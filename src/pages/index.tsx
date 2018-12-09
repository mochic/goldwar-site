import React, { SFC } from 'react'
import { graphql } from 'gatsby'

import Image from '../components/TheEndBackgroundImage'
import Layout from '../components/Layout'
import EventList from '../components/EventList'

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
  <Layout>
    <div>upcoming</div>
    <hr />
    <EventList events={events.slice(0, 3)} />
  </Layout>
)

export default IndexPage
