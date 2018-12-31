import React from 'react'
import styled from 'styled-components'

import NextButton from './NextButton'
import PlayToggle from './PlayToggle'
import ProgressBar from './ProgressBar'
import TrackTitle from './TrackTitle'

const ControlContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`
const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0.5;
  z-index: 1000;
`

export default () => (
  <PlayerContainer>
    <ControlContainer>
      <PlayToggle />
      <NextButton />
      <TrackTitle />
    </ControlContainer>
    <ProgressBar />
  </PlayerContainer>
)
