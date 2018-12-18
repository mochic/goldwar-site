import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Parallax, ParallaxLayer } from 'react-spring/addons'

import ImageThing from './ImageThing'

const BlackoutTheme = {
  background: '#A35558',
  color: '#BA2F56',
  colorAlternate: '#FFFDDA',
  socialMediaIconSize: 18,
  colors: {
    primary: '#4f4a7d',
    secondary: '#A25457',
    highlight: '#FFFDDA',
  },
  sizes: {
    actionButton: { height: 52, width: 52 },
  },
}

const BackgroundImageContainer = styled.div`
  top: ${props => props.backgroundTop}px;
  left: ${props => props.backgroundLeft}px;
  position: fixed;
  z-index: -1;
`

const PanningBackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`

const PAN_RANGE = {
  min: -3,
  max: 3,
}

const calculateRandomPan = () =>
  Math.floor(Math.random() * (PAN_RANGE.max - PAN_RANGE.min)) + PAN_RANGE.min

class PanningBackground extends Component {
  constructor(props) {
    super(props)
    this.state = {
      panGradient: {
        x: 0,
        y: 0,
      },
      background: {
        top: 0,
        left: 0,
      },
    }

    this.pan = this.pan.bind(this)
    this.updatePan = this.updatePan.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.pan)
    window.addEventListener('mousedown', this.updatePan)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.pan)
    window.removeEventListener('mousedown', this.updatePan)
  }

  updatePan() {
    console.log('updating pan')
    this.setState({
      panGradient: {
        x: calculateRandomPan(),
        y: calculateRandomPan(),
      },
    })
  }

  pan() {
    console.log(this.state)
    this.setState({
      background: {
        left: this.state.background.left + this.state.panGradient.x,
        top: this.state.background.top + this.state.panGradient.y,
      },
    })
  }

  render() {
    return (
      <ThemeProvider theme={BlackoutTheme}>
        <PanningBackgroundContainer>
          <BackgroundImageContainer
            backgroundTop={this.state.background.top}
            backgroundLeft={this.state.background.left}
          >
            <ImageThing />
          </BackgroundImageContainer>
          {this.props.children}
        </PanningBackgroundContainer>
      </ThemeProvider>
    )
  }
}

export default PanningBackground
