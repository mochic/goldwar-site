import React, { Component } from 'react'

import styled from 'styled-components'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import Slider from '@material-ui/lab/Slider'

const ThemeOverrider = theme => {
  console.log('theme', theme)
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
          backgroundColor: `none`,
        },
      },
    },
  })
}

const PlayBackSliderComponentContainer = styled.div`
  display: flex;
  width: 100%;
`

const PlayBackText = styled.div`
  margin-left: 10%;
  width: 20%;
  color: ${props => props.theme.colors.highlight};
`

const PlayBackSlider = styled(Slider)`
  width: 70%;
`

class PlayBackControllerComponent extends Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    return (
      <MuiThemeProvider theme={ThemeOverrider}>
        <PlayBackSliderComponentContainer>
          <PlayBackSlider />
          <PlayBackText>{`0:00`}</PlayBackText>
        </PlayBackSliderComponentContainer>
      </MuiThemeProvider>
    )
  }
}

export default PlayBackControllerComponent
