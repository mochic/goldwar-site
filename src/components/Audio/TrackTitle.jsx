import React from 'react'
import styled from 'styled-components'

import { HowlConsumer } from '../Howl.context'

// const TrackTitle = styled.span`
//   color: ${props => props.theme,colors.highlight};
//   font-family: 'roboto mono';
//   font-size: 12px;
//   text-shadow: 0 0 15px rgba(255, 255, 255, 0.5),
//     0 0 10px rgba(255, 255, 255, 0.5);
// `

const TrackTitle = styled.span`
  color: #a25457;
  font-family: 'roboto mono';
  font-size: 12px;
  text-shadow: 0 0 15px rgba(162, 84, 87, 0.5), 0 0 10px rgba(162, 84, 87, 0.5);
`

export default () => (
  <HowlConsumer>
    {({ currentHowlName }) => <TrackTitle>{currentHowlName}</TrackTitle>}
  </HowlConsumer>
)
