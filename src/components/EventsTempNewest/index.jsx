import React from 'react'

import posed from 'react-pose'
import styled from 'styled-components'

import Event from './Event'
import { rehydrateDate } from './utils'

const events = [
  {
    date: 'jul-01-2019',
    details: {
      ageRequirement: '21+',
      cover: '10',
      link: 'https://bluemoonseattle.wordpress.com/',
    },
    location: {
      name: 'blue moon',
      major: {
        city: 'Seattle',
        state: 'WA',
      },
      map: 'somewhere placeholder',
    },
  },
  {
    date: 'jul-01-2019',
    details: {
      ageRequirement: '21+',
      cover: '10',
      link: 'https://bluemoonseattle.wordpress.com/',
    },
    location: {
      name: 'blue moon',
      major: {
        city: 'Seattle',
        state: 'WA',
      },
      map: 'somewhere placeholder',
    },
  },
  {
    date: 'jul-01-2019',
    details: {
      ageRequirement: '21+',
      cover: '10',
      link: 'https://bluemoonseattle.wordpress.com/',
    },
    location: {
      name: 'blue moon',
      major: {
        city: 'Seattle',
        state: 'WA',
      },
      map: 'somewhere placeholder',
    },
  },
  {
    date: 'jul-01-2019',
    details: {
      ageRequirement: '21+',
      cover: '10',
      link: 'https://bluemoonseattle.wordpress.com/',
    },
    location: {
      name: 'blue moon',
      major: {
        city: 'Seattle',
        state: 'WA',
      },
      map: 'somewhere placeholder',
    },
  },
  {
    date: 'jul-01-2019',
    details: {
      ageRequirement: '21+',
      cover: '10',
      link: 'https://bluemoonseattle.wordpress.com/',
    },
    location: {
      name: 'blue moon',
      major: {
        city: 'Seattle',
        state: 'WA',
      },
      map: 'somewhere placeholder',
    },
  },
]

const StaggeredListContainer = posed.ul({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 },
})

const StaggeredListItemContainer = posed.li({
  enter: { x: 0, opacity: 1 },
  exit: { x: 100, opacity: 0 },
})

const EventListItemContainer = styled(StaggeredListItemContainer)`
  margin: 0 0 3px 0;
`

const EventListContainer = styled(StaggeredListContainer)`
  list-style-type: none;
  padding-inline-start: 0;
  width: 100%;
`

const EventList = ({ currentPageIndex, eventsPerPage }) => {
  const eventsSlice = events
    .slice(0, eventsPerPage)
    .map(({ date: dateString, details, location }) => ({
      details,
      location,
      date: rehydrateDate(dateString),
    }))
  return (
    <EventListContainer>
      {eventsSlice.map((event, idx) => (
        <EventListItemContainer key={`event-item-${idx}`}>
          <Event {...event} />
        </EventListItemContainer>
      ))}
    </EventListContainer>
  )
}

export default EventList
