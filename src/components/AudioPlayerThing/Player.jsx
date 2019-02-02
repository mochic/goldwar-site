import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import posed from 'react-pose'
import { MdFastForward, MdFastRewind, MdPlayArrow } from 'react-icons/md'

// material ui stuff
import { styled as muiStyled } from '@material-ui/styles'
import FastForwardIcon from '@material-ui/icons/FastForward'
import FastRewindIcon from '@material-ui/icons/FastRewind'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
// import classNames from 'classnames'
// import { withStyles } from '@material-ui/core/styles'
import PlayBackController from './PlayBackController'

import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

import { HowlConsumer } from '../Howl.context'

import AudioController from './AudioController'

// function muiStyled(Component) {
//   return (style, options) => {
//     function StyledComponent(props) {
//       const { classes, className, ...other } = props
//       return (
//         <Component className={classNames(classes.root, className)} {...other} />
//       )
//     }
//     StyledComponent.propTypes = {
//       classes: PropTypes.object.isRequired,
//       className: PropTypes.string,
//     }
//     const styles =
//       typeof style === 'function'
//         ? theme => ({ root: style(theme) })
//         : { root: style }
//     return withStyles(styles, options)(StyledComponent)
//   }
// }

const TrackControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 7%;
  width: 74%;
`

// const NextTrackButton = styled.button`
//   background: none;
//   border: none;
//   border-radius: 100%;
//   color: ${props => props.theme.colors.secondary};
//   font-size: 28px;
// `

// const NextTrackButton = muiStyled(Button)({
//   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//   border: 0,
//   borderRadius: 3,
//   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//   color: 'white',
//   height: 48,
//   padding: '0 30px',
// })

// const NextTrackButton = muiStyled(IconButton)({
//   color: theme => theme.colors.highlight,
//   fontSize: '28px',
// })

// const NextTrackButton = styled(IconButton)`
//   color: ${props => props.theme.colors.secondary};
//   fontsize: 28px;
// `

const NextTrackButton = styled(IconButton)``

const NextTrackIcon = styled(FastForwardIcon)`
  color: ${props => props.theme.colors.secondary};
`

// const PreviousTrackButton = styled.button`
//   background: none;
//   border: none;
//   border-radius: 100%;
//   color: ${props => props.theme.colors.secondary};
//   font-size: 28px;
// `

const PreviousTrackButton = styled(IconButton)``

const PreviousTrackIcon = styled(FastRewindIcon)`
  color: ${props => props.theme.colors.secondary};
`

// const PlayToggle = styled.button`
//   background: none;
//   border: none;
//   border-radius: 100%;
//   color: ${props => props.theme.colors.secondary};
//   font-size: 28px;
// `

const ToggleButton = styled(IconButton)``

const PlayTrackIcon = styled(PlayArrowIcon)`
  color: ${props => props.theme.colors.secondary};
`

const PauseTrackIcon = styled(PauseIcon)`
  color: ${props => props.theme.colors.secondary};
`

const PlayToggle = ({ isPlaying, pauseTrack, playTrack }) => {
  return isPlaying ? (
    <ToggleButton onClick={pauseTrack}>
      <PauseTrackIcon />
    </ToggleButton>
  ) : (
    <ToggleButton onClick={playTrack}>
      <PlayTrackIcon />
    </ToggleButton>
  )
}

const AudioControllerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
`

const PlayerComponent = ({ isPlaying }) => {
  return (
    <>
      <PlayBackController />
      <TrackControlsContainer>
        <PreviousTrackButton>
          <PreviousTrackIcon />
        </PreviousTrackButton>
        <PlayToggle isPlaying={isPlaying} />
        <NextTrackButton>
          <NextTrackIcon />
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
