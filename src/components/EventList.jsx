import React from 'react'
import styled from 'styled-components'

import Event from './Event'

export const EventListContainer = styled.div``

export default ({ events }) => (
  <EventListContainer>
    {events.map((event, idx) => (
      <Event key={idx} {...event} />
    ))}
  </EventListContainer>
)
