import React from 'react'
import styled from 'styled-components'
import { HowlConsumer, HowlProvider } from './Howl.context'

import { IconContext } from 'react-icons'
import { MdFastForward, MdPause, MdPlayArrow } from 'react-icons/md'

import BlackoutWAV from '../audio/Blackout.wav'
import DrunkAgainWAV from '../audio/Drunk Again.wav'
import TheEndWAV from '../audio/Goldwar_SONG_MASTER.wav'

// const Button = styled.button`
//   & + svg {
//     color: ${props => props.theme.color};
//   }
// `
const Button = styled.button``

const TrackTitle = styled.span``

const MobilePlayerContainer = styled.div`
  background: ${props => props.theme.background};
`

const MobilePlayer = ({ theme }) => (
  <HowlProvider
    playList={[
      { name: 'blackout', sources: [BlackoutWAV] },
      { name: 'drunk again', sources: [DrunkAgainWAV] },
      { name: 'the end', sources: [TheEndWAV] },
    ]}
  >
    <HowlConsumer>
      {({ currentHowlName, isPlaying, nextHowl, pauseHowl, playHowl }) => (
        <IconContext.Provider
          value={{
            size: theme.socialMediaIconSize,
            className: 'global-class-name',
          }}
        >
          <MobilePlayerContainer>
            <TrackTitle>{currentHowlName}</TrackTitle>
            {isPlaying ? (
              <Button onClick={pauseHowl}>
                <MdPause />
              </Button>
            ) : (
              <Button onClick={playHowl}>
                <MdPlayArrow />
              </Button>
            )}
            <Button onClick={nextHowl}>
              <MdFastForward />
            </Button>
          </MobilePlayerContainer>
        </IconContext.Provider>
      )}
    </HowlConsumer>
  </HowlProvider>
)

MobilePlayer.defaultProps = {
  theme: { background: 'black', socialMediaIconSize: 18 },
}

export default MobilePlayer
