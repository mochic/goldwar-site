import React from 'react'
import styled from 'styled-components'

import { HowlConsumer } from '../Howl.context'

const TrackTitle = styled.h1`
  color: ${'#f4ed3a'};
  font-family: 'major mono display';
`

export default () => (
  <HowlConsumer>
    {({ currentHowlName }) => <TrackTitle>{currentHowlName}</TrackTitle>}
  </HowlConsumer>
)
