import React, { Component } from 'react'
import styled from 'styled-components'
import { PlayArrow, Pause, SkipPrevious, SkipNext } from '@material-ui/icons'
import { HowlConsumer, HowlProvider } from './Howl.context'

import BlackoutWAV from '../audio/Blackout.wav'
import DrunkAgainWAV from '../audio/Drunk Again.wav'
import TheEndWAV from '../audio/Goldwar_SONG_MASTER.wav'
// const BlackoutWAV =
//   'https://s3-us-west-2.amazonaws.com/goldwar/audio/Blackout.wav'

const AudioPlayerContainer = styled.div`
  display: block;
`

const Button = styled.button`
  background: tomato;
  border: 0px;
  border-radius: 50px;
  box-shadow: 2px 2px 3px #999;
  height: 40px;
  width: 40px;
  outline: none;
`

const PauseButton = styled.button`
  background: red;
`

const PlayButton = styled.button`
  background: green;
`

const PreviousButton = styled.button`
  background: blue;
`

const NextButton = styled.button`
  background: yellow;
`

const TrackName = styled.span`
  color: white;
`

class AudioPlayer extends Component {
  render() {
    return (
      <AudioPlayerContainer>
        <HowlProvider
          playList={[
            { name: 'blackout', sources: [BlackoutWAV] },
            { name: 'drunk again', sources: [DrunkAgainWAV] },
            { name: 'the end', sources: [TheEndWAV] },
          ]}
        >
          <HowlConsumer>
            {({
              currentHowlName,
              previousHowl,
              pauseHowl,
              playHowl,
              nextHowl,
            }) => (
              <>
                <TrackName>{currentHowlName}</TrackName>
                <Button onClick={previousHowl}>
                  <SkipPrevious />
                </Button>
                <Button onClick={playHowl}>
                  <PlayArrow />
                </Button>
                <Button onClick={pauseHowl}>
                  <Pause />
                </Button>
                <Button onClick={nextHowl}>
                  <SkipNext />
                </Button>
              </>
            )}
          </HowlConsumer>
        </HowlProvider>
      </AudioPlayerContainer>
    )
  }
}

export default AudioPlayer
