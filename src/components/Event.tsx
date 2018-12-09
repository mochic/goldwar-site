import React, { SFC } from 'react'
import styled from 'styled-components'

export interface EventProps {
  date: string
  link: {
    name: string
    link: string
  }
}

const EventWrapper = styled.div``

const Event = ({ date, link: { name, link } }) => (
  <EventWrapper>
    <div>{date}</div>
    <a href={link} target="_blank" rel="noopener noreferrer">
      {name}
    </a>
  </EventWrapper>
)

export default Event
