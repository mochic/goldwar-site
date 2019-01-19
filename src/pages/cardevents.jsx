import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'

import TouchCarousel from 'react-touch-carousel'

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

const PageContainer = posed.div({})

const EventsPageContainer = styled(PageContainer)`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-content: center;
  justify-content: center;
`

export default () => (
  <EventsPageContainer>
    <TouchCarousel />
  </EventsPageContainer>
)
