import React, { Component } from 'react'

import styled from 'styled-components'
import posed from 'react-pose'

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

import classNames from 'classnames'
import PropTypes from 'prop-types'

import { couldStartTrivia } from 'typescript'
import purple from '@material-ui/core/colors/purple'
import red from '@material-ui/core/colors/red'

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

// const FabPlayer = muiStyled(Fab)({
//   root: {
//     color: 'yellow',
//     backgroundColor: 'yellow',
//   },
//   primary: {
//     color: 'yellow',
//     backgroundColor: 'pink',
//   },
// })

// const FabContainer = styled.div`
//   background: red;
// `

const PlayIcon = styled(PlayArrowIcon)`
  color: ${props => props.theme.colors.secondary};
`

const FabPlayerContainerComponent = posed.div({})

const FabPlayerContainer = styled(FabPlayerContainerComponent)``

const ActionButtonContainer = styled.div`
  position: absolute;
  top: -1.5rem;
  right: 0.8rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

// const FabContainerComponent = posed.div({
//   enter: { opacity: 1 },
//   exit: { opacity: 0 },
// })

// const FabContainer = styled(FabContainComponent)`
//   margin-right: 100px;
// `

const FabPlayer = styled(Fab)``

const PlayerContainer = styled.div`
  background: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  font-size: 22px;
  align-items: center;
`

const ProgressBarContainer = styled.div``

const SubPlayerContainer = styled.div`
  font-family: 'roboto mono';
`
console.log('theme', createMuiTheme)
// const theme = {
//   background: 'pink',
//   palette: {
//     primary: yellow,
//   },
//   overrides: {
//     MuiFab: {
//       primary: {
//         main: 'pink',
//       },
//     },
//   },
// }

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
    },
  },
  overrides: {
    MuiSlider: {
      thumb: {
        backgroundColor: '#fffdda',
      },
      trackBefore: {
        backgroundColor: '#fffdda',
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

export default () => (
  <>
    <MuiThemeProvider theme={MuiTheme}>
      <FabPlayerContainer>
        <PlayerContainer>
          <Player />
        </PlayerContainer>
        <ActionButtonContainer>
          <FabPlayer color="primary">
            <PlayIcon />
          </FabPlayer>
        </ActionButtonContainer>
      </FabPlayerContainer>
      <SubPlayerContainer>
        <SubPlayer expanded={false} />
      </SubPlayerContainer>
      {/* <Fab style={{ fab: { backgroundColor: 'pink' } }}>
        <PlayIcon />
      </Fab> */}
      {/* <StyledFab /> */}
    </MuiThemeProvider>
  </>
)
