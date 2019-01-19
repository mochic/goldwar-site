import React from 'react'

import { MdLaunch } from 'react-icons/md'

import styled from 'styled-components'
import { isCurrentYear } from './utils'

const DayContainer = styled.div``

const DayOfWeekContainer = styled.div`
  text-transform: uppercase;
`

const MonthContainer = styled.div`
  text-transform: uppercase;
`

const YearContainer = styled.div``

const DateContainer = styled.div`
  align-items: center;
  border: 1px solid ${props => props.theme.colors.highlight};
  display: grid;
  justify-items: center;
  height: 20%;

  ${DayContainer} {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 1;
  }
  ${MonthContainer} {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 1;
  }
  ${YearContainer} {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 2;
  }
`

// const DateContainer = styled.div`
//   align-items: center;
//   border: 1px solid ${props => props.theme.colors.highlight};
//   display: grid;
//   justify-items: center;
//   height: 20%;

//   background: transparent;
//   padding: 1rem 1rem;
//   margin: 0 1rem;
//   transition: all 0.5s ease;
//   color: #41403e;
//   font-size: 2rem;
//   letter-spacing: 1px;
//   outline: none;
//   box-shadow: 20px 38px 34px -26px hsla(0, 0%, 0%, 0.2);
//   border-radius: 255px 15px 225px 15px/15px 225px 15px;
//   ${DayContainer} {
//     grid-column-start: 2;
//     grid-column-end: 2;
//     grid-row-start: 1;
//     grid-row-end: 1;
//   }
//   ${MonthContainer} {
//     grid-column-start: 1;
//     grid-column-end: 1;
//     grid-row-start: 1;
//     grid-row-end: 1;
//   }
//   ${YearContainer} {
//     grid-column-start: 1;
//     grid-column-end: 3;
//     grid-row-start: 2;
//     grid-row-end: 2;
//   }
// `

const CurrentYearDateContainer = styled.div`
  align-items: center;
  border: 1px solid ${props => props.theme.colors.highlight};
  display: grid;
  justify-items: center;
  width: 20%;

  color: ${props => props.theme.colors.highlight};

  ${DayContainer} {
    grid-column-start: 3;
    grid-row-start: 2;
  }

  ${DayOfWeekContainer} {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
  }

  ${MonthContainer} {
    grid-column-start: 1;
    grid-row-start: 2;
  }
`

const Date = ({ date }) => {
  const dayNames = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']

  const monthNames = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
  ]

  if (isCurrentYear(date)) {
    return (
      <CurrentYearDateContainer>
        <DayContainer>{date.getDate()}</DayContainer>
        <DayOfWeekContainer>{dayNames[date.getDay()]}</DayOfWeekContainer>
        <MonthContainer>{monthNames[date.getMonth()]}</MonthContainer>
      </CurrentYearDateContainer>
    )
  } else {
    return (
      <DateContainer>
        <DayContainer>{date.getDate()}</DayContainer>
        <MonthContainer>{monthNames[date.getMonth()]}</MonthContainer>
        <YearContainer>{date.getFullYear()}</YearContainer>
      </DateContainer>
    )
  }
}

const LocationMajor = styled.div`
  font-size: 14px;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
`

const LocationMap = styled.div`
  color: ${props => props.theme.colors.secondary};
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
`

const LocationName = styled.div`
  font-size: 18px;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  text-transform: uppercase;
`

const LocationContainer = styled.div`
  display: grid;
  width: 60%;
`

const Location = ({
  location: {
    link,
    name,
    map,
    major: { city, state },
  },
}) => {
  return (
    <LocationContainer>
      <LocationName>{name}</LocationName>
      <LocationMajor>{`${city}, ${state}`}</LocationMajor>
      <LocationMap>directions</LocationMap>
    </LocationContainer>
  )
}

const AgeRequirementContainer = styled.div``

const CoverContainer = styled.div`
  color: #1ad04d;
`

const LinkContainer = styled.div`
  color: ${props => props.theme.colors.secondary};
`

const DetailsContainer = styled.div`
  width: 20%;
`

const Details = ({ details: { ageRequirement, cover, link } }) => {
  return (
    <DetailsContainer>
      <CoverContainer>{`$${cover}`}</CoverContainer>

      <AgeRequirementContainer>{`${ageRequirement}`}</AgeRequirementContainer>

      <LinkContainer>
        <MdLaunch />
      </LinkContainer>
    </DetailsContainer>
  )
}

export const EventsContainer = styled.div`
  color: ${props => props.theme.colors.highlight};
  display: flex;
  padding: 4% 0% 4% 4%;
  ${LocationContainer} {
    margin-left: 8%;
  }
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background: rgba(50, 50, 50, 0.5);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`

export default ({ date, details, location }) => {
  return (
    <EventsContainer>
      <Date date={date} />
      <Location location={location} />
      <Details details={details} />
    </EventsContainer>
  )
}
