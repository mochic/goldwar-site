import React from 'react'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'

import Event from '../Event'

const EVENTS = [
  {
    date: new Date(2019, 0, 17),
    link: {
      name: 'blue moon',
      link: 'https://bluemoonseattle.wordpress.com/',
    },
  },
  {
    date: new Date(2019, 0, 17),
    link: {
      name: 'blue moon',
      link: 'https://bluemoonseattle.wordpress.com/',
    },
  },
  {
    date: new Date(2019, 0, 17),
    link: {
      name: 'blue moon',
      link: 'https://bluemoonseattle.wordpress.com/',
    },
  },
  {
    date: new Date(2019, 0, 17),
    link: {
      name: 'blue moon',
      link: 'https://bluemoonseattle.wordpress.com/',
    },
  },
  {
    date: new Date(2019, 0, 17),
    link: {
      name: 'blue moon',
      link: 'https://bluemoonseattle.wordpress.com/',
    },
  },
  {
    date: new Date(2019, 0, 17),
    link: {
      name: 'blue moon',
      link: 'https://bluemoonseattle.wordpress.com/',
    },
  },
  {
    date: new Date(2019, 0, 17),
    link: {
      name: 'blue moon',
      link: 'https://bluemoonseattle.wordpress.com/',
    },
  },
  {
    date: new Date(2019, 0, 17),
    link: {
      name: 'blue moon',
      link: 'https://bluemoonseattle.wordpress.com/',
    },
  },
]

const Li = posed.li({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 },
})

const EventListItemContainer = styled(Li)`
  margin-top: 30px;
`

const EventListItem = ({ event }) => {
  return (
    <EventListItemContainer>
      <Event {...event} />
    </EventListItemContainer>
  )
}

const Ul = posed.ul({
  enter: { staggerChildren: 5000 },
  exit: { staggerChildren: 20, staggerDirection: -1 },
})

const StaggeredList = styled(Ul)``

// const EventList = ({ events }) => {
//   return (
//     <StaggeredList>
//       {events.map((event, idx) => (
//         <EventListItem key={`event-${idx}`} event={event} />
//       ))}
//     </StaggeredList>
//   )
// }

const EventList = () => {
  return (
    <Ul key="staggered-list">
      <Li key="one">
        <h3 key="one-t">one</h3>
      </Li>
      <Li key="two">
        <h3 key="two-t">two</h3>
      </Li>
      <Li key="three">
        <h3 key="three-t">three</h3>
      </Li>
    </Ul>
  )
}

// const EventList = styled(_EventList)``
// {events.map((event, idx) => (
//     <EventListItem key={`event-${idx}`} event={event} />
//   ))}
const EventListTitle = styled.h3``

const Page = posed.div({
  enter: {
    opacity: 1,
    delay: 300,
    beforeChildren: true,
    staggerChildren: 5000,
  },
  exit: { opacity: 0 },
})

// posed.div({
//   enter: { staggerChildren: 50 },
// })

const EventsPage = styled(Page)`
  background: green;
  height: 100vh;
`

const extra = showEvents => {
  return showEvents ? (
    <div key="events">
      <EventListTitle key="event-list-title">Events</EventListTitle>
      <EventList key="event-list" events={EVENTS} />
    </div>
  ) : (
    <div key="events" />
  )
}

// links are red, text is bone white, background is purple
export default ({ visibility: { start, stop } }) => (
  //   <PoseGroup>
  <Page key="event-page" style={{ background: 'green', height: '100vh' }}>
    {extra(stop > 0)}
  </Page>
  //   </PoseGroup>
)

{
  /* <EventsPage key="event-page">{extra(stop > 0)}</EventsPage> */
}
{
  /* <StaggeredList key="list">
{stop > 0
  ? EVENTS.map((event, idx) => (
      <EventListItem key={idx} event={event} />
    ))
  : []}
</StaggeredList> */
}
