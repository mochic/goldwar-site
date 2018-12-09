import React from 'react'
import styled, { keyframes } from 'styled-components'
import { PlayArrow, Pause, SkipPrevious, SkipNext } from '@material-ui/icons'

import { HowlConsumer } from './Howl.context'

const BottomToTopKeyFrame = keyframes`
  0% {
    bottom: -40px;
  }
  50% {
    bottom: 40px;
  }
`

const ScaleInKeyFrame = keyframes`
  from {
    transform: scale(0);
    opaciy: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`

const ActionButton = styled.button`
  animation: ${BottomToTopKeyFrame} 2s ease-out;
  background: tomato;
  border-radius: 50px;
  box-shadow: 2px 2px 3px #999;
  border: 0px;
  height: 60px;
  outline: none;
  width: 60px;
`

const AudioPlayerButton = styled.button`
  background: tomato;
  border: 0px;
  border-radius: 50px;
  box-shadow: 2px 2px 3px #999;
  height: 40px;
  width: 40px;
  outline: none;
`

const AudioPlayerContainer = styled.div`
  text-align: center; /* centers the buttons */
  width: 60px;
`

const FloatingContainer = styled.div`
  background: red;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 40px;
  z-index: 1000;

  ${ActionButton} {
      order: 2;
  }

  /* flex and ordering to use sibling selector */
  ${AudioPlayerContainer} {
    order: 1;
  }

  ${ActionButton} + ${AudioPlayerContainer} {
      visibility: hidden;
  }

  ${ActionButton}:focus + ${AudioPlayerContainer} {
    animation: ${ScaleInKeyFrame} 0.5s;
    opacity: 1;
    visibility: visible;
  }

  ${AudioPlayerContainer}:nth-child(1) {
      animation-delay: 3s;
  }
`

export default () => (
  <HowlConsumer>
    {() => (
      <FloatingContainer>
        <ActionButton>+</ActionButton>
        <AudioPlayerContainer>
          <p>blackout</p>
          <AudioPlayerButton>
            <SkipNext />
          </AudioPlayerButton>
          <AudioPlayerButton>
            <SkipPrevious />
          </AudioPlayerButton>
          <AudioPlayerButton>
            <PlayArrow />
          </AudioPlayerButton>
        </AudioPlayerContainer>
      </FloatingContainer>
    )}
  </HowlConsumer>
)
