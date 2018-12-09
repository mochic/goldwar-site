// import React from 'react'
// import styled from 'styled-components'
// import { StaticQuery, graphql } from 'gatsby'

// import Event from './Event'

// const UpcomingEventsWrapper = styled.div``

// const UpcomingEvents = () => (
//   <StaticQuery
//     query={graphql`
//             query EventsQuery(limit: 3) {
//                 site {
//                     siteMetadata {
//                         events {
//                             date
//                             location {
//                                 name
//                                 link
//                             }
//                         }
//                     }
//                 }
//             }
//         `}
//     render={data => (
//       <UpcomingEventsWrapper>
//         {data.site.siteMetadata.events.map(event => (
//           <Event {...event} />
//         ))}
//       </UpcomingEventsWrapper>
//     )}
//   />
// )

// export default UpcomingEvents
