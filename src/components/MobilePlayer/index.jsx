import React from 'react'
import styled from 'styled-components'

import NextButton from './NextButton'
import PauseButton from './PauseButton'
import PlayButton from './PlayButton'
import TrackTitle from './TrackTitle'

const PlayerMain = styled.div`
  border: 1px solid #f4ed3a;
  background: green;
  min-height: 56px;
  max-height: 56px;
`

// feels like the only way to achieve our desired look...:(
const PlayerLeft = styled.div`
  background: blue;
  position: relative;
  top: 16.17px;
  left: 0;
  min-height: 56px;
  max-height: 56px;
`

const PlayerContainer = styled.div`
  z-index: 1;
  display: flex;
  background: red;
  min-height: 56px;
  max-height: 56px;
`

export default () => (
  <PlayerContainer>
    <PlayerLeft>
      <PlayButton />
    </PlayerLeft>
    <PlayerMain>
      <TrackTitle />
    </PlayerMain>
  </PlayerContainer>
)
