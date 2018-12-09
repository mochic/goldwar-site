import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { Headset } from '@material-ui/icons'

import AudioPlayer from './AudioPlayer'

// inspired by: http://androidcss.com/css/css3-floating-button-tutorial/

// const AudioPlayerExpandKeyFrame = keyframes`
// 0% {
//     width: 0px;
// }
// 100% {
//     width: 300px;
// }
// `

const BottomToTopExpansionKeyFrame = keyframes`
    0% {
        bottom: -40px;
    }
    50% {
        bottom: 40px;
    }
`

const ScaleInKeyFrame = keyframes`
    from {
        transform: scale(0);
        opaciy: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
`

// const AudioPlayerContainer = styled.div`
//   max-width: ${props => (props.isExpanded ? '100%' : '0%')};
//   visibility: ${props => (props.isExpanded ? 'visible' : 'hidden')};
//   transition: all 0.3s ease-out;
//   animation-direction: reverse;
// `

const AudioPlayerContainer = styled.div`
  text-align: center; /* centers the buttons */
  width: 60px;
`

const ExpandButton = styled.button`
  animation: ${BottomToTopExpansionKeyFrame} 2s ease-out;
  background: tomato;
  border-radius: 50px;
  box-shadow: 2px 2px 3px #999;
  border: 0px;
  height: 60px;
  outline: none;
  width: 60px;
`

const FloatingContainer = styled.div`
  background: red;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 40px;
  z-index: 1000;

  /* flex and ordering to use sibling selector */
  ${AudioPlayerContainer} {
      order: 1;
  }

  ${AudioPlayerContainer}:hover {
      opacity: 1!important;
      visible: visible!important;
  }

  ${ExpandButton} {
      order: 2;
  }

  ${ExpandButton} + ${AudioPlayerContainer} {
    visibility: hidden;
  }

  ${ExpandButton}:focus + ${AudioPlayerContainer} {
    opacity: 1;
    visibility: visible;
    animation: ${ScaleInKeyFrame} 0.5s;
  }

  ${AudioPlayerContainer} > button {
      opacity: 0!important;
  }
`
// ${ExpandButton}:hover + ${AudioPlayerContainer} {
//     opacity: 1;
//     visibility: visible;
//   }

// const FloatingContainer = styled.div`
//   background: red;
//   bottom: 40px;
//   display: flex;
//   flex-direction: column;
//   position: fixed;
//   right: 40px;
//   z-index: 1000;
//   ${AudioPlayerContainer} {
//     visibility: hidden;
//     order: 1;
// }

// ${ExpandButton} {
//     order: 2;
// }

// ${ExpandButton}:hover + ${AudioPlayerContainer} {
//     visibility: visible;
//   }
// `

export default class FloatingAudioPlayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: this.props.open,
    }
  }

  _openAudioPlayer = () => this.setState({ open: true })

  _closeAudioPlayer = () => this.setState({ open: false })

  _toggleAudioPlayer = () => this.setState({ open: !this.state.open })

  render() {
    return (
      <FloatingContainer>
        <ExpandButton>
          <Headset />
        </ExpandButton>
        <AudioPlayerContainer>
          <AudioPlayer />
        </AudioPlayerContainer>
      </FloatingContainer>
    )
  }
}
