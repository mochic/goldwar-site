import React from 'react'

import { MdMenu } from 'react-icons/md'
import styled, { keyframes } from 'styled-components'
import posed from 'react-pose'

import BlackoutBackgroundImage from '../components/BlackoutBackgroundImage'
import ImageThing from '../components/ImageThing'
import EventsList from '../components/EventsTempNewest'

const BackgroundImageContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -1;
  height: 100%;
  width: 100%;
`

const EventsHeader = styled.h1`
  padding-left: 8%;
  text-transform: uppercase;
  z-index: 1;
`
const EventsListContainer = styled.div`
  z-index: 1;
  display: flex;
  justify-content: flex-end;
`

const EventsContainer = styled.div`
  color: ${props => props.theme.colors.highlight};
  font-family: ${props => props.theme.fonts.primary};
  height: 100%;
  width: 100%;
`

const HeaderMenu = styled.button`
  border: none;
  background: none;
  color: ${props => props.theme.colors.highlight};
  padding: 2%;
`
const HeaderTitle = styled.div`
  padding: 2%;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  left: 0px;
  position: fixed;
  top: 0px;
  width: 100%;
`

const Header = () => (
  <HeaderContainer>
    <HeaderTitle>goldwar</HeaderTitle>
    <HeaderMenu>
      <MdMenu />
    </HeaderMenu>
  </HeaderContainer>
)
const Events = () => (
  <>
    <BackgroundImageContainer>
      <ImageThing />
    </BackgroundImageContainer>
    <EventsContainer>
      <Header />
      <EventsHeader>events</EventsHeader>
      <EventsListContainer>
        <EventsList eventsPerPage={4} />
      </EventsListContainer>
    </EventsContainer>
  </>
)

export default Events
