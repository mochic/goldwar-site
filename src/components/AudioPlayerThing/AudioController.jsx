import React, { Component } from 'react'

import styled from 'styled-components'
import { debounce } from 'lodash-es'

// material ui stuff
import VolumeUpIcon from '@material-ui/icons/VolumeUp'
import VolumeMuteIcon from '@material-ui/icons/VolumeMute'
import { ThemeProvider, makeStyles } from '@material-ui/styles'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import Slider from '@material-ui/lab/Slider'

const ThemeOverrider = theme => {
  return createMuiTheme({
    ...theme,
    overrides: {
      MuiSlider: {
        thumb: {
          backgroundColor: `#a25457`,
        },
        trackBefore: {
          backgroundColor: `#a25457`,
        },
        trackAfter: {
          backgroundColor: `#a25457`,
        },
      },
    },
  })
}
// import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.background,
    border: 0,
    borderRadius: 3,
    boxShadow: theme.boxShadow,
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  trackBefore: {
    color: `green`,
  },
  trackAfter: {
    color: `green`,
  },
}))

const AudioControllerContainer = styled.div`
  color: ${props => props.theme.colors.secondary};
  display: flex;
  justify-content: stretch;
  width: 100%;
  align-items: center;
`

const VolumeDown = styled(VolumeMuteIcon)``

const VolumeSlider = styled(Slider)`
  padding-left: 5%;
  padding-right: 5%;
  cursor: pointer;
`

class VolumeInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      volume: props.value | 50,
    }
  }

  handleChange = (event, value) => {
    this.setState({
      volume: value,
    })
  }

  render = () => {
    // console.log(debounce)
    // console.log(this.props)
    const sliderProps = {
      ...this.props,
      value: this.state.volume,
      onChange: this.handleChange, // debounce might be bad here...throwing lots of errors...
    } // this is kinda complicated and look convoluted but i think...TODO make it better...
    return (
      <VolumeSlider
        // InputProps={{ classes: { root: 'root', trackBefore: 'trackBefore' } }}
        {...sliderProps}
      />
    )
  }
}
// const VolumeInput = props => {
//   let volume = React.createRef()
//   return
// }

const VolumeUp = styled(VolumeUpIcon)``

const AudioControllerComponent = props => {
  console.log(props)
  return (
    <MuiThemeProvider theme={ThemeOverrider}>
      <AudioControllerContainer>
        <VolumeDown />
        <VolumeInput value={50} />
        <VolumeUp />
      </AudioControllerContainer>
    </MuiThemeProvider>
  )
}
export default ({ isMuted, unmute, mute, lowerVolume, raiseVolume }) => (
  <AudioControllerComponent />
)
