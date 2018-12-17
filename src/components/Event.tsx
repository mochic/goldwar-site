import React, { SFC } from 'react'
import styled from 'styled-components'

import { MdLaunch } from 'react-icons/md'

export interface EventProps {
  date: Date
  link: {
    name: string
    link: string
  }
}

const EventDate = styled.div`
  color: ${props => props.theme.colors.highlight};
`
const EventLink = styled.a`
  color: ${props => props.theme.colors.highlight};
`

const EventContainer = styled.div`
  color: ${props => props.theme.colors.highlight};
  display: flex;
  justify-content: flex-end;
`

const Event: SFC<EventProps> = ({ date, link: { name, link } }) => (
  <EventContainer>
    <EventDate>{date}</EventDate>
    {name}
    <EventLink href={link} target="_blank" rel="noopener noreferrer">
      <MdLaunch />
    </EventLink>
  </EventContainer>
)

export default Event
