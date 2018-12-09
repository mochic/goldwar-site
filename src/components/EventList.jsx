import React from 'react'
import styled from 'styled-components'

import Event from './Event'

const EventList = styled.div``

export default ({ events }) => (
  <EventList>
    {events.map((event, idx) => (
      <Event key={idx} {...event} />
    ))}
  </EventList>
)
