import React from 'react'
import styled from 'styled-components'

import NextButton from './NextButton'
import PlayToggle from './PlayToggle'
import ProgressBar from './ProgressBar'
import TrackTitle from './TrackTitle'

const ButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  button + button {
    margin-left: 8px;
  }
` // we kinda just assume they're buttons :(...

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export default () => (
  <PlayerContainer>
    <ControlContainer>
      <ButtonsContainer>
        <PlayToggle />
        <NextButton />
      </ButtonsContainer>
      <TrackTitle />
    </ControlContainer>
    <ProgressBar />
  </PlayerContainer>
)
