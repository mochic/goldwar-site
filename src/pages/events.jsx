import React from 'react'
import styled, { keyframes } from 'styled-components'
import EventsList from '../components/EventList'
// import Layout from '../components/Layout'

const EventsContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`

const BlinkIn = keyframes`

`

const Events = () => (
  <EventsContainer>
    <p>events placeholder...</p>
  </EventsContainer>
)

export default Events
