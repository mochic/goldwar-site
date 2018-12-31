import React from 'react'
import styled from 'styled-components'

import { HowlConsumer } from '../Howl.context'

const TrackTitle = styled.span`
  color: yellow;
  font-family: major mono display;
  font-size: 12px;
`

export default () => (
  <HowlConsumer>
    {({ currentHowlName }) => <TrackTitle>{currentHowlName}</TrackTitle>}
  </HowlConsumer>
)
