import React, { Component } from 'react'

import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'

import {
  createTheme,
  getMuiTheme,
  getThemeProps,
  ThemeProvider,
  withStyles,
  makeStyles,
} from '@material-ui/styles'

import PlayArrowIcon from '@material-ui/icons/PlayArrow'

import ActionButton from './ActionButton'
import ProgressBar from './ProgressBar'
import Player from './Player'
import SubPlayer from './SubPlayer'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Fade from '@material-ui/core/Fade'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'

import classNames from 'classnames'
import PropTypes from 'prop-types'

import { couldStartTrivia } from 'typescript'
import purple from '@material-ui/core/colors/purple'
import red from '@material-ui/core/colors/red'
import { timingSafeEqual } from 'crypto'

// const FabContainerComponent = posed.div({})

function muiStyled(Component) {
  return (style, options) => {
    function StyledComponent(props) {
      const { classes, className, ...other } = props
      return (
        <Component className={classNames(classes.root, className)} {...other} />
      )
    }
    StyledComponent.propTypes = {
      classes: PropTypes.object.isRequired,
      className: PropTypes.string,
    }
    const styles =
      typeof style === 'function'
        ? theme => ({ root: style(theme) })
        : { root: style }
    return withStyles(styles, options)(StyledComponent)
  }
}

const PlayIcon = styled(PlayArrowIcon)`
  color: ${props => props.theme.colors.secondary};
`

const FabPlayer = styled(Fab)``

const FabPlayerPosedContainerComponent = posed.div({
  enter: { opacity: 1, top: '-1.5rem', right: '0.8rem' },
  exit: { opacity: 0, width: '100%' },
})

const FabPlayerPosedContainer = styled(FabPlayerPosedContainerComponent)`
  position: absolute;
`

const FabPlayerContainerComponent = posed.div({
  enter: { delay: 300, staggerChildren: true },
})

const FabPlayerContainer = styled(FabPlayerContainerComponent)``

const ActionButtonContainerComponent = posed.div({
  transition: {
    default: { duration: 3000 },
  },
})

const ActionButtonContainer = styled(ActionButtonContainerComponent)`
  width: 100%;
`
const PlayContainerComponent = posed.div({
  enter: { delay: 300, staggerChildren: true },
  exit: { delay: 30000 },
})

const PlayerContainer = styled(Paper)``

const ProgressBarContainer = styled.div``

const SubPlayerContainer = styled.div`
  font-family: 'roboto mono';
`
console.log('theme', createMuiTheme)

const theme = {
  background: 'pink',
}

const testCss = {
  primary: {
    main: 'red',
  },
}

const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#fffdda',
      secondary: '#a25457',
    },
  },
  overrides: {
    MuiSlider: {
      thumb: {
        backgroundColor: '#fffdda',
      },
      trackBefore: {
        backgroundColor: '#a25457',
      },
    },
  },
})

console.log(MuiTheme)
// another try
const useStyles = makeStyles(theme => ({
  background: 'red',
}))

const StyledFab = () => {
  console.log('start')
  const classes = useStyles()
  console.log('classes', classes)
  return (
    <Fab className={classes.root}>
      <PlayIcon />
    </Fab>
  )
}

const PlayerTemp = () => {
  return (
    <PlayerContainer>
      <Player />
    </PlayerContainer>
  )
}

const FabTemp = () => {
  return (
    <ActionButtonContainer>
      <FabPlayerPosedContainer>
        <FabPlayer color="primary">
          <PlayIcon />
        </FabPlayer>
      </FabPlayerPosedContainer>
    </ActionButtonContainer>
  )
}

class AudioPlayerThing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: props.expanded || false,
    }
  }

  triggerExpanded = () => {
    this.setState({
      expanded: true,
    })
    setTimeout(() => {
      this.setState({ expanded: false })
    }, this.props.closeDelay)
  }

  render = () => {
    return (
      <>
        <MuiThemeProvider theme={MuiTheme}>
          <FabPlayerContainer key="player">
            <Grow
              in={this.state.expanded}
              style={{ transformOrigin: 'top right' }}
            >
              <PlayerContainer>
                <Player />
              </PlayerContainer>
            </Grow>
            <PoseGroup>
              <Fade in={!this.state.expanded}>
                <ActionButtonContainer key="action-button">
                  <FabPlayerPosedContainer>
                    <FabPlayer onClick={this.triggerExpanded} color="primary">
                      <PlayIcon />
                    </FabPlayer>
                  </FabPlayerPosedContainer>
                </ActionButtonContainer>
              </Fade>
            </PoseGroup>
          </FabPlayerContainer>
          <SubPlayerContainer>
            <SubPlayer expanded={this.state.expanded} />
          </SubPlayerContainer>
          {/* <Fab style={{ fab: { backgroundColor: 'pink' } }}>
                  <PlayIcon />
                </Fab> */}
          {/* <StyledFab /> */}
        </MuiThemeProvider>
      </>
    )
  }

  static defaultProps = {
    expanded: false,
    closeDelay: 2000,
  }
}

export default AudioPlayerThing
