import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import { MdOpenInNew } from 'react-icons/md'

// import TouchCarousel from 'react-touch-carousel'
import Carousel from 'nuka-carousel'

const events = [
  {
    date: 'jul-01-2019',
    details: {
      ageRequirement: '21+',
      cover: '10',
      link: { uri: 'https://bluemoonseattle.wordpress.com/' },
    },
    location: {
      name: 'blue moon',
      major: {
        city: 'Seattle',
        state: 'WA',
      },
      map: { uri: 'somewhere placeholder' },
    },
  },
  {
    date: 'jul-02-2019',
    details: {
      ageRequirement: '21+',
      cover: '10',
      link: { uri: 'https://bluemoonseattle.wordpress.com/' },
    },
    location: {
      name: 'blue moon',
      major: {
        city: 'Seattle',
        state: 'WA',
      },
      map: { uri: 'somewhere placeholder' },
    },
  },
  {
    date: 'jul-03-2019',
    details: {
      ageRequirement: '21+',
      cover: '10',
      link: { uri: 'https://bluemoonseattle.wordpress.com/' },
    },
    location: {
      name: 'blue moon',
      major: {
        city: 'Seattle',
        state: 'WA',
      },
      map: { uri: 'somewhere placeholder' },
    },
  },
  {
    date: 'jul-04-2019',
    details: {
      ageRequirement: '21+',
      cover: '10',
      link: { uri: 'https://bluemoonseattle.wordpress.com/' },
    },
    location: {
      name: 'blue moon',
      major: {
        city: 'Seattle',
        state: 'WA',
      },
      map: { uri: 'somewhere placeholder' },
    },
  },
  {
    date: 'jul-05-2019',
    details: {
      ageRequirement: '21+',
      cover: '10',
      link: { uri: 'https://bluemoonseattle.wordpress.com/' },
    },
    location: {
      name: 'blue moon',
      major: {
        city: 'Seattle',
        state: 'WA',
      },
      map: { uri: 'somewhere placeholder' },
    },
  },
]

// const StyledCarousel = styled(Carousel)``

// const DayOfWeekContainer = styled.div``

const DayContainer = styled.div``

const MonthContainer = styled.div``

const YearContainer = styled.div``

const PosedBoxyDateContainer = posed.div({})

// const BoxyDateContainer = styled.div`
//   align-items: center;
//   border: 1px solid ${props => props.theme.colors.highlight};
//   display: grid;
//   align-items: stretch;
//   justify-items: stetch;
//   text-transform: uppercase;
//   font-family: 'frijole';
//   grid-template-columns: 1fr 1fr;
//   grid-template-rows: 1fr 1fr;

//   color: ${props => props.theme.colors.highlight};

//   ${DayOfWeekContainer} {
//     font-size: 400%;
//     grid-column-start: 1;
//     grid-column-end: span 2;
//     grid-row-start: 1;
//     background: yellow;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   ${MonthContainer} {
//     font-size: 200%;
//     grid-column-start: 1;
//     grid-column-end: span 1;
//     grid-row-start: 2;
//     background: blue;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   ${DayContainer} {
//     font-size: 200%;
//     grid-column-start: 2;
//     grid-column-end: span 1;
//     grid-row-start: 2;
//     background: seagreen;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   align-content: center;
//   box-sizing: border-box;
//   margin: 10%;
// `

// placeholder
const ExternalLinkContainer = styled.a`
  outline: none;
  text-decoration: none;
  color: inherit;
  border: None;
  &:hover {
    outline: none;
    text-decoration: none;
    color: inherit;
    border: None;
  }

  &:clicked {
    outline: none;
    text-decoration: none;
    color: inherit;
    border: None;
  }

  &:visited {
    outline: none;
    text-decoration: none;
    color: inherit;
    border: None;
  }
`

const ExternalLink = ({ children, link: { uri } }) => (
  <ExternalLinkContainer href={uri} target="_blank" rel="noopener noreferrer">
    {children}
  </ExternalLinkContainer>
)

// const DirectionsLink = styled(ExternalLink)`

// `

// const LocationLink = styled(ExternalLink)`
//   outline: none;
//   text-decoration: none;
// `

const DayOfWeekContainer = styled.div``

const MonthDayContainer = styled.div``

const BoxyDateContainer = styled.div`
  align-items: center;
  background: ${props => props.theme.colors.highlight};
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'frijole';
  border: 1px solid black;
  box-sizing: content-box;
  height: 90%;
  width: 90%;
  margin: 5%;

  ${DayOfWeekContainer} {
    font-size: 220%;
    text-transform: uppercase;
  }

  ${MonthDayContainer} {
    font-size: 200%;
    text-transform: capitalize;
  }
`

// for inner border among other things
const BoxyDateContainerContainer = styled.div`
  height: 80%;
  width: 80%;
  background: ${props => props.theme.colors.highlight};
  box-sizing: content-box;
  display: flex;
  align-content: stretch;
  margin: 10%;
`

const BoxyDate = ({ dateString }) => {
  const dateChunks = dateString.split('-')

  return (
    <BoxyDateContainerContainer>
      <BoxyDateContainer>
        <DayOfWeekContainer>{`mon`}</DayOfWeekContainer>
        <MonthDayContainer>{`jun 01`}</MonthDayContainer>
      </BoxyDateContainer>
    </BoxyDateContainerContainer>
  )
}

const AgeDetail = styled.div``

const CoverDetail = styled.div``

// const LinkDetail = styled.div``

const PosedDetailsContainer = posed.div({})

const DetailsContainer = styled(PosedDetailsContainer)`
  color: ${props => props.theme.colors.highlight};
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
`

const LocationDetails = ({ ageRequirement, cover, link }) => (
  <DetailsContainer>
    <AgeDetail>{ageRequirement} event</AgeDetail>
    <CoverDetail>${cover} cover</CoverDetail>
    <ExternalLink link={link}>
      {`them `}
      <MdOpenInNew />
    </ExternalLink>
  </DetailsContainer>
)

const NameContainer = styled.div`
  text-transform: capitalize;
  font-size: 200%;
`

const MajorLocationContainer = styled.div`
  font-size: 140%;
`

const PosedLocationContainer = posed.div({})

const LocationContainer = styled(PosedLocationContainer)`
  color: ${props => props.theme.colors.highlight};
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin-left: 5%;
`

const Location = ({ name, major: { city, state }, map }) => {
  return (
    <LocationContainer>
      <NameContainer>{name}</NameContainer>
      <MajorLocationContainer>{`${city}, ${state}`}</MajorLocationContainer>
      <ExternalLink link={map}>{`directions`}</ExternalLink>
    </LocationContainer>
  )
}

const PosedEventContainer = posed.div({})

const EventContainer = styled(PosedEventContainer)`
  background: black;
  border: 1px solid ${props => props.theme.colors.highlight};
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 5%;
`

const EventDetails = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  height: 40%;
  font-family: 'roboto mono';
  font-size: 90%;

  ${LocationContainer} {
    width: 60%;
  }

  ${DetailsContainer} {
    width: 35%;
  }
`

const Event = ({ date, details, location }) => {
  return (
    <EventContainer>
      <BoxyDate dateString={date} />
      <EventDetails>
        <Location {...location} />
        <LocationDetails {...details} />
      </EventDetails>
    </EventContainer>
  )
}

// the title ~ the page uri is important for google seo?
const Title = posed.h1({})

const EventsTitle = styled(Title)`
  color: ${props => props.theme.colors.highlight};
  font-family: frijole;
  margin-left: 7%;
`

const CarouselItemContainer = styled.div`
  background: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Navigation = styled.div`
  align-content: center;
  color: ${props => props.theme.colors.highlight};
  display: flex;
  justify-content: space-around;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.5),
    0 0 10px rgba(255, 255, 255, 0.5);
  font-family: 'roboto mono';
  font-weight: 100;
  margin: 2%;
`

const NavigationHomeLink = styled.div`
  font-size: 12px;
  width: 30%;
  text-align: center;
`

const NavigationItem = styled.div`
  font-size: 12px;
  width: 30%;
  text-align: center;
`
const NavigationDivider = styled.div`
  width: 1px;
  background: ${props => props.theme.colors.highlight};
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.5),
    0 0 10px rgba(255, 255, 255, 0.5);
`

const PageContainer = posed.div({})

const EventsPageContainer = styled(PageContainer)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
`

const EventsContents = styled.div`
  background: black;
  height: 72%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 8%;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`

const CarouselContainer = styled.div`
  background: red;
`

export default () => (
  <EventsPageContainer>
    <EventsContents>
      <EventsTitle>events</EventsTitle>
      <CarouselContainer>
        <Carousel
          withoutControls={true}
          cellAlign="center"
          slideWidth={0.7}
          cellSpacing={0}
        >
          {events.map((event, idx) => (
            <CarouselItemContainer key={`event-${idx}`}>
              <Event {...event} />
            </CarouselItemContainer>
          ))}
        </Carousel>
      </CarouselContainer>
      <Navigation>
        <NavigationHomeLink>goldwar</NavigationHomeLink>
        <NavigationDivider />
        <NavigationItem>about</NavigationItem>
        <NavigationDivider />
        <NavigationItem>contact</NavigationItem>
      </Navigation>
    </EventsContents>
  </EventsPageContainer>
)
