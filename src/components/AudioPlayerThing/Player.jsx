import React from 'react'

import styled from 'styled-components'
import posed from 'react-pose'
import { MdFastForward, MdFastRewind, MdPlayArrow } from 'react-icons/md'

import { HowlConsumer } from '../Howl.context'

import AudioController from './AudioController'

const TrackControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 7%;
  width: 74%;
`

const NextTrackButton = styled.button`
  background: none;
  border: none;
  border-radius: 100%;
  color: ${props => props.theme.colors.secondary};
  font-size: 28px;
`

const PreviousTrackButton = styled.button`
  background: none;
  border: none;
  border-radius: 100%;
  color: ${props => props.theme.colors.secondary};
  font-size: 28px;
`

const PlayToggle = styled.button`
  background: none;
  border: none;
  border-radius: 100%;
  color: ${props => props.theme.colors.secondary};
  font-size: 28px;
`

const AudioControllerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
`

const PlayerComponent = ({ isPlaying }) => {
  return (
    <>
      {/* <ProgressBar />
      <PlayToggle /> */}
      <TrackControlsContainer>
        <PreviousTrackButton>
          <MdFastRewind />
        </PreviousTrackButton>
        <PlayToggle>
          <MdPlayArrow />
        </PlayToggle>
        <NextTrackButton>
          <MdFastForward />
        </NextTrackButton>
      </TrackControlsContainer>
      <AudioControllerContainer>
        <AudioController />
      </AudioControllerContainer>
    </>
  )
}

export default () => (
  <HowlConsumer>{({ isPlaying }) => <PlayerComponent />}</HowlConsumer>
)
