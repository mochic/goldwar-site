import React from 'react'

import styled from 'styled-components'
import { MdVolumeMute, MdVolumeUp } from 'react-icons/md'

const AudioControllerContainer = styled.div`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  display: flex;
  justify-content: stretch;
  width: 100%;
`

const VolumeDown = styled(MdVolumeMute)``
const VolumeUp = styled(MdVolumeUp)``

const VolumeInput = styled.input`
  -webkit-appearance: none;
  background: transparent;
  width: 100%;
  margin-left: 5%;
  margin-right: 5%;

  &:focus {
    outline: none;
  }

  &::-ms-track {
    background: ${props => props.theme.colors.highlight};
    border-color: transparent;
    color: transparent;
    cursor: pointer;
    width: 100%;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: ${props => props.theme.colors.secondary};
    height: 18px;
    width: 18px;
    margin-top: -8px;
    border-radius: 99px;
  }

  &::-webkit-slider-runnable-track {
    width: 300px;
    height: 4px;
    background: ${props => props.theme.colors.highlight};
  }
`
// const VolumeInput = styled.input`
//   -webkit-appearance: none;
//   background: transparent;
// `

const AudioControllerComponent = () => (
  <AudioControllerContainer>
    <VolumeDown />
    <VolumeInput id="volume-input" type="range" min="0" max="100" step="1" />
    <VolumeUp />
  </AudioControllerContainer>
)

export default ({ isMuted, unmute, mute, lowerVolume, raiseVolume }) => (
  <AudioControllerComponent />
)
