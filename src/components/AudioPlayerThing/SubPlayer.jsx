import React, { Component } from 'react'

import styled from 'styled-components'
import posed from 'react-pose'

import { MdVolumeOff, MdVolumeUp } from 'react-icons/md'

import { HowlConsumer } from '../Howl.context'

// TODO figure out way better names...

const TrackTitle = styled.h1`
  color: ${props => props.theme.colors.secondary};
  font-size: 140%;
`

const DescriptionContainer = styled.div`
  background: ${props => props.theme.colors.primary};
  padding: 10% 0% 10% 20%;
  height: ${props => (props.expanded ? 30 : 10)}%;
`

const MuteButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.secondary};
  font-size: 22px;
  text-align: center;
  border-radius: 100%;
  cursor: pointer;
  outline: none;
  background: position: center;
  transition: background 0.8s;

  &:hover {
    background: ${props =>
      props.theme.colors
        .highlight} radial-gradient(circle, transparent 1%, ${props =>
  props.theme.colors.highlight} 1%) center/15000%;
  }

  &:active {
    background-color: none;
    background-size: 100%;
    transition: background 0s;
  }
`

class AudioToggle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      audio: true,
    }
  }

  render = () => {
    return (
      <MuteButton>
        {this.state.audio ? <MdVolumeUp /> : <MdVolumeOff />}
      </MuteButton>
    )
  }
}

const TrackTime = styled.div`
  font-size: 18px;
  text-align: center;
`

const SummaryContainer = styled.div`
  background: ${props => props.theme.colors.highlight};
  color: ${props => props.theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  padding: 2% 3% 1% 2%;
`

// const SubPlayerContainer = styled.div``

class SubPlayerComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: this.props.expanded,
    }
  }

  render = () => {
    return (
      <>
        <DescriptionContainer expanded={this.props.expanded}>
          <TrackTitle>{this.props.trackTitle}</TrackTitle>
        </DescriptionContainer>
        <SummaryContainer>
          <AudioToggle />
          <TrackTime>{this.props.trackTime}</TrackTime>
        </SummaryContainer>
      </>
    )
  }
}

const elapsedTimeToTrackTime = elapsedTime => {
  const minutes = elapsedTime % 60
  const seconds = elapsedTime / 60

  let minutesStr
  if (minutes > 10) {
    minutesStr = `${minutes}`
  } else if (minutes === 0) {
    minutesStr = `0`
  } else {
    // minutes < 10 and minutes != 0
    minutesStr = `0${minutes}`
  }

  return `${minutesStr}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`
}

export default ({ expanded }) => (
  <HowlConsumer>
    {({ currentHowlName, elapsedTime }) => (
      <SubPlayerComponent
        expanded={expanded}
        trackTitle={currentHowlName}
        trackTime={elapsedTimeToTrackTime(elapsedTime)}
      />
    )}
  </HowlConsumer>
)
