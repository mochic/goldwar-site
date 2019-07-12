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
          backgroundColor: `#a25457`,
        },
      },
    },
  })
}

const PlayBackSliderComponentContainer = styled.div`
  display: flex;
  align-content: center;
`

const PlayBackText = styled.div`
  margin-left: 10%;
  width: 30%;
  color: ${props => props.theme.colors.secondary};
  font-family: 'roboto mono';
  background: blue;
`

const PlayBackSlider = styled(Slider)``

const SliderContainer = styled.div`
  width: 50%;
`

class PlayBackControllerComponent extends Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    return (
      <MuiThemeProvider theme={ThemeOverrider}>
        <PlayBackSliderComponentContainer>
          <SliderContainer>
            <PlayBackSlider />
          </SliderContainer>
          <PlayBackText>{`0:00`}</PlayBackText>
        </PlayBackSliderComponentContainer>
      </MuiThemeProvider>
    )
  }
}

export default PlayBackControllerComponent
